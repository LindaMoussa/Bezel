//
$(window).scroll(function(){

   if($(window).scrollTop()>700)
    {
    $("nav.scroll").css("backgroundColor","white");
    $('.logoword').css("color","black");    
    $(".navbar-dark .navbar-nav .nav-link").css("color","black");
    $(".navIcons i").css("color","black") ;   
        
    }
    else{
        
    $("nav.scroll").css("backgroundColor","rgba(0,0,0,0)");
    $('.logoword').css("color","white"); 
    $(".navbar-dark .navbar-nav .nav-link").css("color","white");
    $(".navIcons i").css("color","white") ;
    }

})
