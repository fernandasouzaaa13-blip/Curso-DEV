let temperatura_Corporal = 39;
let saturacao = 100;
if(saturacao<90){
    console.log("Emergência");
}else if(saturacao<=94 ||temperatura_Corporal>39){
    console.log("Urgência");
}else if(temperatura_Corporal>=37.8){
    console.log("Atenção");
}else{
    console.log("Normal.")
}