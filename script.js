function confir(){
    let bebe = window.document.getElementById('bebe')
    let naoBebe = window.document.getElementById('nbebe')
    let crianca = window.document.getElementById('crianca')
    let res = window.document.getElementById('res')

    if(Number(bebe.value) == 0|| Number(naoBebe.value) == 0 || Number(crianca.value) == 0){

        alert('Digite um valor')
    }else{

        res.innerHTML = ''
    let criancaCarne = 0.2
    let adultocarne = 0.4
    let acom = 0.2
    let cerveja = 2 
    let refrigerante = 0.5
    let agua = 0.5

    let crianca
    let nBebe 
    let bebe
    

    crianca = Number(crianca.value) * criancaCarne
    nBebe = Number(naoBebe.value) * adultocarne
    bebe = Number(bebe.value) * adultocarne 
    let calcCar = nBebe + bebe +crianca
    res.innerHTML += ` <p>Total de Carne: ${calcCar}kg</p>`

    
    crianca = Number(crianca.value) * acom
    nBebe = Number(naoBebe.value) * acom
    bebe = Number(bebe.value) * acom 
    let acompa = nBebe + bebe + crianca
    res.innerHTML += ` <p>Total de acompanhamento : ${acompa}kg</p>` 

    bebe = Number(naoBebe.value) * cerveja
    res.innerHTML += ` <p>Total de cerveja : ${bebe.toFixed(2)}kg</p>` 

    

    nBebe = Number(naoBebe.value) * refrigerante
    crianca = Number(crianca.value) * refrigerante
    let total = crianca + nBebe
    res.innerHTML += ` <p>Totoal de refrigerante : ${total.toFixed(2)}kg</p>`

    crianca = Number(crianca.value) * agua
    nBebe = Number(naoBebe.value) * agua
    bebe = Number(bebe.value) * agua
    let soma = bebe + nBebe + crianca

    res.innerHTML += ` <p>Total de água : ${soma.toFixed(2)}L</p>`

    }
}