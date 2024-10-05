import Card from "./Card";
const HomeCards = () => {
  return (
      <section className="container mx-auto py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
              <Card>
                  <h3 className="text-xl font-bold mb-2">For Developers</h3>
                  <p>Browse our React jobs and start your career today</p>
                  <a href="#" className="mt-4 inline-block bg-black text-white px-4 py-2 rounded">Browse Jobs</a>
              </Card>
              <Card bg='bg-indigo-100'>
                  <h3 className="text-xl font-bold mb-2">For Employers</h3>
                  <p>List your job to find the perfect developer for the role</p>
                  <a href="#" className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded">Add Job</a>
              </Card>
          </div>
      </section>
  )
}

export default HomeCards;