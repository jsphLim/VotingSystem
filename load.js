const fs = require('fs')
Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
web3.eth.accounts
sol = fs.readFileSync('Voting.sol').toString()
solc = require('solc')
compileRes = solc.compile(sol)
abi = JSON.parse(compileRes.contracts[':Voting'].interface)
Contract = web3.eth.contract(abi)
byteCode = compileRes.contracts[':Voting'].bytecode

deploy = Contract.new(['zhang', 'bin', 'cheng'], {data: byteCode, from: web3.eth.accounts[0], gas: 4000000})

deploy.address
