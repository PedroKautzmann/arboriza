'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('trees', 'height', {
      type: Sequelize.INTEGER,
      allowNull: true
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('trees', 'height');
  }
};
