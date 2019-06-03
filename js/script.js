window.onload = start;
//document.addEventListener('DOMContentLoaded',start) funciona igual que el de arriba
function cambiarColorLuzSemaforo(id, prender)
{
    var color = 'grey';
    if(prender==true)
    {
        color = id;
    }
document.getElementById(id).style.backgroundColor = color;
    
}
var estado = 0;
function onClickBotonCambiar()
{
    console.log(estado);

    switch(estado)
    {
        case 0:
        cambiarColorLuzSemaforo('red', true);
        cambiarColorLuzSemaforo('yellow', !true);
        cambiarColorLuzSemaforo('green', !true);
        break;
        case 1:
        cambiarColorLuzSemaforo('red', true);
        cambiarColorLuzSemaforo('yellow', true);
        cambiarColorLuzSemaforo('green', !true);
        break;
        case 2: 
        cambiarColorLuzSemaforo('red', !true);
        cambiarColorLuzSemaforo('yellow', !true);
        cambiarColorLuzSemaforo('green', true);
        break;
        case 3:
        cambiarColorLuzSemaforo('red', !true);
        cambiarColorLuzSemaforo('yellow', true);
        cambiarColorLuzSemaforo('green', !true);
        break;
        default:
        cambiarColorLuzSemaforo('red', !true);
        cambiarColorLuzSemaforo('yellow', !true);
        cambiarColorLuzSemaforo('green', !true);
        break;
        
    }
    estado ++;
    //estado &=3;  //estado solo con multiplos binarios
    if (estado>3)
    {
        estado=0;
    }
}



var modoAutomatico =false;
var refIntervalAuto;
function ocultarBotonMaual(ocultar)
{
    document.querySelector('#boton-cambiar').style.display = ocultar? //operador ternario
    'none':'block';
    textoBotonAuto(ocultar? 'Modo Manual':'Modo Automatico');
}

function textoBotonAuto(texto)
{
    document.querySelector('#boton-auto').innerHTML=texto;
}

function onClickAuto()
{
    modoAutomatico = !modoAutomatico;
    console.log(modoAutomatico)
    if(modoAutomatico)
    {
        refIntervalAuto =  setInterval(onClickBotonCambiar, 2000);
        ocultarBotonMaual(true);
        
    }else
    {
        clearInterval(refIntervalAuto);
        ocultarBotonMaual(false);        
    }
}
function start()
{
    cambiarColorLuzSemaforo('red', true);
    cambiarColorLuzSemaforo('yellow', !true);
    cambiarColorLuzSemaforo('green', !true);
    textoBotonAuto('modo Automatico')
}
