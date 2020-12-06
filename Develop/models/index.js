// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//https://sequelize.org/v5/manual/associations.html

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id"
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id"
});

// Products belongsToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: "product_tag_info",
  foreignKey: "product_id"
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: "product_tag_info",
  foreignKey: "product_id"
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag
};
