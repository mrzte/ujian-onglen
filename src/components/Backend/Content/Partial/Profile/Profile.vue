<template>
     <!-- Main content -->
    <div class="content">
      <div class="container-fluid">
        <div class="row">
         <div class="col-md-6">
             <div class="card">
                 <div class="card-body">
                     <h3>{{$store.state.user[0].username}}</h3>
                 </div>
             </div>
         </div>
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content -->
</template>
<script>
// import { mapGetters } from 'vuex'
export default {
    name:'Profile',
    computed:{
        // ...mapGetters()
    }

}
</script>