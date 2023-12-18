$(document).ready(function(){
    $('.smali-images img').click(function(){
         var image = $(this).attr('src');
        $('.big-image img').attr('src', image);
    });
});