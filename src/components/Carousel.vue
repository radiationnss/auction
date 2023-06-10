<template>
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <CarouselItem
        v-for="(slide, index) in slides"
        :slide="slide"
        :key="`item-${index}`"
        :current-slide="currentSlide"
        :index="index"
    ></CarouselItem>
  </div>
</div>
</template>

<script>
    import CarouselItem from './CarouselItem.vue';
    export default {
        name: 'carouselC',
        props: ['slides'],
        components: {
            CarouselItem
        },
        data: () => ({
            currentSlide:0
        }),
        methods: {
            setCurrentSLide(index) {
                this.currentSlide = index;
            }
        }
    }
</script>