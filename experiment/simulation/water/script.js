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
	   
	   setTimeout(function(){
		   document.getElementById('tick').classList.add("movetick");
	   },3000);
	   
	   	   
	 
}	

function tankflow(){
	setTimeout(function(){
	       document.getElementById('drop').classList.add("dflow");
	  },2000);
	
	
	 setTimeout(function(){
		   document.getElementById('basin').classList.add("bflow");
	   },10000);
	   setTimeout(function(){
		   document.getElementById('tank').classList.add("cflow");
	   },10000);
	   setTimeout(function(){
		   document.getElementById('gas').classList.add("gflow");
	   },800);
	   
	    setTimeout(function(){
		   document.getElementById('gas').classList.add("gflowstop");
	   },18000);
	   
	   setTimeout(function(){
		   document.getElementById('drop').classList.add("dflowstop");
	   },22000);
	   
	   setTimeout(function(){
		   document.getElementById('tank').classList.add("cflowstop");
	   },22000);
	   
	  setTimeout(function(){
		   document.getElementById('pipe2').classList.remove("uflow");
	   },22000); 
	   
	 setTimeout(function(){
		   document.getElementById('tick').classList.remove("movetick");
	   },22000);  
	   
	setTimeout(function(){   
	 moveDown();  
	 },22000);    
	   
	   
	   
	
}

function moveUp() {
  let rectangle = document.getElementById("rectangle");
  let position = 78;
  let id = setInterval(frame, 50);
  
  function frame() {
    if (position == 81) {
      clearInterval(id);
    } else {
      position++;
      rectangle.style.bottom = position + "%";
    }
  }
}

function moveDown() {
  let rectangle = document.getElementById("rectangle");
  let position = 81;
  let id = setInterval(frame, 50);
  
  function frame() {
    if (position == 78) {
      clearInterval(id);
    } else {
      position--;
      rectangle.style.bottom = position + "%";
    }
  }
}














/*const meterIndicator = document.querySelector('.meter-indicator');
const maxValue = 50; // The maximum value of the gas meter
let currentValue = 10; // The current value of the gas meter

function updateMeter(value) {
  const percent = (value / maxValue) * 100; // Calculate the percentage of the current value relative to the maximum value
  const angle = percent * 1.8; // Calculate the angle to rotate the meter indicator
  meterIndicator.style.transform = `rotate(${angle}deg) translateY(-50%)`; // Apply the rotation and translation to the meter indicator
}

updateMeter(currentValue); // Initialize the meter with the current value

// Example of updating the meter value over time
setInterval(() => {
  currentValue += 10; // Increase the current value by 10
  if (currentValue > maxValue) {
    currentValue = 0; // Reset the current value if it exceeds the maximum value
  }
  updateMeter(currentValue);
}, 50); // Update the meter every second
*/






