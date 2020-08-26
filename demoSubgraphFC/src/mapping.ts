import { Transfer } from "../generated/FCdemo/FC";
import { TransferData } from "../generated/schema";

export function handleTransfer(event: Transfer): void {
  let transferEvent = new TransferData(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
  transferEvent.from = event.params.from;
  transferEvent.to = event.params.to;
  transferEvent.value = event.params.value;
  transferEvent.save();
}
