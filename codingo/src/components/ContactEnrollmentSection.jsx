import React from "react";

const ContactEnrollmentSection = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-indigo-500 to-blue-500 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-5xl font-bold text-white">Start Your Child's <span className="text-lime-300">Coding Journey</span></h2>
                <p className="mt-4 text-xl max-w-2xl mx-auto text-white text-opacity-90">
                    Ready to enroll? Fill out the form below and we'll get in touch to discuss the best
                    learning path for your child.
                </p>

                <div className="mt-12 flex flex-col lg:flex-row gap-8 items-start">
                    {/* Get In Touch Section */}
                    <div className="flex-1 bg-white rounded-lg shadow-lg p-8 text-left text-gray-800">
                        <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                        <div className="space-y-6">
                            <div className="flex items-center">
                                <span className="text-3xl mr-4">✉️</span>
                                <div>
                                    <p className="font-semibold">Email Us</p>
                                    <p className="text-indigo-600">hello@codingo.academy</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="text-3xl mr-4">📞</span>
                                <div>
                                    <p className="font-semibold">Call Us</p>
                                    <p className="text-indigo-600">+1 (555) 123-CODE</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h4 className="font-bold mb-2">Office Hours</h4>
                            <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                            <p className="text-gray-700">Saturday: 10:00 AM - 4:00 PM</p>
                            <p className="text-gray-700">Sunday: Closed</p>
                        </div>

                        <div className="mt-8">
                            <h4 className="font-bold mb-4">Why Choose Codingo?</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center text-gray-700">
                                    <span className="text-xl mr-2">✨</span> Small class sizes (max 8 students)
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="text-xl mr-2">🎓</span> Certified instructors
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="text-xl mr-2">💻</span> Modern learning platform
                                </li>
                                <li className="flex items-center text-gray-700">
                                    <span className="text-xl mr-2">✅</span> Proven track record
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Enrollment Form Section */}
                    <div className="flex-[2] bg-white rounded-lg shadow-lg p-8 text-left text-gray-800">
                        <h3 className="text-2xl font-bold mb-6">Enrollment Form</h3>
                        <form className="space-y-6">
                            {/* Parent Information */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="parentName" className="block text-sm font-medium text-gray-700">Parent's Name <span className="text-red-500">*</span></label>
                                    <input type="text" id="parentName" name="parentName" placeholder="Your full name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500" required />
                                </div>
                                <div>
                                    <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">Email Address <span className="text-red-500">*</span></label>
                                    <input type="email" id="emailAddress" name="emailAddress" placeholder="your.email@example.com" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500" required />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number <span className="text-red-500">*</span></label>
                                <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="+1 (555) 123-4567" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500" required />
                            </div>

                            {/* Child Information */}
                            <div className="border-t border-gray-200 pt-6 mt-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h4 className="text-lg font-bold text-gray-800">Child Information <span className="text-red-500">*</span></h4>
                                    <button type="button" className="text-indigo-600 font-medium text-sm flex items-center">
                                        <span className="mr-1">+</span> Add Another Child
                                    </button>
                                </div>
                                {/* Child 1 */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label htmlFor="child1Name" className="block text-sm font-medium text-gray-700">Child's Name</label>
                                        <input type="text" id="child1Name" name="child1Name" placeholder="Child's full name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500" />
                                    </div>
                                    <div>
                                        <label htmlFor="child1Age" className="block text-sm font-medium text-gray-700">Age</label>
                                        <select id="child1Age" name="child1Age" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500">
                                            <option>Select age</option>
                                            {[...Array(10)].map((_, i) => <option key={i}>{i + 8}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="child1School" className="block text-sm font-medium text-gray-700">School Name</label>
                                        <input type="text" id="child1School" name="child1School" placeholder="School name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500" />
                                    </div>
                                </div>
                            </div>

                            {/* Preferred Courses */}
                            <div className="border-t border-gray-200 pt-6 mt-6">
                                <h4 className="text-lg font-bold text-gray-800 mb-4">Preferred Courses (select all that interest you)</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-center">
                                        <input type="checkbox" id="scratch" name="courses" value="Scratch Programming" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                        <label htmlFor="scratch" className="ml-2 text-gray-700">Scratch Programming</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="checkbox" id="python" name="courses" value="Python Foundations" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                        <label htmlFor="python" className="ml-2 text-gray-700">Python Foundations</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="checkbox" id="webdev" name="courses" value="Web Development" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                        <label htmlFor="webdev" className="ml-2 text-gray-700">Web Development</label>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="checkbox" id="gamedev" name="courses" value="Game Development" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                                        <label htmlFor="gamedev" className="ml-2 text-gray-700">Game Development</label>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="mt-8 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-indigo-700 transition w-full flex items-center justify-center">
                                Submit Application <span className="ml-2 text-xl">🚀</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactEnrollmentSection; 