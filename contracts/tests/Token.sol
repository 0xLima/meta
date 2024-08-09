// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    constructor(
        string memory _name,
        string memory _symbol
    ) ERC20(_name, _symbol) {
        _mint(msg.sender, 10_000_000_000 ether);
        _mint(0xB793ca70196207BdB5672Ceaa16C289372754271, 10_000_000_000 ether);
    }
}
