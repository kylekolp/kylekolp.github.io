$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
  $(window).scrollLeft(0);
  // Labyrinth: 7900
  // Interpreter: 8700
  // Compiler: 9300
  // Algo Visual: 10050
});

var backButtonControl = 7900

function ChangeBackControl(int){
  console.log("Changing Back Control " + int);
  switch(int){
    case 0: backButtonControl = 7900; break; //Labyrinth
    case 1: backButtonControl = 8700; break; //Interpreter
    case 2: backButtonControl = 9300; break; //Compiler
    default:  backButtonControl = 7900;
  }
  console.log("int: " + int + " control: " + backButtonControl);
}

var controller = new ScrollMagic.Controller();
var controller2 = new ScrollMagic.Controller({vertical: false});

var LabExtend = false;
var ButtonHook;

$(document).ready(function(){

    var RedCurve = document.getElementById('RedCurve');
    var BlueCurve = document.getElementById('BlueCurve');
    var Pose = document.getElementById('Pose');
    var h1 = document.getElementsByTagName("h1");
    var h2 = document.getElementsByTagName("h2");
    var Title = document.getElementById("Title");
    var SubTitle = document.getElementById("SubTitle");
    var UnderLine = document.getElementById("UnderLine");

    var tlRed = new TimelineLite();
    tlRed.from(RedCurve, 0.75, {opacity: 0, y: -600, x: -200}, "+=0.5");

    var tlBlue = new TimelineLite();
    tlBlue.from(BlueCurve, 0.75, {opacity: 0, y: -600, x: -200}, "+=0.5");

    var tlPose = new TimelineLite();
    tlPose.from(Pose, 1, {opacity: 0, x: 600}, "+=1");

    var tlH1 = new TimelineLite();
    tlH1.from(h1, 0.75, {opacity: 0, x: -100}, "+=1.5");

    var tlUL = new TimelineLite();
    tlUL.to(UnderLine, 0.75, {opacity: 1}, "+=1.75");

    var tlH2 = new TimelineLite();
    tlH2.from(h2, 0.75, {opacity: 0, x: -100}, "+=2");

    var tween3 = TweenMax.to(Pose, 10, {x: 790, ease:Power1.easeInOut});

    var PoseHook = new ScrollMagic.Scene({
        triggerElement: "#TiggerPose",
        triggerHook: 0.2,
        duration: "48%"
      }).setPin("#Pose", {pushFollowers: false})
        // .addIndicators({
        //   name: 'PoseFollow',
        //   colorTrigger: 'black'
        // })
        .addTo(controller);

    var PoseHook2 = new ScrollMagic.Scene({
      triggerHook: 0.2,
      offset: 450,
      duration: "90%"
    }).setPin("#Pose", {pushFollowers: false})
      .setTween(tween3)
      // .addIndicators({
      //   name: 'PoseSlide',
      //   colorTrigger: 'black'
      // })
      .addTo(controller);

    var tween41 = TweenMax.to(Pose, 1, {y: -1500, ease:Power1.easeInOut});

    var PoseHook3 = new ScrollMagic.Scene({
      triggerHook: 0.2,
      offset: 1190,
    }).setTween(tween41)
      // .addIndicators({
      //   name: 'PoseRemove',
      //   colorTrigger: 'black'
      // })
      .addTo(controller2);

    var RedHook = new ScrollMagic.Scene({
      triggerHook: 0.2,
      duration: "130%"
    }).setPin("#RedCurve", {pushFollowers: false})
      // .addIndicators({
      //   name: 'Red',
      //   colorTrigger: 'black',
      //   indent: 120
      // })
      .addTo(controller);

    var RedHook2 = new ScrollMagic.Scene({
      triggerHook: 0.2,
      offset: 2290,
      duration: "325%"
    }).setPin("#RedCurve", {pushFollowers: false})
      // .addIndicators({
      //   name: 'Red2',
      //   colorTrigger: 'black',
      //   indent: 120
      // })
      .addTo(controller);

    var tween8 = TweenMax.to(RedCurve, 10, {x: -500, ease:Power1.easeInOut});

    var RedHook3 = new ScrollMagic.Scene({
      triggerHook: 0.2,
      offset: 5338,
      duration: "40%"
    }).setPin("#RedCurve", {pushFollowers: false})
      .setTween(tween8)
      // .addIndicators({
      //   name: 'Red3',
      //   colorTrigger: 'black',
      //   indent: 120
      // })
      .addTo(controller);

    var BlueHook = new ScrollMagic.Scene({
      triggerHook: 0.2,
      duration: "130%"
    }).setPin("#BlueCurve", {pushFollowers: false})
      // .addIndicators({
      //   name: 'Blue',
      //   colorTrigger: 'black',
      //   indent: 230
      // })
      .addTo(controller);

    var tween0 = TweenMax.to(BlueCurve, 10, {x: -900, y: -100, ease:Power1.easeInOut});

    var BlueHook2 = new ScrollMagic.Scene({
      triggerHook: 0.2,
      offset: 710,
      duration: "100%"
    }).setTween(tween0)
      // .addIndicators({
      //   name: 'Blue2',
      //   colorTrigger: 'black',
      //   indent: 300
      // })
      .addTo(controller);

    var tween = TweenMax.to(SubTitle, 10, {x: -650, ease:Power1.easeInOut});
    var tween2 = TweenMax.to(UnderLine, 10, {opacity: 0, ease:Power1.easeInOut});

    var SubHook = new ScrollMagic.Scene({
      triggerHook: 0.2,
      duration: "60%"
    }).setPin("#SubTitle", {pushFollowers: false})
      .setTween(tween)
      // .addIndicators({
      //   name: 'Subtitle',
      //   colorTrigger: 'black',
      //   indent: 570
      // })
      .addTo(controller);

    var ULHook = new ScrollMagic.Scene({
      triggerHook: 0.2,
      duration: "30%"
    }).setPin("#UnderLine", {pushFollowers: false})
      .setTween(tween2)
      // .addIndicators({
      //   name: 'Underline',
      //   colorTrigger: 'black',
      //   indent: 460
      // })
      .addTo(controller);

    
    var BlueCurve2 = document.getElementById("BlueCurve2");

    var tween6 = TweenMax.to(BlueCurve2, 10, {y: 600, ease:Power1.easeInOut});
    var tween7 = TweenMax.to(BlueCurve2, 10, {x: 950, ease:Power1.easeInOut});

    var BlueHook22 = new ScrollMagic.Scene({
      triggerElement: "#BlueCurve2",
      triggerHook: 0.2,
      offset: -300,
      duration: "248%"
    }).setPin("#BlueCurve2", {pushFollowers: false})
      // .addIndicators({
      //   name: 'Blue2',
      //   colorTrigger: 'black'
      // })
      .addTo(controller);

    var BlueHook23 = new ScrollMagic.Scene({
      triggerElement: "#BlueCurve2",
      triggerHook: 0.2,
      offset: 2025,
      duration: "50%"
    }).setPin("#BlueCurve2", {pushFollowers: false})
      .setTween(tween6)
      // .addIndicators({
      //   name: 'Blue2 Exit',
      //   colorTrigger: 'black'
      // })
      .addTo(controller);

      var BlueHook24 = new ScrollMagic.Scene({
        triggerElement: "#BlueCurve2",
        triggerHook: 0.2,
        offset: 2494,
        duration: "20%"
      }).setPin("#BlueCurve2", {pushFollowers: false})
        .setTween(tween7)
        // .addIndicators({
        //   name: 'Blue2 Exit2',
        //   colorTrigger: 'black'
        // })
        .addTo(controller);

      var BlueHook25 = new ScrollMagic.Scene({
        triggerElement: "#BlueCurve2",
        triggerHook: 0.2,
        offset: 2494
      }).setClassToggle("#BlueCurve2", "Invisible")
        // .addIndicators({
        //   name: 'Blue2 Opacity',
        //   colorTrigger: 'black'
        // })
        .addTo(controller);

    var A1 = document.getElementById("A1");

    var tween4 = TweenMax.from(A1, 0.25, {opacity: 0, ease:Power1.easeInOut});

    var AboutHook1 = new ScrollMagic.Scene({
      triggerElement: "#A1",
      triggerHook: 0.2,
    }).setTween(tween4)
      // .addIndicators({
      //   name: 'About1 Fade',
      //   colorTrigger: 'black',
      //   indent: 200
      // })
      .addTo(controller);

    var AboutHook12 = new ScrollMagic.Scene({
      triggerElement: "#A1",
      triggerHook: 0.2,
      duration: "228%"
    }).setPin("#A1", {pushFollowers: false})
      // .addIndicators({
      //   name: 'About1 Pin',
      //   colorTrigger: 'black'
      // })
      .addTo(controller);

    var tween9 = TweenMax.to(A1, 10, {x: -1750, ease:Power1.easeInOut});

    var AboutHook13 = new ScrollMagic.Scene({
      triggerElement: "#A1",
      triggerHook: 0.2,
      offset: 2140,
      duration: "100%"
    }).setPin("#A1", {pushFollowers: false})
      .setTween(tween9)
      // .addIndicators({
      //   name: 'About1 Exit',
      //   colorTrigger: 'black'
      // })
      .addTo(controller);

    var A2 = document.getElementById("A2");

    var tween5 = TweenMax.from(A2, 0.25, {opacity: 0, ease:Power1.easeInOut});

    var AboutHook2 = new ScrollMagic.Scene({
      triggerElement: "#A1",
      offset: 500,
      triggerHook: 0.2,
    }).setTween(tween5)
      // .addIndicators({
      //   name: 'About2 Fade',
      //   colorTrigger: 'black'
      // })
      .addTo(controller);

    var AboutHook22 = new ScrollMagic.Scene({
      triggerElement: "#A1",
      offset: 500,
      triggerHook: 0.2,
      duration: "174.75%"
    }).setPin("#A2", {pushFollowers: false})
      // .addIndicators({
      //   name: 'About2 Pin',
      //   colorTrigger: 'black',
      //   indent: 100
      // })
      .addTo(controller);

    var tween10 = TweenMax.to(A2, 10, {x: -1750, ease:Power1.easeInOut});

    var AboutHook23 = new ScrollMagic.Scene({
      triggerElement: "#A1",
      offset: 2140,
      triggerHook: 0.2,
      duration: "100%"
    }).setPin("#A2", {pushFollowers: false})
      .setTween(tween10)
      // .addIndicators({
      //   name: 'About2 Exit',
      //   colorTrigger: 'black',
      //   indent: 100
      // })
      .addTo(controller);

    var A3 = document.getElementById("A3");

    var tween6 = TweenMax.from(A3, 0.25, {opacity: 0, ease:Power1.easeInOut});

    var AboutHook3 = new ScrollMagic.Scene({
      triggerElement: "#A1",
      offset: 1000,
      triggerHook: 0.2,
    }).setTween(tween6)
      // .addIndicators({
      //   name: 'About3 Fade',
      //   colorTrigger: 'black'
      // })
      .addTo(controller);

    var AboutHook32 = new ScrollMagic.Scene({
      triggerElement: "#A1",
      offset: 1000,
      triggerHook: 0.2,
      duration: "121.4%"
    }).setPin("#A3", {pushFollowers: false})
      // .addIndicators({
      //   name: 'About3 Pin',
      //   colorTrigger: 'black',
      //   indent: 200
      // })
      .addTo(controller);

    var tween11 = TweenMax.to(A3, 10, {x: -1750, ease:Power1.easeInOut});

    var AboutHook33 = new ScrollMagic.Scene({
      triggerElement: "#A1",
      offset: 2140,
      triggerHook: 0.2,
      duration: "100%"
    }).setPin("#A3", {pushFollowers: false})
      .setTween(tween11)
      // .addIndicators({
      //   name: 'About3 Exit',
      //   colorTrigger: 'black',
      //   indent: 200
      // })
      .addTo(controller);
      
    var Network = document.getElementById("LabTab");

    var tween13 = TweenMax.to(LabTab, 10, {x: -1950, ease:Power1.easeOut});

    var LabHook = new ScrollMagic.Scene({
      triggerElement: "#A1",
      offset: 2648,
      triggerHook: 0.2,
      duration: "150%"
    }).setPin("#LabTab", {pushFollowers: false})
      .setTween(tween13)
      // .addIndicators({
      //   name: 'Lab Slidein',
      //   colorTrigger: 'black',
      //   indent: 200
      // })
      .addTo(controller);

    var Network = document.getElementById("Network");

    var tween12 = TweenMax.to(Network, 10, {x: -1950, ease:Power1.easeOut});

    var NetworkHook = new ScrollMagic.Scene({
      triggerElement: "#A1",
      offset: 2648,
      triggerHook: 0.2,
      duration: "150%"
    }).setPin("#Network", {pushFollowers: false})
      .setTween(tween12)
      // .addIndicators({
      //   name: 'Network SlideIn',
      //   colorTrigger: 'black',
      //   indent: 300
      // })
      .addTo(controller);

    var Labbutton = document.getElementById("Labbutton");
    var tween25 = TweenMax.to(Labbutton, 10, {opacity: 1, ease:Power1.easeInOut});

    var LabLinkHook = new ScrollMagic.Scene({
      triggerElement: "#A1",
      offset: 3400,
      triggerHook: 0.2,
      duration: "25%"
    }).setTween(tween25)
      // .addIndicators({
      //   name: 'LabButton Fade',
      //   colorTrigger: 'black',
      //   indent: 300
      // })
      .addTo(controller);

    var BackTab1 = document.getElementById("BackTab1");
    var tween12 = TweenMax.to(BackTab1, 10, {x: -1950, ease:Power1.easeOut});

    var Back1Hook = new ScrollMagic.Scene({
      triggerElement: "#A1",
      offset: 2648,
      triggerHook: 0.2,
      duration: "150%"
    }).setPin("#BackTab1", {pushFollowers: false})
      .setTween(tween12)
      // .addIndicators({
      //   name: 'BackTab1 SlideIn',
      //   colorTrigger: 'black',
      //   indent: 440
      // })
      .addTo(controller);

    var NetworkHookBlue = new ScrollMagic.Scene({
      triggerElement: "#Network",
      triggerHook: 0.2,
      offset: 2170
    }).setClassToggle("#Network", "Blue")
      // .addIndicators({
      //   name: 'Network Blue',
      //   colorTrigger: 'black',
      // })
      .addTo(controller);

    var NetworkHookGreen = new ScrollMagic.Scene({
      triggerElement: "#Network",
      triggerHook: 0.2,
      offset: 2827
    }).setClassToggle("#Network", "Green")
      // .addIndicators({
      //   name: 'Network Green',
      //   colorTrigger: 'black',
      // })
      .addTo(controller);

    var NetworkHookYellow = new ScrollMagic.Scene({
      triggerElement: "#Network",
      triggerHook: 0.2,
      offset: 3537
    }).setClassToggle("#Network", "Yellow")
      // .addIndicators({
      //   name: 'Network Yellow',
      //   colorTrigger: 'black',
      // })
      .addTo(controller);

    var IntTab = document.getElementById("IntTab");
    var tween14 = TweenMax.from(IntTab, 1, {x: -200, opacity: 0, ease:Power2.easeOut});

    var IntTabHook = new ScrollMagic.Scene({
      triggerElement: "#Network",
      triggerHook: 0.2,
      offset: 2170,
      // reverse: false
    }).setTween(tween14)
      // .addIndicators({
      //   name: 'IntTab Fade',
      //   colorTrigger: 'black',
      //   indent: 150
      // })
      .addTo(controller);

    var CompTab = document.getElementById("CompTab");
    var tween15 = TweenMax.from(CompTab, 1, {x: 200, opacity: 0, ease:Power2.easeOut});

    var CompTabHook = new ScrollMagic.Scene({
      triggerElement: "#Network",
      triggerHook: 0.2,
      offset: 2827,
      // reverse: false
    }).setTween(tween15)
      // .addIndicators({
      //   name: 'CompTab Fade',
      //   colorTrigger: 'black',
      //   indent: 150
      // })
      .addTo(controller);

    var AlgoTab = document.getElementById("AlgoTab");
    var tween16 = TweenMax.from(AlgoTab, 1, {x: -200, opacity: 0, ease:Power2.easeOut});

    var AlgoTabHook = new ScrollMagic.Scene({
      triggerElement: "#Network",
      triggerHook: 0.2,
      offset: 3537,
      // reverse: false
    }).setTween(tween16)
      // .addIndicators({
      //   name: 'CompTab Fade',
      //   colorTrigger: 'black',
      //   indent: 150
      // })
      .addTo(controller);

    var LangPanel = document.getElementById("LangPanel");
    var tween17 = TweenMax.to(LangPanel, 1, {y: 600, ease:Power2.easeOut});

    var LangHook = new ScrollMagic.Scene({
      triggerElement: "#Scene4",
      triggerHook: 0.2,
      duration: "130%"
    }).setPin("#LangPanel",  {pushFollowers: false})
      .setTween(tween17)
      // .addIndicators({
      //   name: 'LangPanel Pin',
      //   colorTrigger: 'black',
      //   indent: 150
      // })
      .addTo(controller);

    var tween18 = TweenMax.to(LangPanel, 1, {y: 610, ease:Power2.easeOut});

    var LangHook2 = new ScrollMagic.Scene({
      triggerElement: "#Scene4",
      triggerHook: 0.2,
      offset: 1220,
      duration: "425%"
    }).setPin("#LangPanel",  {pushFollowers: false})
      .setTween(tween18)
      // .addIndicators({
      //   name: 'LangPanel Slide',
      //   colorTrigger: 'black',
      //   indent: 150
      // })
      .addTo(controller);

    var ResumeText = document.getElementById("ResumeText");
    var tween19 = TweenMax.to(ResumeText, 1, {y: 560, ease:Power1.easeInOut});

    var ResumeHook = new ScrollMagic.Scene({
      triggerElement: "#Scene4",
      triggerHook: 0.2,
      duration: "130%"
    }).setPin("#ResumeText",  {pushFollowers: false})
      .setTween(tween19)
      // .addIndicators({
      //   name: 'ResumeText Pin',
      //   colorTrigger: 'black',
      //   indent: 300
      // })
      .addTo(controller);


    var tween20 = TweenMax.to(ResumeText, 1, {x: -800, ease:Power1.easeInOut});

    var ResumeHook2 = new ScrollMagic.Scene({
      triggerElement: "#Scene4",
      triggerHook: 0.2,
      offset: 1220,
      duration: "130%"
    }).setPin("#ResumeText",  {pushFollowers: false})
      .setTween(tween20)
      // .addIndicators({
      //   name: 'ResumeText Slide',
      //   colorTrigger: 'black',
      //   indent: 300
      // })
      .addTo(controller);

    var ResumeHook3 = new ScrollMagic.Scene({
      triggerElement: "#Scene4",
      triggerHook: 0.2,
      offset: 2440,
      duration: "50%"
    }).setPin("#ResumeText",  {pushFollowers: false})
      // .addIndicators({
      //   name: 'ResumeText Slide2',
      //   colorTrigger: 'black',
      //   indent: 300
      // })
      .addTo(controller);

    var HiddenPanel = document.getElementById("HiddenPanel");

    var HiddenPanelHook = new ScrollMagic.Scene({
      triggerElement: "#Scene5",
      triggerHook: 0.2,
      offset: 180,
      duration: "150%"
    }).setPin("#HiddenPanel",  {pushFollowers: false})
      // .addIndicators({
      //   name: 'HiddenPanel Pin',
      //   colorTrigger: 'black',
      // })
      .addTo(controller);

    var InfoTab = document.getElementById("InfoTab");
    var tween21 = TweenMax.to(InfoTab, 1, {x: -980, ease:Power1.easeInOut});

    var InfoTabHook = new ScrollMagic.Scene({
      triggerElement: "#Scene5",
      triggerHook: 0.2,
      offset: 180,
      duration: "150%"
    }).setPin("#InfoTab",  {pushFollowers: false})
      .setClassToggle("#InfoTab", "Visible")
      .setTween(tween21)
      // .addIndicators({
      //   name: 'InfoTab Slide',
      //   colorTrigger: 'black',
      //   indent: 300
      // })
      .addTo(controller);

    var InfoTabHook2 = new ScrollMagic.Scene({
      triggerElement: "#Scene5",
      triggerHook: 0.2,
      offset: 1588,
      duration: "232.5%"
    }).setPin("#InfoTab",  {pushFollowers: false})
      .setClassToggle("#InfoTab", "Visible")
      // .addIndicators({
      //   name: 'InfoTab Pin2',
      //   colorTrigger: 'black',
      //   indent: 300
      // })
      .addTo(controller);

    var tween22 = TweenMax.to(LangPanel, 1, {y: 2690, ease:Power1.easeIn});

    var LangHook3 = new ScrollMagic.Scene({
      triggerElement: "#Scene5",
      triggerHook: 0.2,
      offset: 1588,
      duration: "110%"
    }).setTween(tween22)
      // .addIndicators({
      //   name: 'LangPanel Drop',
      //   colorTrigger: 'black',
      // })
      .addTo(controller);

    var Pose2 = document.getElementById("Pose2");

    var Pose2Hook = new ScrollMagic.Scene({
      triggerElement: "#Scene5",
      triggerHook: 0.2,
      offset: 2200,
      duration: "167%"
    }).setPin("#Pose2",  {pushFollowers: false})
      .setClassToggle("#Pose2", "Visible")
      // .addIndicators({
      //   name: 'Pose2 Set',
      //   colorTrigger: 'black',
      //   indent: 150
      // })
      .addTo(controller);

    var Contact = document.getElementById("Contact");
    var tween23 = TweenMax.from(Contact, 1, {opacity: 0, ease:Power1.easeOut});

    var ContactHook = new ScrollMagic.Scene({
      triggerElement: "#Scene5",
      triggerHook: 0.2,
      offset: 2956,
      duration: "30%"
    }).setPin("#Contact",  {pushFollowers: false})
      .setTween(tween23)
      // .addIndicators({
      //   name: 'Contact Fade',
      //   colorTrigger: 'black',
      //   indent: 150
      // })
      .addTo(controller);

    var ContactHook = new ScrollMagic.Scene({
      triggerElement: "#Scene5",
      triggerHook: 0.2,
      offset: 3235,
      duration: "56.5%"
    }).setPin("#Contact",  {pushFollowers: false})
      // .addIndicators({
      //   name: 'Contact Pin',
      //   colorTrigger: 'black'
      // })
      .addTo(controller);

    var FinalHook = new ScrollMagic.Scene({
      triggerElement: "#Scene5",
      triggerHook: 0.2,
      offset: 2630,
    }).setClassToggle("#LangPanel", "invisible")
      // .addIndicators({
      //   name: 'EndPage Hook',
      //   colorTrigger: 'black',
      //   indent: 270
      // })
      .addTo(controller);

    var LabExtTitle = document.getElementById('LabExtTitle');
    var tween36 = TweenMax.from(LabExtTitle, 0.75, {opacity: 0, x: -200, ease:Power1.easeOut});
    
    var LabExtTitleHook = new ScrollMagic.Scene({
      offset: 4490,
      triggerHook: 0.2
    }).setTween(tween36)
      // .addIndicators({
      //   name: 'LabTitle Pin',
      //   colorTrigger: 'black'
      // })
      .addTo(controller2);

    var LabSubTitle = document.getElementById('LabSubTitle');
    var tween37 = TweenMax.from(LabSubTitle, 0.75, {opacity: 0, x: -200, ease:Power1.easeOut});
    
    var LabSubTitleHook = new ScrollMagic.Scene({
      offset: 4565,
      triggerHook: 0.2
    }).setTween(tween37)
      // .addIndicators({
      //   name: 'LabSubTitle Pin',
      //   colorTrigger: 'black',
      //   indent: 20
      // })
      .addTo(controller2);

    var LabExtDate = document.getElementById('LabExtDate');
    var tween38 = TweenMax.from(LabExtDate, 1, {opacity: 0, x: -200, ease:Power1.easeOut});
    
    var LabExtDateHook = new ScrollMagic.Scene({
      offset: 4530,
      triggerHook: 0.2
    }).setTween(tween38)
      // .addIndicators({
      //   name: 'LabDate Fade',
      //   colorTrigger: 'black',
      //   indent: 40
      // })
      .addTo(controller2);

    var LabBackButton = document.getElementById('LabBackButton');
    var tween41 = TweenMax.from(LabBackButton, 1, {opacity: 0, x: -200, ease:Power1.easeOut});
    
    var LabBackButtonHook = new ScrollMagic.Scene({
      offset: 4530,
      triggerHook: 0.2
    }).setPin("#LabBackButton", {pushFollowers: false})
      .setTween(tween41)
      // .addIndicators({
      //   name: 'Back Lab Update',
      //   colorTrigger: 'black',
      //   indent: 80
      // })
      .on('start', function () {
        ChangeBackControl(0);
      })
      .addTo(controller2);

    var IntBackUpdateHook = new ScrollMagic.Scene({
      offset: 6130,
      triggerHook: 0.2
    })/*.addIndicators({
        name: 'Back Int Update',
        colorTrigger: 'black',
        indent: 80
      }) */
      .on('start', function () {
        ChangeBackControl(1);
      })
      .addTo(controller2);

    var LabGridHook = new ScrollMagic.Scene({
      offset: 0,
      triggerHook: 0.2,
      duration: "448%"
    }).setPin("#LabGrid", {pushFollowers: false})
      // .addIndicators({
      //   name: 'LabGrid Pin',
      //   colorTrigger: 'black',
      //   indent: 100
      // })
      .addTo(controller);

    var LabGridHook2 = new ScrollMagic.Scene({
      offset: 4202,
      triggerHook: 0.2,
      duration: "50%"
    }).setPin("#LabGrid", {pushFollowers: false})
      // .addIndicators({
      //   name: 'LabGrid2 Pin',
      //   colorTrigger: 'black',
      //   indent: 100
      // })
      .addTo(controller);
      
    var LabGrid = document.getElementById('LabGrid');
    var tween32 = TweenMax.to(LabGrid, 1, {opacity: 0, ease:Power1.easeInOut});
    var tween33 = TweenMax.to(LabGrid, 1, {opacity: 1, ease:Power1.easeInOut});
    var tween34 = TweenMax.to(LabGrid, 1, {opacity: 0, ease:Power1.easeInOut});
    var tween35 = TweenMax.to(LabGrid, 1, {opacity: 1, ease:Power1.easeInOut});

    var tween39 = TweenMax.from(LabGrid, 0.75, {x: -200, ease:Power1.easeOut});
    
    var LabGridFadeInHook = new ScrollMagic.Scene({
      offset: 4530,
      triggerHook: 0.2
    }).setTween(tween39)
      // .addIndicators({
      //   name: 'LabGrid FadeIn',
      //   colorTrigger: 'black',
      //   indent: 60
      // })
      .addTo(controller2);

    var LabGridHook3 = new ScrollMagic.Scene({
      offset: 4671,
      triggerHook: 0.2,
      duration: "30%"
    }).setPin("#LabGrid", {pushFollowers: false})
      .setTween(tween32)
      // .addIndicators({
      //   name: 'LabGrid3 Pin',
      //   colorTrigger: 'black',
      //   indent: 100
      // })
      .addTo(controller);

    var LabGridHook4Pose = new ScrollMagic.Scene({
      offset: 4953,
      triggerHook: 0.2,
    }).setClassToggle("#LabGrid", "Pose2")
      // .addIndicators({
      //   name: 'LabGrid4 Pose',
      //   colorTrigger: 'black',
      //   indent: 250
      // })
      .addTo(controller);

    var LabGridHook4 = new ScrollMagic.Scene({
      offset: 4953,
      triggerHook: 0.2,
      duration: "30%"
    }).setPin("#LabGrid", {pushFollowers: false})
      .setTween(tween33)
      // .addIndicators({
      //   name: 'LabGrid4 Pin',
      //   colorTrigger: 'black',
      //   indent: 100
      // })
      .addTo(controller);

    var LabGridHook42 = new ScrollMagic.Scene({
      offset: 5234,
      triggerHook: 0.2,
      duration: "32%"
    }).setPin("#LabGrid", {pushFollowers: false})
      .setTween(tween34)
      // .addIndicators({
      //   name: 'LabGrid42 Pin',
      //   colorTrigger: 'black',
      //   indent: 100
      // })
      .addTo(controller);

    var LabGridHook5 = new ScrollMagic.Scene({
      offset: 5534,
      triggerHook: 0.2,
      duration: "30%"
    }).setPin("#LabGrid", {pushFollowers: false})
      .setTween(tween34)
      // .addIndicators({
      //   name: 'LabGrid5 Pin',
      //   colorTrigger: 'black',
      //   indent: 100
      // })
      .addTo(controller);

    var LabGridHook6Pose = new ScrollMagic.Scene({
      offset: 5815,
      triggerHook: 0.2
    }).setClassToggle("#LabGrid", "Pose3")
      // .addIndicators({
      //   name: 'LabGrid6Pose',
      //   colorTrigger: 'black',
      //   indent: 220
      // })
      .addTo(controller);

    var LabGridHook6 = new ScrollMagic.Scene({
      offset: 5815,
      triggerHook: 0.2,
      duration: "30%"
    }).setPin("#LabGrid", {pushFollowers: false})
      .setTween(tween35)
      // .addIndicators({
      //   name: 'LabGrid6 Pin',
      //   colorTrigger: 'black',
      //   indent: 100
      // })
      .addTo(controller);

    var LabGridHook7 = new ScrollMagic.Scene({
      offset: 6096,
      triggerHook: 0.2,
      duration: "60%"
    }).setPin("#LabGrid", {pushFollowers: false})
      // .addIndicators({
      //   name: 'LabGrid7 Pin',
      //   colorTrigger: 'black',
      //   indent: 100
      // })
      .addTo(controller);

    var PlayerToken = document.getElementById('PlayerToken');
    var tween26 = TweenMax.from(PlayerToken, 1, {opacity: 0, ease:Power1.easeInOut});

    var PlayerHook = new ScrollMagic.Scene({
      offset: 700,
      triggerHook: 0.2,
      duration: "75%"
    }).setTween(tween26)
      // .addIndicators({
      //   name: 'Player FadeIn',
      //   colorTrigger: 'black',
      //   indent: 200
      // })
      .addTo(controller);

    var tlPlayer = new TimelineLite();
    
    tlPlayer.to(PlayerToken, 1, {x: 175, ease:Power2.easeInOut});
    tlPlayer.to(PlayerToken, 1.25, {y: 350, ease:Power2.easeInOut}, "-=0.5");
    tlPlayer.to(PlayerToken, 1, {x: 350, ease:Power2.easeInOut}, "-=0.5");

    var PlayerHookAnim = new ScrollMagic.Scene({
      offset: 2102,
      triggerHook: 0.2,
      duration: "125.25%"
    }).setTween(tlPlayer)
      // .addIndicators({
      //   name: 'Player Timeline',
      //   colorTrigger: 'black',
      //   indent: 440
      // })
      .addTo(controller);

    var tween31 = TweenMax.to(PlayerToken, 1, {opacity: 0, ease:Power1.easeInOut});

    var PlayerFadeHook = new ScrollMagic.Scene({
      offset: 4056,
      triggerHook: 0.2,
      duration: "50%"
    }).setTween(tween31)
      // .addIndicators({
      //   name: 'PlayerFade',
      //   colorTrigger: 'black',
      //   indent: 100
      // })
      .addTo(controller);

    var PlayerPath = document.getElementById('PlayerPath');
    var tween27 = TweenMax.from(PlayerPath, 1, {opacity: 0, ease:Power1.easeInOut});

    var PathHook = new ScrollMagic.Scene({
      offset: 700,
      triggerHook: 0.2,
      duration: "75%"
    }).setTween(tween27)
      // .addIndicators({
      //   name: 'Path FadeIn',
      //   colorTrigger: 'black',
      //   indent: 0
      // })
      .addTo(controller);

    var tween32 = TweenMax.to(PlayerPath, 1, {opacity: 0, ease:Power1.easeInOut});

    var PathFadeHook = new ScrollMagic.Scene({
      offset: 4056,
      triggerHook: 0.2,
      duration: "50%"
    }).setTween(tween32)
      // .addIndicators({
      //   name: 'PathFade',
      //   colorTrigger: 'black',
      //   indent: 200
      // })
      .addTo(controller);

    var Key = document.getElementById('Key');
    var tween30 = TweenMax.from(Key, 1, {opacity: 0, ease:Power1.easeInOut});

    var KeyHook = new ScrollMagic.Scene({
      offset: 700,
      triggerHook: 0.2,
      duration: "75%"
    }).setTween(tween30)
      // .addIndicators({
      //   name: 'Key FadeIn',
      //   colorTrigger: 'black',
      //   indent: 100
      // })
      .addTo(controller);

    var tween32 = TweenMax.to(Key, 1, {opacity: 0, ease:Power1.easeInOut});

    var PlayerFadeHook = new ScrollMagic.Scene({
      offset: 4056,
      triggerHook: 0.2,
      duration: "50%"
    }).setTween(tween32)
      // .addIndicators({
      //   name: 'KeyFade',
      //   colorTrigger: 'black',
      //   indent: 300
      // })
      .addTo(controller);

    var PMove1 = document.getElementById('PMove1');
    var tween28 = TweenMax.from(PMove1, 1, {opacity: 0, ease:Power1.easeInOut});

    var PathTextHook1 = new ScrollMagic.Scene({
      offset: 1400,
      triggerHook: 0.2,
      duration: "75%"
    }).setPin("#PMove1", {pushFollowers: false})
      .setTween(tween28)
      // .addIndicators({
      //   name: 'PMove1 Pin',
      //   colorTrigger: 'black',
      //   indent: 250
      // })
      .addTo(controller);

    var PathTextHook12 = new ScrollMagic.Scene({
      offset: 2103,
      triggerHook: 0.2,
      duration: "125%"
    }).setPin("#PMove1", {pushFollowers: false})
      // .addIndicators({
      //   name: 'PMove12 Pin',
      //   colorTrigger: 'black',
      //   indent: 250
      // })
      .addTo(controller);

    var PMove2 = document.getElementById('PMove2');
    var tween29 = TweenMax.from(PMove2, 1, {opacity: 0, ease:Power1.easeInOut});


    var PathTextHook2 = new ScrollMagic.Scene({
      offset: 1400,
      triggerHook: 0.2,
      duration: "75%"
    }).setPin("#PMove2", {pushFollowers: false})
      .setTween(tween29)
      // .addIndicators({
      //   name: 'PMove2',
      //   colorTrigger: 'black',
      //   indent: 350
      // })
      .addTo(controller);

    var PathTextHook22 = new ScrollMagic.Scene({
      offset: 2103,
      triggerHook: 0.2,
      duration: "125%"
    }).setPin("#PMove2", {pushFollowers: false})
      // .addIndicators({
      //   name: 'PMove22 Pin',
      //   colorTrigger: 'black',
      //   indent: 250
      // })
      .addTo(controller);

    var PMaze1 = document.getElementById('PMaze1');
    var tween34 = TweenMax.from(PMaze1, 1, {opacity: 0, ease:Power1.easeInOut});

    var PathTextHook31 = new ScrollMagic.Scene({
      offset: 3800,
      triggerHook: 0.2,
      duration: "30%"
    }).setPin("#PMaze1", {pushFollowers: false})
      .setTween(tween34)
      // .addIndicators({
      //   name: 'PMaze1 Fadein',
      //   colorTrigger: 'black',
      //   indent: 250
      // })
      .addTo(controller);

    var PathTextHook32 = new ScrollMagic.Scene({
      offset: 4081,
      triggerHook: 0.2,
      duration: "274.8%"
    }).setPin("#PMaze1", {pushFollowers: false})
      // .addIndicators({
      //   name: 'PMaze1 Pin',
      //   colorTrigger: 'black',
      //   indent: 350
      // })
      .addTo(controller);

    var PMaze2 = document.getElementById('PMaze2');
    var tween35 = TweenMax.from(PMaze2, 1, {opacity: 0, ease:Power1.easeInOut});

    var PathTextHook41 = new ScrollMagic.Scene({
      offset: 3800,
      triggerHook: 0.2,
      duration: "30%"
    }).setPin("#PMaze2", {pushFollowers: false})
      .setTween(tween35)
      // .addIndicators({
      //   name: 'PMaze2 Fadein',
      //   colorTrigger: 'black',
      //   indent: 100
      // })
      .addTo(controller);

    var PathTextHook42 = new ScrollMagic.Scene({
      offset: 4081,
      triggerHook: 0.2,
      duration: "274.8%"
    }).setPin("#PMaze2", {pushFollowers: false})
      // .addIndicators({
      //   name: 'PMaze2 Pin',
      //   colorTrigger: 'black',
      //   indent: 0
      // })
      .addTo(controller);

    var UnitCol = document.getElementById('UnitCol');
    var tween36 = TweenMax.from(UnitCol, 1, {opacity: 0, y: 200, ease:Power3.easeInOut});

    var UnitColHook = new ScrollMagic.Scene({
      offset: 7340,
      triggerHook: 0.2,
    }).setTween(tween36)
      // .addIndicators({
      //   name: 'UnitLogo Fade',
      //   colorTrigger: 'black',
      //   indent: 270
      // })
      .addTo(controller);

    var ShakeCol = document.getElementById('ShakeCol');
    var tween37 = TweenMax.from(ShakeCol, 1, {opacity: 0, y: 200, ease:Power3.easeInOut});

    var ShakeColHook = new ScrollMagic.Scene({
      offset: 7440,
      triggerHook: 0.2,
    }).setTween(tween37)
      // .addIndicators({
      //   name: 'ShakeLogo Fade',
      //   colorTrigger: 'black',
      //   indent: 140
      // })
      .addTo(controller);

    var BookCol = document.getElementById('BookCol');
    var tween38 = TweenMax.from(BookCol, 1, {opacity: 0, y: 200, ease:Power3.easeInOut});

    var BookColHook = new ScrollMagic.Scene({
      offset: 7540,
      triggerHook: 0.2,
    }).setTween(tween38)
      // .addIndicators({
      //   name: 'BookCol Fade',
      //   colorTrigger: 'black',
      //   indent: 0
      // })
     .addTo(controller);

    var DownloadTitle = document.getElementById('DownloadTitle');
    var tween39 = TweenMax.from(DownloadTitle, 0.75, {opacity: 0, y: 150, ease:Power3.easeInOut});

    var DownloadTitleHook = new ScrollMagic.Scene({
      offset: 8538,
      triggerHook: 0.2,
    }).setTween(tween39)
      // .addIndicators({
      //   name: 'DownloadTitle Fade',
      //   colorTrigger: 'black',
      //   indent: 100
      // })
      .addTo(controller);

    var LabGitHub = document.getElementById('LabGitHub');
    var tween40 = TweenMax.from(LabGitHub, 0.75, {opacity: 0, y: 150, ease:Power3.easeInOut});

    var LabGitHubHook = new ScrollMagic.Scene({
      offset: 8580,
      triggerHook: 0.2,
    }).setTween(tween39)
      // .addIndicators({
      //   name: 'GitHub Fade',
      //   colorTrigger: 'black',
      //   indent: 250
      // })
      .addTo(controller);

    var IntExtTitle = document.getElementById('IntExtTitle');
    var tween42 = TweenMax.from(IntExtTitle, 0.75, {opacity: 0, x: -200, ease:Power1.easeOut});
    
    var IntExtTitleHook = new ScrollMagic.Scene({
      offset: 6585,
      triggerHook: 0.2
    }).setTween(tween42)
      // .addIndicators({
      //   name: 'IntTitle Pin',
      //   colorTrigger: 'black'
      // })
      .addTo(controller2);

    var IntSubTitle = document.getElementById('IntSubTitle');
    var tween43 = TweenMax.from(IntSubTitle, 0.75, {opacity: 0, x: -200, ease:Power1.easeOut});
    
    var IntSubTitleHook = new ScrollMagic.Scene({
      offset: 6660,
      triggerHook: 0.2
    }).setTween(tween43)
      // .addIndicators({
      //   name: 'IntSubTitle Pin',
      //   colorTrigger: 'black',
      //   indent: 20
      // })
      .addTo(controller2);

    var IntExtDate = document.getElementById('IntExtDate');
    var tween44 = TweenMax.from(IntExtDate, 1, {opacity: 0, x: -200, ease:Power1.easeOut});
    
    var IntExtDateHook = new ScrollMagic.Scene({
      offset: 6625,
      triggerHook: 0.2
    }).setTween(tween44)
      // .addIndicators({
      //   name: 'IntDate Fade',
      //   colorTrigger: 'black',
      //   indent: 40
      // })
      .addTo(controller2);

    var IntLogo = document.getElementById('IntExtLogo');
    var tween46 = TweenMax.from(IntLogo, 0.75, {x: -200, ease:Power1.easeOut});
    
    var IntLogoExtHook = new ScrollMagic.Scene({
      offset: 6625,
      triggerHook: 0.2
    }).setTween(tween46)
      // .addIndicators({
      //   name: 'IntGrid FadeIn',
      //   colorTrigger: 'black',
      //   indent: 60
      // })
      .addTo(controller2);

    var MainBody = document.getElementById('MainBody');
    var tween47 = TweenMax.from(MainBody, 0.75, {opacity: 0, ease:Power2.easeInOut});

    var IntMainBodyHook = new ScrollMagic.Scene({
      offset: 1200,
      triggerHook: 0.2,
    }).setTween(tween47)
      // .addIndicators({
      //   name: 'IntBody Fade',
      //   colorTrigger: 'black',
      //   indent: 250
      // })
      .addTo(controller);

    var LambdaCol = document.getElementById('LambdaCol');
    var tween48 = TweenMax.from(LambdaCol, 1, {opacity: 0, y: 200, ease:Power3.easeInOut});

    var LambdaColHook = new ScrollMagic.Scene({
      offset: 3450,
      triggerHook: 0.2,
    }).setTween(tween48)
      // .addIndicators({
      //   name: 'LambdaLogo Fade',
      //   colorTrigger: 'black',
      //   indent: 270
      // })
      .addTo(controller);

    var ClockCol = document.getElementById('ClockCol');
    var tween49 = TweenMax.from(ClockCol, 1, {opacity: 0, y: 200, ease:Power3.easeInOut});

    var ClockColHook = new ScrollMagic.Scene({
      offset: 3525,
      triggerHook: 0.2,
    }).setTween(tween49)
      // .addIndicators({
      //   name: 'ClockLogo Fade',
      //   colorTrigger: 'black',
      //   indent: 270
      // })
      .addTo(controller);

    var BulbCol = document.getElementById('BulbCol');
    var tween50 = TweenMax.from(BulbCol, 1, {opacity: 0, y: 200, ease:Power3.easeInOut});

    var BulbColHook = new ScrollMagic.Scene({
      offset: 3600,
      triggerHook: 0.2,
    }).setTween(tween50)
      // .addIndicators({
      //   name: 'BulbLogo Fade',
      //   colorTrigger: 'black',
      //   indent: 270
      // })
      .addTo(controller);

    var DownloadTitleInt = document.getElementById('DownloadTitle2');
    var tween51 = TweenMax.from(DownloadTitleInt, 0.75, {opacity: 0, y: 150, ease:Power3.easeInOut});

    var DownloadTitle2Hook = new ScrollMagic.Scene({
      offset: 4625,
      triggerHook: 0.2,
    }).setTween(tween51)
      // .addIndicators({
      //   name: 'DownloadTitle Fade',
      //   colorTrigger: 'black',
      //   indent: 100
      // })
      .addTo(controller);

    var SwitchCol = document.getElementById('SwitchCol');
    var tween52 = TweenMax.from(SwitchCol, 1, {opacity: 0, y: 200, ease:Power3.easeInOut});

    var SwitchColHook = new ScrollMagic.Scene({
      offset: 3450,
      triggerHook: 0.2,
    }).setTween(tween52)
      // .addIndicators({
      //   name: 'SwitchLogo Fade',
      //   colorTrigger: 'black',
      //   indent: 270
      // })
      .addTo(controller);

    var PencilCol = document.getElementById('PencilCol');
    var tween53 = TweenMax.from(PencilCol, 1, {opacity: 0, y: 200, ease:Power3.easeInOut});

    var PencilColHook = new ScrollMagic.Scene({
      offset: 3525,
      triggerHook: 0.2,
    }).setTween(tween53)
      // .addIndicators({
      //   name: 'PencilLogo Fade',
      //   colorTrigger: 'black',
      //   indent: 270
      // })
      .addTo(controller);

    var CapCol = document.getElementById('CapCol');
    var tween54 = TweenMax.from(CapCol, 1, {opacity: 0, y: 200, ease:Power3.easeInOut});

    var CapColHook = new ScrollMagic.Scene({
      offset: 3600,
      triggerHook: 0.2,
    }).setTween(tween54)
      // .addIndicators({
      //   name: 'CapLogo Fade',
      //   colorTrigger: 'black',
      //   indent: 270
      // })
      .addTo(controller);

    var DownloadTitle3Int = document.getElementById('DownloadTitle3');
    var tween55 = TweenMax.from(DownloadTitle3Int, 0.75, {opacity: 0, y: 150, ease:Power3.easeInOut});

    var DownloadTitle3Hook = new ScrollMagic.Scene({
      offset: 4625,
      triggerHook: 0.2,
    }).setTween(tween55)
      // .addIndicators({
      //   name: 'DownloadTitle3 Fade',
      //   colorTrigger: 'black',
      //   indent: 100
      // })
      .addTo(controller);

    var CompPanel1 = document.getElementById('CompBlock1');
    var tween56 = TweenMax.from(CompPanel1, 1.25, {x: 850, ease:Power2.easeOut});

    var CompPanel1Hook = new ScrollMagic.Scene({
      offset: 900,
      triggerHook: 0.2,
    }).setTween(tween56)
      // .addIndicators({
      //   name: 'CompPanel1 Fade',
      //   colorTrigger: 'black',
      //   indent: 100
      // })
      .addTo(controller);

    var CompPanel2 = document.getElementById('CompBlock2');
    var tween57 = TweenMax.from(CompPanel2, 1.25, {x: -475, ease:Power2.easeOut});

    var CompPanel2Hook = new ScrollMagic.Scene({
      offset: 2000,
      triggerHook: 0.2,
    }).setTween(tween57)
      // .addIndicators({
      //   name: 'CompPanel2 Fade',
      //   colorTrigger: 'black',
      //   indent: 100
      // })
      .addTo(controller);

    var CompExtTitle = document.getElementById('CompExtTitle');
    var tween58 = TweenMax.from(CompExtTitle, 0.75, {opacity: 0, x: -200, ease:Power1.easeOut});
    
    var CompExtTitleHook = new ScrollMagic.Scene({
      offset: 8750,
      triggerHook: 0.2
    }).setTween(tween58)
      // .addIndicators({
      //   name: 'CompTitle Pin',
      //   colorTrigger: 'black'
      // })
      .addTo(controller2);

    var CompSubTitle = document.getElementById('CompSubTitle');
    var tween59 = TweenMax.from(CompSubTitle, 0.75, {opacity: 0, x: -200, ease:Power1.easeOut});
    
    var CompSubTitleHook = new ScrollMagic.Scene({
      offset: 8725,
      triggerHook: 0.2
    }).setTween(tween59)
      // .addIndicators({
      //   name: 'CompSubTitle Pin',
      //   colorTrigger: 'black',
      //   indent: 20
      // })
      .addTo(controller2);

    var CompExtDate = document.getElementById('CompExtDate');
    var tween60 = TweenMax.from(CompExtDate, 1, {opacity: 0, x: -200, ease:Power1.easeOut});
    
    var CompExtDateHook = new ScrollMagic.Scene({
      offset: 8690,
      triggerHook: 0.2
    }).setTween(tween60)
      // .addIndicators({
      //   name: 'IntDate Fade',
      //   colorTrigger: 'black',
      //   indent: 40
      // })
      .addTo(controller2);

    var CompLogo = document.getElementById('CompExtLogo');
    var tween61 = TweenMax.from(CompLogo, 0.75, {x: -200, ease:Power1.easeOut});
    
    var CompLogoExtHook = new ScrollMagic.Scene({
      offset: 8690,
      triggerHook: 0.2
    }).setTween(tween61)
      // .addIndicators({
      //   name: 'IntGrid FadeIn',
      //   colorTrigger: 'black',
      //   indent: 60
      // })
      .addTo(controller2);

});

var isInnerPage = false; //If the user is in an inner page (one of the expanded project pages) then the user will be halted when scrolling passed the end below.

var scrollPoint = 8700;

function BackToEnd(int){
  switch(int){
    case 7900: return 8700;
    case 8700: return 4700;
    case 9500: return 4700;
  }
}

//Stops scrolling after scrollPoint variable.
$(function() {
  var scrolledPast = false;
  $(window).scroll(function() {
    scrollPoint = BackToEnd(backButtonControl);
      $(window).scrollTop() < scrollPoint && $(window).scrollLeft() > 4000 ? scrolledPast = true : '';
      $(window).scrollTop() > scrollPoint && $(window).scrollLeft() > 4000 && scrolledPast == true ? $(window).scrollTop(scrollPoint) : '';
  }).scroll();
});

var WSCONST = 1950;

function AnchorToX(id){
  if(id == "#LabFull"){ return 4580; }
  else if(id =="#IntFull"){ return 6665; }
  else if(id == "#CompFull"){ return 8850;}
  else if(id == "#Back"){ return 0;}
  else{ alert('None Sorry X'); }
}

function AnchorToY(id){
  if(id == "#LabFull"){ return 0; }
  if(id == "#IntFull"){ return 0; }
  if(id == "#CompFull"){ return 0; }
  else if(id == "#Back"){ return backButtonControl; }
  else{ alert('None Sorry Y'); }
}

var tl = new TimelineLite();

controller.scrollTo(function(xval,yval) {
  
  if(window.scrollY <= 7075 && !isInnerPage){ return; }


  tl.to(window, 2, { scrollTo : {x : WSCONST }, ease : Power2.easeIn})
    .to(window, 0.002, { scrollTo : {y : yval }, ease : Power4.easeInOut})
    .to(window, 2, { scrollTo : {x : xval }, ease : Power2.easeOut})

});

$(document).on("click", 'a[href^=\\#]', function(e) {
  var id = $(this).attr("href"); // grab the href attribute value
  var xval = AnchorToX(id);
  var yval = AnchorToY(id);
  
  if($(id).length > 0) {
    // prevents default behavior of links.
    e.preventDefault();
    // trigger scroll
    controller.scrollTo(xval,yval);
    // controller.scrollTo(xval,yval);
  }
  isInnerPage = !isInnerPage;
});