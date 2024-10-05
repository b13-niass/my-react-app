const Hero = ({title='Become a React Dev', subtitle='FInd the React job that fits your skill set'}) => {
  return (
      <main className="bg-indigo-600 text-white py-10">
          <div className="container mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">{title}</h2>
              <p className="text-lg">{subtitle}</p>
          </div>
      </main>
  )
}

export default Hero;