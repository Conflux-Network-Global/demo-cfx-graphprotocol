# Conflux Network + Graph Protocol: FC Demo
Demonstration of connecting Conflux Network and The Graph protocol for decentralized query. Decentralized query has the potential to unlock more applications in the Web3 space by providing an easy way for developers to access information from the blockchain.

## Introduction

### Components
Graph Protocol Node: https://github.com/Conflux-Network-Global/graph-node
- This is a slightly modified version of the original [graph node code](https://github.com/graphprotocol/graph-node). The original node tracked triggers using block numbers with the assumption that block numbers are unique. On Conflux block/epoch numbers are not unique, so the modification tracks the block hash instead (not 100% sure on this).

Relay: https://github.com/Conflux-Network-Global/eth2cfx-relay
- The relay handles turning Ethereum JSON-RPC calls to Conflux JSON-RPC calls.

Subgraph: [./demoSubgraphFC](./demoSubgraphFC)
- The subgraph provides the specifications for monitoring the events from the FanCoin (FC) token contract.

## Setup
### ETH2CFX Relay

### Graph node

### Subgraph
