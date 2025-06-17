import React from "react";

const CoursesSection = () => {
    return (
        <section className="py-16 bg-white text-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-5xl font-bold text-gray-700">Our <span className="text-indigo-600">Courses</span></h2>
                <p className="mt-4 text-xl max-w-2xl mx-auto text-gray-600">
                    Choose the perfect coding journey for your child. Our courses are designed to be fun,
                    engaging, and age-appropriate while building real programming skills.
                </p>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Course Card 1: Scratch Programming */}
                    <div className="rounded-2xl p-6 shadow-lg text-left bg-gradient-to-br from-orange-300 to-yellow-300">
                        <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4">
                            🎨
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Scratch Programming</h3>
                        <div className="mt-2 flex justify-between items-center text-sm">
                            <span className="bg-white text-gray-600 rounded-full px-3 py-1">Ages 8-11</span>
                            <span className="bg-white text-gray-600 rounded-full px-3 py-1">8 weeks</span>
                        </div>
                        <p className="mt-4 text-gray-700 text-sm">
                            Visual programming with drag-and-drop blocks. Perfect for beginners to learn
                            coding logic through fun games and animations.
                        </p>
                        <a href="#" className="mt-4 inline-flex items-center text-indigo-600 font-semibold group">
                            Learn More →
                        </a>
                    </div>

                    {/* Course Card 2: Python Foundations */}
                    <div className="rounded-2xl p-6 shadow-lg text-left bg-gradient-to-br from-indigo-400 to-blue-400">
                        <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4">
                            🐍
                        </div>
                        <h3 className="text-xl font-bold text-white">Python Foundations</h3>
                        <div className="mt-2 flex justify-between items-center text-sm">
                            <span className="bg-white text-gray-600 rounded-full px-3 py-1">Ages 12-14</span>
                            <span className="bg-white text-gray-600 rounded-full px-3 py-1">12 weeks</span>
                        </div>
                        <p className="mt-4 text-white text-opacity-90 text-sm">
                            Text-based programming with Python. Learn real coding syntax while building
                            games, apps, and solving fun challenges.
                        </p>
                        <a href="#" className="mt-4 inline-flex items-center text-white font-semibold group">
                            Learn More →
                        </a>
                    </div>

                    {/* Course Card 3: Web Development */}
                    <div className="rounded-2xl p-6 shadow-lg text-left bg-gradient-to-br from-green-300 to-teal-300">
                        <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4">
                            🌐
                        </div>
                        <h3 className="text-xl font-bold text-white">Web Development</h3>
                        <div className="mt-2 flex justify-between items-center text-sm">
                            <span className="bg-white text-gray-600 rounded-full px-3 py-1">Ages 13-16</span>
                            <span className="bg-white text-gray-600 rounded-full px-3 py-1">10 weeks</span>
                        </div>
                        <p className="mt-4 text-white text-opacity-90 text-sm">
                            Build your own websites with HTML, CSS, and JavaScript. Create interactive web
                            pages and learn modern web technologies.
                        </p>
                        <a href="#" className="mt-4 inline-flex items-center text-white font-semibold group">
                            Learn More →
                        </a>
                    </div>

                    {/* Course Card 4: Game Development */}
                    <div className="rounded-2xl p-6 shadow-lg text-left bg-gradient-to-br from-purple-400 to-pink-400">
                        <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4">
                            🎮
                        </div>
                        <h3 className="text-xl font-bold text-white">Game Development</h3>
                        <div className="mt-2 flex justify-between items-center text-sm">
                            <span className="bg-white text-gray-600 rounded-full px-3 py-1">Ages 14-16</span>
                            <span className="bg-white text-gray-600 rounded-full px-3 py-1">14 weeks</span>
                        </div>
                        <p className="mt-4 text-white text-opacity-90 text-sm">
                            Create your own video games! Learn game design principles and programming while
                            building 2D games that you can share with friends.
                        </p>
                        <a href="#" className="mt-4 inline-flex items-center text-white font-semibold group">
                            Learn More →
                        </a>
                    </div>
                </div>

                {/* What Your Child Will Learn Section */}
                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-gray-700">What Your Child Will Learn</h2>
                    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center text-center">
                            <span className="child-learn font-large">🧠</span>
                            <p className="text-lg font-medium text-gray-700">Problem Solving</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <span className="child-learn font-large">🎯</span>
                            <p className="text-lg font-medium text-gray-700">Logical Thinking</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <span className="child-learn font-large">🤝</span>
                            <p className="text-lg font-medium text-gray-700">Collaboration</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <span className="child-learn font-large">💡</span>
                            <p className="text-lg font-medium text-gray-700">Creativity</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursesSection; 