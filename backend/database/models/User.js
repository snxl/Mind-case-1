const bcrypt = require("bcryptjs")

module.exports = (sequelize, DataTypes)=>{
    const User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        credential: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        acess: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        }
    },{
        tableName: "users",
        timestamps: true,
    })

    User.addHook("beforeSave", async user => {
        if(user.password) user.password = await bcrypt.hash(user.password, 12)
    })

    return User
}