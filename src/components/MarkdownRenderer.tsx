// import React, { useState, useEffect } from 'react';
// import ReactMarkdown from 'react-markdown';
// import matter from 'gray-matter';

// const BlogPost = ({ slug }) => {
//   const [post, setPost] = useState({
//     content: '',
//     frontMatter: {}
//   });

//   useEffect(() => {
//     const loadBlogPost = async () => {
//       try {
//         // Import markdown file
//         const markdown = await import(`../blogs/${slug}/index.md`);
        
//         // Parse frontmatter and content
//         const { data: frontMatter, content } = matter(markdown.default);
        
//         setPost({
//           content,
//           frontMatter
//         });
//       } catch (error) {
//         console.error('Error loading blog post:', error);
//       }
//     };

//     loadBlogPost();
//   }, [slug]);

//   // Custom component to handle local images
//   const CustomImage = ({ src, alt }) => {
//     // If the image source is a relative path, import it from the blog folder
//     const imageSrc = src.startsWith('./') || src.startsWith('../')
//       ? require(`../blogs/${slug}/${src}`)
//       : src;

//     return <img src={imageSrc} alt={alt} className="max-w-full h-auto my-4" />;
//   };

//   return (
//     <article className="prose prose-lg max-w-3xl mx-auto px-4 py-8">
//       {post.frontMatter.title && (
//         <h1 className="text-4xl font-bold mb-4">{post.frontMatter.title}</h1>
//       )}
//       {post.frontMatter.date && (
//         <time className="text-gray-600 mb-8 block">
//           {new Date(post.frontMatter.date).toLocaleDateString()}
//         </time>
//       )}
//       <ReactMarkdown
//         components={{
//           img: CustomImage
//         }}
//         className="markdown-content"
//       >
//         {post.content}
//       </ReactMarkdown>
//     </article>
//   );
// };

// export default BlogPost;