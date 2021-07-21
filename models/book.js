"use strict";
module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define(
        "Book",
        {
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            descreption: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            author: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {},
    );
    Book.associate = function (models) {
        Book.belongsTo(models.User, { foreignKey: "UserId" });
    };
    return Book;
};
