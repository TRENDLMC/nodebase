const Sequelize = require("sequelize");

class Hashtag extends Sequelize.Model {
  static initiate(sequelize) {
    Hashtag.init(
      {
        title: {
          type: Sequelize.STRING(15),
          allowNull: false,
          unique: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "Hashtag",
        tableName: "Hasgtags",
        paranoid: false,
        charset: "utf-8",
        collate: "utf-8_general_ci",
      }
    );
  }

  static associate(db) {}
}
module.exports = Hashtag;
