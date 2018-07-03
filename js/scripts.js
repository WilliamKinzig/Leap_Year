// business logic
var leapYear = function(yearIn) {
  if ((yearIn % 4 === 0) && (yearIn % 100 !== 0) || (yearIn % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

// user interface logic
$(document).ready(function() {
  $("form#yearInfo").submit(function(event) {
    event.preventDefault();

    var year = parseInt($("input#htmlYear").val());
    var result = leapYear(year);

    $(".htmlYear").text(year);

    if (!result) {
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#outputResluts").show();
  });
});
