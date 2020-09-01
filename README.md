# Conflux Network + Graph Protocol: FC Demo
Demonstration of connecting Conflux Network and The Graph protocol for decentralized query. Decentralized query has the potential to unlock more applications in the Web3 space by providing an easy way for developers to access information from the blockchain.

## Introduction
In order to connect the current version of the Graph node (September 2020) to Conflux Network, the there needs to be translation from [Ethereum JSON-RPC](https://eth.wiki/json-rpc/API) calls and [Conflux JSON-RPC](https://developer.conflux-chain.org/docs/conflux-doc/docs/json_rpc/) calls. The relay provides the conversion from ETH calls to CFX calls by matching the similar calls and also providing custom handling for specific calls. Additionally, the Graph node does not require signed transactions which make calling information significantly easier.

**Note**:
- this demonstration and relay are purely experimental as The Graph is currently only setup for Ethereum.
- the (customized) graph node may throw an error if the epoch number for the subgraph is too early

### Components
Graph Protocol Node: https://github.com/Conflux-Network-Global/graph-node
- This is a slightly modified version of the original [graph node code](https://github.com/graphprotocol/graph-node). The original node tracked triggers using block numbers with the assumption that block numbers are unique. On Conflux block/epoch numbers are not unique, so the modification tracks the block hash instead (not 100% sure on this).

Relay: https://github.com/Conflux-Network-Global/eth2cfx-relay
- The relay handles turning Ethereum JSON-RPC calls to Conflux JSON-RPC calls.

Subgraph: [./demoSubgraphFC](./demoSubgraphFC)
- The subgraph provides the specifications for monitoring the events from the FanCoin (FC) token contract.

## Setup
### ETH2CFX Relay
To setup the relay:
```
git clone https://github.com/Conflux-Network-Global/eth2cfx-relay
cd eth2cfx-relay
yarn && yarn start
```

This will clone the necessary repository and install the various packages and start the relay server.

### Graph node
To setup the graph node, there is documentation available for setting up a local environment: https://thegraph.com/docs/quick-start#local-development. The specific steps for this demonstration are as follows:
```
git clone https://github.com/Conflux-Network-Global/graph-node
cd graph-node/docker
./setup.sh
```

Note that docker-compose is required for this demonstration. In the `docker-compose.yml` file, the `environment - ethereum` variable should be set as:
```
ethereum: 'mainnet:http://172.19.0.1:3000'
```
where the IP address is the one shown when `./setup.sh` is run.
The the node can be started up with:
```
docker-compose up
```

To reset the local node use the following commands from the `graph-node/docker` folder.
```
docker-compose down
rm -rf data/
```
Then the setup process can be restarted.

### Subgraph
The subgraph is deployed locally to the graph node using the graph node CLI that can be installed using `npm install -g @graphprotocol/graph-cli`.

To deploy a new subgraph, make sure to change the parameters in the [`./demoSubgraphFC/package.json`](./demoSubgraphFC/package.json) file to the correct github username.
```json
"scripts": {
  "build-contract": "solc contracts/Gravity.sol --abi -o abis --overwrite && solc contracts/Gravity.sol --bin -o bin --overwrite",
  "create": "graph create aalu1418/demoSubgraphFC --node https://api.thegraph.com/deploy/",
  "create-local": "graph create aalu1418/demoSubgraphFC --node http://127.0.0.1:8020",
  "codegen": "graph codegen",
  "build": "graph build",
  "deploy": "graph deploy aalu1418/demoSubgraphFC --ipfs https://api.thegraph.com/ipfs/ --node https://api.thegraph.com/deploy/",
  "deploy-local": "graph deploy aalu1418/demoSubgraphFC --ipfs http://localhost:5001 --node http://127.0.0.1:8020"
}
```
Additionally, the `startBlock` parameter in the [`subgraph.yml`](./demoSubgraphFC/subgraph.yml) can be modified to adjust the synchronization time.
```
startBlock: 4512596
```

To deploy the subgraph locally, the following commands are called from the `demoSubgraphFC` folder.
```
yarn
yarn codegen
yarn create-local
yarn deploy-local
```

Note that once a subgraph is deployed it can be modified, but it cannot be removed from the node (without a full reset described previously)

The information is can be viewed at [http://127.0.0.1:8000/subgraphs/name/aalu1418/demoSubgraphFC/graphql](http://127.0.0.1:8000/subgraphs/name/aalu1418/demoSubgraphFC/graphql). Which may look different depending on the username that is used when configuring the `package.json` file.

Sample query:
```graphql
{
  transferDatas {
    id,
    to,
    from,
    value
  }
}
```
