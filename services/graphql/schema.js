const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require("graphql");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    photo: { type: GraphQLString }
  })
});

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    user: {
      type: UserType,
      resolve(parent, args, context) {
        return context.user;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query
});
