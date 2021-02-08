<template>
     <!-- Main content -->
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Dosen Pengampu</h5>

                <h3 class="card-text">
                    <strong>Drs.Handoyo Sumantri</strong>
                    <!-- <img src="@/assets/dosen/kalkulus/handoyo.jpg" width="200px"> -->
                </h3>
              </div>
            </div>

            <div class="card card-primary card-outline">
              <div class="card-body">
                <h5 class="card-title">Mata Kuliah</h5>

                <p class="card-text">
                  Kalkulus 2
                </p>
              </div>
            </div><!-- /.card -->
          </div>
          <!-- /.col-md-6 -->
          <div class="col-lg-6">
            <div class="card">
              <div class="card-header">
                <h5 class="m-0" >Mulai Ujian</h5>
              </div>
              <div class="card-body">
                <h6 class="card-title">Silahkan tekan tombol dibawah untuk mulai ujian</h6>
                <br>
                <a href="#" class="btn btn-primary">Mulai Ujian</a>
              </div>
            </div>

            <div class="card card-primary card-outline">
              <div class="card-header">
                <h5 class="m-0">Simulasi Ujian</h5>
              </div>
              <div class="card-body">
                <h6 class="card-title">Silahkan tekan tombol dibawah untuk mulai Simulasi ujian</h6>
               <br>
                <a href="#" class="btn btn-primary">Mulai Simulasi Ujian</a>
              </div>
            </div>
          </div>
          <!-- /.col-md-6 -->
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content -->
</template>
<script>
export default {
    name:'DashboardUser'
}
</script>