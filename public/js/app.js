  $(document).ready(function(){
    M.AutoInit();
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('.scrollspy').scrollSpy({
        scrollOffset: 100,
    })
    $('select').material_select();
  });