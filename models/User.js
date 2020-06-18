module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.STRING,
      field: 'id',
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      field: 'name',
    },
    email: {
      type: DataTypes.STRING,
      field: 'email',
    },
    result: {
      type: DataTypes.STRING,
      field: 'result',
    },
    createdAt: { type: DataTypes.DATE, field: 'created_at' },
    updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
  });


  return User;
};
