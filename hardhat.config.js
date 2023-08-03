// https://eth-sepolia.g.alchemy.com/v2/L7FIZqFBmKvObV_xuEt2Vb7-T1e2WArD
require("@nomiclabs/hardhat-waffle")
module.exports = {
  defaultNetwork: "sepolia",
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/L7FIZqFBmKvObV_xuEt2Vb7-T1e2WArD",
      accounts: [
        "a23fd1f29977d5d1db8b7d3b99d638eecc441c45982712a636a25ba1e6a89f46",
      ],
    },
  },
};

