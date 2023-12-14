// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lock {
  uint public unlockTime;
  address payable public owner;

  event Withdrawal(uint amount, uint when);
  event LogBalance(string message, uint balance);
  event Transfer(address indexed from, address indexed to, uint amount);

  constructor(uint _unlockTime) payable {
    require(block.timestamp < _unlockTime, 'Unlock time should be in the future');

    unlockTime = _unlockTime;
    owner = payable(msg.sender);
  }

  modifier onlyOwner() {
    require(msg.sender == owner, "You aren't the owner");
    _;
  }

  function withdraw() public {
    // Uncomment this line, and the import of "hardhat/console.sol", to print a log in your terminal
    // console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);

    require(block.timestamp >= unlockTime, "You can't withdraw yet");
    require(msg.sender == owner, "You aren't the owner");

    emit Withdrawal(address(this).balance, block.timestamp);

    owner.transfer(address(this).balance);
  }

  receive() external payable {}

  // a transfer function to an address with amount as double
  function transfer(address payable _to, uint _amount) public onlyOwner {
    require(_to != address(0), 'Invalid recipient address');
    require(_amount > 0, 'Amount must be greater than 0');
    require(address(this).balance >= _amount, 'Not enough funds');

    _to.transfer(_amount);

    emit Transfer(address(this), _to, _amount);
  }
}
