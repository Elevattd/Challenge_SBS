const {
  GraphQLID,

  GraphQLList,
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

module.exports = { products, product };
