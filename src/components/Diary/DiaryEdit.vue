<template>
  <div class="container">
    <div class="date">2018.12.21</div>
    <textarea class="content">1234</textarea>
    <button>提交</button>
  </div>
</template>
<script></script>
<style scoped lang="less">
  .container{
    position: relative;
    width: 500px;
    height: 400px;
    box-shadow: 5px 5px 11px 1px rgba(0,0,0,0.5);
    .date{
      position: absolute;
      top: 20px;
      left: 20px;
      max-width: 100px;
    }
    textarea{
      position: absolute;
      top: 50px;
      left: 20px;
      width: 410px;
      height: 200px;
      border: 1px solid #979797;
      padding: 20px;
      text-align: left;
      outline: none;
      resize: none;
    }
    button{
      position: absolute;
      bottom: 40px;
      right: 30px;
      border: none;
      border-radius: 5px;
      background: #409EFF;
      color: #fff;
      padding: 15px 20px;
      font-size: 16px;
      cursor: pointer;
    }
  }
</style>
