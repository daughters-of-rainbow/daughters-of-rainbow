import Decimal from 'decimal.js'
const computBignumber = (n = 18, v) => {
  let tokenDecimal = Number('1e' + n);
  let ttt = new Decimal(v).div(tokenDecimal).toDP(6);
  return Number(ttt)
};
const mulBigNumber = (n = 18, v) => {
  let tokenDecimal = Number('1e' + n);
  let ttt = new Decimal(v).mul(tokenDecimal).toDP(6);
  return ttt
}
//保留n位小数，不四舍五入
function toFixedDigit(num, n = 6) {//保留n位
  if (typeof num != 'number') {
    return false;
  };

  num = num.toString();
  var result = "";
  var zeroResult = function (n) {
    var zero = "";
    for (var i = 0; i < n; i++) {
      zero += "0";
    }
    return zero;
  }
  if (num % 1 == 0) {//整数
    result = num + "." + zeroResult(n);
  } else {//小数
    var num1 = num.split(".");
    if (num1[1] && num1[1].length < n) {
      result = num1[0] + "." + num1[1] + zeroResult(n - num1[1].length)
    } else {
      result = num1[0] + "." + num1[1].substring(0, n)
    }
  }
  return Number(result);
}
const digitNum = (num, n = 6) => {//保留n位
  num = Number(num)
  if(num==NaN){
    return 0
  }
  num = num.toString();
  var result = "";
  var zeroResult = function (n) {
    var zero = "";
    for (var i = 0; i < n; i++) {
      zero += "0";
    }
    return zero;
  }
  if (num % 1 == 0) {//整数
    result = num + "." + zeroResult(n);
  } else {//小数
    var num1 = num.split(".");
    if (num1[1] && num1[1].length < n) {
      result = num1[0] + "." + num1[1] + zeroResult(n - num1[1].length)
    } else {
      result = num1[0] + "." + num1[1].substring(0, n)
    }
  }
  return Number(result);
}
const buyAdcNumber = (v, n = 18) => {
  let tokenDecimal = Number('1e' + n);
  let ttt = new Decimal(v).mul(tokenDecimal)
  return ttt;
};
let time1 = null
const judgeUserTronLink = () => {
  return new Promise(async (resolve, reject) => {
    window.clearTimeout(time1)
    time1 = null
    console.info(window.tronWeb)

    var obj = setInterval(async () => {
      if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
        clearInterval(obj)
        let local_address = window.tronWeb.defaultAddress.base58
        console.info(local_address)
        resolve(local_address)
      }
    }, 10)
    setTimeout(() => {
      if (!window.tronWeb.defaultAddress.hex) {
        alert('请用波场钱包浏览器打开链接！')
        // Dialog.alert({title: '温馨提示',confirmButtonText:'确认',message:'请用钱包浏览器打开链接！'});
      }
    }, 10000)
  })

}
//判断用户是否安装metamask
const judgeUserOpenMetamask = () => {
  
}
export {
  computBignumber, mulBigNumber, digitNum, judgeUserOpenMetamask, buyAdcNumber, judgeUserTronLink
}