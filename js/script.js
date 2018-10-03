//listen for enter on input or click on button, when completed, add task to todo ul

$(document).ready(function(){
  $('#clear-all-todo').fadeOut();
  $('#clear-all-done').fadeOut();
  $('#add').fadeOut();
  var taskNum = 0;
  var doneNum = 0;
  function addClear(){
    if (taskNum > 0){
      $('#clear-all-todo').fadeIn();
    }
    else {
      $('#clear-all-todo').fadeOut();
    }
    if (doneNum > 0){
      $('#clear-all-done').fadeIn();
    }
    else {
      $('#clear-all-done').fadeOut();
    }
  }
  var x = document.getElementById("task").autofocus;
  function addTask() {
    if($('#task').val() == ''){
      $('#button-container').append('<p class="fade">Please enter a to do item...</p>');
      $(".fade").delay(500).fadeOut();
      return;
    }
    var task ='<li class="bubble"><button class="remove">&#10003;</button> '+$("#task").val()+'</li>';
    $('#todo').append(task);
    $('#task').val('');
    taskNum++;
    addClear();
    $('#add').fadeOut();
  }
  $('#add').click(function(){
  addTask();
});
  $('#task').keyup(function(e) {
    if(e.which == 13) {
      addTask();
    }
    if(e.which != 13){
    $('#add').fadeIn();
  }

  if($('#task').val() == ''){
    $('#add').fadeOut();
  }
});


//listen for button clicked, remove this.li from todo, add to done
$('#todo').on('click', '.remove', function () {
  $(this).parent().animate({
    opacity: 0.25,
    left: "+=50",
    height: "toggle"
  }, 500, function() {});
  $(this).text("X");
  $(this).removeClass("remove").addClass("delete");
  var shift = $(this).parent().clone()/*.detach()*/;
  $('#done').append(shift);
  taskNum--;
  doneNum++;
  addClear();

});
$('#done').on('click', '.delete', function () {
  $(this).parent().animate({
    opacity: 0.25,
    left: "+=50",
    height: "toggle"
  }, 500, function() {
  });
  doneNum--;
  addClear();
});
$('#clear-all-done').click(function () {
  $('#done').children().fadeOut();
  doneNum = 0;
  addClear();
});
$('#clear-all-todo').click(function () {
  /*$('#todo').children().fadeOut();*/
  $('#todo .remove').text("X");
  $('#todo .remove').removeClass("remove").addClass("delete");

  var shift = $('#todo').clone()/*.detach()*/;

  $('#todo').children().fadeOut();
  $('#done').append(shift);
  doneNum += taskNum;
  taskNum = 0;
  addClear();
});

$(window).scroll(function () {
    var rotate = $('#pen');
    var $body = $(document.body);
    var bodyHeight = $body.height();
    rotate.css({
        'transform': 'rotate(' + ($body.scrollTop() / bodyHeight * 360) + 'deg)'
    });
});
});//end document ready function
