<template> 
  <div >
    <div>
    <!-- ШАПКА -->
      <div class="d-flex justify-content-around">

        <div class="nav py-4">          
          <li class="nav-item h4 ml-4" >
            <i class="bi bi-facebook"></i>
          </li>
          <li class="nav-item h4 ml-4">
            <i class="bi bi-instagram"></i>
          </li>
          <li class="nav-item h4 ml-4">
            <i class="bi bi-facebook"></i>
          </li>   
        </div>

        <div class="nav py-4"> 
        <img alt="Никольский молл" src="../assets/logo.png"  class="img-responsive" width="320"/>  
        </div>

        <div class="nav  py-4">
            <li class="nav-item h4 ml-4" >
              <i class="bi bi-search"></i>
            </li>
            <li class="nav-item h4 ml-4">
              <i class="bi bi-geo-alt-fill"></i>
            </li>
            <li class="nav-item h4 ml-4">
              <i class="bi bi-telephone-fill"></i>
            </li>     
        </div>
      </div>
 
    <!-- НАВИГАЦИЯ -->
   <ul class="nav justify-content-center">
      <li class="nav-item">
        <a class="nav-link active" href="#">Магазины</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">О нас</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Новости и Акции</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Как добраться</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Партнерам</a>
      </li>
    </ul>

    <!-- КАРУСЕЛЬ -->
    <div id="carouselExampleIndicators" class="carousel slide container-fluid" data-ride="carousel" style="height: 673px; background-color: #EDFCFF">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" style="height: 673px">
        <div class="carousel-item active">
          <img src="../assets/Frame.jpg" alt="Первый слайд">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../assets/Kiehls.png" alt="Второй слайд">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../assets/Frame.jpg" alt="Третий слайд">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" style="height: 673px">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" style="height: 673px">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div>     
    </div>
    </div>
  
    <div class="container">
      <!-- ПЕРВЫЙ РЯД -->
      <div class="row">
        <div class="col-sm ">
          <div class="card" >
          <img src="../assets/Childs_World.png" class="card-img p-5" alt="Детский мир">
              <p class="card-text">3 этаж </p>
            </div>
        </div>
        <div class="col-sm">
          <div class="card" >
          <img src="../assets/Kiehls.png" class="card-img p-5" alt="Детский мир">
          <p class="card-text">3 этаж </p>
          </div>
        </div>
        <div class="col-sm">
          <div class="card" >
          <img src="../assets/Mixit.png" class="card-img p-5" alt="Детский мир">
              <p class="card-text">3 этаж </p>
            </div>
        </div>
        <div class="col-sm">
          <div class="card" >
          <img src="../assets/Respect.png" class="card-img p-5" alt="Детский мир">
              <p class="card-text">3 этаж </p>
            </div>
        </div>
      </div>
<!-- ВТОРОЙ РЯД -->
      <div class="row">
        <div class="col-sm ">
          <div class="card" >
          <img src="../assets/Childs_World.png" class="card-img p-5" alt="Детский мир">
              <p class="card-text">3 этаж </p>
            </div>
        </div>
        <div class="col-sm">
          <div class="card" >
          <img src="../assets/Kiehls.png" class="card-img p-5" alt="Детский мир">
          <p class="card-text">3 этаж </p>
          </div>
        </div>
        <div class="col-sm">
          <div class="card" >
          <img src="../assets/Mixit.png" class="card-img p-5" alt="Детский мир">
              <p class="card-text">3 этаж </p>
            </div>
        </div>
        <div class="col-sm">
          <div class="card" >
          <img src="../assets/Respect.png" class="card-img p-5" alt="Детский мир">
              <p class="card-text">3 этаж </p>
            </div>
        </div>
      </div>
    </div>

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
