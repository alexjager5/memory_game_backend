const { GraphQLList, GraphQLObjectType } = require('graphql');
const Turn = require('../../models/Turn')
const TurnType = require('./TurnType');

const BlogQueryRootType = new GraphQLObjectType ({
  name: 'TestGameSchema',
  description: "Test Game Application Schema Query Root",
  fields: () => ({
    turns: {
      type: new GraphQLList(TurnType),
      description: "List of all turns",
      resolve: async function () {
        return await  Turn.find({}, (err, auth) => {
        });
      }
    }
  })
});

module.exports = BlogQueryRootType