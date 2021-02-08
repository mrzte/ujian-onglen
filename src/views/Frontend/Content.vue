<template>
    <div>
        <Navbar/>
        <Header/>
        <Isi/>
        <Footer/>
    </div>
</template>
<script>
import Navbar from '@/components/Frontend/Header/Navbar.vue'
import Header from '@/components/Frontend/Header/Header.vue'
import Isi from '@/components/Frontend/Content/Content.vue'
import Footer from '@/components/Frontend/Footer/Footer.vue'

export default {
    name:'ContentFrontend',
    components:{
        Navbar,
        Header,
        Isi,
        Footer
    }
}
</script>