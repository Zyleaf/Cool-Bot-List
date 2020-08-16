import { gql } from "apollo-server-express";

const Mutations = gql`
    type Mutation {
        # Create a Review.
        createReview(data: ReviewCreatable): Review
        # Delete a Review.
        deleteReview(botId: ID!, reviewId: ID!): Review
        # Like a Review.
        likeReview(userId: ID!, reviewId: ID!): Review
        # Dislike a Review.
        dislikeReview(userId: ID!, reviewId: ID!): Review
    }
`;

export default Mutations;
