const {
  GraphQLID,

  GraphQLList,
  GraphQLString,
} = require("graphql");

const { Product } = require("../../models");
const { ProductType } = require("../types");

const products = {
  type: new GraphQLList(ProductType),
  description: "Get all products",
  resolve: () => Product.find(),
};

const product = {
  type: ProductType,
  description: "Get a product by id",
  args: {
    id: { type: GraphQLID },
  },
  resolve: (_, { id }) => Product.findById(id),
};

const productByName = {
  type: ProductType,
  description: "Get a product by name",
  args: {
    name: { type: GraphQLString },
  },
  resolve: (_, { name }) => Product.findOne({ name }),
};

module.exports = { products, product, productByName };
