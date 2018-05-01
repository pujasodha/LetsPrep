module.exports = function(sequelize,DataType){
    var User = sequelize.define('User',{
        user: {
            type:DataType.STRING,
            allowNull: false,
            validate:{
                len:[1,30]
            }
        },
        email: {
            type:DataType.STRING,
            allowNull:false,
            validate:{
                len:[1,30]
            }
        },
        calories:{
            type:DataType.INTEGER,
            allowNull:false,
            validate:{
                len:[1,30]
            }
        },
        breakfast:{
            type:DataType.STRING,
            allowNull:false,
            validate:{
                len:[1,30]
            }
        },
        lunch:{
            type:DataType.STRING,
            allowNull:false,
            validate:{
                len:[1,30]
            }
        },
        dinner:{
            type:DataType.STRING,
            allowNull:false,
            validate:{
                len:[1,30]
            }
        }

    });
    return User;
    
}