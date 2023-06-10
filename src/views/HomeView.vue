<template>
  <Carousel :slides="slides"/>
  <Cards :products="products"/>
</template>

<script>

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
        products: [
            {title:"car", body:"this is good car", imgsrc:"https://picsum.photos/id/1/200/300", link:"", price:"69", id:'0'},
            {title:"bus", body:"this is good bus", imgsrc:"https://picsum.photos/id/2/200/300", link:"", price:"420", id:'0'},
            {title:"train", body:"this is good train", imgsrc:"https://picsum.photos/id/3/200/300", link:"", price:"555", id:'0'},
            {title:"bike", body:"this is good bike", imgsrc:"https://picsum.photos/id/4/200/300", link:"", price:"99", id:'0'},
            {title:"cycle", body:"this is good cycle", imgsrc:"https://picsum.photos/id/5/200/300", link:"", price:"000", id:'0'}
    ]
    })
}

</script>