const crypto  = require('crypto');
const connection  = require('../database/connection');
const {routes} = require('../routes');
module.exports ={
    async list(req,res){ //relacionamento do banco de usuário e do banco da conta
        const users = await connection('conta').innerJoin('users', 'users.id', 'conta.donoconta').select(
            'users.id', 'users.name', 'users.email', 'users.idade', 'users.empresa', 'conta.banco', 'conta.agencia', 'conta.saldo'

            );
        return  res.json(users);    
    },

    async show(req,res){
        const {id} = req.params;
        const user = await connection('conta').where('conta.idconta',id).innerJoin('users', 'users.id', 'conta.donoconta').select(
            'users.id', 'users.name', 'users.email', 'users.idade', 'users.empresa', 'conta.banco', 'conta.agencia', 'conta.saldo'
        );
        return  res.json(user);    
    },

    async create(req,res){
        const {name, email, idade, empresa, agencia, banco, saldo} = req.body;
        const id = crypto.randomBytes(4).toString('HEX');
        await connection('users').insert({
            id,
            name,
            email,
            idade,
            empresa
        });
        await connection('conta').insert({
            'idconta' :id,
            'nome':name,
            banco,
            agencia,
            saldo,
            'donoconta':id
        })
        return res.json({id})
    },

    async update(req,res){
        const {id} = req.params;
        const {saldo} = req.body;
        await connection('conta').where('idconta',id).update({
            saldo             //na final, só será permitido atualizar o saldo da conta
            
        })
        return res.status(204).send();
    },

    async delete(req,res){
        const {id} = req.params;
        if(await connection('users').where('id',id).delete()&& await connection.from('conta').where('conta.donoconta', id).delete()){
            return res.status(204).send();
        }
        
    }
}