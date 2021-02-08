<template>
   <div class="wrapper">
       <Navbar/>
       <Sidebar/>
       <Isi/>
       <Footer/>
    </div>
</template>
<script>
import Navbar from '@/components/Backend/Header/Navbar.vue'
import Sidebar from '@/components/Backend/Header/Sidebar.vue'
import Isi from '@/components/Backend/Content/Content.vue'
import Footer from '@/components/Backend/Footer/Footer.vue'
export default {
    name:'ContentBackend',
    components:{
        Navbar,
        Sidebar,
        Isi,
        Footer
    }
}
</script>