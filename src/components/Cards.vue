<template>
    <div class="container-fluid">
        <div class="row">
            <h2>featured products</h2>
        </div>
        <div class="row">
            <div
            class="col-lg-3 col-md-4 mb-3"
            style="width: 18rem;"
            v-for="product in products"
            :key="product.id">
                <div class="product-box">
                    <div class="product-inner-box position-relative">
                        <div class="icons position-absolute">
                            <a href="#" class="text-decoration-none text-dark shadow-sm">O</a>
                            <a href="#" class="text-decoration-none text-dark shadow-sm">U</a>
                        </div>
                        <div class="onsale">
                            <span class="badge rounded-0">{{ product.datetime }}</span>
                        </div>
                        <img :src="product.thumbNails" alt="" class="img-fluid">
                        <div class="cart-btn">
                            <router-link :to="product.get_absolute_url"><button class="btn shadow-sm rounded-pill bg-white">start bidding</button></router-link>
                        </div>
                    </div>
                    <div class="product-info mt-3">
                        <div class="product-name">
                            {{ product.title }}
                        </div>
                        <div class="product-description">
                            {{ product.description }}
                        </div>
                        <div class="product-price">
                            ${{ product.price }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'cardC',
    props: ['products']
}

</script>

<style scoped>
.container-fluid {
    background-color: #F5FAFE;
    align-content: center;
    position: relative;

}

.product-price {
    background-color: #F4C23D;
}

.product-inner-box .icons {
    right: 15px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    top: -3%;
    transition: all 0.2s ease-in-out, transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
    opacity: 0;
}

.product-inner-box .icons a {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #fff;
}

.product-inner-box .badge {
    background: #336699;
    font-size: 12px;
    padding: 5px 14px;
    top: 0px;
    position: absolute;
    translate: -85%;
}

.product-inner-box img {
    box-shadow: 0 33px 61px -29px rgb(0 0 0/26%);
    height: 350px;
    width: 100%;
    object-fit: cover;
}

.product-box .icons {
    transform: rotateY(-3%);
    top: 3%;
    opacity: 1;
}

.product-box {
    box-shadow: inset;
    background-color: #fff;
    align-self: center;
}

.cart-btn {
    position: absolute;
    bottom: 20px;
    text-align: center;
    width: 100%;
    opacity: 1;
    transition: all 0.2s ease-in-out, transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
}


</style>