// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface IONFT721$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "IONFT721",
  "sourceName": "contracts/onft721/interfaces/IONFT721.sol",
  "abi": [
    {
      "inputs": [],
      "name": "InvalidReceiver",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "caller",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "OnlyNFTOwner",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "guid",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "srcEid",
          "type": "uint32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "toAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ONFTReceived",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "guid",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "uint32",
          "name": "dstEid",
          "type": "uint32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "fromAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ONFTSent",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "approvalRequired",
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
      "inputs": [],
      "name": "onftVersion",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        },
        {
          "internalType": "uint64",
          "name": "version",
          "type": "uint64"
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
              "internalType": "uint32",
              "name": "dstEid",
              "type": "uint32"
            },
            {
              "internalType": "bytes32",
              "name": "to",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "extraOptions",
              "type": "bytes"
            },
            {
              "internalType": "bytes",
              "name": "composeMsg",
              "type": "bytes"
            },
            {
              "internalType": "bytes",
              "name": "onftCmd",
              "type": "bytes"
            }
          ],
          "internalType": "struct SendParam",
          "name": "_sendParam",
          "type": "tuple"
        },
        {
          "internalType": "bool",
          "name": "_payInLzToken",
          "type": "bool"
        }
      ],
      "name": "quoteSend",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "nativeFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lzTokenFee",
              "type": "uint256"
            }
          ],
          "internalType": "struct MessagingFee",
          "name": "",
          "type": "tuple"
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
              "internalType": "uint32",
              "name": "dstEid",
              "type": "uint32"
            },
            {
              "internalType": "bytes32",
              "name": "to",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "extraOptions",
              "type": "bytes"
            },
            {
              "internalType": "bytes",
              "name": "composeMsg",
              "type": "bytes"
            },
            {
              "internalType": "bytes",
              "name": "onftCmd",
              "type": "bytes"
            }
          ],
          "internalType": "struct SendParam",
          "name": "_sendParam",
          "type": "tuple"
        },
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "nativeFee",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lzTokenFee",
              "type": "uint256"
            }
          ],
          "internalType": "struct MessagingFee",
          "name": "_fee",
          "type": "tuple"
        },
        {
          "internalType": "address",
          "name": "_refundAddress",
          "type": "address"
        }
      ],
      "name": "send",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "guid",
              "type": "bytes32"
            },
            {
              "internalType": "uint64",
              "name": "nonce",
              "type": "uint64"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "nativeFee",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "lzTokenFee",
                  "type": "uint256"
                }
              ],
              "internalType": "struct MessagingFee",
              "name": "fee",
              "type": "tuple"
            }
          ],
          "internalType": "struct MessagingReceipt",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "token",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
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
    contractName: "IONFT721",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<IONFT721$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/onft721/interfaces/IONFT721.sol:IONFT721",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<IONFT721$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "IONFT721",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<IONFT721$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/onft721/interfaces/IONFT721.sol:IONFT721",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<IONFT721$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "IONFT721",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<IONFT721$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/onft721/interfaces/IONFT721.sol:IONFT721",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<IONFT721$Type["abi"]>>;
}
