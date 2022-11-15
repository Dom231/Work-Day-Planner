//creating initial element id's for hour boxes 
var hour10 = document.getElementById('10');
hour10 = 10 ;
var hour9 = document.getElementById('hour9');
hour9 = 9 ;
var hour11 = document.getElementById('11');
hour11 = 11 ;
var hour12 = document.getElementById('12');
hour12 = 12 ;
var hour13 = document.getElementById('1');
hour13 = 13 ;
var hour14 = document.getElementById('2');
hour14 = 14 ;
var hour15 = document.getElementById('3');
hour15 = 15 ;
var hour16 = document.getElementById('4');
hour16 = 16 ;
var hour17 = document.getElementById('5');
hour17 = 17 ;

//creating text boxes for each hour in hour schedule 
var textAreaEl = document.querySelector('textarea');

var textArea1El = document.getElementById("textarea1");
var textArea2El = document.getElementById("textarea2");
var textArea3El = document.getElementById("textarea3");
var textArea4El = document.getElementById("textarea4");
var textArea5El = document.getElementById("textarea5");
var textArea6El = document.getElementById("textarea6");
var textArea7El = document.getElementById("textarea7");
var textArea8El = document.getElementById("textarea8");
var textArea9El = document.getElementById("textarea9");

//Set time on top of the page 
var current = moment();
var eCurrentDay = document.getElementById('currentDay');
eCurrentDay.innerHTML = current.format('dddd, MMM Do');
var hour10 = document.getElementById('10');
var currentHr = current.hour();
console.log( currentHr);


//will chnage the colore to green, red , or grey depedning on the time of day

//for hour 9
 if (hour9 == currentHr){
console.log("yes");
textArea1El.setAttribute("style","background-color: #ff6961");
 } 
 else if (hour9 > currentHr){
textArea1El.setAttribute("style","background-color: #77dd77");
 }
 else{
textArea1El.setAttribute("style","background-color: #d3d3d3");
    console.log("urila");

 }

//for hour 10
  if (hour10 == currentHr){

 textArea2El.setAttribute("style","background-color: #ff6961");
  } 
  else if (hour10 > currentHr){

     textArea2El.setAttribute("style","background-color: #77dd77");
  }
  else{

     textArea2El.setAttribute("style","background-color: #d3d3d3");
   //   var textArea2El= document.createElement('textarea')
 
  }
  
  //for hour 11
  if (hour11 == currentHr){

    textArea3El.setAttribute("style","background-color: #ff6961");
     } 
     else if (hour11 > currentHr){
   
        textArea3El.setAttribute("style","background-color: #77dd77");
     }
     else{
   
        textArea3El.setAttribute("style","background-color: #d3d3d3");
    
     }

//for hour 12   
 if (hour12 == currentHr){

        textArea4El.setAttribute("style","background-color: #ff6961");
         } 
    else if (hour12 > currentHr){
       
            textArea4El.setAttribute("style","background-color: #77dd77");
         }
    else{
       
            textArea4El.setAttribute("style","background-color: #d3d3d3");
        
         }    
//for hour 13
if (hour13 == currentHr){
    console.log("yes");
    textArea5El.setAttribute("style","background-color: #ff6961");
     } 
     else if (hour13 > currentHr){
        textArea5El.setAttribute("style","background-color: #77dd77");
     }
     else{
        textArea5El.setAttribute("style","background-color: #d3d3d3");
        console.log("urila");
    
     }
    
    //for hour 14
if (hour14 == currentHr){
    
     textArea6El.setAttribute("style","background-color: #ff6961");
      } 
      else if (hour14 > currentHr){
    
         textArea6El.setAttribute("style","background-color: #77dd77");
      }
      else{
    
         textArea6El.setAttribute("style","background-color: #d3d3d3");
     
      }
      
      //for hour 15
 if (hour15 == currentHr){
    
        textArea7El.setAttribute("style","background-color: #ff6961");
         } 
         else if (hour15 > currentHr){
       
            textArea7El.setAttribute("style","background-color: #77dd77");
         }
         else{
       
            textArea7El.setAttribute("style","background-color: #d3d3d3");
        
         }
    
    //for hour 16   
if (hour16 == currentHr){
    
            textArea8El.setAttribute("style","background-color: #ff6961");
             } 
        else if (hour16 > currentHr){
           
                textArea8El.setAttribute("style","background-color: #77dd77");
             }
        else{
           
                textArea8El.setAttribute("style","background-color: #d3d3d3");
            
             }    
    //for hour 17  
if (hour17 == currentHr){
    
        textArea9El.setAttribute("style","background-color: #ff6961");
         } 
    else if (hour17 > currentHr){
       
            textArea9El.setAttribute("style","background-color: #77dd77");
         }
    else{
       
            textArea9El.setAttribute("style","background-color: #d3d3d3");
        
         }    