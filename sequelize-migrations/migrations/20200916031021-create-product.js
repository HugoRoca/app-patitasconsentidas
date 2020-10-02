'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_code: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      type_unit: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      buy_price: {
        type: Sequelize.DOUBLE
      },
      sale_price: {
        type: Sequelize.DOUBLE
      },
      type_pet: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      sub_category: {
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      type_product: {
        type: Sequelize.STRING
      },
      in_offer: {
        type: Sequelize.BOOLEAN
      },
      state: {
        type: Sequelize.BOOLEAN
      },
      date_created: {
        allowNull: false,
        type: Sequelize.DATE
      },
      date_last_updated: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  }
};
