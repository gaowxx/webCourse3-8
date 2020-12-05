<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action="">
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-inline">
            <input
              type="text"
              name="name"
              v-model="name"
              v-validate="'required|email'"
              required
              lay-verify="required"
              placeholder="请输入用户名"
              autocomplete="off"
              class="layui-input"
            >
          </div>
          <div class="error layui-form-mid">{{errors.first('name')}}</div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-inline">
            <input
              type="password"
              name="password"
              v-validate="'required|min:6'"
              v-model="password"
              required
              lay-verify="required"
              placeholder="请输入密码"
              autocomplete="off"
              class="layui-input"
            >
          </div>
          <div class="error layui-form-mid">{{errors.first('password')}}</div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-inline">
            <input
              type="text"
              name="code"
              v-validate="'required|length:4'"
              v-model="code"
              required
              lay-verify="required"
              placeholder="请输入验证码"
              autocomplete="off"
              class="layui-input"
            >
          </div>
          <div class="error layui-form-mid">{{errors.first('code')}}</div>
          <div class="layui-form-mid svg" @click="getCaptcha()" v-html="svg"></div>
        </div>
        <button
          type="button"
          class="layui-btn"
          @click="checkForm"
        >立即登录</button>
        <a class="imooc-link" href="http://www.layui.com">忘记密码</a>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      svg: '',
      name: '',
      password: '',
      code: '',
      errorMsg: []
    }
  },
  mounted () {
    // 当页面mounted的时候就执行getCaptcha
    this.getCaptcha()
  },
  methods: {
    getCaptcha () {
      // then参数后面接回调回来的数据
      axios.get('http://localhost:3000/getCaptcha').then((res) => {
        if (res.status === 200) {
          const obj = res.data
          if (obj.code === 200) {
            this.svg = obj.data
          }
        }
        console.log(res)
      })
    },
    // 做下为空的判断
    checkForm () {
      // 当用户点击登录的时候，去校验一下errorMsg的长度是否为0，
      // 如果为0的话，就使用axios往后台去发送一个登录请求，让用户进行登录。
      this.errorMsg = []
      // regEx email 也可以在这里输入正则表达式校验email格式
      if (!this.name) {
        this.errorMsg.push('登录名不得为空！')
      }
      if (!this.password) {
        this.errorMsg.push('密码不得为空！')
      }
      if (!this.code) {
        this.errorMsg.push('验证码不得为空！')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  #app {
    background-color: #f2f2f2;
  }
  .layui-container {
    background-color: #fff;
  }
  input {
    width: 190px;
  }
  .imooc-link {
    margin-left: 10px;
    &:hover {
      color: #009688;
    }
  }
  .svg {
    position: relative;
    top: -15px;
  }
  .error {
    color: red;
  }
</style>
