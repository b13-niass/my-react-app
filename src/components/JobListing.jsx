
const JobListing = ({job}) => {
  return (
      <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-indigo-600 font-bold text-sm mb-2">{job.type}</p>
          <h3 className="text-lg font-bold mb-2">{job.title}</h3>
          <p className="text-gray-600 mb-4">
              {job.description}
          </p>
          <a href="#" className="text-indigo-600 font-bold mb-2 block">More</a>
          <p className="text-gray-800 font-bold">{job.salary} / Year</p>
          <p className="text-gray-600">
              <i className="fas fa-map-marker-alt text-red-500"></i> {job.location}
          </p>
          <a href={`/jobs/${job.id}`} className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded">Read
              More</a>
      </div>
  )
}

export default JobListing;