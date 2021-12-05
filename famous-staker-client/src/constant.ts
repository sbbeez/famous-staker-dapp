export const CONTRACT_ADDRESS = "0x2100D3b9Bc0cEAA64F8df09fD5b6c2485a6CC6df";

export const CONTRACT_ABI: any[] = [
  {
    inputs: [],
    name: "currentStake",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "currentStaker",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "makeMeFamous",
    outputs: [],
    stateMutability: "payable",
    type: "function",
    payable: true,
  },
  {
    inputs: [],
    name: "withdrawFamousStaker",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
