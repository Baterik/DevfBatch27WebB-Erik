// funciones anonimas autoejecutables// IIFE (immediatly invoke function)
(function(){
    return console.log("Soy una funcion anonima...")
})();

//FUNCION ANONIMA DE FLECHA//
(()=>{
    return console.log("Soy una funcion anónima autoejecutable de flecha...")
})();

(function (a,b) {
    return console.log(a + b);    
})(67, 9);

//TRANSFORMAR LA IIFE ANTERIOR EN UNA FUNCION FLECHA//
((a,b)=>{
    return console.log(a + b);
})(5, 5);

//simplificando la funcion anterior
((a,b) => console.log(a+b))(3,16);