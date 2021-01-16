function calcularMedia(){
    const nomeDeUsuario = document.getElementById('nomeId').value
    const nomeDoCurso = document.getElementById('cursoId').value
    const materiaDoCurso = document.getElementById('materiaId').value
    const notaP1 = document.getElementById('notaP1Id').value
    const notaP2 = document.getElementById('notaP2Id').value
    const notaP3 = document.getElementById('notaP3Id').value
    const notaTrabalho = document.getElementById('trabalhoId').value
    const notaMedia = 6
    const porcentProva = 0.35
    const porcentTRabalho = 0.30

    const resultado = document.getElementById('resposta')
    const status = document.createElement('div')

    if(materiaDoCurso == ''){
        alert("Insira pelo menos o nome da matéria")
    }    
    //CASO A P1 OU P2 SEJA MENOR QUE A NOTA MEDIA
    if(notaP1 < notaMedia || notaP2 < notaMedia){
        if(notaP1 < notaMedia){
            let media = Number(notaP3*porcentProva + notaP2*porcentProva + notaTrabalho*porcentTRabalho).toFixed(1)
            status.innerText = `Sua média em ${materiaDoCurso} é ${media}`
            resultado.appendChild(status)
        }else if(notaP2 < notaMedia){
            let media = Number(notaP1*porcentProva + notaP3*porcentProva + notaTrabalho*porcentTRabalho).toFixed(1)
            status.innerText = `Sua média em ${materiaDoCurso} é ${media}`
            resultado.appendChild(status)
        }
    }
    //CASO A P1 E P2 SEJA MENOR QUE A NOTA MÉDIA PEGAR A MENOR P/SUBSTITUIR COM A NOTAP3
    if(notaP1 < notaMedia && notaP2 < notaMedia){
        if(notaP1 < notaP2){
            let media = Number(notaP3*porcentProva + notaP2*porcentProva + notaTrabalho*porcentTRabalho).toFixed(1)
            status.innerText = `Sua média em ${materiaDoCurso} é ${media}`
            resultado.appendChild(status)
        }else{
            let media = Number(notaP1*porcentProva + notaP3*porcentProva + notaTrabalho*porcentTRabalho).toFixed(1)
            status.innerText = `Sua média em ${materiaDoCurso} é ${media}`
            resultado.appendChild(status)
        }
    }

    //CASO P1 E P2 SEJA MAIOR OU IGUAL A NOTAMEDIA
    if(notaP1 >= notaMedia && notaP2 >= notaMedia){
        let media = Number(notaP1*porcentProva + notaP2*porcentProva + notaTrabalho*porcentTRabalho).toFixed(1)
        status.innerText = `Sua média em ${materiaDoCurso} é ${media}`
        resultado.appendChild(status)
    }

}

//PORXIMO PASSO: ENVIAR OS RESULTADOS DAS RESPECTIVAS NOTAS POR EMAIL CASO O USUARIO QUEIRA


