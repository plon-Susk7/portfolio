import { Navbar } from "@/components/Navbar";
import { getDatabase } from "@/lib/notion";


export const revalidate = 1000; // Revalidate every 10 seconds for ISR


export default async function BlogsPage() {
    // Fetch blogs from Notion
    const posts = await getDatabase();

    return (
        <div className="flex flex-col items-center p-8 rounded-lg max-w-2xl mx-auto mt-20">
            <Navbar />
            <h1 className="text-3xl font-bold text-gray-100 mt-4 mb-8">Blogs</h1>
            {posts.length > 0 ? (
                <ul className="space-y-4">
                    {posts.map((post) => (
                        <li
                            key={post.id}
                            className="p-4 bg-gray-800 rounded-lg shadow-lg w-full"
                        >
                            
                            <h2  className="text-xl font-bold text-gray-100">
                                

                                {
                                //@ts-ignore
                                post.properties.Title.title[0].text.content
                                }
                                
                               
                            </h2>
                            {/* <p className="text-gray-400">
                                {
                                //@ts-ignore
                                post.properties.Content.rich_text[0]?.text?.content || "No content"
                                }
                            </p> */}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-400">No blogs found. Stay tuned!</p>
            )}
        </div>
    );
}
