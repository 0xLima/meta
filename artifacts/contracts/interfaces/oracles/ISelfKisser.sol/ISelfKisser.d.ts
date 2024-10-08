// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface ISelfKisser$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "ISelfKisser",
  "sourceName": "contracts/interfaces/oracles/ISelfKisser.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "oracle",
          "type": "address"
        }
      ],
      "name": "selfKiss",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "ISelfKisser",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<ISelfKisser$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/interfaces/oracles/ISelfKisser.sol:ISelfKisser",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<ISelfKisser$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "ISelfKisser",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<ISelfKisser$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/interfaces/oracles/ISelfKisser.sol:ISelfKisser",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<ISelfKisser$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "ISelfKisser",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<ISelfKisser$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/interfaces/oracles/ISelfKisser.sol:ISelfKisser",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<ISelfKisser$Type["abi"]>>;
}
