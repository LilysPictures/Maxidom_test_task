<template> 
  <TheHeader/>
  <TheNavigation/>
  <div >
    <div>



  
    <!-- КАРУСЕЛЬ -->
    <div :style="{'background-image': `url(${require('../assets/nuar.svg')})`}" id="carouselExampleIndicators" class="carousel slide container-fluid" data-ride="carousel" style="height: 673px; background-color: #EDFCFF; background-size: cover;">
      <ol class="carousel-indicators mb-5">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active round m-2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1" class="round m-2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2" class="round m-2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3" class="round m-2"></li>
      </ol>
      <div class="carousel-inner" style="height: 673px; padding-top: 70px">
        <div class="carousel-item active" >
          <img src="../assets/Name.svg" alt="Первый слайд">
        </div>
        <div class="carousel-item">
          <img src="../assets/Name.svg" alt="Первый слайд">
        </div>
        <div class="carousel-item">
          <img src="../assets/Name.svg" alt="Первый слайд">
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

    <!-- </div> -->

    <div>     
    </div>
    </div>
  
    <div class="container" style="margin-top: 95px">
      <!-- ПЕРВЫЙ РЯД -->
      <div class="row justify-content-around">

        <div class="card m-2" style="width: 262px; height: 144px" >
          <img class="card-img-top pt-1" src="../assets/Childs_World.png" alt="Card image cap" style="width: 200px; height: 87px; margin:auto">
          <div class="card-body py-0" style="display: flex; align-items: flex-end">
            <h5 class="card-title">Название карточки</h5>
          </div>
        </div>
        <div class="card m-2" style="width: 15rem;">
          <img class="card-img-top pt-1" src="../assets/Kiehls.png" alt="Card image cap">
          <div class="card-body py-0" style="display: flex; align-items: flex-end">
            <h5 class="card-title">Название карточки</h5>      
          </div>
        </div>
        <div class="card m-2" style="width: 15rem;">
          <img class="card-img-top pt-1" src="../assets/Mixit.png" alt="Card image cap">
          <div class="card-body py-0" style="display: flex; align-items: flex-end">
            <h5 class="card-title ">Название карточки</h5>      
          </div>          
        </div>
        <div class="card m-2" style="width: 15rem;">
          <img class="card-img-top pt-1" src="../assets/Respect.png" alt="Card image cap">
          <div class="card-body py-0" style="display: flex; align-items: flex-end">
            <h5 class="card-title ">Название карточки</h5>      
          </div>          
        </div>
       
      </div>
<!-- ВТОРОЙ РЯД -->
<div class="row justify-content-around">

  <div class="card m-2" style="width: 15rem;" >
    <img class="card-img-top pt-1" src="../assets/Childs_World.png" alt="Card image cap">
    <div class="card-body py-0" style="display: flex; align-items: flex-end">
      <h5 class="card-title">Название карточки</h5>
    </div>
  </div>
  <div class="card m-2" style="width: 15rem;">
    <img class="card-img-top pt-1" src="../assets/Kiehls.png" alt="Card image cap">
    <div class="card-body py-0" style="display: flex; align-items: flex-end">
      <h5 class="card-title">Название карточки</h5>      
    </div>
  </div>
  <div class="card m-2" style="width: 15rem;">
    <img class="card-img-top pt-1" src="../assets/Mixit.png" alt="Card image cap">
    <div class="card-body py-0" style="display: flex; align-items: flex-end">
      <h5 class="card-title ">Название карточки</h5>      
    </div>          
  </div>
  <div class="card m-2" style="width: 15rem;">
    <img class="card-img-top pt-1" src="../assets/Respect.png" alt="Card image cap">
    <div class="card-body py-0" style="display: flex; align-items: flex-end">
      <h5 class="card-title ">Название карточки</h5>      
    </div>          
  </div>
 
</div>
    </div>


  <p class="pt-3">Смотреть ещё 37 магазинов</p>



  <img src="../assets/news/Up-hills.svg" alt="д" class="d-block w-100">
  <div class="rectangle">
    <div class="row m-0 p-0">
      <div class="col">
        <img src="../assets/news/Left-dots.svg" alt="д">
      </div>
      <div class="col-6">
        <div class="news-header">
          <img style="width: 5rem;" src="../assets/SmallLogo.svg" alt="Card image cap">
        НОВОСТИ И АКЦИИ</div>
        <div class="row m-0 p-0">
          <div class="col-6">
            <!-- 1 -->
            <div class="card flex-md-row mb-4">
              <img class="card-img-right w-50" src="../assets/PulAndBear.png" alt="Card image cap">
              <div class="card-body">
                <p class="card-text font-weight-bold text-left">Новая коллекция женской одежды в pull&bear</p>
                <p class="card-text text-left">С другой стороны реализация намеченных плановых заданий играет важную роль в формировании дальнейших направлений развития. Задача организации, в особенности же дальнейшее развитие различных форм деятельности способствует подготовки и реализации...</p>
              </div>
            </div>
        <!-- 2 -->
          <div class="card flex-md-row mb-4 h-md-250" >
            <img class="card-img-right flex-auto d-none d-md-block w-50" src="../assets/Skooter.png" alt="Card image cap">
            <div class="card-body d-flex flex-column align-items-start">
              <p class="card-text font-weight-bold text-left">Тотальная распродажа во всех магазинах nikolsky mall</p>
                <p class="card-text text-left">В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизай</p>
            </div>
          </div>

          </div>
          <div class="col">
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="../assets/Chair.png" alt="Card image cap">
            <div class="card-body">
              <p class="card-text font-weight-bold text-left">До 15 ноября всем посетителям Hoff бесплатный дизайн кухни</p>
              <p class="card-text text-left"> Равным образом рамки и место обучения кадров играет важную роль в формировании направлений прогрессивного развития. Товарищи! сложившаяся структура организации позволяет оценить значение направлений прогрессивного развития.</p>

            </div>
          </div>
        </div>
        </div>

      </div>
      <div class="col">
        <div style="position: absolute; bottom: 100px">
        <img src="../assets/news/Right-dots.svg" alt="д" ></div>
      </div>
    </div>
    <p class="pt-3">Смотреть ещё 9 новостей</p>
  </div>
  <img src="../assets/news/Down-hills.svg" alt="д" class="d-block w-100">


  <!-- СКИДКИ В НИКОЛЬСКИЙ МОЛЛ -->
  <div class="news-header">
    <img style="width: 5rem;" src="../assets/SmallLogo.svg" alt="Card image cap" class="text-uppercase">
    скидки в nikolsky mall 
  </div>

  <div class="container mt-5">
  <div class="row justify-content-around">

    <div class="card m-2" style="width: 15rem;" >
      <img class="card-img-top pt-3" src="../assets/Childs_World.png" alt="Card image cap">
      <div class="card-body py-0" style="display: flex; align-items: flex-end">
        <h5 class="card-title">Название карточки</h5>
      </div>
    </div>
    <div class="card m-2" style="width: 15rem;">
      <img class="card-img-top pt-3" src="../assets/Kiehls.png" alt="Card image cap">
      <div class="card-body py-0" style="display: flex; align-items: flex-end">
        <h5 class="card-title">Название карточки</h5>      
      </div>
    </div>
    <div class="card m-2" style="width: 15rem;">
      <img class="card-img-top pt-3" src="../assets/Mixit.png" alt="Card image cap">
      <div class="card-body py-0" style="display: flex; align-items: flex-end">
        <h5 class="card-title ">Название карточки</h5>      
      </div>          
    </div>
    <div class="card m-2" style="width: 15rem;">
      <img class="card-img-top pt-3" src="../assets/Respect.png" alt="Card image cap">
      <div class="card-body py-0" style="display: flex; align-items: flex-end">
        <h5 class="card-title ">Название карточки</h5>      
      </div>          
    </div>
  </div>
   
  </div>
</div>

<!-- ВСЕ СКИДКИ -->
<div class="news-header">
  <img style="width: 5rem;" src="../assets/SmallLogo.svg" alt="Card image cap" class="text-uppercase">
  Смотреть ВСЕ СКИДКИ
</div>

<!-- НИЖНИЕ ХОЛМЫ -->
<!-- <img src="../assets/PerpleHill.svg" alt="д" class="d-block w-100"> -->
<div class="container-fluid m-0 p-0" :style="{'background-image': `url(${require('../assets/FrameBG.svg')})`}" style="background-size: cover; height: 368px" >
  <!-- <img src="../assets/FrameBG.svg" alt="д" class="container-fluid footer"> -->
<!-- <div class="perple-rectangle"> -->

  <div class="row align-items-end m-0">
    <div class="col">
      <!-- 1 -->
      <img src="../assets/Dots.svg" alt="д" >
    </div>
    <div class="col">
      <!-- 2 -->
          <p class="text-uppercase text-white">Магазины</p>
          <p class="text-uppercase text-white">О нас</p>
          <p class="text-uppercase text-white">Новости и акции</p>
          <p class="text-uppercase text-white">Как добраться</p>
          <p class="text-uppercase text-white">Партерам</p>
          <p class="text-uppercase text-white">nikolsky mall, 2021</p>
    </div>
  <!-- 3 -->
  <div class="col">
    <p class="text-white"> <i class="bi bi-geo-alt-fill"></i>Екатеринбург, ул. Мамина-Сибиряка, д. 34</p>
    <p class="text-white"> <i class="bi bi-clock"></i>Магазины и рестораны: 10.00 - 22.00</p>
    <p class="text-white">Кинотеатр: 8.00 - 1.00</p>
    <p class="text-white"><i class="bi bi-telephone"></i> +7 343 537-59-99 <i class="bi bi-envelope"></i>info@nikolskymall.ru</p>
      <p class="text-white"> <i class="bi bi-send"></i>Подписывайтесь</p>  
      <i class="bi bi-facebook h4 ml-4 text-white"></i>
      <i class="bi bi-instagram h4 ml-4 text-white"></i>
    <i class="bi bi-facebook h4 ml-4 text-white"></i>
      </div>
  <!-- 4 -->
  <div class="col">
    <div>
      <img src="../assets/GrayDots.svg" alt="д" >
    </div>
</div>

    </div>

  </div>

</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import TheNavigation from '../components/TheNavigation.vue'

export default {
  name: 'TheHome',
  components: {
    TheHeader,
    TheNavigation
  }
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

a {
  color: #42b983;
}

.round {
  width: 10px;
  height: 10px;
  border: 1px solid #A32C8E;;
  border-radius: 50%;
  background: #A32C8E;
  margin: 20px;
}

.round.active {  
  border: 4px solid #EDFCFF;
  width: 5px;
  height: 5px;
  box-shadow: 0 0 0 2px orange;

}

.rectangle{
width: 100%;
height: 1027px;
background: #F0F9FB;
}

.news-header{
  font-family: 'Roboto';
  font-size: 50px;
  font-variant: all-small-caps;
  color: #111111;
}

.perple-rectangle{
  height: 257px;
  background: #8557A4;
}
.footer{
  padding: 0;
  margin: 0 0 0 0;
  width: 100%;

}


</style>

