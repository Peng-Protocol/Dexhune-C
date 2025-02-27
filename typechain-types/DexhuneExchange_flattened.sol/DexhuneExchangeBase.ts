/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface DexhuneExchangeBaseInterface extends Interface {
  getFunction(nameOrSignature: "owner" | "transferOwnership"): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AVAXTransferred"
      | "AssignedPriceDAO"
      | "OrderCreated"
      | "OrderReverted"
      | "OrderSettled"
      | "OrderTaken"
      | "TokenListed"
      | "TokenTransferred"
      | "TransferredOwnership"
  ): EventFragment;

  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
}

export namespace AVAXTransferredEvent {
  export type InputTuple = [amount: BigNumberish, targetAddr: AddressLike];
  export type OutputTuple = [amount: bigint, targetAddr: string];
  export interface OutputObject {
    amount: bigint;
    targetAddr: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AssignedPriceDAOEvent {
  export type InputTuple = [addr: AddressLike];
  export type OutputTuple = [addr: string];
  export interface OutputObject {
    addr: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OrderCreatedEvent {
  export type InputTuple = [
    index: BigNumberish,
    orderType: boolean,
    tokenAddr: AddressLike,
    amount: BigNumberish,
    price: BigNumberish
  ];
  export type OutputTuple = [
    index: bigint,
    orderType: boolean,
    tokenAddr: string,
    amount: bigint,
    price: bigint
  ];
  export interface OutputObject {
    index: bigint;
    orderType: boolean;
    tokenAddr: string;
    amount: bigint;
    price: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OrderRevertedEvent {
  export type InputTuple = [
    index: BigNumberish,
    orderType: boolean,
    maker: AddressLike
  ];
  export type OutputTuple = [index: bigint, orderType: boolean, maker: string];
  export interface OutputObject {
    index: bigint;
    orderType: boolean;
    maker: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OrderSettledEvent {
  export type InputTuple = [
    index: BigNumberish,
    orderType: boolean,
    maker: AddressLike,
    isPartial: boolean
  ];
  export type OutputTuple = [
    index: bigint,
    orderType: boolean,
    maker: string,
    isPartial: boolean
  ];
  export interface OutputObject {
    index: bigint;
    orderType: boolean;
    maker: string;
    isPartial: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OrderTakenEvent {
  export type InputTuple = [
    index: BigNumberish,
    orderType: boolean,
    maker: AddressLike,
    taker: AddressLike,
    token: AddressLike,
    amount: BigNumberish,
    isPartial: boolean
  ];
  export type OutputTuple = [
    index: bigint,
    orderType: boolean,
    maker: string,
    taker: string,
    token: string,
    amount: bigint,
    isPartial: boolean
  ];
  export interface OutputObject {
    index: bigint;
    orderType: boolean;
    maker: string;
    taker: string;
    token: string;
    amount: bigint;
    isPartial: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TokenListedEvent {
  export type InputTuple = [
    name: string,
    symbol: string,
    pricingScheme: BigNumberish,
    addr: AddressLike,
    index: BigNumberish
  ];
  export type OutputTuple = [
    name: string,
    symbol: string,
    pricingScheme: bigint,
    addr: string,
    index: bigint
  ];
  export interface OutputObject {
    name: string;
    symbol: string;
    pricingScheme: bigint;
    addr: string;
    index: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TokenTransferredEvent {
  export type InputTuple = [
    amount: BigNumberish,
    targetAddr: AddressLike,
    tokenAddr: AddressLike
  ];
  export type OutputTuple = [
    amount: bigint,
    targetAddr: string,
    tokenAddr: string
  ];
  export interface OutputObject {
    amount: bigint;
    targetAddr: string;
    tokenAddr: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferredOwnershipEvent {
  export type InputTuple = [oldOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [oldOwner: string, newOwner: string];
  export interface OutputObject {
    oldOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface DexhuneExchangeBase extends BaseContract {
  connect(runner?: ContractRunner | null): DexhuneExchangeBase;
  waitForDeployment(): Promise<this>;

  interface: DexhuneExchangeBaseInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  owner: TypedContractMethod<[], [string], "view">;

  transferOwnership: TypedContractMethod<
    [_address: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[_address: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "AVAXTransferred"
  ): TypedContractEvent<
    AVAXTransferredEvent.InputTuple,
    AVAXTransferredEvent.OutputTuple,
    AVAXTransferredEvent.OutputObject
  >;
  getEvent(
    key: "AssignedPriceDAO"
  ): TypedContractEvent<
    AssignedPriceDAOEvent.InputTuple,
    AssignedPriceDAOEvent.OutputTuple,
    AssignedPriceDAOEvent.OutputObject
  >;
  getEvent(
    key: "OrderCreated"
  ): TypedContractEvent<
    OrderCreatedEvent.InputTuple,
    OrderCreatedEvent.OutputTuple,
    OrderCreatedEvent.OutputObject
  >;
  getEvent(
    key: "OrderReverted"
  ): TypedContractEvent<
    OrderRevertedEvent.InputTuple,
    OrderRevertedEvent.OutputTuple,
    OrderRevertedEvent.OutputObject
  >;
  getEvent(
    key: "OrderSettled"
  ): TypedContractEvent<
    OrderSettledEvent.InputTuple,
    OrderSettledEvent.OutputTuple,
    OrderSettledEvent.OutputObject
  >;
  getEvent(
    key: "OrderTaken"
  ): TypedContractEvent<
    OrderTakenEvent.InputTuple,
    OrderTakenEvent.OutputTuple,
    OrderTakenEvent.OutputObject
  >;
  getEvent(
    key: "TokenListed"
  ): TypedContractEvent<
    TokenListedEvent.InputTuple,
    TokenListedEvent.OutputTuple,
    TokenListedEvent.OutputObject
  >;
  getEvent(
    key: "TokenTransferred"
  ): TypedContractEvent<
    TokenTransferredEvent.InputTuple,
    TokenTransferredEvent.OutputTuple,
    TokenTransferredEvent.OutputObject
  >;
  getEvent(
    key: "TransferredOwnership"
  ): TypedContractEvent<
    TransferredOwnershipEvent.InputTuple,
    TransferredOwnershipEvent.OutputTuple,
    TransferredOwnershipEvent.OutputObject
  >;

  filters: {
    "AVAXTransferred(uint256,address)": TypedContractEvent<
      AVAXTransferredEvent.InputTuple,
      AVAXTransferredEvent.OutputTuple,
      AVAXTransferredEvent.OutputObject
    >;
    AVAXTransferred: TypedContractEvent<
      AVAXTransferredEvent.InputTuple,
      AVAXTransferredEvent.OutputTuple,
      AVAXTransferredEvent.OutputObject
    >;

    "AssignedPriceDAO(address)": TypedContractEvent<
      AssignedPriceDAOEvent.InputTuple,
      AssignedPriceDAOEvent.OutputTuple,
      AssignedPriceDAOEvent.OutputObject
    >;
    AssignedPriceDAO: TypedContractEvent<
      AssignedPriceDAOEvent.InputTuple,
      AssignedPriceDAOEvent.OutputTuple,
      AssignedPriceDAOEvent.OutputObject
    >;

    "OrderCreated(uint256,bool,address,uint256,uint256)": TypedContractEvent<
      OrderCreatedEvent.InputTuple,
      OrderCreatedEvent.OutputTuple,
      OrderCreatedEvent.OutputObject
    >;
    OrderCreated: TypedContractEvent<
      OrderCreatedEvent.InputTuple,
      OrderCreatedEvent.OutputTuple,
      OrderCreatedEvent.OutputObject
    >;

    "OrderReverted(uint256,bool,address)": TypedContractEvent<
      OrderRevertedEvent.InputTuple,
      OrderRevertedEvent.OutputTuple,
      OrderRevertedEvent.OutputObject
    >;
    OrderReverted: TypedContractEvent<
      OrderRevertedEvent.InputTuple,
      OrderRevertedEvent.OutputTuple,
      OrderRevertedEvent.OutputObject
    >;

    "OrderSettled(uint256,bool,address,bool)": TypedContractEvent<
      OrderSettledEvent.InputTuple,
      OrderSettledEvent.OutputTuple,
      OrderSettledEvent.OutputObject
    >;
    OrderSettled: TypedContractEvent<
      OrderSettledEvent.InputTuple,
      OrderSettledEvent.OutputTuple,
      OrderSettledEvent.OutputObject
    >;

    "OrderTaken(uint256,bool,address,address,address,uint256,bool)": TypedContractEvent<
      OrderTakenEvent.InputTuple,
      OrderTakenEvent.OutputTuple,
      OrderTakenEvent.OutputObject
    >;
    OrderTaken: TypedContractEvent<
      OrderTakenEvent.InputTuple,
      OrderTakenEvent.OutputTuple,
      OrderTakenEvent.OutputObject
    >;

    "TokenListed(string,string,uint8,address,uint256)": TypedContractEvent<
      TokenListedEvent.InputTuple,
      TokenListedEvent.OutputTuple,
      TokenListedEvent.OutputObject
    >;
    TokenListed: TypedContractEvent<
      TokenListedEvent.InputTuple,
      TokenListedEvent.OutputTuple,
      TokenListedEvent.OutputObject
    >;

    "TokenTransferred(uint256,address,address)": TypedContractEvent<
      TokenTransferredEvent.InputTuple,
      TokenTransferredEvent.OutputTuple,
      TokenTransferredEvent.OutputObject
    >;
    TokenTransferred: TypedContractEvent<
      TokenTransferredEvent.InputTuple,
      TokenTransferredEvent.OutputTuple,
      TokenTransferredEvent.OutputObject
    >;

    "TransferredOwnership(address,address)": TypedContractEvent<
      TransferredOwnershipEvent.InputTuple,
      TransferredOwnershipEvent.OutputTuple,
      TransferredOwnershipEvent.OutputObject
    >;
    TransferredOwnership: TypedContractEvent<
      TransferredOwnershipEvent.InputTuple,
      TransferredOwnershipEvent.OutputTuple,
      TransferredOwnershipEvent.OutputObject
    >;
  };
}
