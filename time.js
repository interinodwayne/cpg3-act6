dialog = document.getElementById("greet");
function startTime(time) {
    document.getElementById('txt').innerHTML =  time.value;
    if(time.value>="00:00"&&time.value<"12:00"){
        dialog.innerHTML= "Good Morning!";
    }if(time.value>"11:59"&&time.value<"18:00"){
        dialog.innerHTML= "Good Afternoon!";
    }if(time.value>="18:00"&&time.value<="23:59"){
        dialog.innerHTML= "Good Evening!";
    }
    dialog.show();
}
  
form = document.getElementById("form");
time = document.getElementById("time");
form.addEventListener("submit", function(event){
    event.preventDefault();
    startTime(time);
})