'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      queryInterface.changeColumn( 'Locations', 'name', {
          type: Sequelize.STRING,
          allowNull: false
      });
      queryInterface.changeColumn( 'Locations', 'address', {
          type: Sequelize.STRING,
          allowNull: false
      });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.changeColumn( 'Locations', 'name', {
        type: Sequelize.STRING,
        allowNull: true
    });
    queryInterface.changeColumn( 'Locations', 'address', {
        type: Sequelize.STRING,
        allowNull: true
    });
  }
};
