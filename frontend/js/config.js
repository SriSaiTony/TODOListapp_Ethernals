let contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_task",
				"type": "string"
			}
		],
		"name": "addTask",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_taskIndex",
				"type": "uint256"
			}
		],
		"name": "deleteTask",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_taskIndex",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_status",
				"type": "bool"
			}
		],
		"name": "updateTaskStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_taskIndex",
				"type": "uint256"
			}
		],
		"name": "getTask",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "task_name",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "is_done",
						"type": "bool"
					}
				],
				"internalType": "struct Todolist.Task",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTaskCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let contractAddress = "0xa1Ef7FC5819bA0d66225954370c0a444D5B95650"; // Depends on the address generated on contract creation
