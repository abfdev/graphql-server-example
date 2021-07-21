module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User",
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {},
    );
    User.associate = function (models) {
        User.hasMany(models.Book);
        User.hasMany(models.Task);
    };
    return User;
};
