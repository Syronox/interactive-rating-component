var currentPick = 0;
for (i = 0; i < document.querySelectorAll(".num").length; i++) {
  document.querySelectorAll(".num")[i].addEventListener("click", function() {

    for (i = 0; i < document.querySelectorAll(".num").length; i++) {
      document.querySelectorAll(".num")[i].classList.remove("num_pressed");
    }

    this.classList.add("num_pressed");
    currentPick = document.querySelector(".num_pressed").innerHTML;
  });

}

document.querySelector(".submit").addEventListener("click", function() {
  if (currentPick != 0) {
    submit(currentPick);
  } else {
    alert("Please select rating")
  }
});

function submit(pick) {
  document.querySelector(".starWrap").innerHTML = "<img class='thanks-img flex' src='images/illustration-thank-you.svg' alt='thanks img'>";
  document.querySelector(".text").classList.add("selectedWrapper", "flex");
  document.querySelector(".text").innerHTML = "<div class='selected flex'>You selected " + pick + " out of 5</div>";
  document.querySelector(".buttons").classList.add("thankYou", "flex");
  document.querySelector(".buttons").innerHTML = "<h1>Thank you!</h1><br><p class='thanksP'>We appreciate you taking the time to give a rating. If you ever need more support,  don’t hesitate to get in touch!</p>";

}
