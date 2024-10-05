import {useState} from "react";
import { FaMapMarker } from "react-icons/fa";

const JobListing = ({job}) => {
    const [showFullDescription,setShowFullDescription ] = useState(false);

    let description = job.description;



    if(!showFullDescription){
        description = description.substring(0, 90) + "...";
    }
  return (
      <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-indigo-600 font-bold text-sm mb-2">{job.type}</p>
          <h3 className="text-lg font-bold mb-2">{job.title}</h3>
          <p className="text-gray-600 mb-4">
              {description}
          </p>
          <button onClick={() => setShowFullDescription(prevState => !prevState)} className="text-indigo-500 mb-5 hover:text-indigo-600 hover:font-bold">
              {showFullDescription ? 'Less' : 'More'}
          </button>

          {/*<a href="#" className="text-indigo-600 font-bold mb-2 block">More</a>*/}
          <p className="text-gray-800 font-bold">{job.salary} / Year</p>
          <p className="text-gray-600">
              <FaMapMarker className="inline text-lg mb-1 text-red-600"/> {job.location}
          </p>
          <a href={`/jobs/${job.id}`} className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded">Read
              More</a>
      </div>
  )
}

export default JobListing;