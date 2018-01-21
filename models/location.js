module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    notes: DataTypes.TEXT,
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    active : {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
  });

  return Location;
};