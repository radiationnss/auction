<template>
    <transition name="fade">
        <div class="above-navbar" v-if="showAboveNavbar" :key="showAboveNavbar">
            Content to appear above the navbar
        </div>
    </transition>
    <nav class="navbar navbar-expand-md navbar-light sticky-top bg-light custom-nav">
        <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="../assets/image20.png" alt=""></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <i class="bi bi-list"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav ms-auto mb-2 mb-md-0">
            <li class="nav-item">
                <router-link class="nav-link bold-text" aria-current="page" to="/">home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link bold-text" aria-current="page" to="/about">about</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link bold-text" aria-current="page" to="/notices">notices</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link bold-text" aria-current="page" to="/categories">categories</router-link>
            </li>
            </ul>
        </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'navbarComponent',

  data() {
    return {
      showAboveNavbar:true
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
        this.showAboveNavbar = window.pageYOffset === 0;
    }
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style>
.above-navbar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 45px;
  background-color: #336699;
  color: white;
  padding: 10px;
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}


.navbar-toggler {
  border-radius: 50%;
  padding: 15px;
  color: #336699;
  background-color: #bde4f2a7;
  border: none;
}

.navbar img {
  height: 10vh;
}

.navbar li {
  text-decoration: solid;
}

.navbar {
  padding-right: 5vw;
  padding-left: 5vw;
}

.bold-text {
  font-weight: bold;
}

.bold-text:hover {
  color:#F4C23D;
}

</style>