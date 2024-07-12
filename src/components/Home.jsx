import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect/dist/core';

function Home() {
  useEffect(() => {
    var app = document.getElementById('app');

    if (app) {
      var typewriter = new Typewriter(app, {
        loop: true,
        delay: 75,
      });

      typewriter
        .pauseFor(1000)
        .typeString(' Web developer')
        .pauseFor(900)
        .deleteChars(14)
        .typeString('AI ')
        .typeString('<span class="animate-colorChange">and</span> ML enthusiast')
        .pauseFor(1000)
        .start();
    }
  }, []); // Empty dependency array ensures this runs once after initial render

  return (
    <div className=' bg-slate-800 w-full h-full'>
      <div className='flex  flex-col-reverse md:flex-row justify-between'>
        <div className=" flex flex-col text-xl justify-center align-middle p-4 flex-wrap h-64 md:h-auto">
          <span className="text-lime-400 text-4xl md:text-6xl font-bold text-center md:text-left">
            Hi
          </span>
          <span className='text-lime-400 text-4xl md:text-6xl font-bold text-center md:text-left'>
            I am a
          </span>
          <span id='app' className='text-teal-300 text-4xl md:text-6xl font-bold text-center md:text-left'>
            {/* Typewriter effect will be applied here */}
          </span>
        </div>
        <div className="flex justify-center p-5">
          <img
            src="/assets/file.png"
            alt="Nature"
            className="w-48 md:w-96 rounded-full animate-slideUpDown"
          />
        </div>
      </div>
      <div className='w-full flex justify-center flex-col'>
        <span className='text-2xl md:text-4xl font-bold text-center bg-gradient-to-r from-teal-400 to-lime-400 text-transparent bg-clip-text p-4 w-full'>
        Transforming Vision into Reality Through <span className='animate-blink1'>code</span>, Design, and <span className='animate-blink2'>AI</span>.
        </span>
        <span className='text-xl md:text-xl font-bold text-center bg-gradient-to-r from-teal-400 to-lime-400 text-transparent bg-clip-text p-4 w-full'>
        As a passionate frontend developer and AI/ML enthusiast, I bring ideas to life with cutting-edge web applications. Dive into my latest projects and articles, and witness the fusion of creativity, advanced technology, and expertise in <span className='animate-blink2'>React.js</span> and web development.
        </span>
      </div>
      <div className='flex justify-center align-middle relative'>
        <Link to='https://drive.google.com/file/d/1Ap4W7NfcFp8EYsWgRrdJQYET3VPWI2EW/view?usp=drivesdk target="_blank" rel="noopener noreferrer"'>
        <button className="bg-lime-400 hover:bg-lime-500 text-black font-bold py-2 px-4 rounded-full m-4">
          resume
        </button>
        </Link>
        <Link to='mailto:dude050504@gmail.com' target="_blank" rel="noopener noreferrer">
        <button className="bg-lime-400 hover:bg-lime-500 text-black font-bold py-2 px-4 rounded-full m-4 ">
          get in touch
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;