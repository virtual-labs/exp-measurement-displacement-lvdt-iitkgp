/*var flowRate = 0; //initial flow rate
var pipeHeight = document.getElementById("pipe").clientHeight;

setInterval(function() {
  var waterHeight = flowRate / 100 * pipeHeight;
  document.getElementById("pipe").style.backgroundPositionY = waterHeight + "px";
}, 100);
*/



function uflow(){
	
	
	setTimeout(function(){
		   document.getElementById('pipe2').classList.add("uflow");
	   },2000);
	   
	     /* lower pipe gas flow */
	  setTimeout(function(){
		   document.getElementById('gas1').classList.add("gflow1");
	   },1000); 
	   setTimeout(function(){
		   document.getElementById('gas2').classList.add("gflow1");
	   },1000); 
	   setTimeout(function(){
		   document.getElementById('gas3').classList.add("gflow1");
	   },1000); 
	    setTimeout(function(){
		   document.getElementById('gas').classList.add("gflow");
	   },1000);
	    
		/*setTimeout(function(){
		   document.getElementById('gas').classList.add("gflowstop");
	   },18000); */
	   	   
	 
}	

function tankflow(){
	setTimeout(function(){
	       document.getElementById('drop').classList.add("dflow");
	  },32000);
	setTimeout(function(){
	       document.getElementById('drop1').classList.add("dflow");
	  },10500);
	
	 setTimeout(function(){
		   document.getElementById('basin').classList.add("bflow");
	   },15000);
	   setTimeout(function(){
		   document.getElementById('basin2').classList.add("lbflow");
	   },33000);
	   
	   /*setTimeout(function(){
		   document.getElementById('tank').classList.add("cflow");
	   },15000); 
	   setTimeout(function(){
		   document.getElementById('gas').classList.add("gflow");
	   },800); 
	   
	    setTimeout(function(){
		   document.getElementById('gas').classList.add("gflowstop");
	   },18000); */
	   
	   setTimeout(function(){
		   document.getElementById('drop').classList.add("dflowstop");
	   },80000);
	   setTimeout(function(){
		   document.getElementById('drop1').classList.add("dflowstop");
	   },80000);
	   
	   setTimeout(function(){
		   document.getElementById('tank').classList.add("cflowstop");
	   },22000);
	   
	 
	  
	   
	   /* pipe water 1 wpuflow */
	   setTimeout(function(){
		   document.getElementById('wpipe').classList.add("wpuflow");
	   },500);
	     /* pipe water 2 wpu1flow */
	   setTimeout(function(){
		   document.getElementById('wpipe2').classList.add("wpu2flow");
	   },4000);
	   
	  /* pipe water 3 wpu1flow */
	  setTimeout(function(){
		   document.getElementById('wpipe3').classList.add("wpu3flow");
	   },8000);
	   
	    /* pipe water 4 wpu1flow */
	   setTimeout(function(){
		   document.getElementById('wpipe4').classList.add("wpu4flow");
	   },21000);
	    /* pipe water 5 wpu1flow */
	   setTimeout(function(){
		   document.getElementById('wpipe5').classList.add("wpu5flow");
	   },25000);
	    /* pipe water 6 wpu1flow */
	   setTimeout(function(){
		   document.getElementById('wpipe6').classList.add("wpu6flow");
	   },29000);
	    /* pipe water 7 wpu1flow */
	   setTimeout(function(){
		   document.getElementById('wpipe7').classList.add("wpu7flow");
	   },32000);
	   
	   
	    setTimeout(function(){
		   document.getElementById('wpipe7').classList.remove("wpu7flow");
	   },85000);
	    setTimeout(function(){
		   document.getElementById('wpipe6').classList.remove("wpu6flow");
	   },86000);
	   
	    setTimeout(function(){
		   document.getElementById('wpipe3').classList.remove("wpu3flow");
	   },87000);
	    setTimeout(function(){
		   document.getElementById('wpipe2').classList.remove("wpu2flow");
	   },88000);
	   setTimeout(function(){
		   document.getElementById('wpipe').classList.remove("wpuflow");
	   },89000);
	   
	   
}
















