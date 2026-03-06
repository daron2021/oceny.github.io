document.addEventListener("keydown", function(event){

if(event.key === "Tab"){

event.preventDefault();

let uczen = document.getElementById("uczen");
let button = document.querySelector("button");

if(document.activeElement === uczen){
button.focus();
}
else{
uczen.focus();
}

}

});

let uczen = document.getElementById("uczen");

uczen.addEventListener("focus", function(){
    this.select();
});

document.addEventListener("keydown", function(event){
    if(Event.key === "Enter"){
        policz()
    }
});

function policz(){
    let uczen = document.getElementById("uczen").value;
    let max = document.getElementById("max").value;

    let procent = uczen / max * 100;
    procent = procent.toFixed(0);

    let ocena;
    let color;

    if(procent >= 96){
        ocena = 6;
        color = "green";
    }
    else if(procent >= 86){
        ocena = 5;
        color = "lightgreen";
    }
    else if (procent >= 71){
        ocena = 4;
        color = "yellow";
    }
    else if (procent >= 51){
        ocena = 3;
        color = "orange";
    }
    else if (procent >= 36){
        ocena = 2;
        color = "red";
    }
    else {
        ocena = 1;
        color = "darkred";
    }

    document.getElementById("wynik").innerHTML = uczen + ' / ' + max + ' | ' + 'Procent: <span style="color:'+color+'; font-weight:bold; font-size:30px;">'+ procent +'%</span> | Ocena: <span style="color:'+color+'; font-weight:bold; font-size:30px;">'+ ocena +'</span>';
    document.getElementById("uczen").value = ""
    document.getElementById("uczen").focus();
}