//inicialização do banco
exports.up = function(knex) {
    return knex.schema.createTable('conta', function (table) {
        table.string('idconta').primary();
        table.string('agencia').notNullable();
        table.string('banco').notNullable();
        table.string('nome');
        table.integer('saldo');
        table.string('donoconta').notNullable();
        table.foreign('donoconta').references('users.id');      
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('conta');
};