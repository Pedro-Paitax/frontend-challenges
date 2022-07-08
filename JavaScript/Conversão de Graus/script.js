function transformDegree(degree) {

    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrExists = degree.toUpperCase().includes('F')

    if (!celsiusExists && !fahrExists) {
        throw new Error('Grau não Identificado')
    }

    let count = (fahrenheit) => (fahrenheit - 32) * 5 / 9
    let degreeSign = 'C'
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));

    
    if (celsiusExists) {
        count = (celsius) => celsius * 9/5 + 32
        degreeSign = 'F'
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
    }
    return count(updatedDegree) + degreeSign
}

try {
    console.log(transformDegree('50F'))
    console.log(transformDegree('50C'))

} catch (error) {
    console.log(error.message)
}