const authorization = () => {
    try{
        const {authorization} = req.headers
        if(!(authorization.startsWith("Bearer"))){
            res.send("No token Provided")
        }
        const verification = jwt.verify(authorization.split(" ")[1],process.env.JWT_SECRET)
        req.headers.loggedUser = verification
        next()
    }catch(err){
        res.status(500).send("Something Went Wrong!")
    }
}