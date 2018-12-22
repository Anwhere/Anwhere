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

});