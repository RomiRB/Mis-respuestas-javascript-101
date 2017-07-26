var juanMasAlta=10;
var pedroMasBaja=8;
var notaMasAltaMensaje;

if(juanMasAlta>pedroMasBaja){
	notaMasAltaMensaje="La nota más alta es la de Juan: "+ juanMasAlta;
	console.log(notaMasAltaMensaje);
}else if(juanMasAlta<pedroMasBaja){
	notaMasAltaMensaje="La nota más alta es la de Pedro: "+ pedroMasBaja;
	console.log(notaMasAltaMensaje);
}else if(juanMasAlta==pedroMasBaja){
	console.log("Ambos hijos tuvieron la misma nota");
}


var compra=500;
var descuento=compra*15/100;
var pagar=compra-descuento;

if(compra>100){
	console.log("Tu descuento es de: $"+ descuento+ " ,debes pagar: $" + pagar);
}else{
	console.log("No se tienes descuento");
}


