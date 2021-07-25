"use strict";
module.exports = (sequelize, DataTypes) => {
    const Tag = sequelize.define("Tag", {
        tagName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tagSlug: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    Tag.associate = (models) =>
        Tag.belongsToMany(models.Article, { through: "ArticleTag" });
    return Tag;
};
