const { Model, DataTypes } = require("sequelize")
const bcrypt = require("bcryptjs")

class User extends Model{
    static init (sequelize){
        super.init({
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
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
            sequelize
        })

        this.addHook("beforeSave",async user => {
            if(user.password) await bcrypt.hash(user.password, 12)
        })

        return this
    }
}

module.exports = User