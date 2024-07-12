import React from 'react';

function Project() {
    const projects = [
        {
            name: 'Qurrency converter',
            imgSrc: 'public/assets/qurrency.png',
            description: 'Short description of Project One.',
            repoLink: 'https://github.com/chinmoy-2004/qurrencyreac.git',
            websiteLink: 'https://qurrencyreac.vercel.app/'
        },
        {
            name: 'Linear gradient generator',
            imgSrc: 'public/assets/linear.png',
            description: 'Short description of Project Two.',
            repoLink: 'https://github.com/chinmoy-2004/projects/tree/main/linear-gradient%20gen',
            websiteLink: 'https://projects-silk-nine.vercel.app'
        },
        {
            name: 'Qr code generator',
            imgSrc: 'public/assets/qrcode.png',
            description: 'Short description of Project Two.',
            repoLink: 'https://github.com/chinmoy-2004/projects/tree/main/qrcodegenarator',
            websiteLink: 'https://projects-rlny.vercel.app/'
        },
        {
            name: 'To-Do List',
            imgSrc: 'public/assets/to-do.png',
            description: 'Short description of Project Two.',
            repoLink: 'https://github.com/chinmoy-2004/projects/tree/main/todolist',
            websiteLink: 'https://projects-e1bq.vercel.app/'
        },
        // Add more projects as needed
    ];

    return (
        <div className="bg-custom-bg bg-cover bg-center min-h-screen p-4">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <div key={index} className="border rounded-lg p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:text-slate-800 hover:bg-gray-100">
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
        </div>
    );
}

export default Project;