'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    product_code: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    type_unit: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    sale_price: DataTypes.DECIMAL,
    state: DataTypes.INTEGER
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};