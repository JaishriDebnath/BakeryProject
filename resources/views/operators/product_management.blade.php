@include('operators.layouts.header')
<body>
  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper">
    @include('operators.layouts.operator_sidebar')
      <div class="main-panel">        
        <div class="content-wrapper">
          <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h1><b>Contact Information</b></h4>
                 
                  <form class="forms-sample">
                    
                    <div class="form-group">
                    <div class="row">
                        <div class="col-lg-10">
                      <label for="exampleInputUsername1">Mobile Number</label>
                      <input type="text" class="form-control" id="exampleInputUsername1" placeholder="Mobile Number">
                    </div>
                    <div class="col-lg-1">
                    <button class="btn btn-success add-more">+</button>
                    </div>
                    <div class="col-lg-1"></div>
                    </div>
                    </div>
                    <div class="form-group">
                    <div class="col-lg-10">
                      <label for="exampleInputPassword1">Address</label>
                      <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Address">
                    </div>
                    </div>
                    <div class="form-group">
                    <div class="col-lg-10">
                      <label for="exampleInputEmail1">Email address</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
                    </div>
                    </div>
                    <div class="form-group">
                    <div class="col-lg-10">
                      <label for="exampleInputConfirmPassword1">FAX</label>
                      <input type="password" class="form-control" id="exampleInputConfirmPassword1" placeholder="FAX">
                    </div>
                    </div>
                    <div class="form-check form-check-flat form-check-primary">
                      <label class="form-check-label">
                        <input type="checkbox" class="form-check-input">
                        Remember me
                      </label>
                    </div>
                    <button type="submit" class="btn btn-primary mr-2">Submit</button>
                    <button class="btn btn-light">Cancel</button>
                  </form>
                </div>
              </div>
            </div>
           
          </div>
        </div>
        @include('layouts.dashfooter')
      </div>
    </div>
  </div>
  <script src="../../vendors/base/vendor.bundle.base.js"></script>
  <script src="../../js/off-canvas.js"></script>
  <script src="../../js/hoverable-collapse.js"></script>
  <script src="../../js/template.js"></script>
  <!-- endinject -->
  <!-- plugin js for this page -->
  <script src="../../vendors/typeahead.js/typeahead.bundle.min.js"></script>
  <script src="../../vendors/select2/select2.min.js"></script>
  <!-- End plugin js for this page -->
  <!-- Custom js for this page-->
  <script src="../../js/file-upload.js"></script>
  <script src="../../js/typeahead.js"></script>
  <script src="../../js/select2.js"></script>
  <!-- End custom js for this page-->
</body>


<!-- Mirrored from technext.github.io/regal/pages/forms/basic_elements.html by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 14 Sep 2024 04:38:31 GMT -->
</html>
