import React from "react";

const VisionMissionValues = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8 mb-16">
                    <div className="flex-1 rounded-2xl p-8 shadow-lg text-left bg-gradient-to-br from-indigo-500 to-blue-500 text-white">
                        <div className="flex items-center mb-4">
                            <span className="text-5xl mr-4">🔮</span>
                            <h2 className="text-4xl font-bold">Our Vision</h2>
                        </div>
                        <p className="mt-4 text-lg text-white">
                            To become the leading platform that inspires and empowers the next generation of young innovators, making coding accessible, enjoyable, and meaningful for every child.
                        </p>
                        <p className="mt-4 text-lg text-white">
                            We envision a world where every child has the opportunity to explore technology creatively, develop critical thinking skills, and build confidence to shape the digital future.
                        </p>
                    </div>

                    <div className="flex-1 rounded-2xl p-8 shadow-lg text-left bg-gradient-to-br from-green-400 to-teal-400 text-white">
                        <div className="flex items-center mb-4">
                            <span className="text-5xl mr-4">🎯</span> 
                            <h2 className="text-4xl font-bold">Our Mission</h2>
                        </div>
                        <p className="mt-4 text-lg text-white">
                            To provide high-quality, age-appropriate coding education that combines fun with learning, fostering creativity, problem-solving skills, and technological literacy in young minds.
                        </p>
                        <ul className="mt-6 space-y-3">
                            <li className="flex items-center text-lg text-white">
                                <span className="text-2xl mr-3">✨</span> Make coding fun and accessible for all children
                            </li>
                            <li className="flex items-center text-lg text-white">
                                <span className="text-2xl mr-3">🌱</span> Nurture critical thinking and creativity
                            </li>
                            <li className="flex items-center text-lg text-white">
                                <span className="text-2xl mr-3">🤝</span> Build a supportive learning community
                            </li>
                            <li className="flex items-center text-lg text-white">
                                <span className="text-2xl mr-3">🚀</span> Prepare kids for a technology-driven future
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Our Core Values Section */}
                <div className="text-center mt-16">
                    <h2 className="text-4xl font-bold text-gray-700">Our <span className="text-indigo-600">Core Values</span></h2>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="rounded-2xl p-6 shadow-lg text-center bg-white">
                            <span className="text-5xl mb-4 block">🎨</span> 
                            <h3 className="text-xl font-bold text-gray-800">Creativity</h3>
                            <p className="mt-2 text-gray-700 text-sm">
                                Encouraging innovative thinking and creative problem-solving
                            </p>
                        </div>

                        <div className="rounded-2xl p-6 shadow-lg text-center bg-white">
                            <span className="text-5xl mb-4 block">📚</span> 
                            <h3 className="text-xl font-bold text-gray-800">Excellence</h3>
                            <p className="mt-2 text-gray-700 text-sm">
                                Delivering high-quality education with passionate instructors
                            </p>
                        </div>

                        <div className="rounded-2xl p-6 shadow-lg text-center bg-white">
                            <span className="text-5xl mb-4 block">🌈</span> 
                            <h3 className="text-xl font-bold text-gray-800">Inclusivity</h3>
                            <p className="mt-2 text-gray-700 text-sm">
                                Creating a welcoming environment for all learners
                            </p>
                        </div>

                        <div className="rounded-2xl p-6 shadow-lg text-center bg-white">
                            <span className="text-5xl mb-4 block">🎉</span> 
                            <h3 className="text-xl font-bold text-gray-800">Fun</h3>
                            <p className="mt-2 text-gray-700 text-sm">
                                Making learning enjoyable and engaging for every child
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionMissionValues; 