// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface IMessagingComposer$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "IMessagingComposer",
  "sourceName": "@layerzerolabs/lz-evm-protocol-v2/contracts/interfaces/IMessagingComposer.sol",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "guid",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint16",
          "name": "index",
          "type": "uint16"
        }
      ],
      "name": "ComposeDelivered",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "guid",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint16",
          "name": "index",
          "type": "uint16"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "message",
          "type": "bytes"
        }
      ],
      "name": "ComposeSent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "executor",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "guid",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint16",
          "name": "index",
          "type": "uint16"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "gas",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "message",
          "type": "bytes"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "extraData",
          "type": "bytes"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "reason",
          "type": "bytes"
        }
      ],
      "name": "LzComposeAlert",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "_guid",
          "type": "bytes32"
        },
        {
          "internalType": "uint16",
          "name": "_index",
          "type": "uint16"
        }
      ],
      "name": "composeQueue",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "messageHash",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "_guid",
          "type": "bytes32"
        },
        {
          "internalType": "uint16",
          "name": "_index",
          "type": "uint16"
        },
        {
          "internalType": "bytes",
          "name": "_message",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "_extraData",
          "type": "bytes"
        }
      ],
      "name": "lzCompose",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "_guid",
          "type": "bytes32"
        },
        {
          "internalType": "uint16",
          "name": "_index",
          "type": "uint16"
        },
        {
          "internalType": "bytes",
          "name": "_message",
          "type": "bytes"
        }
      ],
      "name": "sendCompose",
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
    contractName: "IMessagingComposer",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<IMessagingComposer$Type["abi"]>>;
  export function deployContract(
    contractName: "@layerzerolabs/lz-evm-protocol-v2/contracts/interfaces/IMessagingComposer.sol:IMessagingComposer",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<IMessagingComposer$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "IMessagingComposer",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<IMessagingComposer$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "@layerzerolabs/lz-evm-protocol-v2/contracts/interfaces/IMessagingComposer.sol:IMessagingComposer",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<IMessagingComposer$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "IMessagingComposer",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<IMessagingComposer$Type["abi"]>>;
  export function getContractAt(
    contractName: "@layerzerolabs/lz-evm-protocol-v2/contracts/interfaces/IMessagingComposer.sol:IMessagingComposer",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<IMessagingComposer$Type["abi"]>>;
}
