// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface IERC20Errors$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "IERC20Errors",
  "sourceName": "@openzeppelin/contracts/interfaces/draft-IERC6093.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "allowance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "needed",
          "type": "uint256"
        }
      ],
      "name": "ERC20InsufficientAllowance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "needed",
          "type": "uint256"
        }
      ],
      "name": "ERC20InsufficientBalance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "approver",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidApprover",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidReceiver",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidSender",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidSpender",
      "type": "error"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "IERC20Errors",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<IERC20Errors$Type["abi"]>>;
  export function deployContract(
    contractName: "@openzeppelin/contracts/interfaces/draft-IERC6093.sol:IERC20Errors",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<IERC20Errors$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "IERC20Errors",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<IERC20Errors$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "@openzeppelin/contracts/interfaces/draft-IERC6093.sol:IERC20Errors",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<IERC20Errors$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "IERC20Errors",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<IERC20Errors$Type["abi"]>>;
  export function getContractAt(
    contractName: "@openzeppelin/contracts/interfaces/draft-IERC6093.sol:IERC20Errors",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<IERC20Errors$Type["abi"]>>;
}
