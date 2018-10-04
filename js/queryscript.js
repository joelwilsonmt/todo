$(document).ready(function(){

      $('.addBtn').on('click', function(e){
        e.preventDefault();
      });
      $('.deleteBtn').on('click', function(e){
        e.preventDefault();
      });
      $('.donebtn').on('click', function(e){
        e.preventDefault();
      });
      $('p').keydown(function(e){
        if (e.which == 13){
          e.preventDefault();
          $(this).blur();
        }
      });
// Listens for button click then adds li to ul
      var li = `<li class="listitem">
        <button class="donebtn" type="button" name="button">Done</button>
        <div class="right">
          <input type="text" id="todoitem" name="" placeholder="New Task..." value="">
        </div>
        <button class="deleteBtn" type="button" name="button">X</button>
      </li>`;

      $('.addBtn').on('click', function(){
        $('ul').append(li).find('li:last-child');

        // $('li:last-child p').text('New Task...');
      });
        $('#todoitem').on('click', function() {
          $(this).empty();
          console.log("I'm deleting");
        });


      $('li:last-child p').keydown(function(e){
        if (e.which == 13){
          e.preventDefault();
          $(this).blur();
        }
      });
// Listens for click on donebtn and adds class change color and crossout fontawesome

});//End ready function
