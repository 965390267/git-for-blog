<template>
    <aside>
          <div id="sidebar" class="nav-collapse " :style="{marginLeft:move+'px'}" tabindex="5000" style="overflow: hidden; outline: none; margin-left: 0px;">
              <!-- sidebar menu start-->
               <el-menu
      default-active="2" style="margin-top:75px;"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#424a5d"
      text-color="#aeb2b7"
      active-text-color="#fff">
       <p class="centered">
           <a href="profile.html"><img src="../../assets/img/ui-sam.jpg" class="img-circle" width="60"></a>
           </p>   
       <h5 class="centered">Marcel Newman</h5>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" >
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
             
              <!-- sidebar menu end-->
          </div>
      </aside>
</template>
<script>
export default {
  data(){
return{
move:0
}
  },
 
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toggle(){
if(this.move==-210){
  this.move=0
}else{
  this.move=-210;
}
    }
  },
  mounted(){

    
  }
};
</script>
