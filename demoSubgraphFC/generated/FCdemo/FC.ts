// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class TransferPaused extends ethereum.Event {
  get params(): TransferPaused__Params {
    return new TransferPaused__Params(this);
  }
}

export class TransferPaused__Params {
  _event: TransferPaused;

  constructor(event: TransferPaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class TransferUnpaused extends ethereum.Event {
  get params(): TransferUnpaused__Params {
    return new TransferUnpaused__Params(this);
  }
}

export class TransferUnpaused__Params {
  _event: TransferUnpaused;

  constructor(event: TransferUnpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class BurnPaused extends ethereum.Event {
  get params(): BurnPaused__Params {
    return new BurnPaused__Params(this);
  }
}

export class BurnPaused__Params {
  _event: BurnPaused;

  constructor(event: BurnPaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class BurnUnpaused extends ethereum.Event {
  get params(): BurnUnpaused__Params {
    return new BurnUnpaused__Params(this);
  }
}

export class BurnUnpaused__Params {
  _event: BurnUnpaused;

  constructor(event: BurnUnpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class MigratePaused extends ethereum.Event {
  get params(): MigratePaused__Params {
    return new MigratePaused__Params(this);
  }
}

export class MigratePaused__Params {
  _event: MigratePaused;

  constructor(event: MigratePaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class MigrateUnpaused extends ethereum.Event {
  get params(): MigrateUnpaused__Params {
    return new MigrateUnpaused__Params(this);
  }
}

export class MigrateUnpaused__Params {
  _event: MigrateUnpaused;

  constructor(event: MigrateUnpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class MinterAdded extends ethereum.Event {
  get params(): MinterAdded__Params {
    return new MinterAdded__Params(this);
  }
}

export class MinterAdded__Params {
  _event: MinterAdded;

  constructor(event: MinterAdded) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class MinterRemoved extends ethereum.Event {
  get params(): MinterRemoved__Params {
    return new MinterRemoved__Params(this);
  }
}

export class MinterRemoved__Params {
  _event: MinterRemoved;

  constructor(event: MinterRemoved) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class PauserAdded extends ethereum.Event {
  get params(): PauserAdded__Params {
    return new PauserAdded__Params(this);
  }
}

export class PauserAdded__Params {
  _event: PauserAdded;

  constructor(event: PauserAdded) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class PauserRemoved extends ethereum.Event {
  get params(): PauserRemoved__Params {
    return new PauserRemoved__Params(this);
  }
}

export class PauserRemoved__Params {
  _event: PauserRemoved;

  constructor(event: PauserRemoved) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class AdminAdded extends ethereum.Event {
  get params(): AdminAdded__Params {
    return new AdminAdded__Params(this);
  }
}

export class AdminAdded__Params {
  _event: AdminAdded;

  constructor(event: AdminAdded) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class AdminRemoved extends ethereum.Event {
  get params(): AdminRemoved__Params {
    return new AdminRemoved__Params(this);
  }
}

export class AdminRemoved__Params {
  _event: AdminRemoved;

  constructor(event: AdminRemoved) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Lock extends ethereum.Event {
  get params(): Lock__Params {
    return new Lock__Params(this);
  }
}

export class Lock__Params {
  _event: Lock;

  constructor(event: Lock) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Write extends ethereum.Event {
  get params(): Write__Params {
    return new Write__Params(this);
  }
}

export class Write__Params {
  _event: Write;

  constructor(event: Write) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get CPool(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get PPool(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get PPoolLocked(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class FC__stateOfResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class FC extends ethereum.SmartContract {
  static bind(address: Address): FC {
    return new FC("FC", address);
  }

  isBurnPaused(): boolean {
    let result = super.call("isBurnPaused", "isBurnPaused():(bool)", []);

    return result[0].toBoolean();
  }

  try_isBurnPaused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isBurnPaused", "isBurnPaused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  SPONSOR(): Address {
    let result = super.call("SPONSOR", "SPONSOR():(address)", []);

    return result[0].toAddress();
  }

  try_SPONSOR(): ethereum.CallResult<Address> {
    let result = super.tryCall("SPONSOR", "SPONSOR():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isMigratePaused(): boolean {
    let result = super.call("isMigratePaused", "isMigratePaused():(bool)", []);

    return result[0].toBoolean();
  }

  try_isMigratePaused(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isMigratePaused",
      "isMigratePaused():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isAdmin(account: Address): boolean {
    let result = super.call("isAdmin", "isAdmin(address):(bool)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_isAdmin(account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isAdmin", "isAdmin(address):(bool)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isPauser(account: Address): boolean {
    let result = super.call("isPauser", "isPauser(address):(bool)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_isPauser(account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isPauser", "isPauser(address):(bool)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isTransferPaused(): boolean {
    let result = super.call(
      "isTransferPaused",
      "isTransferPaused():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_isTransferPaused(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isTransferPaused",
      "isTransferPaused():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isMinter(account: Address): boolean {
    let result = super.call("isMinter", "isMinter(address):(bool)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_isMinter(account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isMinter", "isMinter(address):(bool)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  decimals(): i32 {
    let result = super.call("decimals", "decimals():(uint8)", []);

    return result[0].toI32();
  }

  try_decimals(): ethereum.CallResult<i32> {
    let result = super.tryCall("decimals", "decimals():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  cap(): BigInt {
    let result = super.call("cap", "cap():(uint256)", []);

    return result[0].toBigInt();
  }

  try_cap(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("cap", "cap():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOf(account: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  circulationRatio(): BigInt {
    let result = super.call(
      "circulationRatio",
      "circulationRatio():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_circulationRatio(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "circulationRatio",
      "circulationRatio():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  stateOf(account: Address): FC__stateOfResult {
    let result = super.call(
      "stateOf",
      "stateOf(address):(uint256,uint256,uint256)",
      [ethereum.Value.fromAddress(account)]
    );

    return new FC__stateOfResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_stateOf(account: Address): ethereum.CallResult<FC__stateOfResult> {
    let result = super.tryCall(
      "stateOf",
      "stateOf(address):(uint256,uint256,uint256)",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new FC__stateOfResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  balanceOfContract(): BigInt {
    let result = super.call(
      "balanceOfContract",
      "balanceOfContract():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_balanceOfContract(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balanceOfContract",
      "balanceOfContract():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  accountTotal(): BigInt {
    let result = super.call("accountTotal", "accountTotal():(uint256)", []);

    return result[0].toBigInt();
  }

  try_accountTotal(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("accountTotal", "accountTotal():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  accountList(begin: BigInt): Array<Address> {
    let result = super.call(
      "accountList",
      "accountList(uint256):(address[100])",
      [ethereum.Value.fromUnsignedBigInt(begin)]
    );

    return result[0].toAddressArray();
  }

  try_accountList(begin: BigInt): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "accountList",
      "accountList(uint256):(address[100])",
      [ethereum.Value.fromUnsignedBigInt(begin)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  mint(account: Address, value: BigInt): boolean {
    let result = super.call("mint", "mint(address,uint256):(bool)", [
      ethereum.Value.fromAddress(account),
      ethereum.Value.fromUnsignedBigInt(value)
    ]);

    return result[0].toBoolean();
  }

  try_mint(account: Address, value: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("mint", "mint(address,uint256):(bool)", [
      ethereum.Value.fromAddress(account),
      ethereum.Value.fromUnsignedBigInt(value)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transfer(recipient: Address, value: BigInt): boolean {
    let result = super.call("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(value)
    ]);

    return result[0].toBoolean();
  }

  try_transfer(
    recipient: Address,
    value: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall("transfer", "transfer(address,uint256):(bool)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(value)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  send(recipient: Address, value: BigInt, data: Bytes): boolean {
    let result = super.call("send", "send(address,uint256,bytes):(bool)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(value),
      ethereum.Value.fromBytes(data)
    ]);

    return result[0].toBoolean();
  }

  try_send(
    recipient: Address,
    value: BigInt,
    data: Bytes
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall("send", "send(address,uint256,bytes):(bool)", [
      ethereum.Value.fromAddress(recipient),
      ethereum.Value.fromUnsignedBigInt(value),
      ethereum.Value.fromBytes(data)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class RemoveMinterCall extends ethereum.Call {
  get inputs(): RemoveMinterCall__Inputs {
    return new RemoveMinterCall__Inputs(this);
  }

  get outputs(): RemoveMinterCall__Outputs {
    return new RemoveMinterCall__Outputs(this);
  }
}

export class RemoveMinterCall__Inputs {
  _call: RemoveMinterCall;

  constructor(call: RemoveMinterCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveMinterCall__Outputs {
  _call: RemoveMinterCall;

  constructor(call: RemoveMinterCall) {
    this._call = call;
  }
}

export class PauseAfterInitializationCall extends ethereum.Call {
  get inputs(): PauseAfterInitializationCall__Inputs {
    return new PauseAfterInitializationCall__Inputs(this);
  }

  get outputs(): PauseAfterInitializationCall__Outputs {
    return new PauseAfterInitializationCall__Outputs(this);
  }
}

export class PauseAfterInitializationCall__Inputs {
  _call: PauseAfterInitializationCall;

  constructor(call: PauseAfterInitializationCall) {
    this._call = call;
  }
}

export class PauseAfterInitializationCall__Outputs {
  _call: PauseAfterInitializationCall;

  constructor(call: PauseAfterInitializationCall) {
    this._call = call;
  }
}

export class RemovePauserCall extends ethereum.Call {
  get inputs(): RemovePauserCall__Inputs {
    return new RemovePauserCall__Inputs(this);
  }

  get outputs(): RemovePauserCall__Outputs {
    return new RemovePauserCall__Outputs(this);
  }
}

export class RemovePauserCall__Inputs {
  _call: RemovePauserCall;

  constructor(call: RemovePauserCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemovePauserCall__Outputs {
  _call: RemovePauserCall;

  constructor(call: RemovePauserCall) {
    this._call = call;
  }
}

export class RenouncePauserCall extends ethereum.Call {
  get inputs(): RenouncePauserCall__Inputs {
    return new RenouncePauserCall__Inputs(this);
  }

  get outputs(): RenouncePauserCall__Outputs {
    return new RenouncePauserCall__Outputs(this);
  }
}

export class RenouncePauserCall__Inputs {
  _call: RenouncePauserCall;

  constructor(call: RenouncePauserCall) {
    this._call = call;
  }
}

export class RenouncePauserCall__Outputs {
  _call: RenouncePauserCall;

  constructor(call: RenouncePauserCall) {
    this._call = call;
  }
}

export class AddAdminCall extends ethereum.Call {
  get inputs(): AddAdminCall__Inputs {
    return new AddAdminCall__Inputs(this);
  }

  get outputs(): AddAdminCall__Outputs {
    return new AddAdminCall__Outputs(this);
  }
}

export class AddAdminCall__Inputs {
  _call: AddAdminCall;

  constructor(call: AddAdminCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddAdminCall__Outputs {
  _call: AddAdminCall;

  constructor(call: AddAdminCall) {
    this._call = call;
  }
}

export class AddPauserCall extends ethereum.Call {
  get inputs(): AddPauserCall__Inputs {
    return new AddPauserCall__Inputs(this);
  }

  get outputs(): AddPauserCall__Outputs {
    return new AddPauserCall__Outputs(this);
  }
}

export class AddPauserCall__Inputs {
  _call: AddPauserCall;

  constructor(call: AddPauserCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddPauserCall__Outputs {
  _call: AddPauserCall;

  constructor(call: AddPauserCall) {
    this._call = call;
  }
}

export class RenounceAdminCall extends ethereum.Call {
  get inputs(): RenounceAdminCall__Inputs {
    return new RenounceAdminCall__Inputs(this);
  }

  get outputs(): RenounceAdminCall__Outputs {
    return new RenounceAdminCall__Outputs(this);
  }
}

export class RenounceAdminCall__Inputs {
  _call: RenounceAdminCall;

  constructor(call: RenounceAdminCall) {
    this._call = call;
  }
}

export class RenounceAdminCall__Outputs {
  _call: RenounceAdminCall;

  constructor(call: RenounceAdminCall) {
    this._call = call;
  }
}

export class AddMinterCall extends ethereum.Call {
  get inputs(): AddMinterCall__Inputs {
    return new AddMinterCall__Inputs(this);
  }

  get outputs(): AddMinterCall__Outputs {
    return new AddMinterCall__Outputs(this);
  }
}

export class AddMinterCall__Inputs {
  _call: AddMinterCall;

  constructor(call: AddMinterCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddMinterCall__Outputs {
  _call: AddMinterCall;

  constructor(call: AddMinterCall) {
    this._call = call;
  }
}

export class RenounceMinterCall extends ethereum.Call {
  get inputs(): RenounceMinterCall__Inputs {
    return new RenounceMinterCall__Inputs(this);
  }

  get outputs(): RenounceMinterCall__Outputs {
    return new RenounceMinterCall__Outputs(this);
  }
}

export class RenounceMinterCall__Inputs {
  _call: RenounceMinterCall;

  constructor(call: RenounceMinterCall) {
    this._call = call;
  }
}

export class RenounceMinterCall__Outputs {
  _call: RenounceMinterCall;

  constructor(call: RenounceMinterCall) {
    this._call = call;
  }
}

export class PauseForExchangeCall extends ethereum.Call {
  get inputs(): PauseForExchangeCall__Inputs {
    return new PauseForExchangeCall__Inputs(this);
  }

  get outputs(): PauseForExchangeCall__Outputs {
    return new PauseForExchangeCall__Outputs(this);
  }
}

export class PauseForExchangeCall__Inputs {
  _call: PauseForExchangeCall;

  constructor(call: PauseForExchangeCall) {
    this._call = call;
  }
}

export class PauseForExchangeCall__Outputs {
  _call: PauseForExchangeCall;

  constructor(call: PauseForExchangeCall) {
    this._call = call;
  }
}

export class PauseDuringMigrationCall extends ethereum.Call {
  get inputs(): PauseDuringMigrationCall__Inputs {
    return new PauseDuringMigrationCall__Inputs(this);
  }

  get outputs(): PauseDuringMigrationCall__Outputs {
    return new PauseDuringMigrationCall__Outputs(this);
  }
}

export class PauseDuringMigrationCall__Inputs {
  _call: PauseDuringMigrationCall;

  constructor(call: PauseDuringMigrationCall) {
    this._call = call;
  }
}

export class PauseDuringMigrationCall__Outputs {
  _call: PauseDuringMigrationCall;

  constructor(call: PauseDuringMigrationCall) {
    this._call = call;
  }
}

export class PauseBeforeMigrationCall extends ethereum.Call {
  get inputs(): PauseBeforeMigrationCall__Inputs {
    return new PauseBeforeMigrationCall__Inputs(this);
  }

  get outputs(): PauseBeforeMigrationCall__Outputs {
    return new PauseBeforeMigrationCall__Outputs(this);
  }
}

export class PauseBeforeMigrationCall__Inputs {
  _call: PauseBeforeMigrationCall;

  constructor(call: PauseBeforeMigrationCall) {
    this._call = call;
  }
}

export class PauseBeforeMigrationCall__Outputs {
  _call: PauseBeforeMigrationCall;

  constructor(call: PauseBeforeMigrationCall) {
    this._call = call;
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class SetStateOfCall extends ethereum.Call {
  get inputs(): SetStateOfCall__Inputs {
    return new SetStateOfCall__Inputs(this);
  }

  get outputs(): SetStateOfCall__Outputs {
    return new SetStateOfCall__Outputs(this);
  }
}

export class SetStateOfCall__Inputs {
  _call: SetStateOfCall;

  constructor(call: SetStateOfCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get ConfluxPool(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get Personal(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get Locked(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class SetStateOfCall__Outputs {
  _call: SetStateOfCall;

  constructor(call: SetStateOfCall) {
    this._call = call;
  }
}

export class SetTotalSupplyCall extends ethereum.Call {
  get inputs(): SetTotalSupplyCall__Inputs {
    return new SetTotalSupplyCall__Inputs(this);
  }

  get outputs(): SetTotalSupplyCall__Outputs {
    return new SetTotalSupplyCall__Outputs(this);
  }
}

export class SetTotalSupplyCall__Inputs {
  _call: SetTotalSupplyCall;

  constructor(call: SetTotalSupplyCall) {
    this._call = call;
  }

  get total(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetTotalSupplyCall__Outputs {
  _call: SetTotalSupplyCall;

  constructor(call: SetTotalSupplyCall) {
    this._call = call;
  }
}

export class SetCirculationRatioCall extends ethereum.Call {
  get inputs(): SetCirculationRatioCall__Inputs {
    return new SetCirculationRatioCall__Inputs(this);
  }

  get outputs(): SetCirculationRatioCall__Outputs {
    return new SetCirculationRatioCall__Outputs(this);
  }
}

export class SetCirculationRatioCall__Inputs {
  _call: SetCirculationRatioCall;

  constructor(call: SetCirculationRatioCall) {
    this._call = call;
  }

  get value(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetCirculationRatioCall__Outputs {
  _call: SetCirculationRatioCall;

  constructor(call: SetCirculationRatioCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferCall extends ethereum.Call {
  get inputs(): TransferCall__Inputs {
    return new TransferCall__Inputs(this);
  }

  get outputs(): TransferCall__Outputs {
    return new TransferCall__Outputs(this);
  }
}

export class TransferCall__Inputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class TransferCall__Outputs {
  _call: TransferCall;

  constructor(call: TransferCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class SendCall extends ethereum.Call {
  get inputs(): SendCall__Inputs {
    return new SendCall__Inputs(this);
  }

  get outputs(): SendCall__Outputs {
    return new SendCall__Outputs(this);
  }
}

export class SendCall__Inputs {
  _call: SendCall;

  constructor(call: SendCall) {
    this._call = call;
  }

  get recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class SendCall__Outputs {
  _call: SendCall;

  constructor(call: SendCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class BurnCall extends ethereum.Call {
  get inputs(): BurnCall__Inputs {
    return new BurnCall__Inputs(this);
  }

  get outputs(): BurnCall__Outputs {
    return new BurnCall__Outputs(this);
  }
}

export class BurnCall__Inputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get value(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BurnCall__Outputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }
}
