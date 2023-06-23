function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passos = document.getElementById('passos')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || passos.value.length == 0 || fim.value.length == 0) {
        alert('[ERRO] - Faltam Dados!')
    } else {
        res.innerHTML = 'Contando: <br/>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passos.value)
        if(p <= 0) {
            alert('passo invalido!')
            res.innerHTML = 'vai colocar a merda do numero descente'
        }
        for(let c = i; c <= f; c += p) { // inicia com o valor i (c = 1) , significa que o loop será executado enquanto c for menor ou igual a f(se for maior, vai dar falso), o contador vai receber ele + o passo, se o valor for dois, vai somando mais 2
            res.innerHTML += `${c} → ` // vai ser contando concatenando(+) com o C
        }
        res.innerHTML = 'toma'
            for(let c = i; c >= f; c -= p) { // contagem recrescente
                res.innerHTML += `${c} → `
            }
        
    }
}
