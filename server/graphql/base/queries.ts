import { gql } from "apollo-server-express";

const Queries = gql`
    type Query {
        # Get ONE bot based on its id.
        bot(id: ID!): Bot
        # Get ALL bots in the db.
        bots: [Bot]
        # Get ONE user based on their id.
        user(id: ID!): User
        # Get logged in user
        me: User
        # Get ALL users in the db.
        users: [User]
    }
`;

export default Queries;
