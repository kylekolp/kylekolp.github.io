$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});

$(document).ready(function(){

    var controller = new ScrollMagic.Controller();

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
      triggerElement: "#TiggerPose",
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

    var RedHook = new ScrollMagic.Scene({
      triggerElement: "#TiggerScene1",
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
      triggerElement: "#TiggerScene1",
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
      triggerElement: "#TiggerScene1",
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
      triggerElement: "#TiggerScene1",
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
      triggerElement: "#TiggerScene1",
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
      triggerElement: "#TiggerScene1",
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
      triggerElement: "#TiggerScene1",
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

});