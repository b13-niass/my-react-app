import {useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import {toast} from "react-toastify";
import * as Yup from "yup";

const AddJobPage = ({addJobSubmit}) => {
    const navigate = useNavigate();

    const validationSchemaYup = Yup.object().shape({
        type: Yup.string().required("Job Type is required"),
        title: Yup.string().required("Job Listing Name is required"),
        location: Yup.string().required("Location is required"),
        description: Yup.string().required("Description is required"),
        salary: Yup.string().required("Salary is required"),
        company: Yup.object().shape({
            name: Yup.string().required("Company Name is required"),
            description: Yup.string().required("Company Description is required"),
            contactEmail: Yup.string().email("Invalid email format").required("Contact Email is required"),
            contactPhone: Yup.string().required("Le numéro de téléphone est requis").matches(
                /^(77|78|76)\d{7}$/,
                "Invalid phone number format (77|78|76)7777777"
            )
        })
    })

    const formik = useFormik({
        initialValues: {
            type: "Full-Time",
            title: "",
            location: "",
            description: "",
            salary: "Under $50K",
            company:{
                name: "",
                description: "",
                contactEmail: "",
                contactPhone: ""
            }
        },
        onSubmit: (values) => {
            addJobSubmit(values);
            toast.success("Job added successfully");
            navigate("/jobs");
        },
        validationSchema: validationSchemaYup
    })


    return (
        <section className='bg-indigo-50'>
            <div className='container m-auto max-w-2xl py-24'>
                <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
                    <form onSubmit={formik.handleSubmit}>
                        <h2 className='text-3xl text-center font-semibold mb-6'>Add Job</h2>

                        <div className='mb-4'>
                            <label
                                htmlFor='type'
                                className='block text-gray-700 font-bold mb-2'
                            >
                                Job Type
                            </label>
                            <select
                                id='type'
                                name='type'
                                className='border rounded w-full py-2 px-3'
                                value={formik.values.type}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                <option value='Full-Time'>Full-Time</option>
                                <option value='Part-Time'>Part-Time</option>
                                <option value='Remote'>Remote</option>
                                <option value='Internship'>Internship</option>
                            </select>
                            {formik.touched.type && formik.errors.type && (
                                <p className='text-red-500'>{formik.errors.type}</p>
                            )}
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700 font-bold mb-2'>
                                Job Listing Name
                            </label>
                            <input
                                type='text'
                                id='title'
                                name='title'
                                className='border rounded w-full py-2 px-3 mb-2'
                                placeholder='eg. Beautiful Apartment In Miami'
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.type && formik.errors.title && (
                                <p className='text-red-500'>{formik.errors.title}</p>
                            )}
                        </div>
                        <div className='mb-4'>
                            <label
                                htmlFor='description'
                                className='block text-gray-700 font-bold mb-2'
                            >
                                Description
                            </label>
                            <textarea
                                id='description'
                                name='description'
                                className='border rounded w-full py-2 px-3'
                                rows='4'
                                placeholder='Add any job duties, expectations, requirements, etc'
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            ></textarea>
                            {formik.touched.type && formik.errors.description && (
                                <p className='text-red-500'>{formik.errors.description}</p>
                            )}
                        </div>
                        <div className='mb-4'>
                            <label
                                htmlFor='type'
                                className='block text-gray-700 font-bold mb-2'
                            >
                                Salary
                            </label>
                            <select
                                id='salary'
                                name='salary'
                                className='border rounded w-full py-2 px-3'
                                value={formik.values.salary}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                <option value='Under $50K'>Under $50K</option>
                                <option value='$50K - 60K'>$50K - $60K</option>
                                <option value='$60K - 70K'>$60K - $70K</option>
                                <option value='$70K - 80K'>$70K - $80K</option>
                                <option value='$80K - 90K'>$80K - $90K</option>
                                <option value='$90K - 100K'>$90K - $100K</option>
                                <option value='$100K - 125K'>$100K - $125K</option>
                                <option value='$125K - 150K'>$125K - $150K</option>
                                <option value='$150K - 175K'>$150K - $175K</option>
                                <option value='$175K - 200K'>$175K - $200K</option>
                                <option value='Over $200K'>Over $200K</option>
                            </select>
                            {formik.touched.type && formik.errors.salary && (
                                <p className='text-red-500'>{formik.errors.salary}</p>
                            )}
                        </div>
                        <div className='mb-4'>
                            <label className='block text-gray-700 font-bold mb-2'>
                                Location
                            </label>
                            <input
                                type='text'
                                id='location'
                                name='location'
                                className='border rounded w-full py-2 px-3 mb-2'
                                placeholder='Company Location'
                                value={formik.values.location}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.type && formik.errors.location && (
                                <p className='text-red-500'>{formik.errors.location}</p>
                            )}
                        </div>
                        <h3 className='text-2xl mb-5'>Company Info</h3>

                        <div className='mb-4'>
                            <label
                                htmlFor='company'
                                className='block text-gray-700 font-bold mb-2'
                            >
                                Company Name
                            </label>
                            <input
                                type='text'
                                id='company'
                                name='company[name]'
                                className='border rounded w-full py-2 px-3'
                                placeholder='Company Name'
                                value={formik.values.company.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.type && formik.errors.company.name && (
                                <p className='text-red-500'>{formik.errors.company.name}</p>
                            )}
                        </div>
                        <div className='mb-4'>
                            <label
                                htmlFor='company_description'
                                className='block text-gray-700 font-bold mb-2'
                            >
                                Company Description
                            </label>
                            <textarea
                                id='company_description'
                                name='company[description]'
                                className='border rounded w-full py-2 px-3'
                                rows='4'
                                placeholder='What does your company do?'
                                value={formik.values.company.description}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            ></textarea>
                            {formik.touched.type && formik.errors.company.description && (
                                <p className='text-red-500'>{formik.errors.company.description}</p>
                            )}
                        </div>
                        <div className='mb-4'>
                            <label
                                htmlFor='contact_email'
                                className='block text-gray-700 font-bold mb-2'
                            >
                                Contact Email
                            </label>
                            <input
                                type='email'
                                id='contact_email'
                                name='company[contactEmail]'
                                className='border rounded w-full py-2 px-3'
                                placeholder='Email address for applicants'
                                value={formik.values.company.contactEmail}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.type && formik.errors.company.contactEmail && (
                                <p className='text-red-500'>{formik.errors.company.contactEmail}</p>
                            )}
                        </div>
                        <div className='mb-4'>
                            <label
                                htmlFor='contact_phone'
                                className='block text-gray-700 font-bold mb-2'
                            >
                                Contact Phone
                            </label>
                            <input
                                type='tel'
                                id='contact_phone'
                                name='company[contactPhone]'
                                className='border rounded w-full py-2 px-3'
                                placeholder='Optional phone for applicants'
                                value={formik.values.company.contactPhone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.type && formik.errors.company.contactPhone && (
                                <p className='text-red-500'>{formik.errors.company.contactPhone}</p>
                            )}
                        </div>

                        <div>
                            <button
                                className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                                type='submit'
                            >
                                Add Job
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default AddJobPage
