$(function() {
    $(".sten").draggable();
  });
  


  $(function() {
  $( ".center" ).droppable({
    tolerance: 'touch',
    drop: function( event, ui ) {
console.log("i den har funktionen kan vi sanda coordinater till databas")
      $(this)
      .addClass( "color" )
}

}
);
});