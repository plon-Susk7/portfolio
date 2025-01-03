import image from '../assets/profile-1.jpeg';

export const Body = () => {
  return (
    <div className="flex flex-col items-center p-2 rounded-lg shadow-md max-w-md mx-auto">
      <img className="w-[100px] h-[100px] rounded-full shadow-lg" src={image} alt="Profile" />
      <h1 className="text-2xl font-bold text-gray-100 mt-4">Hey there!</h1>
      <h2 className="text-lg text-gray-300 mt-2">About Me</h2>
      <p className="text-gray-400 text-center mt-4">
      I’m Priyash, studying Computer Science & AI. I love building things with code and trying out some research work on the side. When I’m not coding or researching, you’ll probably find me watching The Big Bang Theory or learning something new.

If you want to chat, share tech ideas, or build something cool together, feel free to reach out!
      </p>
    </div>
  );
};
