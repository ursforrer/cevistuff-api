'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn( 'Locations', 'active', {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
    });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn( 'Users', 'active' );
  }
};
