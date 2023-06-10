<template>
 <Cards :products="products"></Cards>
</template>

<script>
import axios from 'axios';

import Cards from '@/components/Cards.vue';

export default {
    components: {Cards},
    data() {
        return {
            products: []
        }
    },
    mounted() {
        this.getProducts()
    },
    methods: {
        async getProducts() {
            const category_id = this.$route.params.category_id

            await axios
                    .get(`/api/category/${category_id}/`)
                    .then(response=> {
                        this.products = response.data
                    })
                    .catch(error=> {
                        console.log(error)
                    })
        }
    }
}

</script>