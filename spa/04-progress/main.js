$(function(){
  var stop=$('#stop');
  var start=$('#start');
  var reset=$('#reset');
  var progress=$('#progress');
  var flage=false;
  var n=0;
  start.click(()=>{
    if(!flage){
      flage=true;
       timer=window.setInterval(()=>{
         n++;
        progress.attr('value',n)
      },100)
     
    }    
  })
  stop.click(()=>{
    if(flage){
    window.clearInterval(timer);
    flage=false;
   }
  })
  reset.click(()=>{
    n=0;
    progress.attr('value',n);
  })
});
