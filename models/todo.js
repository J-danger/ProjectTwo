module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define("recent", {
    
    coin_pair: DataTypes.TEXT
  });
  console.log(Todo)
  return Todo;
};
