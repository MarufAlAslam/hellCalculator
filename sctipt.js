$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    draggable: false,
    // autoplaySpeed: 2000,
    dots:false,
    arrows: true,
    prevArrow: '<span class="slider1_prev_arrow"></i></span>',
    nextArrow: ' <button class="btn btn-success px-5 py-3 slideCountBtn">NEXT</button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
      
    ]
  });

  $(".btns .btn").click(function(){
    $(".btns .btn").removeClass("active")
    $(this,".btns .btn").addClass("active")
  })


  var result = 0

  $(".yes1").click(function(){
    if(!$('.yes1').hasClass("checked") || !$('.no1').hasClass("checked")){
      result = result + 10
      console.log(result)
      $('.yes1').addClass("checked").prop('disabled', true);
      $('.no1').addClass("checked").prop('disabled', true);
    }
    
  })
  $(".no1").click(function(){
    if(!$('.yes1').hasClass("checked") || !$('.no1').hasClass("checked")){
      result = result + 50
      console.log(result)
      $('.yes1').addClass("checked").prop('disabled', true);
      $('.no1').addClass("checked").prop('disabled', true);
    }
  })



  //  question 2

  $(".yes2").click(function(){
    if(!$('.yes2').hasClass("checked") || !$('.no2').hasClass("checked")){
      result = result + 10
      console.log(result)
      $('.yes2').addClass("checked").prop('disabled', true);
      $('.no2').addClass("checked").prop('disabled', true);
    }
    
  })
  $(".no2").click(function(){
    if(!$('.yes2').hasClass("checked") || !$('.no2').hasClass("checked")){
      result = result + 50
      console.log(result)
      $('.yes2').addClass("checked").prop('disabled', true);
      $('.no2').addClass("checked").prop('disabled', true);
    }
  })


    //  question 3

    $(".yes3").click(function(){
      if(!$('.yes3').hasClass("checked") || !$('.no3').hasClass("checked")){
        result = result + 10
        console.log(result)
        $('.yes3').addClass("checked").prop('disabled', true);
        $('.no3').addClass("checked").prop('disabled', true);
      }
      
    })
    $(".no3").click(function(){
      if(!$('.yes3').hasClass("checked") || !$('.no3').hasClass("checked")){
        result = result + 50
        console.log(result)
        $('.yes3').addClass("checked").prop('disabled', true);
        $('.no3').addClass("checked").prop('disabled', true);
      }
    })

       //  question 4

       $(".yes4").click(function(){
        if(!$('.yes4').hasClass("checked") || !$('.no4').hasClass("checked")){
          result = result + 10
          console.log(result)
          $('.yes4').addClass("checked").prop('disabled', true);
          $('.no4').addClass("checked").prop('disabled', true);
        }
        
      })
      $(".no4").click(function(){
        if(!$('.yes4').hasClass("checked") || !$('.no4').hasClass("checked")){
          result = result + 50
          console.log(result)
          $('.yes4').addClass("checked").prop('disabled', true);
          $('.no4').addClass("checked").prop('disabled', true);
        }
      })


         //  question 5

    $(".yes5").click(function(){
      if(!$('.yes5').hasClass("checked") || !$('.no5').hasClass("checked")){
        result = result + 10
        console.log(result)
        $('.yes5').addClass("checked").prop('disabled', true);
        $('.no5').addClass("checked").prop('disabled', true);
      }
      
    })
    $(".no5").click(function(){
      if(!$('.yes5').hasClass("checked") || !$('.no5').hasClass("checked")){
        result = result + 50
        console.log(result)
        $('.yes5').addClass("checked").prop('disabled', true);
        $('.no5').addClass("checked").prop('disabled', true);
      }
    })

       //  question 6

       $(".yes6").click(function(){
        if(!$('.yes6').hasClass("checked") || !$('.no6').hasClass("checked")){
          result = result + 10
          console.log(result)
          $('.yes6').addClass("checked").prop('disabled', true);
          $('.no6').addClass("checked").prop('disabled', true);
        }
        
      })

      $(".no6").click(function(){
        if(!$('.yes6').hasClass("checked") || !$('.no6').hasClass("checked")){
          result = result + 50
          console.log(result)
          $('.yes6').addClass("checked").prop('disabled', true);
          $('.no6').addClass("checked").prop('disabled', true);
        }
      })


      //  question 7

      $(".never").click(function(){
        if(!$('.never').hasClass("checked") || !$('.once').hasClass("checked")){
          result = result + 80
          console.log(result)
          $('.never').addClass("checked").prop('disabled', true);
          $('.once').addClass("checked").prop('disabled', true);
          $('.few').addClass("checked").prop('disabled', true);
          $('.sunday').addClass("checked").prop('disabled', true);
        }
        
      })

      $(".once").click(function(){
        if(!$('.never').hasClass("checked") || !$('.once').hasClass("checked")){
          result = result + 50
          console.log(result)
          $('.never').addClass("checked").prop('disabled', true);
          $('.once').addClass("checked").prop('disabled', true);
          $('.few').addClass("checked").prop('disabled', true);
          $('.sunday').addClass("checked").prop('disabled', true);
        }
      })

      $(".few").click(function(){
        if(!$('.never').hasClass("checked") || !$('.few').hasClass("checked")){
          result = result + 30
          console.log(result)
          $('.never').addClass("checked").prop('disabled', true);
          $('.once').addClass("checked").prop('disabled', true);
          $('.few').addClass("checked").prop('disabled', true);
          $('.sunday').addClass("checked").prop('disabled', true);
        }
      })
      $(".sunday").click(function(){
        if(!$('.never').hasClass("checked") || !$('.sunday').hasClass("checked")){
          result = result + 10
          console.log(result)
          $('.never').addClass("checked").prop('disabled', true);
          $('.once').addClass("checked").prop('disabled', true);
          $('.few').addClass("checked").prop('disabled', true);
          $('.sunday').addClass("checked").prop('disabled', true);
        }
      })



      //  question 8

      $(".yes8").click(function(){
        if(!$('.yes8').hasClass("checked") || !$('.no8').hasClass("checked")){
          result = result + 10
          console.log(result)
          $('.yes8').addClass("checked").prop('disabled', true);
          $('.not').addClass("checked").prop('disabled', true);
          $('.no8').addClass("checked").prop('disabled', true);
        }
        
      })

      $(".not").click(function(){
        if(!$('.not').hasClass("checked") || !$('.no8').hasClass("checked")){
          result = result + 25
          console.log(result)
          $('.yes8').addClass("checked").prop('disabled', true);
          $('.not').addClass("checked").prop('disabled', true);
          $('.no8').addClass("checked").prop('disabled', true);
        }
        
      })

      $(".no8").click(function(){
        if(!$('.yes8').hasClass("checked") || !$('.no8').hasClass("checked")){
          result = result + 50
          console.log(result)
          $('.yes8').addClass("checked").prop('disabled', true);
          $('.not').addClass("checked").prop('disabled', true);
          $('.no8').addClass("checked").prop('disabled', true);
        }
      })


      //  question 9

      $(".yes-devil").click(function(){
        if(!$('.yes-devil').hasClass("checked") || !$('.sometime-devil').hasClass("checked")){
          result = result + 100
          console.log(result)
          $('.yes-devil').addClass("checked").prop('disabled', true);
          $('.no-devil').addClass("checked").prop('disabled', true);
          $('.sometime-devil').addClass("checked").prop('disabled', true);
        }
        
      })
      $(".sometime-devil").click(function(){
        if(!$('.yes-devil').hasClass("checked") || !$('.sometime-devil').hasClass("checked")){
          result = result + 50
          console.log(result)
          $('.yes-devil').addClass("checked").prop('disabled', true);
          $('.no-devil').addClass("checked").prop('disabled', true);
          $('.sometime-devil').addClass("checked").prop('disabled', true);
        }
      })

      $(".no-devil").click(function(){
        if(!$('.no-devil').hasClass("checked") || !$('.sometime-devil').hasClass("checked")){
          result = result + 10
          console.log(result)
          $('.yes-devil').addClass("checked").prop('disabled', true);
          $('.no-devil').addClass("checked").prop('disabled', true);
          $('.sometime-devil').addClass("checked").prop('disabled', true);
        }
        
      })

      

      //  question 10

      $(".yes10").click(function(){
        if(!$('.yes10').hasClass("checked") || !$('.dont-believe').hasClass("checked")){
          result = result + 10
          console.log(result)
          $('.yes10').addClass("checked").prop('disabled', true);
          $('.no10').addClass("checked").prop('disabled', true);
          $('.dont-believe').addClass("checked").prop('disabled', true);
        }
        
      })
      $(".dont-believe").click(function(){
        if(!$('.yes10').hasClass("checked") || !$('.dont-believe').hasClass("checked")){
          result = result + 20
          console.log(result)
          $('.yes10').addClass("checked").prop('disabled', true);
          $('.no10').addClass("checked").prop('disabled', true);
          $('.dont-believe').addClass("checked").prop('disabled', true);
        }
      })

      $(".no10").click(function(){
        if(!$('.no10').hasClass("checked") || !$('.dont-believe').hasClass("checked")){
          result = result + 50
          console.log(result)
          $('.yes10').addClass("checked").prop('disabled', true);
          $('.no10').addClass("checked").prop('disabled', true);
          $('.dont-believe').addClass("checked").prop('disabled', true);
        }
        
      })


      
      //  question 11

      $(".yes11").click(function(){
        if(!$('.yes11').hasClass("checked") || !$('.no-god').hasClass("checked")){
          result = result + 10
          console.log(result)
          $('.yes11').addClass("checked").prop('disabled', true);
          $('.dont-know-god').addClass("checked").prop('disabled', true);
          $('.no-god').addClass("checked").prop('disabled', true);
        }
        
      })
      $(".no-god").click(function(){
        if(!$('.yes11').hasClass("checked") || !$('.no-god').hasClass("checked")){
          result = result + 30
          console.log(result)
          $('.yes11').addClass("checked").prop('disabled', true);
          $('.dont-know-god').addClass("checked").prop('disabled', true);
          $('.no-god').addClass("checked").prop('disabled', true);
        }
      })

      $(".dont-know-god").click(function(){
        if(!$('.dont-know-god').hasClass("checked") || !$('.no-god').hasClass("checked")){
          result = result + 20
          console.log(result)
          $('.yes11').addClass("checked").prop('disabled', true);
          $('.dont-know-god').addClass("checked").prop('disabled', true);
          $('.no-god').addClass("checked").prop('disabled', true);
        }
        
      })

      

      var slideCount = 1
      $('.slideCountBtn').click(function(){
        slideCount = slideCount + 1
        console.log(slideCount)
        if(slideCount == 12){
          $('.slideCountBtn').css("display","none")
           document.getElementById("scoreBoard").innerHTML = "result: "+result
        console.log("res: "+result)
         }
      })
      


