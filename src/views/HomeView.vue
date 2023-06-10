<template>
  <Carousel :slides="slides"/>
  <Cards :products="products"/>
</template>

<script>
import axios from 'axios';
import Carousel from '@/components/Carousel.vue';
import Cards from '@/components/Cards.vue';
export default{
    name: 'homeV',
    components: { Carousel, Cards },
    data: () => ({
        slides: [
            'http://cocotemplates.com/html/cocotemplates/html/auction/assets/images/03-slide.jpg',
            'https://cocotemplates.com/html/cocotemplates/html/auction/assets/images/01-slide.jpg'
        ],
        products: []
    }),
    mounted() {
        this.getlatestProducts()
    },
    methods: {
        getlatestProducts() {
            axios
                .get(`/api/latest-products/`)
                .then(response=> {
                    this.products = response.data
                })
                .catch(error=>{
                    console.log(error)
                })
        }
    }
}

</script>