// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const resultado = document.getElementById('resultado') 

function agregarAmigo(){
    resultado.innerHTML=''
    const amigo = document.getElementById('amigo');
    const nombreS = amigo.value;
    if(nombreS!=''){
        let nombreA = document.createElement('li');
        nombreA.textContent=nombreS;
        listaAmigos.append(nombreA)
        amigo.value=''
    }else{
        window.alert("El campo nombre no puede estar vacio")
    }
    
}

function sortearAmigo(){
    const listaAmigos = document.querySelectorAll('#listaAmigos li');
    const lista = Array.from(listaAmigos);
    if(lista.length!=0){
        const indiceAleatorio = Math.floor(Math.random() * lista.length);
        const sorteo = lista[indiceAleatorio].textContent;
        let sorteoN = document.createElement('li');
        sorteoN.textContent = sorteo;
        const limpiar = document.getElementById('listaAmigos')
        limpiar.innerHTML=''
        resultado.append(sorteoN)
    }else{
        window.alert("Agrega Amigos para hacer el sorteo")
    }
    
}