<template>
  <div class="container center">
    <div class="row">
        <div class="col-3 text-left p-0 align-self-center d-flex justify-content-start">        
          <div class="col"><img alt="FaceBook" src="../assets/imgHeader/Facebook.svg" class="img-facebook"/></div>
          <div class="col"><img alt="Instagram" src="../assets/imgHeader/Instagram.svg" class="img-instagram"/></div>
          <div class="col"><img alt="VK" src="../assets/imgHeader/Vk.svg" /> </div>
          <!-- <img alt="FaceBook" src="../assets/imgHeader/Facebook.svg" class="img-facebook"/>
          <img alt="Instagram" src="../assets/imgHeader/Instagram.svg" class="img-instagram"/>
          <img alt="VK" src="../assets/imgHeader/Vk.svg" />           -->
        </div>  


        <div class="col-6 p-0">
          <img alt="Логотип" src="../assets/imgHeader/Logo.svg" class="img-responsive img-logo" />
          <img alt="Никольский молл" src="../assets/imgHeader/NikolskyMoll.svg" class="img-responsive img-nik-mol" />
        </div>


        <div class="col-3 text-right p-0 align-self-center">
          <img alt="VK" src="../assets/imgHeader/Search.svg" class="img-search"/> 
          <img alt="VK" src="../assets/imgHeader/Geo.svg" /> 
          <img alt="VK" src="../assets/imgHeader/Phone.svg" class="img-phone"/>      
        </div>       
    </div>
</div>
</template>

<script setup>
</script>

<style lang="scss">
.container{
  margin-top: 36px;
  margin-bottom: 38px
}
i{
  font-size: 25px
}
.img-facebook{
  margin-right: 45px;
}
.img-instagram{
  margin-right: 50px;
}
.img-nik-mol{
  margin-right: 11px;
}
.img-logo{
  margin-left: 12px;
  padding-right: 6px;
}
.img-phone{
  margin-left: 51px;
  margin-right: 8px;
}
.img-search{
  margin-right: 52px;
}
</style>