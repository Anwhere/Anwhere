$(document).ready(function(){

 var inida = 0 ;
 var inidb = 0 ;
 var inidc = 0 ;
 var inidd = 0 ;
 var inide = 0 ;
 var inidf = 0 ;
  

  $("#btnplusa").click(function(){
  	inida += 1;
    $("#btna").text(inida);
    
  });
  $("#btnplusb").click(function(){
  	inidb += 1;
    $("#btnb").text(inidb);
    
  });
  $("#btnplusc").click(function(){
  	inidc += 1;
    $("#btnc").text(inidc);
    
  });
  $("#btnplusd").click(function(){
  	inidd += 1;
    $("#btnd").text(inidd);
    
  });
  $("#btnpluse").click(function(){
  	inide += 1;
    $("#btne").text(inide);
    
  });
  $("#btnplusf").click(function(){
  	inidf += 1;
    $("#btnf").text(inidf);
    
  });

  $("#btndela").click(function(){
  	inida = inida -1;
    $("#btna").text(inida);
    
  });
  $("#btndelb").click(function(){
  	inidb -= 1;
    $("#btnb").text(inidb);
    
  });
  $("#btndelc").click(function(){
  	inidc -= 1;
    $("#btnc").text(inidc);
    
  });
  $("#btndeld").click(function(){
  	inidd -= 1;
    $("#btnd").text(inidd);
    
  });
  $("#btndele").click(function(){
  	inide -= 1;
    $("#btne").text(inide);
    
  });
  $("#btndelf").click(function(){
  	inidf -= 1;
    $("#btnf").text(inidf);
    
  });


  $("#btntime").click(function(){
  	var intDiff = parseInt(150);//倒计时总秒数量
	$(function(){
	    timer(intDiff);
	});
  });

function timer(intDiff){
	    window.setInterval(function(){
	    var minute=0,
	        second=0;//时间默认值        
	    if(intDiff > 0){
	        minute = Math.floor(intDiff / 60) ;
	        second = Math.floor(intDiff) - (minute * 60);
	    }
	    if (minute <= 9) minute = '0' + minute;
	    if (second <= 9) second = '0' + second;
	    $('#minute_show').html('<s></s>'+minute+'分');
	    $('#second_show').html('<s></s>'+second+'秒');
	    intDiff--;
	    }, 1000);
	} 

});