const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
var error1 = "";

function singUp(req, res) {

    models.user.findOne({ where: { email: req.body.email } }).then(result => {
        if (result) {

            res.status(409).json({
                message: "email alredy exist",


            });

        } else {
            bcryptjs.genSalt(10, function (err, salt) {
                bcryptjs.hash(req.body.password, salt, function (err, hash) {
                    const user = {
                        usuario: req.body.usuario,
                        email: req.body.email,
                        password: hash,
                        act_usua: req.body.act_usua,
                        act_hora: req.body.act_hora,
                        act_esta: req.body.act_esta


                    }

                    models.user.create(user).then(result => {
                        res.status(201).json({
                            message: "post create succesfully",
                        });

                    }).catch(error => {
                        res.status(500).json({
                            message: "something went wrong",


                        });

                    });
                });
            });


        }



    }).catch(error => {
        res.status(500).json({
            message: "something went wrong",


        });
    });







}

function login(req, res) {
    /*
    models.user.findOne({ where: { email: req.body.email } })
      .then(user => {
        if (user === null) {
            return res.status(401).json({ message: "invalid credentials" }) 
        }
        return { email: user.email, password: user.password }
      })
      .then(data => {
        // encrypt
        var { email, password} = data;
      })
      .catch(err => res.status(500).json({ msg: err.message }));
      */

    models.user.findOne({ where: { email: req.body.email } })
        .then(user => {
            if (user === null) {
                res.status(401).json({
                    message: "Invalid credentials",
                });
            } else {
                bcryptjs.compare(req.body.password, user.password, function (err, result) {
                    if (result) {
                        const token = jwt.sign({
                            email: user.email,
                            password: user.password
                        }, 'secret ', function (err, token) {
                            res.status(200).json({
                                message: "autentication sucessfull",
                                token: token
                            });
                        });
                    } else {
                        res.status(401).json({
                            message: "Invalid credentials"
                        });
                    }
                });
            }
        }).catch(error => {
            res.status(500).json({
                message: "something went wrong"
            });
        });



}

module.exports = {

    singUp: singUp,
    login: login
}