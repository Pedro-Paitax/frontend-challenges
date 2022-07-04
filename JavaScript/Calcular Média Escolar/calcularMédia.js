function getMedia(nota){

    let scoreA = nota >= 90 && nota <= 100
    let scoreB = nota >= 80 && nota <= 89
    let scoreC = nota >= 70 && nota <= 79
    let scoreD = nota >= 60 && nota <= 69
    let scoreF = nota >= 0 && nota < 60
    
    let mediaFinal
    
    if( scoreA ){
        mediaFinal = "A"
    }else if( scoreB ){
        mediaFinal = "B"   
    }else if( scoreC ){
        mediaFinal = "C"
    }else if( scoreD ){
        mediaFinal = "D"
    }else if( scoreF ){
        mediaFinal = "F"
    }else{
        console.log('Nota Inválida')
    }
    
    return mediaFinal
}



