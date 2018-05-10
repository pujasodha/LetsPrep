module.exports = function(sequelize,Sequelize){
    var UserData = sequelize.define('UserData',{
        user: {
            type:Sequelize.STRING,
        },
        email: {
            type:Sequelize.STRING,
        },
        calories:{
            type:Sequelize.INTEGER,
            allowNull:true,
            validate:{
                len:[1,30]
            }
        },
        breakfast:{
            type:Sequelize.STRING,
            allowNull:true,
            validate:{
                len:[1,30]
            }
        },
        lunch:{
            type:Sequelize.STRING,
            allowNull:true,
            validate:{
                len:[1,30]
            }
        },
        dinner:{
            type:Sequelize.STRING,
            allowNull:true,
            validate:{
                len:[1,30]
            }
        },
        createdAt: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.NOW,
            allowNull: false
          },
          updatedAt: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.NOW,
            allowNull: false
          },
    });
    return UserData;
    
}