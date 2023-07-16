# Deploying Smart Contract to a Frontend

This program demonstarte how we can integrate our smart contract to a frontend step by step.

## Description
In this project, we have make a smart contract using solidity that deposit and withdraw ETH. Also, we have make a frontend using Next.JS and then integrated them together.The frontend will help us to connect to the Metamask account. This project work just like a bank so i have given the name as Piggy Bank where we can deposit and withdram ethereum upto 5 ETH and maximum ethereum that can be kept in this piggy bank is 10. Now, check the below given steps to run this program.

## Steps to run this Project
Firstly, clone this github project, then follow the below steps to run this on your VS CODE.
 ### 1. Inside the project directory, in the terminal type: *npm i*
 This is help you to get the project dependencies.
 
 ### 2. Open two additional terminals in your VS code
 
 ### 3. In the second terminal type: *npx hardhat node*
  This allows you to create a local blockchain with demo accounts, where we can deploy our smart contract, and interact with it.
 
 ### 4. In the third terminal, type: *npx hardhat run --network localhost scripts/deploy.js*
  Using this command, we can deploy our smart contract. The deploy script compiles the smart contract and passes the initial value to the constructor, and deploys 
  the contract to the blockchain
  
  ### 5. Back in the first terminal, type:  *npm run dev*
  This will help you to launch frontend of the project.

  After this, the project will be running on your localhost. Typically at http://localhost:3000/



## Author

Atish Shah

