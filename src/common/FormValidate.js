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

export {ipValidate, portValidate}
