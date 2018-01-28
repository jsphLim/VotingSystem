## 开发环境
Ubuntu16.10
## 准备工作
1.安装node.js<br>
·sudo apt install nodejs·<br>
sudo apt install npm<br>
如果出现依赖错误 自行百度可以解决<br>
安装完成后 node -v 即可查看版本
2.安装以太<br>
npm install -g ethereumjs-testrpc --save<br>
npm install web3@0.20.1 --save<br>
#### 此处使用0.2x版本 因为1.0版本目前还处于测试阶段 本人调试过程中出现了一些错误
npm install solc --save

3.启动以太坊<br>
testrpc

4.部署智能合约
const fs = require('fs')<br>
Web3 = require('web3')<br>
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))<br>
web3.eth.accounts<br>
sol = fs.readFileSync('Voting.sol').toString()<br>
solc = require('solc')<br>
compileRes = solc.compile(sol)<br>
abi = JSON.parse(compileRes.contracts[':Voting'].interface)<br>
Contract = web3.eth.contract(abi)<br>
byteCode = compileRes.contracts[':Voting'].bytecode<br>
deploy = Contract.new(['zhang', 'bin', 'cheng'], {data: byteCode, from: web3.eth.accounts[0], gas: 4000000})<br>
deploy.address<br>



