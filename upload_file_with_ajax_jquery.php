<!--
Tutorial on how to upload files that can be in the form of images,
documents or other files using the ajax method, the javascript library's query version.
#hacktoberfest2020
-->

 <!-- don't forget enctype="multipart/form-data" -->
<form enctype="multipart/form-data" id="myform" action="" method="post">
  <div class="row">
    <div class="col-md-6">
      <div class="form-group">
        <label for="">Employee ID</label>
        <input type="text" id="employee" class="form-control" placeholder="Ketikan ID anda..">
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <label for="">Informasi Gambar</label>
        <input type="text" id="info_file" class="form-control" placeholder="Ketikan Informasi gambar...">
      </div>
    </div>
    <div class="col-md-12">
      <div class="form-group">
        <label for="">Pilih Gambar</label>
        <input type="file" name="filenya" id="file" class="form-control" value="">
        <div class='preview_aja'>
          <img src="" id="lihat_gambar" style="width:100%">
        </div>
      </div>
    </div>
  </div>
  <center>
    <button type="button" class="btn btn-success" id="save_file" style="width:30%">Save</button>
  </center>
</form>

<script type="text/javascript">
function alertku(type, title) {
   Swal.fire({ // this from sweetalert library
     type: type,
     title: title,
     showConfirmButton: false,
     timer: 800
   })
 }

$('#save_file').on('click', function () {

  if ($('#employee').val() != '' && $('#info_file').val() != '') {
    let new_form = new FormData();
    const files = $('#file')[0].files[0];
    new_form.append('file', files);
    //tambahan aja
    new_form.append('employee', $('#employee').val());
    new_form.append('info_file', $('#info_file').val());
      $.ajax({
        url: baseurl + 'Monitoring/save_upload_data', //api area you can change, dude.
        type: 'POST',
        data: new_form,
        contentType: false,
        processData: false,
        dataType: 'JSON',
        beforeSend: function() {
          Swal.showLoading()
        },
        success: function(result) {
          if (result != null) {
            alertku('success', 'Data tersimpan')
            $('#myform')[0].reset();
            $('#lihat_gambar').attr('src', '');
            let html = `<tr>
                          <td style="vertical-align:middle">${result.employee}</td>
                          <td style="vertical-align:middle">${result.info_file}</td>
                          <td>
                            <img src="${baseurl}${result.path_file}" alt="" style="width:100%;border-radius:5px;">
                          </td>
                        </tr>`
            $('tbody').append(html);
          }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          console.error();
          alertku('warning', 'Terdapat kesalahan...')
        }
      })
  }else {
    alertku('warning', 'Lengkapi Form Input!')
  }
})

function readURL(input) { // for preview file before uploading.
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $('#lihat_gambar').attr('src', e.target.result);
    }
    reader.readAsDataURL(input.files[0])
  }else {
    $('#lihat_gambar').attr('src', '');
  }
}

$('#file').on('change', function() {
  readURL(this);
})
</script>
