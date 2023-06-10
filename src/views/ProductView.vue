<template>
    <img :src="product.thumbNail">
    <h1>{{ product.title }}</h1>
    <p>{{ product.price }}</p>
</template>

<script>
    import axios from 'axios';

    export default{
        name:'ProductV',
        data() {
            return {
                product: {}
            }
        },
        mounted() {
            this.getProduct()
        },
        methods:{
            async getProduct() {

                const category_id = this.$route.params.category_id
                const product_id = this.$route.params.product_id

                await axios
                    .get(`/api/category/${category_id}/${product_id}/`)
                    .then(response=> {
                        this.product = response.data
                    })
                    .catch(error=> {
                        console.log(error)
                    })

                this.$store.commit('setIsLoading', false)
            }
        }
    }
</script>