export const CONTRACT_ADDRESS = "0xe115cEdF8BB6f1beA7dFF600a6fC0b0D977A78aB";

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
