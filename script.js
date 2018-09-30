$(document).ready(function(){
  $('#section-a').hide();
  $('#catface').hide();
// clears text in input box
      $('#textin').on('click', function() {
        $(this).val(' ');
        console.log("HEY");
      });

// Adds user input from text box to list
  $(function(){
    var textstore;
    $('#addBtn').on('click', function() {
      textstore = $('#textin').val();
        console.log(textstore);
          $('#section-a').show();
            $('#list').append("<li id='listitem'>"+
            '<input id="checkbox" type="checkbox" name="check" value="">'+textstore+"</li>");
// Adds Line through on Check box click or list item click depending on how we style.
        $('li').click(function(){
          $(this).toggleClass('linethrough');
      });
    });
  });

// Clear list button
  // $(function(){
  //   $('#clearBtn').on('click', function(){
  //     confirm('Really clear your list?');
  //     if (true) {
  //       $('li').remove();
  //         $('#section-a').hide();
  //       }
  //     else {
  //       return;
  //     };
  //   });
  // });

// Slides kitty
  $('#catbutton').on('click',function() {
    $('#catface').slideToggle('slow');
  });
});
