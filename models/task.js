"use strict";
module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define(
        "Task",
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
    Task.associate = function (models) {
        Task.belongsTo(models.User, { foreignKey: "UserId" });
    };
    return Task;
};
