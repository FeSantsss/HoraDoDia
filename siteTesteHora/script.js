function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('foto')
var tempo = new Date()
var hora = tempo.getHours()
if (hora >= 0 && hora <= 12){
    //bom dia
    img.src = 'fotomanha.png'
    document.body.style.background = '#CAAF57'
    msg.innerHTML = `agora são ${hora} da manhã, BOM DIA!`
} else if (hora > 12 && hora <=17){
    //boa tarde
    img.src = 'fototarde.png'
    document.body.style.background = '#4D3006'
    msg.innerHTML = `agora são ${hora} da tarde, BOA TARDE!`
} else {
    //boa noite
    img.src='fotonoite.png'
    document.body.style.background = '#020F44'
    msg.innerHTML = `agora são ${hora} da noite, BOA NOITE!`
}
}