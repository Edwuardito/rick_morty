const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id:{
         type: DataTypes.INTEGER,
         primaryKey: true,
         allowNull:false
      },
      name:{
         type: DataTypes.STRING,
         allowNull: false
      },
      image:{
         type: DataTypes.STRING,
         // validate: {
         //    isUrl:true
         // }
      },
      status:{
         type: DataTypes.INTEGER,

      },
      origin:{
         type: DataTypes.INTEGER,

      },
      species:{
         type: DataTypes.INTEGER,

      },
      gender:{
         type: DataTypes.INTEGER,
         // validate:{
         //    isIn: [['Male','Female','Unknown','Genderless']]
         // }
      },
   }, { timestamps: false });
};
