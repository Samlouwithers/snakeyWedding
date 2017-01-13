/**
 *  Home page JavaScript
 *
 *  @author   Tim George <timg@timrgeorge.com>
 *  @version  1.0
 *
 **/

define([
  'jquery'
], function () {    



  /**
   *  Document.ready()
   *
   **/
  $(document).ready(function() {

    /**
     *  Main navigation event listener
     *
     **/
    $("#primary_navigation a").click(function(e){
      e.preventDefault();
      scrollToSection($(this));
    });

  });







  /**
   *  Scroll to section function
   *
   *  Takes an anchor tag, then scrolls to the section indicated within
   *  its HREF attribute
   *
   **/
  scrollToSection = function(anchor) {
    var theTarget = anchor.attr("href");
    if(theTarget == "index") {  
      $('html, body').animate({ scrollTop: "0px" }, 500); 
      history.replaceState({}, document.title, "/");
    } else { 
      $('html, body').animate({ scrollTop: $("#"+theTarget).offset().top }, 500);
      window.location.href = "/#"+theTarget;
    }
  };



});