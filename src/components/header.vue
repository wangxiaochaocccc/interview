<template>
  <el-header class="header-container">
    <div class="container">
      <div class="left">
        <a href="/" class="logo-box">
          <div class="logo dark-img-bg" :style="'background:url(' + imgUrl + ')'"></div>
        </a>
        <ul class="label-type">
          <li class="active-type">题库</li>
          <li>讨论</li>
          <li>课程</li>
          <li>报错</li>
        </ul>
      </div>
      <div class="right">
        <div class="theme-box mr-2">
          <m-theme></m-theme>
        </div>
        <el-space spacer="或">
          <a href="/login">登录</a>
          <a href="/login?register=1">注册</a>
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
  min-width: 1200px;
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
    .left {
      display: flex;
      align-items: center;
      .label-type {
        height: 100%;
        display: flex;
        font-size: 16px;
        margin-left: 20px;
        li {
          position: relative;
          list-style: none;
          padding: 0 10px;
          margin-right: 15px;
          cursor: pointer;
          color: #999;
          line-height: 50px;
          font-weight: 700;
          &.active-type {
            position: relative;
            color: #409eff;
            &::after {
              display: inline-block;
              content: '';
              width: 20px;
              height: 2px;
              background-color: #409eff;
              position: absolute;
              bottom: 0;
              left: 50%;
              margin-left: -10px;
            }
          }
          &:hover {
            color: #409eff;
          }
          &:hover::after {
            display: inline-block;
            content: '';
            width: 20px;
            height: 2px;
            background-color: #409eff;
            position: absolute;
            bottom: 0;
            left: 50%;
            margin-left: -10px;
          }
        }
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
