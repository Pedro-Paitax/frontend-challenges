let family = {
    received: [2000, 100, 90],
    spent: [1100, 200, 150]
}


function flowControl() {
    const calculateIncomes = sum(family.received);
    const calculateExpenses = sum(family.spent);

    const total = calculateIncomes - calculateExpenses

    let text = "Negativado"

    if (total >= 0) {
        text = "Positivado"
    }
    console.log(`Seu saldo é: ${total}`)
    console.log(`Você está: ${text}`)
}

function sum(array) {
    let total = 0;
    for (let value of array) {
        total += value
    }

    return total
}

flowControl()