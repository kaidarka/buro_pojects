$(document).ready(function(){
   $.each($('.radiobuttons-item'),function(index, val){
       if($(this).find('input').prop('checked')==true){
           $(this).addClass('active');
       }
   });
    $(document).on('click', '.radiobuttons-item', function(event){
        $(this).parents('.radiobuttons').find('.radiobuttons-item').removeClass('active');
        $(this).parents('.radiobuttons').find('.radiobuttons-item input').prop('checked', false);
        $(this).toggleClass('active');
        $(this).find('input').prop('checked',true);
        return false;
    });
    $.each($('.radiobuttons-item-2'),function(index, val){
       if($(this).find('input').prop('checked')==true){
           $(this).addClass('active');
       }
   });
    $(document).on('click', '.radiobuttons-item-2', function(event){
        $(this).parents('.radiobuttons').find('.radiobuttons-item-2').removeClass('active');
        $(this).parents('.radiobuttons').find('.radiobuttons-item-2 input').prop('checked', false);
        $(this).toggleClass('active');
        $(this).find('input').prop('checked',true);
        return false;
    });
    $.each($('.radiobuttons-item-3'),function(index, val){
       if($(this).find('input').prop('checked')==true){
           $(this).addClass('active');
       }
   });
    $(document).on('click', '.radiobuttons-item-3', function(event){
        $(this).parents('.radiobuttons').find('.radiobuttons-item-3').removeClass('active');
        $(this).parents('.radiobuttons').find('.radiobuttons-item-3 input').prop('checked', false);
        $(this).toggleClass('active');
        $(this).find('input').prop('checked',true);
        return false;
    });
});