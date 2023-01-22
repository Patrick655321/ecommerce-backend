
const jwt = require("jsonwebtoken")

function admin(req, res, next) {
    if(!req.payload.is_admin) {
        return res.status(401).json({Data: "NO!"})
    }
    next()
    }


    // // get token from admin header
    // let token = req.get("authorization") //Bearer token format: 'Bearer token"
    // token = token?.split(" ")?.[1]
    // //  check if token exists
    // if(!token) {
    //     return res.status(401).json({data: "unauthenticated"})
    // }
    // //verify the token using the secret key
    // try {
    //     const payload = jwt.verify(token, "secret")
    //     //check to see if admin
    //     if(!payload.is_admin) {
    //         throw new Error()
    //     }
    //     //put the payload(id) in the request for other functions to use
    //     req.userId = payload.id
    //     next()
    // } catch(err) {
    //     console.log(err)
    //     return res.status(401).json({ data: "Unauthenticated or not admin"})
    // }
// }

module.exports = {
    admin
}