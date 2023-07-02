 <template>
    <div :style="{'background-image': `url(${require('../assets/nuar.svg')})`}" id="carouselExampleIndicators" class="carousel slide container-fluid" data-ride="carousel">
      <ol class="carousel-indicators mb-5">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active round m-2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1" class="round m-2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2" class="round m-2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3" class="round m-2"></li>
      </ol>
      <div class="carousel-inner" >
        <div class="carousel-item active" >
          <img src="../assets/NikolskyMoll_carusel.svg" alt="Первый слайд">
        </div>
        <div class="carousel-item">
          <img src="../assets/NikolskyMoll_carusel.svg" alt="Второй слайд">
        </div>
        <div class="carousel-item">
          <img src="../assets/NikolskyMoll_carusel.svg" alt="Третий слайд">
        </div>
        <div class="carousel-item">
          <img src="../assets/NikolskyMoll_carusel.svg" alt="Четвертый слайд">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
</template>

<style lang="scss" scoped>
.carousel{
  height: 673px; 
  background-color: #EDFCFF; 
  background-size: cover;
}
.carousel-inner{
  height: 673px; 
  padding-top: 70px;
}
.carousel-control-prev{
  height: 673px;
}
.carousel-control-next{
  height: 673px;
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
</style>