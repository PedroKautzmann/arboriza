'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('trees', 'quadrant', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('trees', 'quadrant');
  }
};
