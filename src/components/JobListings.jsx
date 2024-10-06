import JobListing from "./JobListing";
import Spinner from "./Spinner.jsx";
import {useQuery} from "@tanstack/react-query";

const JobListings = ({isHome = false}) => {
    const getJobs = async () => {
        const apiUrl = isHome ? "/api/jobs?_limit=3" :"/api/jobs";
        try {
            const res = await fetch(apiUrl);
            return  await res.json();
        }catch (err) {
            console.error('Error fetching jobs:', err);
        }
    }

    const { data: jobs, status, error} = useQuery({
        queryKey:["jobs"],
        queryFn: getJobs
    })

  return (
      <section className="bg-blue-50 py-10">
          <div className="container mx-auto">
              <h2 className="text-2xl font-bold text-center mb-6">{isHome ? 'Recent Jobs' : 'Browse Jobs'}</h2>
                  <Spinner loading={status === "pending"}/>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {status !== "pending" && jobs.map((job) => (
                     <JobListing key={job.id} job={job}/>
                  ))}
              </div>
          </div>
      </section>
  )
}

export default JobListings;