$(document).ready(function(){
    
   
    // 
    // setInterval(function(){
    //     count++;
    //     if(count>2){count=0}
    //     $(".train").css("transform","translateX("+(-33.333*count)+"%)")
    // },2500)

    let count = 0;
    $(".next").click(function(e){
        e.preventDefault();  
        count++;
        if(count>2){count = 0}
        $(".train").css("transform","translateX(-"+(count*33.3333)+"%)")
        
       
        
    })
        

        $(".prev").click(function(e){
            e.preventDefault();  
        count--;
        if(count<0){count = 2}
        $(".train").css("transform","translateX(-"+(count*33.3333)+"%)")
        
    })

    function slideMove(idx){
        $(".traintwo").css("transform","translateX(-"+(idx*33.3333)+"%)")

    }
     setInterval(function(){
        count++;
        if(count>2){count=0}
        $(".traintwo").css("transform","translateX("+(-33.333*count)+"%)")
    },2500)

    
    $(".nexttwo").click(function(e){
        e.preventDefault();  
        count++;
        if(count>2){count = 0}
        $(".traintwo").css("transform","translateX(-"+(count*33.3333)+"%)")
        
      
    })
        

        $(".prev").click(function(e){
            e.preventDefault();  
        count--;
        if(count<0){count = 2}
        $(".train").css("transform","translateX(-"+(count*33.3333)+"%)")
        
    })

    function slideMove(idx){
        $(".train").css("transform","translateX(-"+(idx*33.3333)+"%)")

    }

    $(".wrap>main>div").on("wheel DOMMouseScroll",function(event){
        //    console.log(event)
           let E = event.originalEvent
           let delta = 0;

        //    scroll_top = scroll_top + 60;
        //     scroll.style.top = scroll_top + "px";
           if(E.detail){
            delta = E.detail * -0
           }else{
            delta = E.wheelDelta
           }
           
           if(delta<0){
            //마우스 휠을 내렸을 때
            if($(this).next().length!=0){
                let posTop = $(this).next().offset().top - 101
                $("html,body").stop().animate({scrollTop:posTop},1000)
            }
            // $("header").css("background","#fff")
           }else{
            //마우스 휠을 올렸을 때
            if($(this).prev().length!=0){
                let posTop = $(this).prev().offset().top - 101
                $("html,body").stop().animate({scrollTop:posTop},1000)
            }
           }
           return false
    
        })
         $(".wrap>main>div").on("wheel DOMMouseScroll",function(event){
        //    console.log(event)
           let E = event.originalEvent
           let delta = 0;

        //    scroll_top = scroll_top + 60;
        //     scroll.style.top = scroll_top + "px";
           if(E.detail){
            delta = E.detail * -0
           }else{
            delta = E.wheelDelta
           }
           
           if(delta<0){
            //마우스 휠을 내렸을 때
            if($(this).next().length!=0){
                let posTop = $(this).next().offset().top - 101
                $("html,body").stop().animate({scrollTop:posTop},1000)
            }
            // $("header").css("background","#fff")
           }else{
            //마우스 휠을 올렸을 때
            if($(this).prev().length!=0){
                let posTop = $(this).prev().offset().top - 101
                $("html,body").stop().animate({scrollTop:posTop},1000)
            }
           }
           return false
    
        })
       




        $("#main_sub2>div").on("wheel DOMMouseScroll",function(event){
            //    console.log(event)
               let E = event.originalEvent
               let delta = 0;
    
            //    scroll_top = scroll_top + 60;
            //     scroll.style.top = scroll_top + "px";
               if(E.detail){
                delta = E.detail * -0
               }else{
                delta = E.wheelDelta
               }
               
               if(delta<0){
                //마우스 휠을 내렸을 때
                if($(this).next().length!=0){
                    let posTop = $(this).next().offset().top - 101
                    $("html,body").stop().animate({scrollTop:posTop},1000)
                }
                // $("header").css("background","#fff")
               }else{
                //마우스 휠을 올렸을 때
                if($(this).prev().length!=0){
                    let posTop = $(this).prev().offset().top - 101
                    $("html,body").stop().animate({scrollTop:posTop},1000)
                }
               }
               return false
        
            })

           


      
   
     








});



