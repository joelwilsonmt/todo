$(document).ready(function(){

// Listen for click on button and adds li to ul

      $('.addBtn').on('click', function(e){
        e.preventDefault();
      });
      $('p').keydown(function(e){
        if (e.which == 13){
          e.preventDefault();
          $(this).blur();
        }
      });

      $('.addBtn').on('click', function(){
        $('ul').append("<li class='listitem'>"+
          '<a href="" class="donebtn" onmousedown="return false">Done</a>'+
          '<div class="right">'+
            '<p contenteditable="true">Go to work</p>'+
          "</div>"+
          '<a href="" class="deleteBtn" onmousedown="return false">X</a>'+
        "</li>").find('li:last-child');

        $('li:last-child p').text('New Task...');
        $('li:last-child p').on('click', function() {
          $(this).empty();
        });
        $('li:last-child p').keydown(function(e){
          if (e.which == 13){
            e.preventDefault();
            $(this).blur();
          }
        });
      });

});//End ready function
