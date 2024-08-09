// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface IOAppPreCrimeSimulator$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "IOAppPreCrimeSimulator",
  "sourceName": "@layerzerolabs/lz-evm-oapp-v2/contracts/precrime/interfaces/IOAppPreCrimeSimulator.sol",
  "abi": [
    {
      "inputs": [],
      "name": "OnlySelf",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "result",
          "type": "bytes"
        }
      ],
      "name": "SimulationResult",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "preCrimeAddress",
          "type": "address"
        }
      ],
      "name": "PreCrimeSet",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint32",
          "name": "_eid",
          "type": "uint32"
        },
        {
          "internalType": "bytes32",
          "name": "_peer",
          "type": "bytes32"
        }
      ],
      "name": "isPeer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "uint32",
                  "name": "srcEid",
                  "type": "uint32"
                },
                {
                  "internalType": "bytes32",
                  "name": "sender",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint64",
                  "name": "nonce",
                  "type": "uint64"
                }
              ],
              "internalType": "struct Origin",
              "name": "origin",
              "type": "tuple"
            },
            {
              "internalType": "uint32",
              "name": "dstEid",
              "type": "uint32"
            },
            {
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "guid",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "executor",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "message",
              "type": "bytes"
            },
            {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
            }
          ],
          "internalType": "struct InboundPacket[]",
          "name": "_packets",
          "type": "tuple[]"
        }
      ],
      "name": "lzReceiveAndRevert",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "oApp",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "preCrime",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_preCrime",
          "type": "address"
        }
      ],
      "name": "setPreCrime",
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
    contractName: "IOAppPreCrimeSimulator",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<IOAppPreCrimeSimulator$Type["abi"]>>;
  export function deployContract(
    contractName: "@layerzerolabs/lz-evm-oapp-v2/contracts/precrime/interfaces/IOAppPreCrimeSimulator.sol:IOAppPreCrimeSimulator",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<IOAppPreCrimeSimulator$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "IOAppPreCrimeSimulator",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<IOAppPreCrimeSimulator$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "@layerzerolabs/lz-evm-oapp-v2/contracts/precrime/interfaces/IOAppPreCrimeSimulator.sol:IOAppPreCrimeSimulator",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<IOAppPreCrimeSimulator$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "IOAppPreCrimeSimulator",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<IOAppPreCrimeSimulator$Type["abi"]>>;
  export function getContractAt(
    contractName: "@layerzerolabs/lz-evm-oapp-v2/contracts/precrime/interfaces/IOAppPreCrimeSimulator.sol:IOAppPreCrimeSimulator",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<IOAppPreCrimeSimulator$Type["abi"]>>;
}
