
function middlewareAuthentication(req, res, next) {

    const users = [
         {
            id: 1,
            name: 'John Smith',
            emailDB: 'admin@example.com',
            passwordDB: '123456',
            token: null,
            rule: 'admin'
        },
         {
            id: 2,
            name: 'Alan Smith',
            emailDB: 'alan@example.com',
            passwordDB: '123456',
            token: 'token123',
            rule: 'user'
        }
    ]

    const {email, password} = req.body;

    const userExists = users.find(user => user.emailDB === email && user.passwordDB === password);
   
    if(!userExists){
        return res.status(401).json({error: 'User or password not exists'});
    }

    if(userExists){
       const token = userExists.token;

       if(!token){
            return res.status(401).json({error: 'Token not found!'});
       }

       if(token !== null && token !== undefined){
            console.log(token);
            next();
        } 
       
    }
}

module.exports = middlewareAuthentication;