


$(".review").click(function(){
    let val = $(this).val();
    
    $(".thanks svg").after(`<div class="thanksStyle2"><p class="thanksStyle">You selected ${val} out of 5</p></div>`);

    
})






$("#submit").click(function(){
    $(".box").hide();
    $(".thanks").show();
    
    

})




