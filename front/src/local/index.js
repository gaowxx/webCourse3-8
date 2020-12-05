import { Validator } from 'vee-validate'

const dictionary = {
  'zh-CN': {
    messages: {
      required: field => '请输入' + field,
      email: () => '请输入正确的邮箱格式',
      min: () => '不符合最小长度规则',
      length: () => '验证码为4位',
    },
    // attributes就是field的内容，这样展示的就是我们自定义的语言
    attributes: {
      email: '邮箱',
      password: '密码',
      name: '账号名称',
      code: '验证码'
    }
  }
}

// 最后把diction加进来
Validator.localize(dictionary)
