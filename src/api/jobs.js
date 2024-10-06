const apiUrl = import.meta.env.VITE_API_URL;
export const addJob = async (job) =>{
    const res = await fetch(`${apiUrl}/jobs`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(job)
    })
    return res.json;
}

export const deleteJob = async (job) =>{
    const res = await fetch(`${apiUrl}/jobs/${job.id}`,{
        method: "DELETE"
    })
    return res.ok;
}

export const updateJob = async (job) =>{
    const res = await fetch(`${apiUrl}/jobs/${job.id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(job)
    })
    return res.ok;
}

export const getTotalJobs = async () => {
    const response = await fetch(`${apiUrl}/jobs`);
    const jobs = await response.json();
    return jobs.length; // Returns the total number of jobs
};

export const getQueryJobs = async ({pageParam = 0}) => {
    const res = await fetch(`${apiUrl}/jobs?_limit=10&_start=${pageParam}`)
    const data = await res.json();
    const totalJobs = await getTotalJobs();
    return {jobs: data, prevOffset: pageParam,jobsCount: totalJobs};
}

export const jobLoader = async ({params}) => {
    const res = await fetch(`${apiUrl}/jobs/${params.id}`);
    const data = await res.json();
    return data
}