const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const mutation = require('./graphql/mutations/index');
const TestGameQueryRootType = require('./graphql/queries/index')

const BlogAppSchema = new GraphQLSchema({
  query: TestGameQueryRootType,
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: mutation
  })
});

module.exports = BlogAppSchema;