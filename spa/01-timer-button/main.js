$(function(){
  var n=6;
  var $btnAgree=$('input[type="button"]');
  var timer=window.setInterval(()=>{
    if(n===0){
      $btnAgree.val('同意');
      $btnAgree.removeAttr("disabled");
      window.clearInterval(timer);
    
    }else{
      $btnAgree.val('同意('+n+')s');
      n--;
    }
  },1000);
  $btnAgree.click(function(){
    console.log("hello world");
  });
});
