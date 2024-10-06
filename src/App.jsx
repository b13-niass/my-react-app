import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage.jsx";
import {addJob, deleteJob, jobLoader, updateJob} from "./api/jobs.js";
import EditJobPage from "./pages/EditJobPage.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<HomePage/>} />
            <Route path='/jobs' element={<JobsPage/>} />
            <Route path='/jobs/add' element={<AddJobPage addJobSubmit={addJob}/>} />
            <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
            <Route path='/jobs/edit/:id' element={<EditJobPage editJobSubmit={updateJob}/>} loader={jobLoader}/>
            <Route path='*' element={<NotFoundPage/>} />
        </Route>
    )
)

const App = () => {
    return <RouterProvider router={router}/>
}

export default App;

