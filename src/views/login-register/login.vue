<template>
  <div class="login-container dark-img-bg">
    <div class="login-box">
      <div class="logo-box">
        <img :src="imgUrl" alt="logo" />
      </div>
      <div class="email">
        <el-input v-model="input3" placeholder="请输入您的邮箱" class="input-with-select" size="large">
          <template #prepend>
            <el-button :icon="Message" />
          </template>
        </el-input>
      </div>
      <div class="password" v-if="$route.query.register != 1">
        <el-input v-model="input3" placeholder="请输入您的密码" class="input-with-select" size="large">
          <template #prepend>
            <el-button :icon="Lock" />
          </template>
        </el-input>
      </div>
      <div class="code" v-if="$route.query.register == 1">
        <el-input v-model="input3" placeholder="请输入您的验证码" class="input-with-select" size="large">
          <template #append>
            <span class="code-text">发送验证码</span>
          </template>
        </el-input>
      </div>
      <div class="login-btn">
        <el-button type="primary" size="large">
          <el-space spacer="/">
            <span v-if="$route.query.register == 1">注册</span>
            <span v-else>登录</span>
          </el-space>
        </el-button>
      </div>
      <div class="forget-pwd" v-if="$route.query.register != 1">
        <el-link type="primary">忘记密码?</el-link>
        <span class="go-register">
          还没注册?点击
          <el-link type="primary">去注册</el-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Message, Lock } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'
import imgUrl from '@/assets/images/logo_new1.png'
import { loginIn } from '@/api/user'

const route = useRoute()
console.log(route.query)

const login = async () => {
  const res = await loginIn({ repassword: 11111, password: 1111 })
  console.log(res)
}
login()
</script>
<style lang="scss" scoped>
@import '@/assets/styles/varible.scss';
.login-container {
  position: relative;
  .login-box {
    width: 350px;
    height: 450px;
    background-color: var(--bg-color);
    margin: 100px auto 0;
    border-radius: 10px;
    box-shadow: var(--el-box-shadow-dark);
    padding: 30px;
    .logo-box {
      width: 180px;
      height: 50px;
      margin: 20px 0 40px;
      img {
        width: 100%;
      }
    }
    .email {
      margin-bottom: 30px;
    }
    .password {
      margin-bottom: 30px;
    }
    .code {
      margin-bottom: 50px;
      .code-text {
        cursor: pointer;
      }
    }
    .login-btn {
      display: flex;
      justify-content: center;
      .el-button {
        width: 390px;
      }
    }
    .forget-pwd {
      margin-top: 15px;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      .go-register {
        display: inline-block;
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
