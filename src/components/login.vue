<template>
  
         <div class="page-container">
            <h1>Login</h1>
            <form action="" method="post">
                <input type="text" name="username" class="username" @keydown.enter="enter" v-model="username" placeholder="Username">
                <input type="password" name="password" class="password"  @keydown.enter="enter" v-model="password" placeholder="Password">
                <button type="button" @click="enter">Sign me in</button>
                <div class="error"><span>+</span></div>
            </form>
            <div class="connect">
                <p>Or connect with:</p>
                <p>
                    <a class="facebook" href=""></a>
                    <a class="twitter" href=""></a>
                </p>
            </div>
             <div class="desweb">
                
                <p>
                    <a class="facebook" href="">Copyright&nbsp;&nbsp;㉢&nbsp;&nbsp;ZZH博客后台管理系统. All Rights Reserved.</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a class="twitter" href="">滇ICP备案:18003157</a>
                </p>
            </div>
            <div class="bgimg"></div>
        </div>
      

      
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
    username:'',
    password:''
    }
  },
  methods:{
      enter(){
           if (this.username == "" && this.password == "") {
                this.$message({
          message: '用户名和密码不能为空',
          type: 'warning'
        });
     
      } else {
        if (this.username === "") {
             this.$message({
          message: '请输入您的用户名',
          type: 'warning'
        });
       
        }
        if (this.password === "") {
             this.$message({
          message: '请输入您的密码',
          type: 'warning'
        });
        
        }
      }
       if (this.username !== "" && this.password !== "") {
            this.$message({
          message: '登录成功',
          type: 'success'
        });
           console.log(this.username);
           this.$router.push({path:'/main'}) 
       }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bgimg{
  position: fixed;

top:0px;
left:0px;
z-index: -99;
    background-image: url('../assets/img/backgrounds/4.jpg');
 background-repeat: no-repeat;
 background-size: cover;
     filter: blur(2px);
  width: 100%;
  height: 100%;
    background-color: #DCDDDF;

}
.desweb{
  position: absolute;
    bottom: 10px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
}
.desweb a{
    color: #333;
}
</style>
