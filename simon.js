// alert("simon"); // js test pass

// $("h1").css("color", "blue"); // jquery test pass

//button pressed respoond
// $("#green").mouseenter(function() {
//   $(this).addClass("hovered");
// });

var simonPattern = [];
var userPattern = [];
var randomChosenButton;
var userChosenButton;

var btnList = ["#green", "#red", "#blue", "#yellow"];
// console.log(btnList[0]);
// var btnNumber;

var greenAudio = new Audio("sounds/green.mp3");
var redAudio = new Audio("sounds/red.mp3");
var blueAudio = new Audio("sounds/blue.mp3");
var yellowAudio = new Audio("sounds/yellow.mp3");
var wrongAudio = new Audio("sounds/wrong.mp3");

var btnAudios = [greenAudio, redAudio, blueAudio, yellowAudio];


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//------above is variable list, below is actual run------
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

mouseEntered();
mouseExited();

handlerUserClick();
// patternGenerator();


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//------above is actual run, below is all the functions------
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function mouseEntered() {
  $(btnList[0]).mouseenter(function() {
    // console.log("mosue enter" + btnList[0]);
    $(this).addClass("hovered");
  });

  $(btnList[1]).mouseenter(function() {
    // console.log("mosue enter" + btnList[1]);
    $(this).addClass("hovered");
  });

  $(btnList[2]).mouseenter(function() {
    // console.log("mosue enter" + btnList[2]);
    $(this).addClass("hovered");
  });

  $(btnList[3]).mouseenter(function() {
    // console.log("mosue enter" + btnList[3]);
    $(this).addClass("hovered");
  });
}

function mouseExited() {
  $("[type=button]").mouseleave(function() {
    $("[type=button]").removeClass("hovered");
  });
}


//user clicked pattern record
function handlerUserClick() {
  $(".btn").click(function(event) {
    userChosenButton = event.target.id;

    userPattern.push(userChosenButton);

    var id;
    switch (userChosenButton) {
      case "green":
        id = 0;
        break;
      case "red":
        id = 1;
        break;
      case "blue":
        id = 2;
        break;
      case "yellow":
        id = 3;
        break;
    }
    randomButtonFlash(id);

    console.log(userChosenButton);
    console.log(userPattern);
  });
}

//generate the random sequence for simon
function patternGenerator() {
  var randomNumber = Math.floor(Math.random() * 4);
  randomChosenButton = btnList[randomNumber];
  randomButtonFlash(randomNumber);

  simonPattern.push(randomChosenButton);

  console.log(randomChosenButton);
  console.log(simonPattern);
}

//button flash and play audio
function randomButtonFlash(number) {
  $(randomChosenButton).fadeOut("fast").fadeIn("fast");
  btnAudios[number].play();
}


//testing purpose only
$("#test-button").click(patternGenerator);
// $("#test-button").click(randomButtonFlash);
