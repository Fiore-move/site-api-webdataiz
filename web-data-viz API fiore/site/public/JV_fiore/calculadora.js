function calc(){
    // selects
    var medidaDePeso = peso[peso.selectedIndex].value
    //inputs
    var pesoTransporte = Number(pesoTransp.value)
    var lucroTransporte = Number(lucroPorPeso.value) // por KILO
    if(medidaDePeso == 'ton'){
        medidaDePeso = 'tonelada'
        lucroTransporte *= 1000
    }else if(medidaDePeso == 'kg'){
        medidaDePeso = 'quilo'
        lucroTransporte *= 1
    }else if(medidaDePeso == 'g'){
        medidaDePeso = 'grama'
        lucroTransporte /= 1000
    }
    var lucroBruto = pesoTransporte * lucroTransporte
    lucroBruto = parseFloat(lucroBruto).toFixed(2)
    lucroTransporte = parseFloat(lucroTransporte).toFixed(2)
    
    // % de rosas perdidas sem/com o sistema
    const porcentagemPerdida = 0.4
    var porcentagemPerdidaCS = porcentagemPerdida * 0.5

    // valores calculados com os inputs:
    var prejuizo = parseFloat((pesoTransporte * porcentagemPerdida) * lucroTransporte).toFixed(2)
    var prejuizoCS = parseFloat((pesoTransporte * porcentagemPerdidaCS) * lucroTransporte).toFixed(2)
    var lucroLiquido = parseFloat(lucroBruto * (1 - porcentagemPerdida)).toFixed(2)
    var lucroLiquidoCS = parseFloat(lucroBruto * (1 - porcentagemPerdidaCS)).toFixed(2)

    // sao perdidos 40% das rosas durante o transporte segundo uma pesquisa da UFSM

    if(pesoTransporte == '' || lucroTransporte == ''){
        alert('Erro! Alguma das caixas de valores está vazia!')
    }else{       
        if(comparativo[0].classList[1] == 'invisible' && comparativo[1].classList[1]){
            comparativo[0].classList.remove('invisible')
            comparativo[0].classList.add('visible')
            comparativo[1].classList.remove('invisible')
            comparativo[1].classList.add('visible')
        }

        contratoNao.innerHTML = `
        <h2>Sem o nosso sistema:</h2>

        <p>Atualmente, com <b>${pesoTransporte} ${medidaDePeso}(s)</b> transportados, cada ${medidaDePeso} proporcionando um lucro estimado de <b>R$${lucroTransporte}</b>, o lucro bruto é de <b>R$${lucroBruto}</b>.

        <p>Todavia, <b>${porcentagemPerdida * 100}%</b> de todas as rosas são perdidas durante o transporte devido à màs condições de conservação e transporte, o que representa um prejuízo de <b>R$${prejuizo}</b> com rosas perdidas no meio do caminho e o lucro líquido seria de <b>R$${lucroLiquido}</b>.
        `

        //`Segundo dados do Centro de Ciências Rurais, dda USFM, cerca das 40% rosas cultivadas são perdidas por más condições de manuseio, conservação e o próprio transporte, ou seja, dentre todas as rosas, serão enviadas em um bom estado, 60%, que representa <strong>${pesoTransporte * 0.6} ${medidaDePeso}</strong>, e um lucro de <strong>${moeda} ${(pesoTransporte * 0.6) * lucroTransporte }</strong>`
        contratoSim.innerHTML = `
        <h2>Com o nosso sistema:</h2>

        <p>Nosso produto, o <b id="FioreMove">FioreMove</b>, tem como proposta diminuir as perdas em até <b>METADE</b>, com nosso produto, o que equivale a <b>${porcentagemPerdidaCS * 100}%</b> de rosas perdidas de todas as rosas, que representa uma redução de prejuízo de <b>R$${prejuizoCS}</b> e seu lucro líquido seria de <b>R$${lucroLiquidoCS}</b></p>
        `
        // `Com base em pesquisas comparando transportes com sistemas de monitoramento e transportes sem sistemas, concluiu-se que, os caminhões que possuem sensores e maneiras de consultar dados do ambiente em que as cargas estão, a perda já existente, abaixa em uma estimativa de 50%(?), ou seja, o desperdício vai de 40% para 20%, representando <strong>${pesoTransporte * (0.8)}${medidaDePeso}</strong>, e um lucro de <strong>${moeda} ${(pesoTransporte * 0.8) * lucroTransporte}</strong> reduzindo os gastos, e consequentemente proporcionando um diferencial, além de diminuir problemas como reclamações de cargas em mal estado e etc. `
    }
}