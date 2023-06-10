<template>
    <div class="carousel-item"
        :class="{active:currentIndex === index}">
      <img :src="slide" class="d-block w-100">
    </div>
</template>

<script>
 export default {
    name:'carouselItem',
    props:['slide']
 }
</script>

<style scoped>
    img {
        height: 70vh;
        object-fit: cover;
    }
</style>