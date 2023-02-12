const isLogged = (req, res, next) => {
    let logged = true
    if(logged){
        next()
    }else{
        res.send('No master, usted no pasa de aqui')
    }
    
}


exports.isLogged = isLogged