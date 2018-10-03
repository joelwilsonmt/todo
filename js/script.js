//Greets user with time appropriate greeting
function greet(){
  var greeting;
  var today = new date();
  var hourNow = today.getHours();

    if (hourNow > 18){
      greeting = 'Good Evening';
    }  else if (hourNow > 12){
      greeting = 'Good Afternoon';
    } else if (hourNow > 0){
      greeting = 'Good Morning';
    } else {
      greeting = 'Welcome';
    }

  document.getElementById('timegreet').innerText = greeting;
};
