<template>
  <el-header class="header-container">
    <div class="container">
      <div class="left">
        <a href="/" class="logo-box">
          <div class="logo dark-img-bg" :style="'background:url(' + imgUrl + ')'"></div>
        </a>
      </div>
      <div class="right">
        <div class="theme-box mr-2">
          <m-theme></m-theme>
        </div>
        <el-space spacer="或">
          <a>登录</a>
          <a>注册</a>
        </el-space>
      </div>
    </div>
  </el-header>
</template>

<script setup>
import {} from 'vue'
import imgUrl from '@/assets/images/logo_new1.png'
</script>
<style lang="scss" scoped>
.header-container {
  width: 100%;
  height: 50px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  // background-color: #fff;
  z-index: 999;
  .container {
    width: 1152px;
    height: 50px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo-box {
      .logo {
        width: 150px;
        height: 40px;
        background-size: cover !important;
        border-radius: 8px;
      }
    }
    .right {
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 14px;
    }
  }
}
.mr-2 {
  margin-right: 16px;
}
</style>
