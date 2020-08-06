
const verify = (type, text) => {
  let str = '',
      name = ''
  switch(type) {
    case 'mobile': //手机号码
      name = /^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/
      str = name.test(text)
      break
    case 'email': // 邮箱
      name = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
      str = name.test(text)
      break
    case 'identity': // 身份证
      name = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
      str = name.test(text)
      break
    case 'password': //  密码：字母+数字，字母+特殊字符，数字+特殊字符
      name = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]{3,6}$/
      str = name.test(text)
      break
    case 'required':
      if(text==undefined) return str = true
      let rep = text.replace(/(^\s*)|(\s*$)/g, "")
      if (rep==null||rep.length==0) return str = true
      str = false
      break
  }
  return str
}

export default verify
