
const models = require('../models');



function save (req,res){
    const post = {
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        direccion: req.body.direccion,
        correo_electronico:req.body.correo_electronico,
        fecha_instalacion: req.body.fecha_instalacion,
        ip_adress: req.body.ip_adress,
        celular: req.body.celular,
        id_plan: req.body.id_plan,
        act_usua: req.body.act_usua,
        act_hora: req.body.act_hora,
        act_esta: req.body.act_esta,
        userid: 1
    }
    models.post.create(post).then(result => {

        res.status(201).json({
            message:"post create succesfully",
            post: result

        })


    }).catch(error => {

        res.status(500).json({
            message:"something is wrong",
            error: error

        })
    });
}


function show (req,res){
    const id = req.params.id;

    models.clientes.findByPk(id).then(result => {

        if(result){
            res.status(200).json(result);

        } else{
            ResizeObserver.status(404).json({
                message: "Post not foud"
            })
        }
        res.status(200).json(result);
    }).catch(error => {
        ResizeObserver.status(500).json({
            message: "Somthing is wrong"
        })
    });
}
function index (req,res){
    models.clientes.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        ResizeObserver.status(500).json({
            message: "Somthing is wrong"
        })
    });
}


function update (req,res){
    const id = req.params.id;
    const updatedClientes = {
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        direccion: req.body.direccion,
        correo_electronico:req.body.correo_electronico,
        fecha_instalacion: req.body.fecha_instalacion,
        ip_adress: req.body.ip_adress,
        celular: req.body.celular,
        id_plan: req.body.id_plan,
        act_usua: req.body.act_usua,
        act_hora: req.body.act_hora,
        act_esta: req.body.act_esta
    
    }

    const userId = 1;

    models.clientes.update(updatedClientes,{where: {id:id, userId:userId}}).then(result => {
        res.status(200).json({
            message: "Post updated",
            clientes: updatedClientes
        });
    }).catch(error => {
        res.status(200).json({
            message: "something is wrong",
            error:error
        });
    })
}

function destroy (req,res){
    const id = req.params.id;
    const userId = 1;

    models.clientes.destroy(destroyClientes,{where: {id:id, userId:userId}}).then(result => {
        res.status(200).json({
            message: "Post updated"
        });
    }).catch(error => {
        res.status(200).json({
            message: "something is wrong",
            error:error
        });
    })
}

module.exports = {
    save: save,
    index: index,
    show: show,
    update: update,
    destroy: destroy
}