<template>
<div class="container">
    <div class="row">
        <div class="card-group">
            <div class="card" v-for="notice in notices" :key="notice.id">
                <img :src="notice.image" class="card-img-top" alt="Hollywood Sign on The Hill" />
                <div class="card-body">
                    <h5 class="card-title">{{ notice.title }}</h5>
                    <p class="card-text">
                        {{ notice.body }}
                    </p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">{{ notice.uploades }}</small>
                </div>
            </div>
        </div>
    </div>
</div>
    

</template>

<script>

export default {
    data: () => ({
        notices: [
            {image:'https://picsum.photos/id/55/200/300', title:'ola', body:'heloo lelo telo', uploaded:'Last updated 3 mins ago', id:'0' },
            {image:'https://picsum.photos/id/55/200/300', title:'ola', body:'heloo lelo telo', uploaded:'Last updated 3 mins ago', id:'0'},
            {image:'https://picsum.photos/id/55/200/300', title:'ola', body:'heloo lelo telo', uploaded:'Last updated 3 mins ago', id:'0'},
            {image:'https://picsum.photos/id/55/200/300', title:'ola', body:'heloo lelo telo', uploaded:'Last updated 3 mins ago', id:'0'}
        ]
    })
}

</script>