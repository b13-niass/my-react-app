import {useState, useEffect} from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner.jsx";
const JobListings = ({isHome = false}) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
          try {
              const res = await fetch("http://localhost:8084/jobs");
              const data = await res.json();
              setJobs(data);
          }catch (err) {
              console.error('Error fetching jobs:', err);
          }finally {
              setLoading(false);
          }
        }
        fetchJobs();
    }, [])

  return (
      <section className="bg-blue-50 py-10">
          <div className="container mx-auto">
              <h2 className="text-2xl font-bold text-center mb-6">{isHome ? 'Recent Jobs' : 'Browse Jobs'}</h2>
                  <Spinner loading={loading}/>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {!loading && jobs.map((job) => (
                     <JobListing key={job.id} job={job}/>
                  ))}
              </div>
          </div>
      </section>
  )
}

export default JobListings;