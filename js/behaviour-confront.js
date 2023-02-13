document.getElementById("answer_idol").style.display="none";


var objetoAdoracion = "objeto";
document.getElementById("question_button").onclick = function(){
    objetoAdoracion = document.getElementById("question_input").value;
    confrontarObjetoAdoracion(objetoAdoracion);
}


function confrontarObjetoAdoracion(objeto){
    if(objeto===""){
        alert("No me has dicho que amas");
    }else if(objeto==="Dios"){
        adorarDios();
    }else{
        adorarIdolo();
    }
}

function adorarIdolo(){
    alert("Adoras a un idolo")
}

function adorarDios(){
    alert("amas a Dios!");
}




