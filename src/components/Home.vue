<template> 
  <div >
    <div>
    <ul class="nav" >
      <li class="nav-item h4 ml-4" >
        <i class="bi bi-facebook"></i>
      </li>
      <li class="nav-item h4 ml-4">
        <i class="bi bi-instagram"></i>
      </li>
      <li class="nav-item h4 ml-4">
        <i class="bi bi-facebook"></i>
      </li>     
    </ul>
  </div>

  <div>
     <img alt="Никольский молл" src="../assets/logo.png"  class="img-responsive" width="320"/>  
    </div>


      <div class="ml-4">
      <ul class="nav" >
        <li class="nav-item h4 ml-4" >
         <i class="bi bi-search"></i>
        </li>
        <li class="nav-item h4 ml-4">
          <i class="bi bi-geo-alt"></i>
        </li>
        <li class="nav-item h4 ml-4">
          <i class="bi bi-telephone"></i>
        </li>     
      </ul>
    </div>
  
    
    <b-icon icon="search"></b-icon>
    <b-icon icon="geo-alt-fill"></b-icon>
    <b-icon icon="telephone-fill"></b-icon>    
    
    <b-nav tabs align="center">
      <b-nav-item active>Магазины</b-nav-item>
      <b-nav-item>О нас</b-nav-item>
      <b-nav-item>Новости и Акции </b-nav-item>
      <b-nav-item>Как добраться </b-nav-item>
      <b-nav-item disabled>Партнерам</b-nav-item>
    </b-nav>
    <img alt="Никольский молл" fluid src="../assets/Frame.jpg"/>


    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/Childs_World.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../assets/Childs_World.png" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../assets/Childs_World.png" class="d-block w-100" alt="...">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Предыдущий</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Следующий</span>
      </a>
    </div>




    <!-- <div class="album py-5 bg-light">
      <div class="container">

        <div>
          <b-card-group deck class="mb-4">

            <div class="card" >
              <img src="../assets/Childs_World.png" class="card-img p-5" alt="Детский мир">
              <p class="card-text">3 этаж </p>
            </div>    

            <div class="card" >
              <img src="../assets/Kiehls.png" class="card-img p-5" alt="Детский мир">
              <p class="card-text">3 этаж </p>
            </div>    

            <div class="card" >
              <img src="../assets/Mixit.png" class="card-img p-5" alt="Детский мир">
              <p class="card-text">3 этаж </p>
            </div>    

            <div class="card" >
              <img src="../assets/Respect.png" class="card-img p-5" alt="Детский мир">
              <p class="card-text">3 этаж </p>
            </div>    
          </b-card-group>

          <b-card-group deck>

            <div class="card" style="width: 18rem">
              <img src="../assets/Childs_World.png" class="card-img p-5" alt="Детский мир">
              <p class="card-text">3 этаж </p>
            </div>    

            <div class="card" >
              <img src="../assets/Kiehls.png" class="card-img p-5" alt="Детский мир">
              <p class="card-text">3 этаж </p>
            </div>    

            <div class="card" >
              <img src="../assets/Mixit.png" class="card-img p-5" alt="Детский мир">
              <p class="card-text">3 этаж </p>
            </div>    

            <div class="card" >
              <img src="../assets/Respect.png" class="card-img p-5" alt="Детский мир">
              <p class="card-text">3 этаж </p>
            </div>    
          </b-card-group>
        </div>
  
      </div>
   
  </div> -->

  <p class=" pt-3">Смотреть ещё 37 магазинов</p>

</div>

</template>

<script>
export default {
  name: 'Home',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
