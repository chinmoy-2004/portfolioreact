import React, { useEffect, useRef, useState } from 'react';

function About() {
    const skills = [
        { name: 'HTML', imgSrc: 'public/assets/html.jpeg', bgColor: 'bg-red-500' },
        { name: 'CSS', imgSrc: 'public/assets/css.jpeg', bgColor: 'bg-blue-500' },
        { name: 'JavaScript', imgSrc: 'public/assets/js.jpeg', bgColor: 'bg-yellow-500' },
        { name: 'React', imgSrc: 'public/assets/react.jpeg', bgColor: 'bg-cyan-500' },
        { name: 'Tailwind', imgSrc: 'public/assets/tailwind.jpeg', bgColor: 'bg-teal-500' },
        { name: 'Appwrite', imgSrc: 'public/appwrite.png', bgColor: 'bg-pink-500' },
        { name: 'Python', imgSrc: 'public//assetspython.png', bgColor: 'bg-green-500' },
        { name: 'Github', imgSrc: 'public/assets/github.jpeg', bgColor: 'bg-gray-800' },
        { name: 'VS Code', imgSrc: 'public/assets/vs.jpeg', bgColor: 'bg-blue-800' },
        { name: 'C', imgSrc: 'public/assets/c.jpeg', bgColor: 'bg-green-800' },
        { name: 'C++', imgSrc: 'public/assets/C++.jpeg', bgColor: 'bg-cyan-800' },
    ];

    const [activeIndex, setActiveIndex] = useState(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveIndex(Number(entry.target.dataset.index));
                }
            });
        }, options);

        const cards = containerRef.current.querySelectorAll('.skill-card');
        cards.forEach((card, index) => {
            card.dataset.index = index;
            observer.observe(card);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center p-4 bg-slate-800 w-full h-full">
            <div className="flex justify-center p-5">
                <img
                    src="public/assets/file.png"
                    alt="Nature"
                    className="w-48 md:w-96 rounded-full animate-slideUpDown"
                />
            </div>
            <h2 className='text-xl md:text-xl font-bold text-center bg-gradient-to-r from-teal-400 to-lime-400 text-transparent bg-clip-text p-4 animate-textAppear'>
                Hi there, I'm <span className='animate-colorChange'>Chinmoy</span>. My passion lies in the realms of web development, AI, and ML, grounded in a solid foundation of HTML, CSS, and JavaScript. Recently, I had the pleasure of working with the Appwrite framework to create a fully functional website.
                <br />
                My journey includes crafting a variety of projects such as a to-do list, a linear background generator, and a QR code generator. At present, I'm focused on developing an engaging quiz creator website using Appwrite. I'm continually driven by a desire to learn more and push the boundaries of what's possible in web development and beyond.
            </h2>
            <span className="text-2xl md:text-3xl font-bold  underline animate-colorChange">Skills!</span>
            <div ref={containerRef} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 animate-textAppear w-4/5' id='skills'>
                {skills.map((skill, index) => (
                    <div
                    key={index}
                    className={`${skill.bgColor} text-white rounded-xl shadow-lg p-8 flex flex-col items-center animate-fadeIn cursor-pointer hover:scale-105 transform transition-transform duration-300 ${index === activeIndex ? 'scale-110 shadow-2xl' : ''} skill-card`}
                >
                    <img
                        src={skill.imgSrc}
                        alt={skill.name}
                        className="w-20 h-20 mb-6 rounded-full"
                    />
                    <h3 className="text-2xl font-bold">{skill.name}</h3>
                </div>
                ))}
            </div>
        </div>
    );
}

export default About;
