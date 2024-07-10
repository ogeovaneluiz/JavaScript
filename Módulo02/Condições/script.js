function carregar() { 
    var msg = document.getElementById("msg");
    var foto = document.getElementById("imagem");   
    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 12) {
        foto.src = 'imagem/manhã.png';
        document.body.style.backgroundColor = '#a75218'
    } else if (hora >= 12 && hora < 18) {
        foto.src = 'imagem/tarde.png';
        document.body.style.backgroundColor = '#ffc16a'
        
    } else {
        foto.src = 'imagem/noite.png';
        document.body.style.backgroundColor = '#052f52'
    }
}