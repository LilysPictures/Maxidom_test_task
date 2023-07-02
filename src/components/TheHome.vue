<template> 
  <TheHeader/>
  <TheNavigation/>
  <TheCarousel/>
  <TheShopsCard/>
  <TheNews/>
  <TheSales/>
  <TheFooter/>
</template>


<script>
import TheHeader from '../components/TheHeader.vue'
import TheNavigation from '../components/TheNavigation.vue'
import TheCarousel from '../components/TheCarousel.vue'
import TheShopsCard from '../components/TheShopsCard.vue'
import TheNews from '../components/TheNews.vue'
import TheSales from '../components/TheSales.vue'
import TheFooter from '../components/TheFooter.vue'

export default {
  name: 'TheHome',
  components: {
    TheHeader,
    TheNavigation,
    TheCarousel,
    TheShopsCard,
    TheNews,
    TheSales,
    TheFooter
  }
}
</script>


<style lang="scss">
.news-header{
  font-family: 'Roboto';
  font-size: 50px;
  font-variant: all-small-caps;
  color: #111111;
}
.blueviolet{
  color: blueviolet
}
</style>

