import Decimal from 'decimal.js'
var Web3 = require('web3');
const computBignumber = (n=18,v)=>{
  let tokenDecimal = Number('1e'+n);
  let ttt = new Decimal(v).div(tokenDecimal).toDP(7);
    return Number(ttt)
  };
 const mulBigNumber = (n=18,v)=>{
    let tokenDecimal = Number('1e'+n);
    let ttt = new Decimal(v).mul(tokenDecimal).toDP(6); 
    return ttt
} 
function toFixed(num,decimal) {
	num = num.toString();
	let index = num.indexOf('.');
	if (index !== -1) {
		num = num.substring(0, decimal + index + 1)
	} else {
		num = num.substring(0)
	}
	return parseFloat(num).toFixed(decimal)
} 
  //保留n位小数，不四舍五入
  function toFixedDigit(num,n){//保留n位
    if(typeof num != 'number'){
        return false;
    };
    if(n <= 0){//不保留小数，取整
        return num | 0;
    };
    num = num.toString();
    var result = "";
    var zeroResult = function(n){
        var zero = "";
        for(var i = 0;i<n;i++){
            zero+="0";
        }
        return zero;
    }
    if(num%1 == 0){//整数
        result = num + "."+zeroResult(n);
    }else{//小数
        var num1 = num.split(".");
        if(num1[1].length<n){
           result = num1[0]+"."+num1[1]+zeroResult(n-num1[1].length)
        }else{
           result = num1[0]+"."+num1[1].substring(0,n)
        }
    }
    return result;
} 
 const digitNum = (num,n=6)=>{//保留n位
    if(typeof num != 'number'){
        return false;
    };
    
    num = num.toString();
    var result = "";
    var zeroResult = function(n){
        var zero = "";
        for(var i = 0;i<n;i++){
            zero+="0";
        }
        return zero;
    }
    if(num%1 == 0){//整数
        result = num + "."+zeroResult(n);
    }else if(num.length>0){//小数
      console.info(num)
        var num1 = num.split(".");
        if(num1[1]&&num1[1].length<n){
           result = num1[0]+"."+num1[1]+zeroResult(n-num1[1].length)
        }else{
           result = num1[0]+"."+num1[1].substring(0,n)
        }
    }
    return Number(result);
  }  
   const  buyAdcNumber = (v,n=18)=>{
    let tokenDecimal = Number('1e'+n);
    let ttt = new Decimal(v).mul(tokenDecimal)
    return ttt;
  };
 //判断用户是否安装metamask
 const judgeUserOpenMetamask =()=>{
  var web3;
    return new Promise(async(resolve,reject)=>{
     

        })   
    }
  export {
    computBignumber, mulBigNumber,digitNum,judgeUserOpenMetamask,buyAdcNumber,toFixed,toFixedDigit
  }