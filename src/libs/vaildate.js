import {extend, localize} from 'vee-validate'
import {required, email} from 'vee-validate/dist/rules' // 验证规则导入

extend('required', required)
extend('email', email)

localize('zh_CN', {
  name: 'zh_CN',
  names: {
    nationalID: '身份证号',
  },
  messages: {
    required: (field) => `${field}不能为空`,
  }
})

extend('mobile', {
  message: () => `请输入正确的手机号码`,
  validate: value => value.length === 11 && /^(((13[0-9]{1})|(14[57]{1})|(15[012356789]{1})|(17[03678]{1})|(18[0-9]{1})|(19[89]{1})|(16[6]{1}))+\d{8})$/.test(value)
})