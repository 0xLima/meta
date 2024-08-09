// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { IPoolFactory$Type } from "./IPoolFactory";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["IPoolFactory"]: IPoolFactory$Type;
    ["contracts/interfaces/IPoolFactory.sol:IPoolFactory"]: IPoolFactory$Type;
  }

  interface ContractTypesMap {
    ["IPoolFactory"]: GetContractReturnType<IPoolFactory$Type["abi"]>;
    ["contracts/interfaces/IPoolFactory.sol:IPoolFactory"]: GetContractReturnType<IPoolFactory$Type["abi"]>;
  }
}
