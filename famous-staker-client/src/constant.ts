export const CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS;

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
