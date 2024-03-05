let input1 = document.querySelector('.input-phy');

let input2 = document.querySelector('.input-math');

let input3 = document.querySelector('.input-chem');

let input4 = document.querySelector('.input-comp');

let paragraph = document.querySelector('#para1');

let parag = document.querySelector('.para2');

let grade = document.querySelector('.para3');

let tMarks = document.querySelector('.para4');







function resultCal() {



  let totalNumber=400;
  let  obtainedNumber= Number(input1.value) + Number(input2.value) + Number(input3.value) + Number(input4.value);

  let percentage=((obtainedNumber/totalNumber)*100);



  tMarks.innerHTML="Total Marks is 400";

  paragraph.innerHTML='Your Obtained Marks is ' + obtainedNumber;

  parag.innerHTML="Your Percentage is " + percentage + " % ";




  if(percentage<=98.99 && percentage>=79.99){

    grade.innerHTML='You Grade is A+'


  }

  else if(percentage<=79.99 && percentage>=69.99){
    grade.innerHTML='Your Grade is A';
  }

  else if(percentage<=69.99 && percentage>=59.99){
    grade.innerHTML='Your Grade is B';
  }

  else if(percentage<=59.99 && percentage>=49.99){
    grade.innerHTML='Your Grade is C';
  }

  else if(percentage<=49.99 && percentage>=39.99){
    grade.innerHTML='Your Grade is D';
  }

  else{

    grade.innerHTML='You are Failed';

  }
  

  

  


 

 

  




 



 


}



