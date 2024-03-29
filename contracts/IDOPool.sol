// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract IDOPool is Ownable, ReentrancyGuard {
    using SafeMath for uint256;

    uint256 public tokenPrice;
    ERC20 public rewardToken;
    uint256 public decimals;
    uint256 public startTimestamp;
    uint256 public finishTimestamp;
    uint256 public startClaimTimestamp;
    uint256 public minEthPayment;
    uint256 public maxEthPayment;
    uint256 public maxDistributedTokenAmount;
    uint256 public tokensForDistribution;
    uint256 public distributedTokens;

    struct UserInfo {
        uint debt;
        uint total;
        uint totalInvestedETH;
    }

    mapping(address => UserInfo) public userInfo;

    event TokensDebt(
        address indexed holder,
        uint256 ethAmount,
        uint256 tokenAmount
    );
    
    event TokensWithdrawn(address indexed holder, uint256 amount);

    constructor(
        uint256 _tokenPrice,
        ERC20 _rewardToken,
        uint256 _startTimestamp,
        uint256 _finishTimestamp,
        uint256 _startClaimTimestamp,
        uint256 _minEthPayment,
        uint256 _maxEthPayment,
        uint256 _maxDistributedTokenAmount,
        address manager
    )  {
        tokenPrice = _tokenPrice;
        rewardToken = _rewardToken;
        decimals = rewardToken.decimals();
        transferOwnership(manager);
        require(
            _startTimestamp < _finishTimestamp,
            "Start timestamp must be less than finish timestamp"
        );
        require(
            _finishTimestamp > block.timestamp,
            "Finish timestamp must be more than current block"
        );
        startTimestamp = _startTimestamp;
        finishTimestamp = _finishTimestamp;
        startClaimTimestamp = _startClaimTimestamp;
        minEthPayment = _minEthPayment;
        maxEthPayment = _maxEthPayment;
        maxDistributedTokenAmount = _maxDistributedTokenAmount;
    }

    function pay() payable external {
        require(msg.value >= minEthPayment, "Less then min amount");
        require(msg.value <= maxEthPayment, "More then max amount");
        require(block.timestamp >= startTimestamp, "Not started");
        require(block.timestamp < finishTimestamp, "Ended");
        
        uint256 tokenAmount = getTokenAmount(msg.value);
        require(tokensForDistribution.add(tokenAmount) <= maxDistributedTokenAmount, "Overfilled");

        UserInfo storage user = userInfo[msg.sender];
        require(user.totalInvestedETH.add(msg.value) <= maxEthPayment, "More then max amount");

        tokensForDistribution = tokensForDistribution.add(tokenAmount);
        user.totalInvestedETH = user.totalInvestedETH.add(msg.value);
        user.total = user.total.add(tokenAmount);
        user.debt = user.debt.add(tokenAmount);
        
        emit TokensDebt(msg.sender, msg.value, tokenAmount);
    }

    function getTokenAmount(uint256 ethAmount)
        internal
        view
        returns (uint256)
    {
        return ethAmount.mul(10**decimals).div(tokenPrice);
    }


    /// @dev Allows to claim tokens for the specific user.
    /// @param _user Token receiver.
    function claimFor(address _user) external {
        proccessClaim(_user);
    }

    /// @dev Allows to claim tokens for themselves.
    function claim() external {
        proccessClaim(msg.sender);
    }

    /// @dev Proccess the claim.
    /// @param _receiver Token receiver.
    function proccessClaim(
        address _receiver
    ) internal nonReentrant{
        require(block.timestamp > startClaimTimestamp, "Distribution not started");
        UserInfo storage user = userInfo[_receiver];
        uint256 _amount = user.debt;
        if (_amount > 0) {
            user.debt = 0;            
            distributedTokens = distributedTokens.add(_amount);
            rewardToken.transfer(_receiver, _amount);
            emit TokensWithdrawn(_receiver,_amount);
        }
    }

    //function safeTransferETH(address to, uint value) internal {
    //    (bool success,) = to.call{value:value}(new bytes(0));
    //    require(success, 'TransferHelper: ETH_TRANSFER_FAILED');
    //}

     function withdrawNotSoldTokens() external onlyOwner {
        require(block.timestamp > finishTimestamp, "Withdraw allowed after stop accept ETH");
        uint256 balance = rewardToken.balanceOf(address(this));
        rewardToken.transfer(msg.sender, balance.add(distributedTokens).sub(tokensForDistribution));
    }
}

