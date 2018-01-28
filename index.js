var Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

abi = JSON.parse('[{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"validCandidate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"candidateList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"candidate","type":"bytes32"}],"name":"voteForCandidate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]')



var Contract =  web3.eth.contract(abi);
Instance = Contract.at('0xfee2c2b37804a4d3d40d203748f19c5745218b6d');

candidates = {"zhang": "one", "bin": "two", "cheng": "three"}

function voteForCandidate(candidate) {
  candidateName = $("#candidate").val();
  try {
      Instance.voteForCandidate(candidateName, {from: web3.eth.accounts[0]}, function() {
      let id = candidates[candidateName];
      $("#" + id).html(Instance.totalVotesFor.call(candidateName).toString());
    });
  } catch (err) {
  }
}

$(document).ready(function() {
  candidateNames = Object.keys(candidates);
  for (var i = 0; i < candidateNames.length; i++) {
    let name = candidateNames[i];
    let val = Instance.totalVotesFor.call(name).toString();
    $("#" + candidates[name]).html(val);
  }
});

