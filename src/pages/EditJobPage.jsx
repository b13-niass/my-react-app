import {useLoaderData} from "react-router-dom";

const EditJobPage = () => {
    const {id } = useParams();
    const job = useLoaderData();
    return (
        <div>EditJobPage</div>
    )
}
export default EditJobPage
