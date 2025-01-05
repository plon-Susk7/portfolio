import { Client } from "@notionhq/client";

// instantiate the client
const client = new Client({
    auth: "",
});

// get an individual post
async function post(id: string) {
    const myPost = await client.pages.retrieve({
        page_id: id,
});
return myPost;
}

// get all the posts
async function posts() {
    const myPosts = await client.databases.query({
        database_id: "",
        filter:  {
            property : "Status",
            select : {
                equals : "Live",
            }
        }
});
return myPosts;
}

// get all the blocks that make up a single post
async function blocks(id: string) {
    const blocks = await client.blocks.children.list({
        block_id: id,
    });
return blocks;
}

export { post, posts, blocks };