document.getElementById("answer_idol").style.display="none";


var objetoAdoracion = "objeto";
document.getElementById("question_button").onclick = function(){
    objetoAdoracion = document.getElementById("question_input").value;
    confrontarObjetoAdoracion(objetoAdoracion);
}


function confrontarObjetoAdoracion(objeto){
    if(objeto===""){
        document.getElementById("answer_idol").style.display = "flex";
        document.getElementById("answeridol_output1").innerHTML="No has definido que es lo que mas amas";
    }else if(objeto==="Dios"){
        adorarDios();
    }else{
        adorarIdolo(objeto);
    }
}

function adorarIdolo(objeto){
    document.getElementById("answer_idol").style.display = "flex";
    document.getElementById("answeridol_output1").innerHTML="Tienes a un ídolo";
    document.getElementById("answeridol_output2").innerHTML="Vives para tu "+objeto;
    document.getElementById("answeridol_output3").innerHTML="Te haces matar por tu "+objeto;
    document.getElementById("answeridol_output4").innerHTML="Trabajas por tu "+objeto;
    document.getElementById("answeridol_output5").innerHTML="Tienes una mente que solo piensa en tu "+objeto;
    document.getElementById("answeridol_output6").innerHTML="Tu corazón le pertenece a tu "+objeto;
}

function adorarDios(){
    document.getElementById("answer_idol").style.display = "flex";
    document.getElementById("answeridol_output1").innerHTML="Amas a Dios sobre todas las cosas";
    document.getElementById("answeridol_output2").innerHTML="Das tu vida por y para Dios";
    document.getElementById("answeridol_output3").innerHTML="Tienes un corazón integro y unificado";
    document.getElementById("answeridol_output4").innerHTML="Trabajas por Dios y para Dios";
    document.getElementById("answeridol_output5").innerHTML="Tienes una mente preparada para la aflicción";
    document.getElementById("answeridol_output6").innerHTML="Todo lo anterior te permite amar en la dimensión correcta a tus padres, esposa, hijos y trabajo del mismo modo que puedes deleitarte sanamente en los placeres que Dios te ha dado en este mundo";
}

document.getElementById("answeridol_clear").onclick = function(){
    document.getElementById("answer_idol").style.display = "none";
    document.getElementById("question_input").value="";
}




