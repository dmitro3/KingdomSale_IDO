// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./IDOPool.sol";

contract IDOMaster is Ownable {
    using SafeMath for uint256;

    address public feeToken;
    uint256 public presaleFee;
    uint256 public tokenFee;

    address public manager;

    //Whitelist - address and max minting amount
    mapping (address => uint256) private _whitelist;


    constructor(
        address _feeToken,
        uint256 _minEth,
        uint256 _maxEth,
        uint256 _maxTokens,
        uint256 _tokenPrice,
        uint256 _startTime,
        uint256 _finishTime

    ) {
        manager = msg.sender;
        feeToken = _feeToken;

        createIDO(
            _tokenPrice,
            ERC20(_feeToken),
            _startTime,
            _finishTime,
            block.timestamp,
            _minEth,
            _maxEth,
            _maxTokens
        );
    }

    function createIDO(
        uint256 _tokenPrice,
        ERC20 _rewardToken,
        uint256 _startTimestamp,
        uint256 _finishTimestamp,
        uint256 _startClaimTimestamp,
        uint256 _minEthPayment,
        uint256 _maxEthPayment,
        uint256 _maxDistributedTokenAmount
    ) internal {
        
        IDOPool idoPool =
            new IDOPool(
                _tokenPrice,
                _rewardToken,
                _startTimestamp,
                _finishTimestamp,
                _startClaimTimestamp,
                _minEthPayment,
                _maxEthPayment,
                _maxDistributedTokenAmount,
                manager
            );

    }


}
