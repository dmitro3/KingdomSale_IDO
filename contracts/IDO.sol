    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.0;
    import "./IDOPool.sol";
    import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
    
    contract IDO {
        function createIDO(
            uint256 _tokenPrice,
            ERC20 _rewardToken,
            uint256 _finishTimestamp,
            uint256 _minEthPayment,
            uint256 _maxEthPayment,
            uint256 _maxDistributedTokenAmount
        ) external {
            
            IDOPool idoPool =
                new IDOPool(
                    _tokenPrice,
                    _rewardToken,
                    block.timestamp,
                    _finishTimestamp,
                    block.timestamp,
                    _minEthPayment,
                    _maxEthPayment,
                    _maxDistributedTokenAmount,
                    msg.sender
                );

        }


    }
