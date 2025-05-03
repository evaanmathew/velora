import React from 'react'
import Image from 'next/image'

function Solutions() {
  const solutions = [
    {
      title: "For Teams",
      description: "Collaborate seamlessly with your team members in real-time. Share workspaces, assign tasks, and track progress together.",
      image: "/images/team-collaboration.svg"
    },
    {
      title: "For Enterprises",
      description: "Scale your organization with enterprise-grade security, compliance, and administrative controls.",
      image: "/images/enterprise.svg"
    },
    {
      title: "For Developers",
      description: "Integrate Velora into your workflow with our comprehensive API and developer tools.",
      image: "/images/developer.svg"
    }
  ]

  return (
    <section id="solutions" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Solutions for Every Need</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you're a small team or a large enterprise, Velora has the perfect solution for you.
          </p>
        </div>
        <div className="space-y-20">
          {solutions.map((solution, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              <div className="lg:w-1/2">
                <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold mb-4">{solution.title}</h3>
                <p className="text-gray-600 text-lg">{solution.description}</p>
                <button className="mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions 