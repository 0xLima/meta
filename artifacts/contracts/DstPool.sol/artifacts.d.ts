// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { DstPool$Type } from "./DstPool";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["DstPool"]: DstPool$Type;
    ["contracts/DstPool.sol:DstPool"]: DstPool$Type;
  }

  interface ContractTypesMap {
    ["DstPool"]: GetContractReturnType<DstPool$Type["abi"]>;
    ["contracts/DstPool.sol:DstPool"]: GetContractReturnType<DstPool$Type["abi"]>;
  }
}
