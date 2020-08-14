const { gql } = require("apollo-server-express");

const VoteType = gql`
    type Vote {
        date: String
        # The botId for the returned vote.
        bot: String
        # The bot object for the returned vote.
        botObj: Bot
    }
`;

module.exports = VoteType;
