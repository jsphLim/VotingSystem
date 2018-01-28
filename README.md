## 开发环境
Ubuntu16.10
## 准备工作
1.安装node.js<br>
```Bash
sudo apt install nodejs
```
```Bash
sudo apt install npm<br>
```
如果出现依赖错误 自行百度可以解决<br>
安装完成后 node -v 即可查看版本
2.安装以太<br>
```Bash
npm install -g ethereumjs-testrpc --save<br>
npm install web3@0.20.1 --save<br>
```
#### 此处使用0.2x版本 因为1.0版本目前还处于测试阶段 本人调试过程中出现了一些错误
```Bash
npm install solc --save
```
3.启动以太坊<br>
```Bash
testrpc
```
4.部署智能合约
在项目目录文件下启动node的控制台(直接输入node) 输入以下指令进行编译
```Bash
const fs = require('fs')<br> //引入文件读写

Web3 = require('web3')<br>//引入web3

web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))<br>

web3.eth.accounts<br> //查看当前所有账户

sol = fs.readFileSync('Voting.sol').toString() //读入合约
solc = require('solc') //引入solc 由于web3删去了编译合约的函数compileSolidity 所以需要用到solc来编译

compileRes = solc.compile(sol)//编译合约

abi = JSON.parse(compileRes.contracts[':Voting'].interface) //获取abi 保存interface这串字符串 在后续会用
```
![Image text](https://github.com/jsphLim/VotingSystem/blob/master/img/3.png)
```Bash
Contract = web3.eth.contract(abi) //开始部署合约

byteCode = compileRes.contracts[':Voting'].bytecode//获取合约的二进制代码

deploy = Contract.new(['zhang', 'bin', 'cheng'], {data: byteCode, from: web3.eth.accounts[0], gas: 4000000})
//发布合约 四个参数 第一个是合约构造函数的参数 第二个是二进制码 第三个是帐户名 第四个是gas

deploy.address //获取合约地址
```
![Image text](https://github.com/jsphLim/VotingSystem/blob/master/img/1.png)

以上代码在load.js中可以查看

### 

