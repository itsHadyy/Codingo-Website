import React from "react";

const PricingSection = () => {
    return (
        <section className="py-16 bg-white text-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-5xl font-bold text-gray-800">Choose Your <span className="text-indigo-600">Plan</span></h2>
                <p className="mt-4 text-xl max-w-2xl mx-auto text-gray-600">
                    Flexible pricing plans designed to fit your child's learning journey. All plans include
                    our signature hands-on approach and expert instruction.
                </p>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Starter Plan Card */}
                    <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center border-t-8 border-lime-400">
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-semibold text-gray-700">Starter</h3>
                            <p className="text-gray-500 text-sm">Perfect for trying out coding</p>
                            <p className="text-4xl font-bold text-lime-400 mt-2">$79 <span className="text-lg text-gray-600">per month</span></p>
                        </div>
                        <ul className="text-left space-y-3 w-full">
                            <li className="flex items-center text-gray-700">
                                <span className="text-lime-500 mr-2">✓</span> 1 course enrollment
                            </li>
                            <li className="flex items-center text-gray-700">
                                <span className="text-lime-500 mr-2">✓</span> Weekly 1-hour sessions
                            </li>
                            <li className="flex items-center text-gray-700">
                                <span className="text-lime-500 mr-2">✓</span> Basic project portfolio
                            </li>
                            <li className="flex items-center text-gray-700">
                                <span className="text-lime-500 mr-2">✓</span> Email support
                            </li>
                            <li className="flex items-center text-gray-700">
                                <span className="text-lime-500 mr-2">✓</span> Access to learning materials
                            </li>
                        </ul>
                        <button className="mt-8 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-indigo-700 transition w-full">
                            Get Started
                        </button>
                    </div>

                    {/* Explorer Plan Card */}
                    <div className="rounded-lg shadow-lg p-8 flex flex-col items-center bg-gradient-to-br from-indigo-500 to-purple-500 relative">
                        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">⭐ MOST POPULAR</span>
                        <div className="text-center mb-6 mt-4">
                            <h3 className="text-2xl font-semibold text-white">Explorer</h3>
                            <p className="text-white text-opacity-90 text-sm">Most popular choice for serious learners</p>
                            <p className="text-4xl font-bold text-white mt-2">$139 <span className="text-lg text-white">per month</span></p>
                        </div>
                        <ul className="text-left space-y-3 w-full">
                            <li className="flex items-center text-white">
                                <span className="text-lime-300 mr-2">✓</span> 2 course enrollments
                            </li>
                            <li className="flex items-center text-white">
                                <span className="text-lime-300 mr-2">✓</span> Weekly 1.5-hour sessions
                            </li>
                            <li className="flex items-center text-white">
                                <span className="text-lime-300 mr-2">✓</span> Advanced project portfolio
                            </li>
                            <li className="flex items-center text-white">
                                <span className="text-lime-300 mr-2">✓</span> Priority support
                            </li>
                            <li className="flex items-center text-white">
                                <span className="text-lime-300 mr-2">✓</span> 1-on-1 mentor sessions
                            </li>
                            <li className="flex items-center text-white">
                                <span className="text-lime-300 mr-2">✓</span> Access to all materials
                            </li>
                            <li className="flex items-center text-white">
                                <span className="text-lime-300 mr-2">✓</span> Certificate of completion
                            </li>
                        </ul>
                        <button className="mt-8 bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition w-full">
                            Get Started
                        </button>
                    </div>

                    {/* Innovator Plan Card */}
                    <div className="rounded-lg shadow-lg p-8 flex flex-col items-center bg-gradient-to-br from-purple-500 to-pink-500">
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-semibold text-white">Innovator</h3>
                            <p className="text-white text-opacity-90 text-sm">Comprehensive coding education</p>
                            <p className="text-4xl font-bold text-white mt-2">$199 <span className="text-lg text-white">per month</span></p>
                        </div>
                        <ul className="text-left space-y-3 w-full">
                            <li className="flex items-center text-white">
                                <span className="text-lime-300 mr-2">✓</span> Unlimited course access
                            </li>
                            <li className="flex items-center text-white">
                                <span className="text-lime-300 mr-2">✓</span> Weekly 2-hour sessions
                            </li>
                            <li className="flex items-center text-white">
                                <span className="text-lime-300 mr-2">✓</span> Premium project showcase
                            </li>
                            <li className="flex items-center text-white">
                                <span className="text-lime-300 mr-2">✓</span> 24/7 support
                            </li>
                            <li className="flex items-center text-white">
                                <span className="text-lime-300 mr-2">✓</span> Weekly 1-on-1 mentoring
                            </li>
                            <li className="flex items-center text-white">
                                <span className="text-lime-300 mr-2">✓</span> Advanced workshops
                            </li>
                            <li className="flex items-center text-white">
                                <span className="text-lime-300 mr-2">✓</span> Industry expert sessions
                            </li>
                            <li className="flex items-center text-white">
                                <span className="text-lime-300 mr-2">✓</span> Portfolio review & feedback
                            </li>
                        </ul>
                        <button className="mt-8 bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition w-full">
                            Get Started
                        </button>
                    </div>
                </div>

                {/* All Plans Include Section */}
                <div className="mt-16 text-center">
                    <h2 className="text-4xl font-bold text-gray-700">All Plans <span className="text-indigo-600">Include</span></h2>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center">
                            <span className="text-5xl mb-4">👨‍🏫</span>
                            <h3 className="text-xl font-bold text-gray-800">Expert Instructors</h3>
                            <p className="mt-2 text-gray-600 text-sm">Qualified & passionate teachers</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-5xl mb-4">💻</span>
                            <h3 className="text-xl font-bold text-gray-800">Modern Platform</h3>
                            <p className="mt-2 text-gray-600 text-sm">Interactive learning environment</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-5xl mb-4">🏆</span>
                            <h3 className="text-xl font-bold text-gray-800">Progress Tracking</h3>
                            <p className="mt-2 text-gray-600 text-sm">Regular updates for parents</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection; 