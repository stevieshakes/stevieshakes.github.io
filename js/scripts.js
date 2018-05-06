 
 // load transition
 $(document).ready(function() {
        $("body").css("display", "none");
        $("body").fadeIn(1000);
    });


// nav

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Get the elements with class="column"
var elements = document.getElementsByClassName("clm");

// Declare a loop variable
var i;

// Full-width images
function one() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.msFlex = "100%";  // IE10
        elements[i].style.flex = "100%";
    }
}

// About

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var os = $('.main').offset().top;
    var ht = $('.main').height();
    // var hght = $('.work').height();
    if(scroll >= os + ht){
        $('.about').addClass('fixed');
    }

    else {
        
        $('.about').removeClass('fixed');
        
        }

});


    $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var offs = $('.section').offset().top;
    var hght = $('.section').height();
    
        if (scroll >= offs + hght) {
            $('.about').removeClass('fixed');
        } 
    });


    // Work

    $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var os = $('.section').offset().top;
    var ht = $('.section').height();
    if(scroll >= os + ht){
        $('.work').addClass('fixed');
    }

    else {
        
        $('.work').removeClass('fixed');
        
        }

});

     $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var offs = $('.portfolio').offset().top;
    var hght = $('.portfolio').height();
    
        if (scroll >= offs + hght) {
            $('.work').removeClass('fixed');
        } 
    });

     $(document).ready(function(){
    $('#firstClick').click(function(){
        $('#firstContent').show();
         $('.imgScale').addClass('hide');
          $('.work').addClass('shrink');
            $('.portfolio').addClass('grow');
            $("html,body").animate({scrollTop: $(".row").offset().top}, 0);

            


        
        
    });
    $('.cls-pop, .close').click(function(){
        $('#firstContent').hide();
        $('.imgScale').removeClass('hide');
        $('.work').removeClass('shrink');
            $('.portfolio').removeClass('grow');
            $("html,body").animate({scrollTop: $(".row").offset().top}, 0);



    });
}); 

      $(document).ready(function(){
    $('#secondClick').click(function(){
        $('#secondContent').show();
         $('.imgScale').addClass('hide');
          $('.work').addClass('shrink');
            $('.portfolio').addClass('grow');
            $("html,body").animate({scrollTop: $(".row").offset().top}, 0);

            


        
        
    });
    $('.cls-pop, .close').click(function(){
        $('#secondContent').hide();
        $('.imgScale').removeClass('hide');
        $('.work').removeClass('shrink');
            $('.portfolio').removeClass('grow');


    });
});

     $(document).ready(function(){
    $('#thirdClick').click(function(){
        $('#thirdContent').show();
         $('.imgScale').addClass('hide');
          $('.work').addClass('shrink');
            $('.portfolio').addClass('grow');
            $("html,body").animate({scrollTop: $(".row").offset().top}, 0);

            


        
        
    });
    $('.cls-pop, .close').click(function(){
        $('#thirdContent').hide();
        $('.imgScale').removeClass('hide');
        $('.work').removeClass('shrink');
            $('.portfolio').removeClass('grow');


    });
});


   $(document).ready(function(){
    $('#fourthClick').click(function(){
        $('#fourthContent').show();
         $('.imgScale').addClass('hide');
          $('.work').addClass('shrink');
            $('.portfolio').addClass('grow');
            $("html,body").animate({scrollTop: $(".row").offset().top}, 0);

            


        
        
    });
    $('.cls-pop, .close').click(function(){
        $('#fourthContent').hide();
        $('.imgScale').removeClass('hide');
        $('.work').removeClass('shrink');
            $('.portfolio').removeClass('grow');


    });
});

      $(document).ready(function(){
    $('#fifthClick').click(function(){
        $('#fifthContent').show();
         $('.imgScale').addClass('hide');
          $('.work').addClass('shrink');
            $('.portfolio').addClass('grow');
            $("html,body").animate({scrollTop: $(".row").offset().top}, 0);

            


        
        
    });
    
    $('.cls-pop, .close').click(function(){
        $('#fifthContent').hide();
        $('.imgScale').removeClass('hide');
        $('.work').removeClass('shrink');
            $('.portfolio').removeClass('grow');


    });
});

// image click

// function toggle_visibility(id) {
//        var e = document.getElementById(id);
//        if(e.style.display == 'block')
//           e.style.display = 'none';

//        else
//           e.style.display = 'block';
//       $(".clm").css("display", "none");
      

//     }

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});




















