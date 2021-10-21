function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var date = new Date()
    var hora = date.getHours()
    //var hora = 20
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'foto-manha.png.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        img.src = 'foto-tarde.png.jpg'
        document.body.style.background = '#b9846f'
    } else {
        // BOA NOITE
        img.src = 'foto-noite.png.jpg'
        document.body.style.background = '#515154'
    }
}
