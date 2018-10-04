//Greets user with time appropriate greeting

  var today = new Date();
  var hourNow = today.getHours();
  var greeting;

    // if (hourNow > 18){
    //   greeting = 'Good Evening';
    // }  else if (hourNow > 12){
    //   greeting = 'Good Afternoon';
    // } else if (hourNow > 0){
    //   greeting = 'Good Morning';
    // } else {
    //   greeting = 'Welcome';
    // }

    switch (true) {
      case hourNow > 18:
        greeting = 'Good Evening';
          break;
      case hourNow > 12:
        greeting = 'Good Afternoon';
          break;
      case hourNow > 0:
        greeting = 'Good Morning';
          break;
      default:
        greeting = 'Welcome';
    }
    

  $('#timegreet').text(greeting);
