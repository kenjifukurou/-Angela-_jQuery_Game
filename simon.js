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

    var index;
    switch (userChosenButton) {
      case "green":
        index = 0;
        break;
      case "red":
        index = 1;
        break;
      case "blue":
        index = 2;
        break;
      case "yellow":
        index = 3;
        break;
    }
    buttonFlash(index);
    buttonPressed(userChosenButton);

    console.log(userChosenButton);
    console.log(userPattern);
  });

}

//generate the random sequence for simon
function patternGenerator() {
  var randomNumber = Math.floor(Math.random() * 4);
  randomChosenButton = btnList[randomNumber];
  buttonFlash(randomNumber);

  simonPattern.push(randomChosenButton);

  //random button flash base on generated number
  $(randomChosenButton).fadeOut("fast").fadeIn("fast");

  console.log(randomChosenButton);
  console.log(simonPattern);
}

function buttonFlash(number) {
  $(btnList[number]).fadeOut("fast").fadeIn("fast");
  btnAudios[number].play();
}

function buttonPressed(idName) {
  $("#"+idName).addClass("pressed");
  setTimeout(function() {
    $("#"+idName).removeClass("pressed");
  }, 300);
}

//testing purpose only
$("#test-button").click(patternGenerator);
