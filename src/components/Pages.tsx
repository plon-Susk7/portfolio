import { posts } from "../lib/notion"

export const Pages = () => {

    const blogs = posts();

    console.log(blogs);
    return(
        <>
            <h1>List of blogs out here!</h1>
        </>
    )
}