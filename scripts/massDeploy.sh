#!/bin/bash

# Deploy the Mock-tokens

# WBTC
npx hardhat deploy:custom --contract Token --params '["Wrapped Bitcoin", "WBTC"]' --network bnb_testnet

# WETH
npx hardhat deploy:custom --contract Token --params '["Wrapped Ethereum", "WETH"]' --network bnb_testnet
npx hardhat deploy:custom --contract Token --params '["Wrapped Ethereum", "WETH"]' --network sepolia

# USDC
npx hardhat deploy:custom --contract Token --params '["USD Coin", "USDC"]' --network bnb_testnet
npx hardhat deploy:custom --contract Token --params '["USD Coin", "USDC"]' --network sepolia

# TUSD
npx hardhat deploy:custom --contract Token --params '["True USD", "TUSD"]' --network bnb_testnet
npx hardhat deploy:custom --contract Token --params '["True USD", "TUSD"]' --network sepolia

# BUSD
npx hardhat deploy:custom --contract Token --params '["Binance USD", "BUSD"]' --network bnb_testnet
npx hardhat deploy:custom --contract Token --params '["Binance USD", "BUSD"]' --network sepolia

# STONE
npx hardhat deploy:custom --contract Token --params '["StakeStone ETH", "STONE"]' --network bnb_testnet
npx hardhat deploy:custom --contract Token --params '["StakeStone ETH", "STONE"]' --network sepolia


# Deploy the Pyth oracles

#npx hardhat deploy:custom --contract PythOracle --params '["0x6EDCE65403992e310A62460808c4b910D972f10f", "0xB793ca70196207BdB5672Ceaa16C289372754271", ["40102", "40202", "40161"], "0x5744Cbf430D99456a0A8771208b674F27f8EF0Fb", ["0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43", "0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace", "0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a", "0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a", "0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a", "0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace"]]' --network bnb_testnet

#npx hardhat deploy:custom --contract PythOracle --params '["0x6EDCE65403992e310A62460808c4b910D972f10f", "0xB793ca70196207BdB5672Ceaa16C289372754271", ["40102", "40202", "40161"], "0x5744Cbf430D99456a0A8771208b674F27f8EF0Fb", ["0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43", "0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace", "0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a", "0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a", "0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a", "0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace"]]' --network opbnb_testnet

#npx hardhat deploy:custom --contract PythOracle --params '["0x6EDCE65403992e310A62460808c4b910D972f10f", "0xB793ca70196207BdB5672Ceaa16C289372754271", ["40102", "40202", "40161"], "0x5744Cbf430D99456a0A8771208b674F27f8EF0Fb", ["0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43", "0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace", "0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a", "0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a", "0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a", "0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace"]]' --network sepolia

# Deploy the master oracle 

#npx hardhat deploy:custom --contract Oracle --params '["0x6EDCE65403992e310A62460808c4b910D972f10f", "0xB793ca70196207BdB5672Ceaa16C289372754271"]' --network bnb_testnet
#npx hardhat deploy:custom --contract Oracle --params '["0x6EDCE65403992e310A62460808c4b910D972f10f", "0xB793ca70196207BdB5672Ceaa16C289372754271"]' --network opbnb_testnet
#npx hardhat deploy:custom --contract Oracle --params '["0x6EDCE65403992e310A62460808c4b910D972f10f", "0xB793ca70196207BdB5672Ceaa16C289372754271"]' --network sepolia

# deploy the pool factory

#npx hardhat deploy:custom --contract PoolSrcFactory --params '[]' --network bnb_testnet
#npx hardhat deploy:custom --contract PoolDstFactory --params '[]' --network bnb_testnet

#npx hardhat deploy:custom --contract PoolSrcFactory --params '[]' --network opbnb_testnet
#npx hardhat deploy:custom --contract PoolDstFactory --params '[]' --network opbnb_testnet

#npx deploy:custom --contract PoolSrcFactory --params '[]' --network sepolia
#npx deploy:custom --contract PoolDstFactory --params '[]' --network sepolia

#  Pyth -> oracle (A)
#  Pyth -> oracle (B)

#hh peers --contract PythOracle --address "0xac67cf8ea391ad381f7533c451b2da009717bd02" --dsteid 40245 --dstaddress "0x617d0f12771e2c04b95a39dd658d74287f170bcd" --network fuji
# hh peers --contract PythOracle --address "0xac67cf8ea391ad381f7533c451b2da009717bd02" --dsteid 40170 --dstaddress "0xcd9a7e6561a7e08c53244161a5b0669ee4eff58e" --network fuji
# hh peers --contract PythOracle --address "0xac67cf8ea391ad381f7533c451b2da009717bd02" --dsteid 40290 --dstaddress "" --network fuji
# hh peers --contract PythOracle --address "0xac67cf8ea391ad381f7533c451b2da009717bd02" --dsteid 40275 --dstaddress "0x0a0276e831180d44c97481cd6a2e0ebc3704cc6e" --network fuji
# hh peers --contract PythOracle --address "0xac67cf8ea391ad381f7533c451b2da009717bd02" --dsteid 40231 --dstaddress "0xb2f6c64ab2d7c9f39ceaed5648a879cd7d9f87c3" --network fuji


# # oracle (A) -> chronicle, flare, pyth
# hh peers --contract Oracle --address "0x0a0276e831180d44c97481cd6a2e0ebc3704cc6e" --dsteid 40170 --dstaddress "0xecd07d9801e4dd8c87d5f2443cd27b5cf0317f69" --network zircuit_sepolia
# hh peers --contract Oracle --address "0x0a0276e831180d44c97481cd6a2e0ebc3704cc6e" --dsteid 40294 --dstaddress "0x3b2cca1570d630052c4691489acf21db20811505" --network zircuit_sepolia
# hh peers --contract Oracle --address "0x0a0276e831180d44c97481cd6a2e0ebc3704cc6e" --dsteid 40106 --dstaddress "0xac67cf8ea391ad381f7533c451b2da009717bd02" --network zircuit_sepolia

# # oracle (B) -> chronicle, flare, pyth
# hh peers --contract Oracle --address "0xb2f38ed980c2671a01e7c33e3215cbccc40e7bf6" --dsteid 40170 --dstaddress "0xb2f6c64ab2d7c9f39ceaed5648a879cd7d9f87c3" --network arbitrum_sepolia
# hh peers --contract Oracle --address "0xb2f38ed980c2671a01e7c33e3215cbccc40e7bf6" --dsteid 40294 --dstaddress "0xb2f6c64ab2d7c9f39ceaed5648a879cd7d9f87c3" --network arbitrum_sepolia
# hh peers --contract Oracle --address "0xb2f38ed980c2671a01e7c33e3215cbccc40e7bf6" --dsteid 40106 --dstaddress "0xb2f6c64ab2d7c9f39ceaed5648a879cd7d9f87c3" --network arbitrum_sepolia

# hh peers --contract Oracle --address "0x617d0f12771e2c04b95a39dd658d74287f170bcd" --dsteid 40170 --dstaddress "0xb2f6c64ab2d7c9f39ceaed5648a879cd7d9f87c3" --network base_sepolia
# hh peers --contract Oracle --address "0x617d0f12771e2c04b95a39dd658d74287f170bcd" --dsteid 40294 --dstaddress "0xb2f6c64ab2d7c9f39ceaed5648a879cd7d9f87c3" --network base_sepolia
# hh peers --contract Oracle --address "0x617d0f12771e2c04b95a39dd658d74287f170bcd" --dsteid 40106 --dstaddress "0xb2f6c64ab2d7c9f39ceaed5648a879cd7d9f87c3" --network base_sepolia

# hh peers --contract Oracle --address "0xcd9a7e6561a7e08c53244161a5b0669ee4eff58e" --dsteid 40170 --dstaddress "0xb2f6c64ab2d7c9f39ceaed5648a879cd7d9f87c3" --network scroll_sepolia
# hh peers --contract Oracle --address "0xcd9a7e6561a7e08c53244161a5b0669ee4eff58e" --dsteid 40294 --dstaddress "0xb2f6c64ab2d7c9f39ceaed5648a879cd7d9f87c3" --network scroll_sepolia
# hh peers --contract Oracle --address "0xcd9a7e6561a7e08c53244161a5b0669ee4eff58e" --dsteid 40106 --dstaddress "0xb2f6c64ab2d7c9f39ceaed5648a879cd7d9f87c3" --network scroll_sepolia



# Push
# chronicle, flare, pyth
# hh push --contract ChronicleOracle --address "0x15e00f073322da8c03fe2dd15fae7013c0945e53" --params '[]' --network scroll_sepolia
# hh push --contract FlareOracle --address "0x49682be434b2125eaedf0e33dbbe60e89c26fda4" --params '[]' --network coston2
# hh push --contract PythOracle --address "0xecd07d9801e4dd8c87d5f2443cd27b5cf0317f69" --params '[]' --network fuji


# ["58706490654070000000000","3165405034520000000000","1000000000000000000"]