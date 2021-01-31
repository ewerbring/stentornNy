

 var tableChild =[];
//  let data={};
 window.onload = function () {

  var children = document.getElementById("stencontainer").children;
  console.log(children.length)

};




let coordinates = [
  {  
    "x" : 0,
    "y" : 0
  },
  {  
    "x" : 0,
    "y" : 0
  },
  {  
    "x" : 0,
    "y" : 0
  },
  {  
    "x" : 0,
    "y" : 0
  },
  {  
    "x" : 0,
    "y" : 0
  }
]



$(function() {
    $(".sten").draggable();
  });
  



  $(function() {
  $( "body" ).droppable({

    tolerance: 'touch',

    drop: function() {
      $('body').mouseup(function(e){
      var offset = $(this).offset();
      let x = e.clientX - offset.left;
      let y = e.clientY - offset.top;

      data = {
             "x" : x,
             "y" : y
          }
        });
        var children = document.getElementById("stencontainer").children;

        for (var i = 0; i < children.length; i++) {
          coordinates[i].x = children[i].offsetLeft;
          coordinates[i].y = children[i].offsetTop;
        }
        console.log(coordinates)
        data = JSON.stringify(coordinates);
        console.log(data);
        $.ajax({
          type: 'POST',
          url: "/",
          contentType: 'application/json',
          data: data,
          cache: false,
          success: function (result) { console.log("hello"); }

        });
        $.ajax({
          type: 'GET',
          url: "/",
          contentType: 'application/json',
          data: data,
          cache: false,
          success: function (result) { console.log("hello"); }

        });
      
        $(this).addClass( "color" )
}

}
);
});



