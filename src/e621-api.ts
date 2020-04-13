import { Posts } from "./util/posts";

export default class node621 {
    private userAgent: string;
    //private apiKey: string;
    //private userName: string;

    /**
     * Contains methods for grabbing posts
     * @memberof e621
     */
    public posts: Posts;


    /**
    * @param {string} userAgent This will identify you to the e621 API
    */

    public constructor(userAgent: string) {
        this.userAgent = userAgent;
        
        /* TODO
        if(userName && apiKey) {
            this.apiKey = apiKey;
            this.userName = userName;
        }
        */

        this.posts = new Posts(this.userAgent);
    }
}
