/*Tu programa debe leer una variable llamada "dayNumber" e imprimir (con console.log) el día correspondiente de la semana, donde 0 es domingo y 6 es sábado.
Para cualesquiera otros valores, tu programa debe imprimir "Número de día inválido".*/
/*
var dayNumber = prompt("Ingresa el numero del dia: ")

function day(){
    if(dayNumber == 0){
        console.log("Domingo");
    }else if(dayNumber == 1){
        console.log("Lunes");
    }else if(dayNumber == 2){
        console.log("Martes");
    }else if(dayNumber == 3){
        console.log("Miercoles");
    }else if(dayNumber == 4){
        console.log("Jueves");
    }else if(dayNumber == 5){
        console.log("Viernes");
    }else if(dayNumber == 6){
        console.log("Sabado");
    }else{
        console.log("Numero de dia Invalido")
    }
}

day();*/

/*var dayNumber = parseInt(prompt("Ingresa el numero del dia: "))



    switch(dayNumber){
        case 0: 
        alert("Domingo ");
        break;
        case 1: 
        alert("Lunes ");
        break;
        case 2: 
        alert("Martes ");
        break;
        case 3: 
        alert("Miercoles ");
        break;
        case 4: 
        alert("Jueves ");
        break;
        case 5: 
        alert("Viernes ");
        break;
        case 6: 
        alert("Sabado ");
        break;

        default:
            alert("Dia no valido");
            break;
    }*/

/*
    function yes(){
        alert("Eres Digno?");

        var name = prompt("Cual es tu nombre: ");

        alert("Hola "+name);
    var edad = prompt("Cual es tu edad: ");

    if(edad>=18 &&  edad<=29){
        alert("Felicidades, cumples con los requisitos para ser aceptado en el Bootcamp Java Full Stack de Generation!");
    }else{
        alert("No cumple con los requisitos para el programa");
    }

    console.log("Tu nombre es: "+ name);
    console.log("Tu edad es: "+edad);

    }

    yes();*/

//Exercise #1 Part1
//sabado es 6 y domingo es 0 entonces no son considerados
function businessHours(dayNumber,hourNumber){

        if(hourNumber>=9 && hourNumber<=18 && dayNumber>=1 && dayNumber<=5){
          return true;
        } else {
          return false;
        }

    }

    console.log(businessHours(5,8));



//Exercise #1 part
var yearDayNumber = prompt("Indica el número de día :")
var janfirstDayNumber = yearDayNumber % 7;
if(yearDayNumber>=0&&yearDayNumber<=365){
	var janfirstDayNumber = yearDayNumber % 7;
if(janfirstDayNumber==0){
	alert("El día fue lunes");
}else if(janfirstDayNumber==1){
	alert("El dia fue martes");
}else if(janfirstDayNumber==2){
	alert("El dia fue miércoles");
}else if(janfirstDayNumber==3){
	alert("El dia fue jueves");
}else if(janfirstDayNumber==4){
	alert("El dia fue viernes");
}else if(janfirstDayNumber==5){
	alert("El dia fue sábado");
}else if(janfirstDayNumber==6){
	alert("El dia fue domingo");
}else{
	alert("Lo sentimos el año solo tiene 365 días");
};
}else{
		alert("Lo sentimos el año solo tiene 365 días");
};

