import jobs from '../jobs.json'
import JobListing from "./JobListing";
const JobListings = () => {
    const recentJobs = jobs.slice(0,3)
  return (
      <section className="bg-blue-50 py-10">
          <div className="container mx-auto">
              <h2 className="text-2xl font-bold text-center mb-6">Recent Jobs</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {recentJobs.map((job) => (
                     <JobListing key={job.id} job={job}/>
                  ))}
              </div>
          </div>
      </section>
  )
}

export default JobListings;