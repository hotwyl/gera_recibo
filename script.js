function gerarRecibo() {
    // document.getElementById('recibo_motivo').innerHTML = document.getElementById('motivo').value
    // document.getElementById('recibo_valor').innerHTML = parseFloat(document.getElementById('valor').value).toLocaleString('pt-BR', { minimumFractionDigits: 2 })
    // document.getElementById('recibo_razao').innerHTML = document.getElementById('razao').value
    // document.getElementById('recibo_docrazao').innerHTML = document.getElementById('docrazao').value
    // document.getElementById('recibo_emitente').innerHTML = document.getElementById('emitente').value
    // document.getElementById('recibo_docemitente').innerHTML = document.getElementById('docemitente').value
    // document.getElementById('recibo_motivo').innerHTML = document.getElementById('motivo').value
    // document.getElementById('recibo_observacao').innerHTML = document.getElementById('observacao').value
    // document.getElementById('recibo_data').innerHTML = dataAtual()
    let motivo = document.getElementById('motivo').value
    let valor = parseFloat(document.getElementById('valor').value).toLocaleString('pt-BR', { minimumFractionDigits: 2 })
    let razao = document.getElementById('razao').value
    let docrazao = document.getElementById('docrazao').value
    let emitente = document.getElementById('emitente').value
    let docemitente = document.getElementById('docemitente').value
    let observacao = document.getElementById('observacao').value
    let data = dataAtual()
    let recibo = ''

    if (razao.length <= 0) {
        alert('compo Razão obrigatório')
        return false
    } else {
        recibo += 'Recebi (emos) de ' + razao
    }

    if (docrazao.length <= 0) {
        alert('compo Doc Razao obrigatório')
        return false
    } else {
        recibo += ', ' + docrazao
    }

    if (valor.length <= 0) {
        alert('compo Valor obrigatório')
        return false
    } else {
        recibo += ', a quantia de R$ ' + valor
    }

    if (motivo.length <= 0) {
        alert('compo Motivo obrigatório')
        return false
    } else {
        recibo += ' correspondente a ' + motivo
    }

    if (observacao.length > 5) {
        recibo += '<br>' + observacao
    }

    if (emitente.length <= 0) {
        alert('compo obrigatório')
        return false
    } else {
        recibo += '<br>' + emitente
    }

    if (docemitente.length <= 0) {
        alert('compo obrigatório')
        return false
    } else {
        recibo += ' - ' + docemitente
    }

    document.getElementById('reciboGerado').innerHTML = recibo
    window.print()
}

function dataAtual() {
    let data = new Date();
    return data.toLocaleDateString('pt-BR')
}