import JobListing from "./JobListing";
import Spinner from "./Spinner.jsx";
import {useInfiniteQuery} from "@tanstack/react-query";
import {getQueryJobs} from "../api/jobs.js";
import InfiniteScroll from "react-infinite-scroll-component";

const JobListings = ({isHome = false}) => {

    const {data, fetchNextPage, hasNextPage} = useInfiniteQuery({
        queryKey: ["jobs"],
        queryFn: getQueryJobs,
        getNextPageParam: (lastPage) => {
            const nextOffset = lastPage.prevOffset + 10;
            if (nextOffset >= lastPage.jobsCount) {
                return undefined;
            }
            return nextOffset;
        },
    });

    let jobs = data?.pages.reduce((acc, page) => {
        return [...acc, ...page.jobs];
    }, []);

    return (
        <section className="bg-blue-50 py-10">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold text-center mb-6">{isHome ? 'Recent Jobs' : 'Browse Jobs'}</h2>
                {!isHome &&
                    <InfiniteScroll
                        next={() => fetchNextPage()}
                        hasMore={hasNextPage}
                        loader={<Spinner loading={true}/>}
                        dataLength={jobs ? jobs.length : 0}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {jobs && jobs.map((job) => (
                                <JobListing key={job.id} job={job}/>
                            ))}
                        </div>

                    </InfiniteScroll>}
                    {isHome && <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {jobs && jobs?.slice(0, 3).map((job) => (
                                <JobListing key={job.id} job={job}/>
                            ))}
                    </div>}
                </div>
        </section>
    );
}

export default JobListings;