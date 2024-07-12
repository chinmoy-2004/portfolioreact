import React, { useEffect } from 'react';
import './style.css';

function Project() {
    const projects = [
        {
            name: 'Qurrency converter',
            imgSrc: '/assets/qurrency.png',
            description: 'A React and Vite project where I learned the concept of custom hooks. This project showcases a functional currency converter application.',
            repoLink: 'https://github.com/chinmoy-2004/qurrencyreac.git',
            websiteLink: 'https://qurrencyreac.vercel.app/'
        },
        {
            name: 'Linear gradient generator',
            imgSrc: '/assets/linear.png',
            description: 'Made using pure HTML, CSS, and JS, utilizing loops and Math.random(). A basic project that generates linear gradients dynamically.',
            repoLink: 'https://github.com/chinmoy-2004/projects/tree/main/linear-gradient%20gen',
            websiteLink: 'https://projects-silk-nine.vercel.app'
        },
        {
            name: 'Qr code generator',
            imgSrc: '/assets/qrcode.png',
            description: 'Created with HTML, CSS, and JS, learning to handle APIs. This project generates QR codes based on user input.',
            repoLink: 'https://github.com/chinmoy-2004/projects/tree/main/qrcodegenarator',
            websiteLink: 'https://projects-rlny.vercel.app/'
        },
        {
            name: 'To-Do List',
            imgSrc: '/assets/to-do.png',
            description: 'A basic project using HTML, JS, and CSS where I learned to update DOM properties. This simple to-do list application helps manage daily tasks.',
            repoLink: 'https://github.com/chinmoy-2004/projects/tree/main/todolist',
            websiteLink: 'https://projects-e1bq.vercel.app/'
        },
        {
            name: 'Portfolio',
            imgSrc: '/assets/port1.png',
            description: 'Built with React and Vite to showcase my React and Tailwind skills, also learning about React Router DOM. This portfolio highlights my projects and skills.',
            repoLink: 'https://github.com/chinmoy-2004/portfolioreact.git',
            websiteLink: 'https://portfolioreact-mauve.vercel.app/'
        },

        // Add more projects as needed
    ];

    useEffect(() => {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('touchstart', () => {
                card.classList.add('active-card');
            });

            card.addEventListener('touchend', () => {
                card.classList.remove('active-card');
            });
        });

        return () => {
            projectCards.forEach(card => {
                card.removeEventListener('touchstart', () => {
                    card.classList.add('active-card');
                });

                card.removeEventListener('touchend', () => {
                    card.classList.remove('active-card');
                });
            });
        };
    }, []);

    return (
        <div className="bg-custom-bg bg-cover bg-center min-h-screen p-4">
            <h2 className="text-3xl font-bold mb-6 text-white text-center p-4 rounded-lg shadow-lg animate-blink1">
                Dive into My Development Journey
            </h2>
            <p className="text-xl mb-6 text-center text-gray-300">
                Explore a diverse array of innovative projects that demonstrate my skills and passion for web development. From practical tools to creative solutions, each project is a unique piece of my digital craftsmanship.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <div key={index} className="project-card border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:text-slate-800 hover:bg-gray-100">
                        <img src={project.imgSrc} alt={project.name} className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-lime-500 mt-2">{project.name}</h3>
                            <p className="mt-1 text-gray-600">{project.description}</p>
                            <div className="mt-4 flex justify-between">
                                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">Get Code</a>
                                <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-300">Visit Website</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
            <span className="text-lg text-red-500 font-bold rounded">many thing are in way!!</span>
            </div>
        </div>
    );
}

export default Project;
