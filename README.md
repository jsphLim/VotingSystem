## 开发环境
Ubuntu16.10
## 准备工作
1.安装node.js<br>
sudo apt install nodejs<br>
sudo apt install npm<br>
如果出现依赖错误 自行百度可以解决<br>
安装完成后 node -v 即可查看版本
2.安装以太<br>
npm install -g ethereumjs-testrpc --save<br>
npm install web3@0.20.1 --save<br>
#### 此处使用0.2x版本 因为1.0版本目前还处于测试阶段 本人调试过程中出现了一些错误
npm install solc --save

3.启动以太坊
testrpc



