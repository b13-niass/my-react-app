import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";

const App = () => {
    return (
        <>
            <Navbar/>
            <Hero title="Test "/>
            <section className="container mx-auto py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2">For Developers</h3>
                        <p>Browse our React jobs and start your career today</p>
                        <a href="#" className="mt-4 inline-block bg-black text-white px-4 py-2 rounded">Browse Jobs</a>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2">For Employers</h3>
                        <p>List your job to find the perfect developer for the role</p>
                        <a href="#" className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded">Add Job</a>
                    </div>
                </div>
            </section>

            <section className="bg-blue-50 py-10">
                <div className="container mx-auto">
                    <h2 className="text-2xl font-bold text-center mb-6">Recent Jobs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-indigo-600 font-bold text-sm mb-2">Full-Time</p>
                            <h3 className="text-lg font-bold mb-2">Senior React Developer</h3>
                            <p className="text-gray-600 mb-4">We are seeking a talented Front-End Developer to join our team
                                in Boston, MA...</p>
                            <a href="#" className="text-indigo-600 font-bold mb-2 block">More</a>
                            <p className="text-gray-800 font-bold">$70K - $80K / Year</p>
                            <p className="text-gray-600"><i className="fas fa-map-marker-alt text-red-500"></i> Boston, MA</p>
                            <a href="#" className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded">Read
                                More</a>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-indigo-600 font-bold text-sm mb-2">Full-Time</p>
                            <h3 className="text-lg font-bold mb-2">Front-End Engineer (React & Redux)</h3>
                            <p className="text-gray-600 mb-4">Join our team as a Front-End Developer in sunny Miami,
                                FL...</p>
                            <a href="#" className="text-indigo-600 font-bold mb-2 block">More</a>
                            <p className="text-gray-800 font-bold">$70K - $80K / Year</p>
                            <p className="text-gray-600"><i className="fas fa-map-marker-alt text-red-500"></i> Miami, FL</p>
                            <a href="#" className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded">Read
                                More</a>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-indigo-600 font-bold text-sm mb-2">Full-Time</p>
                            <h3 className="text-lg font-bold mb-2">React.js Dev</h3>
                            <p className="text-gray-600 mb-4">Are you passionate about front-end development? Join our team
                                in Brooklyn...</p>
                            <a href="#" className="text-indigo-600 font-bold mb-2 block">More</a>
                            <p className="text-gray-800 font-bold">$70K - $80K / Year</p>
                            <p className="text-gray-600"><i className="fas fa-map-marker-alt text-red-500"></i> Brooklyn, NY</p>
                            <a href="#" className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded">Read More</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default App;