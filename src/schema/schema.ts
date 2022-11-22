import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} from "graphql";

const TermType = new GraphQLObjectType({
  name: "Term",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    definition: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    term: {
      type: TermType,
      args: { id: { type: GraphQLString } },
      resolve(parent: any, args: any) {
        // code to get data from db / other source
      },
    },
    terms: {
      type: new GraphQLList(TermType),
      resolve(parent: any, args: any) {
        // code to get data from db / other source
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addTerm: {
      type: TermType,
      args: {
        name: { type: GraphQLString },
        definition: { type: GraphQLString },
      },
      resolve(parent: any, args: any) {
        // code to get data from db / other source
      },
    },
    deleteTerm: {
      type: TermType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(parent: any, args: any) {
        // code to get data from db / other source
      },
    },
    updateTerm: {
      type: TermType,
      args: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        definition: { type: GraphQLString },
      },
      resolve(parent: any, args: any) {
        // code to get data from db / other source
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
