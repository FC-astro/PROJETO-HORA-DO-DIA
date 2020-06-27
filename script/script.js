function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'img/manha.png'
        document.body.style.background = 'gradient(to bottom, rgba(255, 240, 36, 0.829),rgba(45, 224, 236, 0.829) )'
    }else if (hora >= 12 && hora < 18){
        img.src = 'img/tarde.png'
        document.body.style.background = 'rgba(218, 53, 12, 0.750)'
    }else{
        img.src = 'img/noite.png'
        document.body.style.background = 'rgba(39, 2, 108)'
    }
}