var ganeLaCarrera=false;

if(ganeLaCarrera==true){
	console.log("Ganaste");
}
else{
	console.log("Perdiste");
}


var posicionEnLaCarrera=6;

if(posicionEnLaCarrera==1){
	console.log("FELICITACIONES, SALISTE 1R");
}else if(posicionEnLaCarrera==2){
	console.log("Te falto poquito para ganar");
}else if(posicionEnLaCarrera==3){
	console.log("Sos un orgullo para tu familia");
}else if(posicionEnLaCarrera>3){
	console.log("Volvé a tu casa");
}

var posicionEnLaCarrera=6;
var mensaje;

if(posicionEnLaCarrera==1){
	mensaje="FELICITACIONES, SALISTE 1R";
}else if(posicionEnLaCarrera==2){
	mensaje="Te falto poquito para ganar";
}else if(posicionEnLaCarrera==3){
	mensaje="Sos un orgullo para tu familia";
}else if(posicionEnLaCarrera>3){
	mensaje="Volvé a tu casa";
}
console.log(mensaje);

