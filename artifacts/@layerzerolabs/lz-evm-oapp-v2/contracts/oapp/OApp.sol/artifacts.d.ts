// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { OApp$Type } from "./OApp";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["OApp"]: OApp$Type;
    ["@layerzerolabs/lz-evm-oapp-v2/contracts/oapp/OApp.sol:OApp"]: OApp$Type;
  }

  interface ContractTypesMap {
    ["OApp"]: GetContractReturnType<OApp$Type["abi"]>;
    ["@layerzerolabs/lz-evm-oapp-v2/contracts/oapp/OApp.sol:OApp"]: GetContractReturnType<OApp$Type["abi"]>;
  }
}
