//o que fazer quando iniciar o banco; atualizações
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.integer('idade');
        table.string('empresa');
        //table.string('idconta');
      })
};

//como desfazer erros do banco; desfazer atualizações
exports.down = function(knex) {
  return knex.schema.dropTable('users'); //apaga a tabela users se tiver erro
};