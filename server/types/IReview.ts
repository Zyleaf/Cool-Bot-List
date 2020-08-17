import IOwnerReply from "./IOwnerReply";

export default interface IReview {
    _id: any;
    /**
     * The id of the bot that the review belongs too.
     */
    botId: string;
    /**
     * The id of the user that made the review.
     */
    userId: string;
    /**
     * The actual review content of the review.
     */
    review: string;
    /**
     * The owners reply to the review.
     */
    ownerReply: IOwnerReply;
    /**
     * An array of userIds that have liked this review.
     */
    likes: Array<string>;
    dislikes: Array<string>;
    /**
     * An array of userIds that have disliked this review.
     */
    rating: number;
    /**
     * The date that this review was made.
     */
    date: Date;
}