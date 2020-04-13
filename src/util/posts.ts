import * as axios from "axios";

export class Posts {
    private userAgent: string;

    public constructor(userAgent: string) {
        this.userAgent = userAgent;
    }

    /**
     * paginatePosts - Gets posts and paginates them
     * @param {string} tags The tags to use while searching e621
     * @param {number} startPage Page to start paginating from (API limit is 750)
     * @param {number} limit Number of results per page (API limit is 320)
     * @param {number} pages Number of pages to paginate (API limit is 750)
     */
    public async paginatePosts(tags: string, startPage: number, limit: number, pages: number ) {

        let pageArray = [];

        do {
        let responce = await axios.default
            .get(`https://e621.net/posts.json`, {
                headers: {
                    "user-agent": this.userAgent,
                },
                params: {
                    "limit": limit,
                    "tags": tags,
                    "page": startPage,
                }
            }).catch(err => {
                console.error(err);
            });

            //console.log(responce);
            pageArray.push(responce["data"].posts);

            startPage++;
        } while(startPage < pages);

        return pageArray;
        
    }
}