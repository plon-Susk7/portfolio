import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Welcome = () => {
    return(
        <div className="px-96 py-20 text-center">
            <h1 className="heading text-5xl md:text-4xl xl:text-7xl py-12 font-bold text-red-500">About me.</h1>
            <p className="heading text-1xl md:text-1xl xl:text-2xl text-gray-600">Greetings! My name is Priyash and I'm a Computer Science student studying at IIITD. I have always been fascinated by the power of technology to transform the world we live in, and that's what drew me towards pursuing a degree in CS. In my journey as a CS student, I have developed a keen interest in two particular areas - Artificial Intelligence and Web Technologies. Speaking of programming languages, I have spent a considerable amount of time working with JavaScript and Python, and they have become my go-to languages for most projects. In my free time, I love to play football. The thrill of competition and the camaraderie of the sport have always been an excellent way for me to unwind and recharge.
            
            <div className="flex justify-center py-12">
                <a href="https://twitter.com/PriyashShah1" target="_blank" rel="noopener noreferrer" className="mr-8">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://github.com/plon-Susk7" target="_blank" rel="noopener noreferrer" className="mr-8">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/priyash-shah-932371202/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </div>
            
            </p>
        </div>
    )
}

export default Welcome;
