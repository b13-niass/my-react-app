export const addJob = async (job) =>{
    const res = await fetch("/api/jobs",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(job)
    })
    return res.json;
}

export const deleteJob = async (job) =>{
    const res = await fetch(`/api/jobs/${job.id}`,{
        method: "DELETE"
    })
    return res.ok;
}

export const updateJob = async (job) =>{
    const res = await fetch(`/api/jobs/${job.id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(job)
    })
    return res.ok;
}

export const getTotalJobs = async () => {
    const response = await fetch('/api/jobs');
    const jobs = await response.json();
    return jobs.length; // Returns the total number of jobs
};

export const getQueryJobs = async ({pageParam = 0}) => {
    const res = await fetch(`https://react-jobs-app-db.onrender.com/jobs?_limit=10&_start=${pageParam}`)
    const data = await res.json();
    const totalJobs = await getTotalJobs();
    return {jobs: data, prevOffset: pageParam,jobsCount: totalJobs};
}

