import {Link} from "react-router-dom";

const ViewAllJobs = () => {
  return (
      <section className="bg-white py-8">
          <div className="container mx-auto text-center">
              <Link to="/jobs" className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-bold">
                  View All Jobs
              </Link>
          </div>
      </section>
  )
}

export default ViewAllJobs;