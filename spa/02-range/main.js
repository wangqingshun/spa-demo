$(function(){
  var range=$("#range");
  var age=$('#age');
  age.html(range.val());
  range.change(()=>{
    age.html(range.val());
    console.log(range.val());
  })
  
});
