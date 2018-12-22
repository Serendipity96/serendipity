<template>
  <div class="container">
    <button>写日记</button>
    <ul>
      <li>
        <div class="date">2018.12.21</div>
        <span class="icon"></span>
        <div class="option">
          <ul>
          </ul>
        </div>
        <div class="content">1234</div>
      </li>
      <li>
        <div class="date">2018.12.22</div>
        <span class="icon"></span>
        <div class="option">
        </div>
        <div class="content">1234</div>
      </li>
    </ul>

  </div>
</template>
<script></script>
<style scoped lang="less">
  .container{

    width: 500px;
    min-height: 1000px;
    box-shadow: 5px 5px 11px 1px rgba(0,0,0,0.5);
    ul {
      margin: 0;
      padding: 0;
      li{
        list-style: none;
        position: relative;
        /*border: 1px solid red;*/
        width: 500px;
        height: 500px;
        .date{
          position: absolute;
          top: 20px;
          left: 20px;
          max-width: 100px;
        }
        .icon{
          position: absolute;
          top: 20px;
          right: 20px;
          width: 24px;
          height: 24px;
          background: url("../../assets/down.png");
          background-size: cover;
          cursor: pointer;
        }
        .option{
          position: absolute;
          top: 50px;
          right: 20px;
          cursor: pointer;
          ul{
            margin: 0;
            padding: 0;
            border: 1px solid #979797;
            li{
              list-style: none;
              padding: 5px 10px;
            }
          }

        }
        .content{
          position: absolute;
          top: 50px;
          left: 20px;
          width: 350px;
          height: 200px;
          border: 1px solid #979797;
          padding: 20px;
          text-align: left;
        }
      }

    }

  }
</style>
