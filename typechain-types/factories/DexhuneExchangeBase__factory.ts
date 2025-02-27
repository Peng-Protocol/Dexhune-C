/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  DexhuneExchangeBase,
  DexhuneExchangeBaseInterface,
} from "../DexhuneExchangeBase";

const _abi = [
  {
    inputs: [],
    name: "DepositFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedStringToNumberConversion",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedToSendReward",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedToTakeOrder",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    name: "InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "listingPrice",
        type: "uint256",
      },
    ],
    name: "InsufficientBalanceForListing",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidTokenContract",
    type: "error",
  },
  {
    inputs: [],
    name: "NoSuitableOrderFound",
    type: "error",
  },
  {
    inputs: [],
    name: "OnlyOwnerMustSetDefaultToken",
    type: "error",
  },
  {
    inputs: [],
    name: "OrderDoesNotExist",
    type: "error",
  },
  {
    inputs: [],
    name: "ParityShouldNotHavePrice",
    type: "error",
  },
  {
    inputs: [],
    name: "RejectedZeroAmount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddr",
        type: "address",
      },
    ],
    name: "TokenAlreadyExists",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenLimitReached",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenNotListed",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenNotSupported_TooManyDecimals",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenOrderLimitReachedRetryOrClear",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "UnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "targetAddr",
        type: "address",
      },
    ],
    name: "AVAXTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "AssignedPriceDAO",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "orderType",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "OrderCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "orderType",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "address",
        name: "maker",
        type: "address",
      },
    ],
    name: "OrderReverted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "orderType",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isPartial",
        type: "bool",
      },
    ],
    name: "OrderSettled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "orderType",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "address",
        name: "maker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "taker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isPartial",
        type: "bool",
      },
    ],
    name: "OrderTaken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: true,
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "enum DexhuneExchangeBase.PricingScheme",
        name: "pricingScheme",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "TokenListed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "targetAddr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddr",
        type: "address",
      },
    ],
    name: "TokenTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "TransferredOwnership",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class DexhuneExchangeBase__factory {
  static readonly abi = _abi;
  static createInterface(): DexhuneExchangeBaseInterface {
    return new Interface(_abi) as DexhuneExchangeBaseInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): DexhuneExchangeBase {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as DexhuneExchangeBase;
  }
}
