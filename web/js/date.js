function updateClock() {
                                      var now = new Date();// current date
                                      months = ["January", "February", "March", "April", "May",
                                                 "June", "July", "August", "September", "October",
                                                 "November", "December"];
                                      time = ' '+ now.getHours() + ':' + now.getMinutes(), // again, you get the idea

                                      // a cleaner way than string concatenation
                                      date = [now.getDate(),months[now.getMonth()],now.getFullYear()].join(' ');

                                      // set the content of the element with the ID time to the formatted string
                                      document.getElementById('time').innerHTML = [date, time].join(' / ');

                                      // call this function again in 1000ms
                                      setTimeout(updateClock, 1000);
                              }
                              updateClock(); // initial call