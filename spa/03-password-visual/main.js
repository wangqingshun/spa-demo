$(function(){
  var psw=$('#psw');
  var e=$('#eye');
  var pswval=$('#pswval');
  psw.on('input',()=>{
    pswval.val(psw.val());
  })
  e.mouseover(()=>{
    pswval.css("z-index",'10');
    psw.focusin();
  })
  e.mouseout(()=>{
    pswval.css('z-index','-10')
  })
});
