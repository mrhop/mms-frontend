/**
 * Created by Donghui Huo on 2018/2/11.
 */
const ipValidate = (rule, value, callback) => {
  const reg = /^(([01]?[\d]{1,2})|(2[0-4][\d])|(25[0-5]))(\.(([01]?[\d]{1,2})|(2[0-4][\d])|(25[0-5]))){3}$/
  if (value && !reg.test(value)) {
    callback('请输入正确的ip地址');
  } else {
    callback();
  }
}

const portValidate = (rule, value, callback) => {
  const reg = /^[0-9]*[1-9][0-9]*$/
  if (value && !reg.test(value) || value > 65535) {
    callback('请输入正确的端口号');
  } else {
    callback();
  }
}
const accountValidate = (rule, value, callback) => {
  // 统一正则
  const reg = /^(?![a-zA-Z]+$)(?!\\d+$)[a-z][a-zA-Z0-9_]{3,9}$/
  //分步正则
  const reg1 = /^[a-z].*$/
  const reg2 = /^(?![a-zA-Z]+$)(?!_+$).+$/
  const reg3 = /^[a-zA-Z0-9_]{4,10}$/
  if (value && !reg1.test(value)) {
    callback('首字符为小写英文字母');
  } else if (value && !reg2.test(value)) {
    callback('至少包含一个数字');
  } else if (value && !reg3.test(value)) {
    callback('只能为英文,数字以及_, 4-10个字符之间');
  } else {
    callback();
  }
}

const positiveIntValidate = (rule, value, callback) => {
  // 统一正则
  const reg = /^[1-9][0-9]*?$/
  if (value && !reg.test(value)) {
    callback('请填写正整数');
  } else {
    callback();
  }
}


export {ipValidate, portValidate, accountValidate, positiveIntValidate}
