function carregar(){
    // var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    //Bom dia
    if (hora >= 0 && hora < 12 ){
        img.src = 'amanhecer.png'
        document.body.style.background = '#dcd2b8'
        //Boa tarde
    } else if (hora >=12 && hora <= 18 ){
        img.src = 'entardecer.png'
        document.body.style.background = '#945f6c'
    } else {
        //Boa noite
        img.src = 'anoitecer.png'
        document.body.style.background = '#1c2f44'
    }
}
