function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('ERROR! Digite novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade , 10) {
                // Criança
                img.setAttribute('src', 'criança-masculina.jpg')
            } else if (idade >= 10 && idade < 21 ) {
                // Jovem
                img.setAttribute('src', 'jovem-masculino.jpg')
            } else if (idade >= 21 && idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto-masculino.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'velho-masculino.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'criança-feminina.jpg')
            } else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem-feminina.jpg')
            } else if (idade >= 21 && idade < 50) {
                //Adulta
                img.setAttribute('src', 'adulta-feminina.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'velha-feminina.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}