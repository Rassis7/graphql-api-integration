import { GraphQLServer } from 'graphql-yoga'
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import * as path from 'path';

import User from './user/resolvers/user.resolver'

const resolvers = {
  ...User
}

const server = new GraphQLServer({
  typeDefs: mergeTypes(fileLoader(path.join(__dirname, '**')), { all: true }),
  resolvers,
  context: request => {
    return {
      id: 1,
      name: "Romulo"
    }
  },
})
server.start(() => console.log(`Server is running on http://localhost:4000`))

