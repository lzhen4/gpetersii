// countdown.js

// Set the date to count down or up 
var countDownDate = new Date("Dec 7, 2024 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now      = new Date().getTime();
  
  // Positive => before target (countdown), Negative => after (count-up)
  var distance = countDownDate - now;

  if (distance >= 0) {
    // COUNTDOWN 
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
      days + "d " +
      hours + "h " +
      minutes + "m " +
      seconds + "s ";

  } else {
	// COUNT-UP
    // Build date objects
    var thenDate = new Date(countDownDate); // Original event moment
    var nowDate  = new Date // Now

    // Compute whole calendar years between times
    var years = nowDate.getFullYear() - thenDate.getFullYear();

    // Advance 'thenDate' by that many years
    var tmp = new Date(thenDate);
    tmp.setFullYear(thenDate.getFullYear() + years);

    // Account for leap years. If overshot (e.g. event was Feb 29 and no Feb 29 this year), step back.
    if (tmp > nowDate) {
      years--;
      tmp.setFullYear(thenDate.getFullYear() + years);
    }

    // Remaining ms after removing whole years
    var remainder = nowDate.getTime() - tmp.getTime();

    var days = Math.floor(remainder / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remainder % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainder % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainder % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
      years + "y " +
      days + "d " +
      hours + "h " +
      minutes + "m " +
      seconds + "s ";
  }

}, 1000);
