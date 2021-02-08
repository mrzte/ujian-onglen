<template>
    <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <HeaderDashboardUser v-if="!isAdmin"/>    
    <HeaderDashboardAdmin v-if="isAdmin"/>    
    <!-- <h1>{{currentRouteName}}</h1> -->
    <Profile v-show="Profile"/>
    <DashboardAdmin v-if="isAdmin"/>
    <DashboardUser v-show="Dashboard" v-else/>

  </div>
  <!-- /.content-wrapper -->
</template>
<script>
import DashboardUser from '@/components/Backend/Content/Partial/Dashboard/User.vue'
import DashboardAdmin from '@/components/Backend/Content/Partial/Dashboard/Admin.vue'
import Profile from '@/components/Backend/Content/Partial/Profile/Profile.vue'
import HeaderDashboardUser from '@/components/Backend/Content/Partial/Header/Dashboard/User.vue'
import HeaderDashboardAdmin from '@/components/Backend/Content/Partial/Header/Dashboard/Admin.vue'
export default {
    name:'Isi',
    components:{
      DashboardUser,
      DashboardAdmin,
      Profile,
      HeaderDashboardUser,
      HeaderDashboardAdmin,
    },
    computed:{
      isAdmin(){
        return this.$store.state.user[0].isAdmin
      },
      Profile(){
        return this.$router.name == 'Profile'
      },
      Dashboard(){
        return this.$router.name == 'Dashboard'
      },
      currentRouteName() {
        return this.$route.name;
    }
    }
}
</script>