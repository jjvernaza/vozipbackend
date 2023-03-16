const models = require('../models');
const bcryptjs =  require('bcryptjs');
const jwt = require('jsonwebtoken');

function singUp(req,res) {

    models.login.findOne({where:{email:req.body.email}}).then(result => {
        if(result){

            res.status(409).json({
                message:"email alredy exist",
               
    
        });

        }else{
            bcryptjs.genSalt(10,function(err,salt){
                bcryptjs.hash(req.body.contraseña, salt, function(err, hash){
                    const user = {
                        usuario: req.body.usuario,
                        email:req.body.email,
                        contraseña: req.body.contraseña,
                        act_usua:req.body.act_usua,
                        act_hora:req.body.act_hora,
                        act_esta: req.body.act_esta

                
                    }
                
                    models.login.create(user).then(result => {
                        res.status(201).json({
                            message:"post create succesfully",
                        });
                
                    }).catch(error => {
                        res.status(500).json({
                            message:"something went wrong",
                           
                
                    });
                
                });
                });
            });
        

        }



    }).catch(error => {
        res.status(500).json({
            message:"something went wrong",
           

    });
    });

   
    




}
    
function login (req,res ) {
    models.login.findOne({where:{email:req.body.email}}).then(user => {
        
        if(usuario === null){
            res.status(401).json({
                message:"Invalid credentials"
            });

            
        }else{
            
            bcryptjs.compare(req.body.contraseña, user.contraseña,function(err, result){

                if(result){
                    const token = jwt.sign({
                        email: user.email,
                        userId: user.id
                        
                      
                    },'secret ', function (err, token){
                        res.status(200).json({
                            message:"autenticatio sucessfull",
                            token: token
                        });
                    });
                }else{
                    res.status(401).json({
                        message:"Invalid credentials"
                    });
                }

            });
        }
    
    }).catch(error => {
        res.status(500).json({
            message:"something went wrong",
           

    });

    });



}

module.exports = {

    singUp: singUp,
    login:login
}