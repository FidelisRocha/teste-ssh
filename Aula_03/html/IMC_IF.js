let peso = Number(Window.prompt ('Digite um peso:'));
let altura = Number(Window.prompt (' Digite um altura:'));
imc = peso/(altura**2);
if (imc < 18.5){
    console.log('Seu imc esta a baixo do ideal');
}
if (imc >=18.5 & imc <= 24.9){
    console.log('Seu imc estar normal');
}
if (imc >24.9 & imc <=29.9){
    console.log('Seu tem sobre peso');
}
if (imc >29.9 & imc <=34.9){
    console.log('Voce tem obsidade de Grau I');
}
if (imc >34.9 & imc <39.9){
    console.log('Voce te obsidade de Grau II');
}
if (imc > 40){
    console.log('Voce tem obsidade Grau III ou morbida');
}