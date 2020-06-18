const TABLE_NAME = 'users';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable(TABLE_NAME, {
      id: {
        type: Sequelize.STRING,
        field: 'id',
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        field: 'name',
      },
      email: {
        type: Sequelize.STRING,
        field: 'email',
      },
      result: {
        type: Sequelize.STRING,
        field: 'result',
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'created_at',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at',
        defaultValue: Sequelize.literal('NULL ON UPDATE CURRENT_TIMESTAMP')
      }
    });
  },

  down(queryInterface) {
    return queryInterface.dropTable(TABLE_NAME);
  },
};