
const jwt = require("jsonwebtoken")

function auth(req, res, next) {
    //get token from auth header
    let token = req.get("authorization") //Bearer token format: 'Bearer token"
    token = token?.split(" ")?.[1]
    // check if token exists
    if(!token) {
        return res.status(401).json({data: "unauthenticated"})
    }
    //verify the token using the secret key
    try {
        const payload = jwt.verify(token, "secret")
        //put the payload(id) in the request for other functions to use
        req.userId = payload.id
        next()
    } catch(err) {
        console.log(err)
        return res.status(401).json({ data: "Unauthenticated"})
    }
    

}

module.exports = {
    auth
}