$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});

function playLine(tl){
  console.log("Working!");
  tl.play();
}

$(document).ready(function(){

  var controller = new ScrollMagic.Controller();

  var character = document.getElementById('Kyle');
  var character2 = document.getElementById('Character')

  var tl2 = new TimelineLite();
  tl2.from(character, 1, {opacity: 0, x: 600}, "+=1");

  var tl = new TimelineMax();
  tl.to(character, 0.3, {opacity: 0, repeat: 1, yoyo: true})
    .to(character2, 0, {
          backgroundPosition: "-903px 0px",
          top: "0px",
          left: "-670px",
          width: "1550px",
          height: "763px"
        }, "-=0.3");

  var tween = TweenMax.to(character, 4, {scale: 0.6, x: 390, y: 310, ease: "in-out 0s forwards"});

  var ourScene = new ScrollMagic.Scene({
    triggerElement: "#Kyle",
    triggerHook: 0.184,
    duration: "130.2%"
  }).setPin("#Kyle", {pushFollowers: false})
    .setTween(tween)
    .addIndicators({
      name: 'Char Follow',
      colorTrigger: 'black'
    })
    .addTo(controller);

    var ourScene2 = new ScrollMagic.Scene({
      triggerElement: "#pin_Pose",
      triggerHook: 0.5
    }).setTween(tl)
      .addIndicators({
        name: 'Char changePose',
        colorTrigger: 'Dark Gray'
      })
      .addTo(controller);
});
