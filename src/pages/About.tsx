import React, { useEffect } from 'react'
import { Music, Users, Heart, Award, Star, Calendar } from 'lucide-react'

const About = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll('.fade-in-section')
    animatedElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We believe dance is a language of the soul. Every movement tells a story, and we help our students find their unique voice through the art of flamenco.'
    },
    {
      icon: Music,
      title: 'Tradition',
      description: 'Rooted in authentic Spanish flamenco traditions, we honor the rich cultural heritage while embracing contemporary expressions of this timeless art form.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Our studio is more than a place to learn - it\'s a vibrant community where dancers of all levels come together to share their love for flamenco.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We are committed to providing the highest quality instruction, helping each student achieve their personal best through dedicated practice and expert guidance.'
    }
  ]

  const instructors = [
    {
      name: 'Isabella Rodriguez',
      role: 'Founder & Principal Instructor',
      bio: 'Born in Sevilla, Isabella brings over 20 years of professional flamenco experience. She has performed in prestigious venues across Spain and founded Arte Flamenco to share her passion for authentic flamenco.',
      image: 'https://images.pexels.com/photos/6253956/pexels-photo-6253956.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialties: ['Traditional Flamenco', 'Choreography', 'Performance Technique']
    },
    {
      name: 'Carlos Mendoza',
      role: 'Guitar Instructor',
      bio: 'Master guitarist with 15 years of experience in flamenco guitar. Carlos has accompanied renowned dancers and brings the authentic sound of Andalusia to our studio.',
      image: 'https://images.pexels.com/photos/3971985/pexels-photo-3971985.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialties: ['Flamenco Guitar', 'Rhythm & Compás', 'Accompaniment']
    },
    {
      name: 'Maria Santos',
      role: 'Contemporary Flamenco Instructor',
      bio: 'Innovative dancer who bridges traditional flamenco with contemporary movement. Maria has trained with top companies in Madrid and brings fresh perspectives to classical forms.',
      image: 'https://images.pexels.com/photos/6253944/pexels-photo-6253944.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialties: ['Contemporary Fusion', 'Improvisation', 'Modern Techniques']
    }
  ]

  const milestones = [
    { year: '2018', event: 'Arte Flamenco Studio founded in the heart of the city' },
    { year: '2019', event: 'First annual student showcase performed to sold-out audience' },
    { year: '2020', event: 'Launched virtual classes during pandemic, reaching global students' },
    { year: '2021', event: 'Opened second studio space for advanced workshops' },
    { year: '2022', event: 'Celebrated 500+ students and 50+ performances' },
    { year: '2023', event: 'Established cultural exchange program with Sevilla conservatory' }
  ]

  const achievements = [
    { number: '500+', label: 'Students Trained' },
    { number: '50+', label: 'Performances' },
    { number: '15+', label: 'Expert Instructors' },
    { number: '6', label: 'Years of Excellence' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#121212] text-white section-padding">
        <div className="container-max text-center">
          <h1 className="section-title text-white mb-6 animate-fade-in-up">
            About Arte Flamenco
          </h1>
          <p className="section-subtitle text-gray-300 max-w-3xl mx-auto animate-fade-in-up-delay-1">
            Where passion meets tradition. Discover the soul-stirring art of flamenco through authentic instruction, vibrant community, and transformative experiences.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding fade-in-section">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <img
                src="https://images.pexels.com/photos/6253951/pexels-photo-6253951.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Flamenco dancer in traditional dress"
                className="rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="space-y-8 animate-fade-in-right">
              <div>
                <h2 className="section-title text-3xl mb-4">
                  Our Story
                </h2>
                <p className="body-large mb-6">
                  Arte Flamenco was born from a deep love for the passionate art of flamenco dance. Founded in 2018 by Isabella Rodriguez, a master dancer from Sevilla, our studio has become a beacon for authentic flamenco education and cultural preservation.
                </p>
                <p className="body-large mb-6">
                  What started as a small studio with a handful of dedicated students has blossomed into a thriving community of over 500 dancers, musicians, and flamenco enthusiasts. We believe that flamenco is more than just dance - it's a way of expressing the deepest emotions of the human spirit.
                </p>
                <p className="body-large">
                  Every class, every performance, every moment in our studio is infused with the duende - that magical, indefinable quality that makes flamenco so captivating and transformative.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="bg-gray-50 section-padding fade-in-section">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-left">
              <div>
                <h2 className="section-title text-3xl mb-4">
                  Our Mission
                </h2>
                <p className="body-large">
                  To preserve and share the authentic art of flamenco while creating an inclusive space where students of all backgrounds can discover their passion, develop their skills, and connect with the rich cultural heritage of Andalusia.
                </p>
              </div>
              <div>
                <h2 className="section-title text-3xl mb-4">
                  Our Philosophy
                </h2>
                <p className="body-large">
                  We believe that flamenco is accessible to everyone, regardless of age, background, or experience level. Our teaching approach honors traditional techniques while encouraging personal expression and artistic growth.
                </p>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <img
                src="https://images.pexels.com/photos/6253949/pexels-photo-6253949.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Flamenco class in session"
                className="rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding fade-in-section">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Our Core Values
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              These principles guide our teaching, our community, and our commitment to the art of flamenco.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card p-8 text-center animate-card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6 animate-scale-in">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="feature-title mb-4">
                  {value.title}
                </h3>
                <p className="body-text">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-red-600 text-white section-padding fade-in-section">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title text-white mb-6">
              Our Achievements
            </h2>
            <p className="section-subtitle text-red-100 max-w-3xl mx-auto">
              Six years of dedication, passion, and community building in the world of flamenco.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                  {achievement.number}
                </div>
                <p className="text-red-100 text-lg">
                  {achievement.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 section-padding fade-in-section">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Our Journey
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Key milestones in our studio's growth and impact in the flamenco community.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-600 rounded-full"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } animate-fade-in-up`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="card p-6 animate-card-hover">
                      <div className="text-2xl font-bold text-red-600 mb-2">{milestone.year}</div>
                      <p className="body-text text-lg">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Instructors */}
      <section className="section-padding fade-in-section">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Meet Our Instructors
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              World-class artists and teachers dedicated to sharing the authentic art of flamenco.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <div key={index} className="card p-8 text-center animate-card-hover" style={{ animationDelay: `${index * 0.2}s` }}>
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6 transition-transform duration-300 hover:scale-110"
                />
                <h3 className="feature-title mb-2">
                  {instructor.name}
                </h3>
                <p className="text-red-600 font-semibold mb-4">{instructor.role}</p>
                <p className="body-text mb-4">
                  {instructor.bio}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {instructor.specialties.map((specialty, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-gray-50 section-padding fade-in-section">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              What Makes Us Different
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Discover why Arte Flamenco is the premier destination for authentic flamenco education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-8 animate-card-hover">
              <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="feature-title mb-4">Authentic Instruction</h3>
              <p className="body-text">
                Learn from instructors trained in the heart of Andalusia, bringing genuine Spanish flamenco traditions to every class.
              </p>
            </div>
            
            <div className="card p-8 animate-card-hover">
              <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="feature-title mb-4">Small Class Sizes</h3>
              <p className="body-text">
                Personalized attention with maximum 12 students per class ensures individual growth and proper technique development.
              </p>
            </div>
            
            <div className="card p-8 animate-card-hover">
              <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="feature-title mb-4">Performance Opportunities</h3>
              <p className="body-text">
                Regular showcases, community events, and professional performance opportunities for students at all levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-800 text-white section-padding fade-in-section">
        <div className="container-max text-center">
          <h2 className="section-title text-white mb-6 animate-fade-in-up">
            Begin Your Flamenco Journey
          </h2>
          <p className="section-subtitle text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in-up-delay-1">
            Whether you're a complete beginner or an experienced dancer, we have the perfect class for you. Join our passionate community today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
            <button className="btn-primary bg-red-600 hover:bg-red-700">
              Start Your Journey
            </button>
            <button className="btn-outline">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
