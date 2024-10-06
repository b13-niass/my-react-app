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
