import Sequelize, { Model } from 'sequelize';

class Tree extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        species: Sequelize.STRING,
        recommended: Sequelize.BOOLEAN,
        forbidden: Sequelize.BOOLEAN,
        wireless: Sequelize.BOOLEAN,
        wired: Sequelize.BOOLEAN,
      },
      {
        sequelize
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
  }
}

export default Tree;
