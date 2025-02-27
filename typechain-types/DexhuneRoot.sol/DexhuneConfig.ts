/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface DexhuneConfigInterface extends Interface {
  getFunction(
    nameOrSignature: "cooldownTimeout" | "transferCooldown"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "cooldownTimeout",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferCooldown",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "cooldownTimeout",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferCooldown",
    data: BytesLike
  ): Result;
}

export interface DexhuneConfig extends BaseContract {
  connect(runner?: ContractRunner | null): DexhuneConfig;
  waitForDeployment(): Promise<this>;

  interface: DexhuneConfigInterface;

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

  cooldownTimeout: TypedContractMethod<[], [bigint], "view">;

  transferCooldown: TypedContractMethod<[], [boolean], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "cooldownTimeout"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferCooldown"
  ): TypedContractMethod<[], [boolean], "view">;

  filters: {};
}
