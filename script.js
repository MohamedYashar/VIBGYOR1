const button = document.querySelectorAll(".box");
      
for(let i=0; i<button.length; i++){

button[i].addEventListener("click", ()=>{    

 var colorname = document.querySelector(".res1").innerHTML='You picked the color! :'

 let val = document.querySelector(".res2");

 // It displays the value of the button clicked

  val.innerHTML = button[i].value;

 //   It displays background color dynamically by iteration
  val.style.backgroundColor=button[i].value;


});

}