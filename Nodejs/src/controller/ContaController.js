// const crypto  = require('crypto');
// const connection  = require('../database/connection');
// const {routes} = require('../routes');
// module.exports ={
//     async list(req,res){
//         const contas = await connection('conta').select('*');
//         return  res.json(contas);    
//     },

//     async show(req,res){
//         const {idconta} = req.params;
//         const conta = await connection('conta')
//                     .where('idconta',idconta)
//                     .select('*');
//         return  res.json(conta);    
//     },

//     async create(req,res){
//         const {agencia, banco, nome, saldo, iduser} = req.body;
//         const idconta = crypto.randomBytes(4).toString('HEX');
//         await connection('conta').insert({
//             agencia, 
//             banco,
//             idconta,
//             iduser, 
//             nome, 
//             saldo 
//         })
//         return res.json({idconta})
//     },

//     async update(req,res){
//         const {idconta} = req.params;
//         const {agencia, banco, nome, saldo, iduser} = req.body;
//         await connection('conta').where('idconta',idconta).update({
//             agencia, 
//             banco,
//             idconta,
//             iduser, 
//             nome, 
//             saldo 
//         })
//         return res.status(204).send();
//     },

//     async delete(req,res){
//         const {idconta} = req.params;
//         await connection('conta').where('idconta',idconta).delete();
//         return res.status(204).send();
//     }
// }