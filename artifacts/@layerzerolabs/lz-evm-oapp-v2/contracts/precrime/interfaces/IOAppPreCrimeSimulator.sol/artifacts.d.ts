// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { IOAppPreCrimeSimulator$Type } from "./IOAppPreCrimeSimulator";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["IOAppPreCrimeSimulator"]: IOAppPreCrimeSimulator$Type;
    ["@layerzerolabs/lz-evm-oapp-v2/contracts/precrime/interfaces/IOAppPreCrimeSimulator.sol:IOAppPreCrimeSimulator"]: IOAppPreCrimeSimulator$Type;
  }

  interface ContractTypesMap {
    ["IOAppPreCrimeSimulator"]: GetContractReturnType<IOAppPreCrimeSimulator$Type["abi"]>;
    ["@layerzerolabs/lz-evm-oapp-v2/contracts/precrime/interfaces/IOAppPreCrimeSimulator.sol:IOAppPreCrimeSimulator"]: GetContractReturnType<IOAppPreCrimeSimulator$Type["abi"]>;
  }
}
