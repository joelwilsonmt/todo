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
      $('ul').keydown('input', function(e){
        if (e.which == 13){
          e.preventDefault();
          $(this).blur();
          $('.addBtn').focus();
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

      $('.addBtn').click(function(){
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
// Listens for click and deletes targeted li item
      $('ul').on('click', 'button.deleteBtn', function(){
        $(this).parent().remove();
        console.log('Clicking');
      });

// Listens for click on donebtn and adds class change color and crossout fontawesome

});//End ready function
