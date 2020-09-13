// $('body').on('click', '[data-toggle="modal"]', function(){
//     $($(this).data("target")+' .modal-body').load($(this).data("remote"));
// });

$('.li-modal').on('click', function(e){
    e.preventDefault();
    $('#theModal').modal('show').find('.modal-content').load($(this).attr('href'));
  });
