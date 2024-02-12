$('.tab').click(function(){
   var target = $(this).attr('data-targetcontent');
   target ='.'+ target;
   $('.tab-area-content').removeClass('active animate__animated wow animate__heartBeat');
   $(target).toggleClass('active animate__animated wow animate__heartBeat');
});