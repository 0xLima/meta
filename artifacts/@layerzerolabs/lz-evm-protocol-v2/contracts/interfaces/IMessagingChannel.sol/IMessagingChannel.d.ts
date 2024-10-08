// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface IMessagingChannel$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "IMessagingChannel",
  "sourceName": "@layerzerolabs/lz-evm-protocol-v2/contracts/interfaces/IMessagingChannel.sol",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "srcEid",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "sender",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "nonce",
          "type": "uint64"
        }
      ],
      "name": "InboundNonceSkipped",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "srcEid",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "sender",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "nonce",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "payloadHash",
          "type": "bytes32"
        }
      ],
      "name": "PacketBurnt",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "srcEid",
          "type": "uint32"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "sender",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "nonce",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "payloadHash",
          "type": "bytes32"
        }
      ],
      "name": "PacketNilified",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_oapp",
          "type": "address"
        },
        {
          "internalType": "uint32",
          "name": "_srcEid",
          "type": "uint32"
        },
        {
          "internalType": "bytes32",
          "name": "_sender",
          "type": "bytes32"
        },
        {
          "internalType": "uint64",
          "name": "_nonce",
          "type": "uint64"
        },
        {
          "internalType": "bytes32",
          "name": "_payloadHash",
          "type": "bytes32"
        }
      ],
      "name": "burn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "eid",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_receiver",
          "type": "address"
        },
        {
          "internalType": "uint32",
          "name": "_srcEid",
          "type": "uint32"
        },
        {
          "internalType": "bytes32",
          "name": "_sender",
          "type": "bytes32"
        }
      ],
      "name": "inboundNonce",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "",
          "type": "uint64"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_receiver",
          "type": "address"
        },
        {
          "internalType": "uint32",
          "name": "_srcEid",
          "type": "uint32"
        },
        {
          "internalType": "bytes32",
          "name": "_sender",
          "type": "bytes32"
        },
        {
          "internalType": "uint64",
          "name": "_nonce",
          "type": "uint64"
        }
      ],
      "name": "inboundPayloadHash",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
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
          "name": "_receiver",
          "type": "address"
        },
        {
          "internalType": "uint32",
          "name": "_srcEid",
          "type": "uint32"
        },
        {
          "internalType": "bytes32",
          "name": "_sender",
          "type": "bytes32"
        }
      ],
      "name": "lazyInboundNonce",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "",
          "type": "uint64"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_sender",
          "type": "address"
        },
        {
          "internalType": "uint32",
          "name": "_dstEid",
          "type": "uint32"
        },
        {
          "internalType": "bytes32",
          "name": "_receiver",
          "type": "bytes32"
        }
      ],
      "name": "nextGuid",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
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
          "name": "_oapp",
          "type": "address"
        },
        {
          "internalType": "uint32",
          "name": "_srcEid",
          "type": "uint32"
        },
        {
          "internalType": "bytes32",
          "name": "_sender",
          "type": "bytes32"
        },
        {
          "internalType": "uint64",
          "name": "_nonce",
          "type": "uint64"
        },
        {
          "internalType": "bytes32",
          "name": "_payloadHash",
          "type": "bytes32"
        }
      ],
      "name": "nilify",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_sender",
          "type": "address"
        },
        {
          "internalType": "uint32",
          "name": "_dstEid",
          "type": "uint32"
        },
        {
          "internalType": "bytes32",
          "name": "_receiver",
          "type": "bytes32"
        }
      ],
      "name": "outboundNonce",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "",
          "type": "uint64"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_oapp",
          "type": "address"
        },
        {
          "internalType": "uint32",
          "name": "_srcEid",
          "type": "uint32"
        },
        {
          "internalType": "bytes32",
          "name": "_sender",
          "type": "bytes32"
        },
        {
          "internalType": "uint64",
          "name": "_nonce",
          "type": "uint64"
        }
      ],
      "name": "skip",
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
    contractName: "IMessagingChannel",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<IMessagingChannel$Type["abi"]>>;
  export function deployContract(
    contractName: "@layerzerolabs/lz-evm-protocol-v2/contracts/interfaces/IMessagingChannel.sol:IMessagingChannel",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<IMessagingChannel$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "IMessagingChannel",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<IMessagingChannel$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "@layerzerolabs/lz-evm-protocol-v2/contracts/interfaces/IMessagingChannel.sol:IMessagingChannel",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<IMessagingChannel$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "IMessagingChannel",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<IMessagingChannel$Type["abi"]>>;
  export function getContractAt(
    contractName: "@layerzerolabs/lz-evm-protocol-v2/contracts/interfaces/IMessagingChannel.sol:IMessagingChannel",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<IMessagingChannel$Type["abi"]>>;
}
