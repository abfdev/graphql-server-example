"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Article extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Article.init(
        {
            articleTitle: DataTypes.STRING,
            articleSlug: DataTypes.STRING,
            articleContent: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: "Article",
        },
    );
    Article.associate = (models) =>
        Article.belongsToMany(models.Tag, { through: "ArticleTag" });
    return Article;
};
