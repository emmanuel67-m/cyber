const Projects = () => {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-blue-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
        
        </section>
  
        {/* Projects Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "E-Commerce Platform",
                  category: "Web Development",
                  image: "https://i.pinimg.com/474x/22/bc/8e/22bc8ebef610eb881071e1a7007a7a80.jpg",
                },
                {
                  title: "Mobile Banking App",
                  category: "Mobile Development",
                  image: "https://i.pinimg.com/474x/1a/4c/08/1a4c08457241189a37605d3bb5c1e15e.jpg",
                },
                {
                  title: "AI-Powered Analytics",
                  category: "Machine Learning",
                  image: "https://i.pinimg.com/474x/0e/c2/94/0ec294ac6fc6e583ad648f9aefd01666.jpg",
                },
                {
                  title: "Cloud Migration",
                  category: "Cloud Solutions",
                  image: "https://i.pinimg.com/474x/18/33/33/183333428e6bc9316d05614c7c7e3308.jpg",
                },
                {
                  title: "IoT Dashboard",
                  category: "UI/UX Design",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  title: "Security System",
                  category: "Cybersecurity",
                  image: "https://i.pinimg.com/474x/19/19/4d/19194d842c31c8bbd12ed8c3a023eaff.jpg",
                },
              ].map((project, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="text-cyan-400 text-sm mb-2">{project.category}</div>
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }
  
  export default Projects
  
  