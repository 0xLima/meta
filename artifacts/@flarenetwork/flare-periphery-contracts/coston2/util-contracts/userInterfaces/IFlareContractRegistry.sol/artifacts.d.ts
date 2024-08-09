// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { IFlareContractRegistry$Type } from "./IFlareContractRegistry";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["IFlareContractRegistry"]: IFlareContractRegistry$Type;
    ["@flarenetwork/flare-periphery-contracts/coston2/util-contracts/userInterfaces/IFlareContractRegistry.sol:IFlareContractRegistry"]: IFlareContractRegistry$Type;
  }

  interface ContractTypesMap {
    ["IFlareContractRegistry"]: GetContractReturnType<IFlareContractRegistry$Type["abi"]>;
    ["@flarenetwork/flare-periphery-contracts/coston2/util-contracts/userInterfaces/IFlareContractRegistry.sol:IFlareContractRegistry"]: GetContractReturnType<IFlareContractRegistry$Type["abi"]>;
  }
}
