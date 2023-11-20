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
} from "./common";

export declare namespace DexhuneExchangeBase {
  export type OrderStruct = {
    makerAddr: AddressLike;
    tokenAddr: AddressLike;
    orderType: boolean;
    created: BigNumberish;
    rewardAmount: BigNumberish;
    price: BigNumberish;
    principal: BigNumberish;
    pending: BigNumberish;
  };

  export type OrderStructOutput = [
    makerAddr: string,
    tokenAddr: string,
    orderType: boolean,
    created: bigint,
    rewardAmount: bigint,
    price: bigint,
    principal: bigint,
    pending: bigint
  ] & {
    makerAddr: string;
    tokenAddr: string;
    orderType: boolean;
    created: bigint;
    rewardAmount: bigint;
    price: bigint;
    principal: bigint;
    pending: bigint;
  };

  export type TokenDataModelStruct = {
    tokenNo: BigNumberish;
    name: string;
    sym: string;
    addr: AddressLike;
    parityAddr: AddressLike;
    reward: BigNumberish;
    rewardThreshold: BigNumberish;
    scheme: BigNumberish;
    price: BigNumberish;
    orders: BigNumberish;
  };

  export type TokenDataModelStructOutput = [
    tokenNo: bigint,
    name: string,
    sym: string,
    addr: string,
    parityAddr: string,
    reward: bigint,
    rewardThreshold: bigint,
    scheme: bigint,
    price: bigint,
    orders: bigint
  ] & {
    tokenNo: bigint;
    name: string;
    sym: string;
    addr: string;
    parityAddr: string;
    reward: bigint;
    rewardThreshold: bigint;
    scheme: bigint;
    price: bigint;
    orders: bigint;
  };
}

export interface DexhuneExchangeInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "assignPriceDao"
      | "clearOrders"
      | "createBuyOrder"
      | "createSellOrder"
      | "deposit"
      | "depositToken"
      | "depositTokenFrom"
      | "getBalance"
      | "listToken"
      | "listingCost"
      | "owner"
      | "queryBalance"
      | "settleOrders"
      | "takeBuyOrder"
      | "takeSellOrder"
      | "transferOwnership"
      | "viewOrder"
      | "viewPrice"
      | "viewToken"
      | "viewTokenByIndex"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "TransferredOwnership"): EventFragment;

  encodeFunctionData(
    functionFragment: "assignPriceDao",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "clearOrders",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createBuyOrder",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createSellOrder",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "depositToken",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositTokenFrom",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "listToken",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "listingCost",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "queryBalance",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "settleOrders",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "takeBuyOrder",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "takeSellOrder",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "viewOrder",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "viewPrice", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "viewToken",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "viewTokenByIndex",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "assignPriceDao",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "clearOrders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createBuyOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createSellOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositTokenFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getBalance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "listToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "listingCost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "queryBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "settleOrders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "takeBuyOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "takeSellOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "viewOrder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "viewPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "viewToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "viewTokenByIndex",
    data: BytesLike
  ): Result;
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

export interface DexhuneExchange extends BaseContract {
  connect(runner?: ContractRunner | null): DexhuneExchange;
  waitForDeployment(): Promise<this>;

  interface: DexhuneExchangeInterface;

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

  assignPriceDao: TypedContractMethod<
    [addr: AddressLike],
    [void],
    "nonpayable"
  >;

  clearOrders: TypedContractMethod<[], [void], "nonpayable">;

  createBuyOrder: TypedContractMethod<
    [tokenAddr: AddressLike],
    [void],
    "payable"
  >;

  createSellOrder: TypedContractMethod<
    [tokenAddr: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  deposit: TypedContractMethod<[tokenAddr: AddressLike], [void], "payable">;

  depositToken: TypedContractMethod<
    [tokenAddr: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  depositTokenFrom: TypedContractMethod<
    [tokenAddr: AddressLike, fromAddress: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getBalance: TypedContractMethod<[], [bigint], "view">;

  listToken: TypedContractMethod<
    [
      tokenAddr: AddressLike,
      scheme: BigNumberish,
      reward: BigNumberish,
      rewardThreshold: BigNumberish,
      parityAddr: AddressLike,
      price: string
    ],
    [void],
    "nonpayable"
  >;

  listingCost: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  queryBalance: TypedContractMethod<
    [tokenAddr: AddressLike, isAVAX: boolean],
    [bigint],
    "view"
  >;

  settleOrders: TypedContractMethod<
    [tokenAddr: AddressLike, orderType: boolean],
    [void],
    "nonpayable"
  >;

  takeBuyOrder: TypedContractMethod<
    [tokenAddr: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  takeSellOrder: TypedContractMethod<
    [tokenAddr: AddressLike],
    [void],
    "payable"
  >;

  transferOwnership: TypedContractMethod<
    [_address: AddressLike],
    [void],
    "nonpayable"
  >;

  viewOrder: TypedContractMethod<
    [tokenAddr: AddressLike, index: BigNumberish],
    [DexhuneExchangeBase.OrderStructOutput],
    "view"
  >;

  viewPrice: TypedContractMethod<[], [bigint], "view">;

  viewToken: TypedContractMethod<
    [tokenAddr: AddressLike],
    [DexhuneExchangeBase.TokenDataModelStructOutput],
    "view"
  >;

  viewTokenByIndex: TypedContractMethod<
    [tokenNo: BigNumberish],
    [DexhuneExchangeBase.TokenDataModelStructOutput],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "assignPriceDao"
  ): TypedContractMethod<[addr: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "clearOrders"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "createBuyOrder"
  ): TypedContractMethod<[tokenAddr: AddressLike], [void], "payable">;
  getFunction(
    nameOrSignature: "createSellOrder"
  ): TypedContractMethod<
    [tokenAddr: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<[tokenAddr: AddressLike], [void], "payable">;
  getFunction(
    nameOrSignature: "depositToken"
  ): TypedContractMethod<
    [tokenAddr: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "depositTokenFrom"
  ): TypedContractMethod<
    [tokenAddr: AddressLike, fromAddress: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getBalance"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "listToken"
  ): TypedContractMethod<
    [
      tokenAddr: AddressLike,
      scheme: BigNumberish,
      reward: BigNumberish,
      rewardThreshold: BigNumberish,
      parityAddr: AddressLike,
      price: string
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "listingCost"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "queryBalance"
  ): TypedContractMethod<
    [tokenAddr: AddressLike, isAVAX: boolean],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "settleOrders"
  ): TypedContractMethod<
    [tokenAddr: AddressLike, orderType: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "takeBuyOrder"
  ): TypedContractMethod<
    [tokenAddr: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "takeSellOrder"
  ): TypedContractMethod<[tokenAddr: AddressLike], [void], "payable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[_address: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "viewOrder"
  ): TypedContractMethod<
    [tokenAddr: AddressLike, index: BigNumberish],
    [DexhuneExchangeBase.OrderStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "viewPrice"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "viewToken"
  ): TypedContractMethod<
    [tokenAddr: AddressLike],
    [DexhuneExchangeBase.TokenDataModelStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "viewTokenByIndex"
  ): TypedContractMethod<
    [tokenNo: BigNumberish],
    [DexhuneExchangeBase.TokenDataModelStructOutput],
    "view"
  >;

  getEvent(
    key: "TransferredOwnership"
  ): TypedContractEvent<
    TransferredOwnershipEvent.InputTuple,
    TransferredOwnershipEvent.OutputTuple,
    TransferredOwnershipEvent.OutputObject
  >;

  filters: {
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
