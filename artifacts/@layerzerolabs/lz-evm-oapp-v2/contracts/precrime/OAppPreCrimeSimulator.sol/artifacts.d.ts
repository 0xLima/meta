// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { OAppPreCrimeSimulator$Type } from "./OAppPreCrimeSimulator";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["OAppPreCrimeSimulator"]: OAppPreCrimeSimulator$Type;
    ["@layerzerolabs/lz-evm-oapp-v2/contracts/precrime/OAppPreCrimeSimulator.sol:OAppPreCrimeSimulator"]: OAppPreCrimeSimulator$Type;
  }

  interface ContractTypesMap {
    ["OAppPreCrimeSimulator"]: GetContractReturnType<OAppPreCrimeSimulator$Type["abi"]>;
    ["@layerzerolabs/lz-evm-oapp-v2/contracts/precrime/OAppPreCrimeSimulator.sol:OAppPreCrimeSimulator"]: GetContractReturnType<OAppPreCrimeSimulator$Type["abi"]>;
  }
}
