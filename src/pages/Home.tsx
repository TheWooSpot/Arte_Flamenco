import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Target, Heart, Award, CheckCircle, Star, Play, Music, Calendar, MapPin } from 'lucide-react'

const Home = () => {
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

  const stats = [
    { number: '500+', label: 'Students Enrolled' },
    { number: '15+', label: 'Dance Styles' },
    { number: '20+', label: 'Expert Instructors' },
    { number: '10+', label: 'Years Experience' },
  ]

  const danceStyles = [
    {
      icon: Music,
      title: 'Flamenco',
      description: 'Traditional Spanish flamenco with authentic techniques, passionate expression, and cultural heritage from Andalusia.'
    },
    {
      icon: Users,
      title: 'Salsa & Bachata',
      description: 'Latin social dances that bring people together with infectious rhythms and vibrant community energy.'
    },
    {
      icon: Target,
      title: 'Contemporary',
      description: 'Modern dance fusion combining classical techniques with creative expression and artistic storytelling.'
    },
    {
      icon: Heart,
      title: 'Hip Hop',
      description: 'Urban dance styles with high energy, street culture influences, and dynamic choreography for all ages.'
    },
  ]

  const testimonials = [
    {
      name: 'Maria Gonzalez',
      role: 'Flamenco Student',
      content: 'Arte Flamenco has transformed my understanding of dance. The instructors are incredibly passionate and the cultural authenticity is unmatched in Southern California.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'David Chen',
      role: 'Hip Hop Student',
      content: 'The diversity of dance styles and the welcoming community here is amazing. I started with hip hop and now I\'m exploring salsa too!',
      rating: 5,
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Sofia Rodriguez',
      role: 'Parent',
      content: 'My daughter has gained so much confidence through the contemporary classes. The instructors really care about each student\'s growth and artistic development.',
      rating: 5,
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
  ]

  const upcomingEvents = [
    {
      title: 'Flamenco Showcase Night',
      date: 'March 15, 2024',
      time: '7:00 PM',
      description: 'Experience the passion of authentic flamenco with performances by our advanced students and guest artists.'
    },
    {
      title: 'Latin Dance Social',
      date: 'March 22, 2024',
      time: '8:00 PM',
      description: 'Join us for an evening of salsa, bachata, and merengue with live music and dance partners for all levels.'
    },
    {
      title: 'Hip Hop Battle Workshop',
      date: 'March 29, 2024',
      time: '6:00 PM',
      description: 'Learn battle techniques, freestyle skills, and urban dance culture from professional hip hop dancers.'
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex items-center justify-start overflow-hidden bg-gray-50" style={{ minHeight: 'calc(100vh - 80px)', paddingTop: '2rem', paddingBottom: '2rem' }}>
        {/* Background with Gradient Overlay */}
        <div className="absolute inset-0 bg-gray-50"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/50 to-black/60"></div>
        
        {/* Content */}
        <div className="relative z-10 container-max">
          <div className="max-w-4xl space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white animate-fade-in-up" style={{ fontSize: 'calc(3.5rem * 0.92)', lineHeight: 'calc(1 * 0.92)' }}>
              Discover the Art of
              <span className="block text-red-400 font-black animate-fade-in-up-delay-1">
                Multi-Cultural
              </span>
              <span className="block text-red-400 font-black animate-fade-in-up-delay-2">
                Dance & Music
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white max-w-3xl leading-relaxed font-normal animate-fade-in-up-delay-3" style={{ fontSize: 'calc(1.125rem * 0.95)' }}>
              From passionate flamenco to vibrant salsa, contemporary to hip hop - explore diverse dance traditions and musical expressions in the heart of Southern California.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4 animate-fade-in-up-delay-4">
              <Link to="/programs" className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg hover:transform hover:scale-105 hover:shadow-lg">
                View Classes
              </Link>
              <Link to="/get-involved" className="border-2 border-red-600 text-red-400 hover:bg-red-600 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg hover:transform hover:scale-105">
                Book Trial Class
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white fade-in-section">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group animate-card-hover">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dance Styles Section */}
      <section className="section-padding bg-gray-50 fade-in-section">
        <div className="container-max">
          <div className="text-center mb-20">
            <h2 className="section-title mb-6">
              Explore Our Dance Styles
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Immerse yourself in diverse cultural traditions through dance and music, taught by passionate instructors who bring authentic techniques and cultural knowledge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {danceStyles.map((style, index) => (
              <div key={index} className="card p-8 text-center group animate-card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-20 h-20 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                  <style.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="feature-title mb-4">
                  {style.title}
                </h3>
                <p className="body-text">
                  {style.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-white fade-in-section">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative animate-fade-in-left">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dance studio with students"
                className="rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 gradient-bg rounded-2xl flex items-center justify-center shadow-xl animate-scale-in hover:scale-110 transition-transform duration-300">
                <Play className="h-8 w-8 text-white ml-1" />
              </div>
            </div>
            <div className="space-y-8 animate-fade-in-right">
              <h2 className="section-title leading-tight">
                Where Culture Meets Movement
              </h2>
              <p className="body-large">
                Arte Flamenco has evolved into Southern California's premier multi-cultural dance and music center. We celebrate the rich traditions of diverse cultures while fostering artistic growth and community connection through the universal language of dance and music.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <div className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-700">Professional instructors with authentic cultural backgrounds</span>
                </li>
                <li className="flex items-start space-x-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <div className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-700">Classes for all ages and skill levels from beginner to advanced</span>
                </li>
                <li className="flex items-start space-x-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <div className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-700">Performance opportunities and cultural events throughout the year</span>
                </li>
              </ul>
              <Link to="/about" className="btn-primary inline-flex items-center text-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="section-padding bg-gray-50 fade-in-section">
        <div className="container-max">
          <div className="text-center mb-20">
            <h2 className="section-title mb-6">
              Upcoming Events & Workshops
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Join us for special performances, workshops, and cultural celebrations that bring our dance community together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="card p-8 animate-card-hover" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-red-600 mr-3" />
                  <span className="text-red-600 font-semibold">{event.date}</span>
                </div>
                <h3 className="feature-title mb-3">
                  {event.title}
                </h3>
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="text-gray-600">{event.time}</span>
                </div>
                <p className="body-text mb-6">
                  {event.description}
                </p>
                <Link to="/events" className="text-red-600 font-semibold hover:text-red-700 transition-colors duration-300 inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white fade-in-section">
        <div className="container-max">
          <div className="text-center mb-20">
            <h2 className="section-title mb-6">
              What Our Students Say
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Hear from our diverse community of dancers and musicians who have found their artistic voice through our programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-8 relative animate-card-hover" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                <p className="body-text mb-8 text-lg">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div>
                    <p className="font-bold text-blue-800 text-lg">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding overflow-hidden fade-in-section">
        <div className="absolute inset-0 gradient-bg"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 container-max text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Ready to Start Your Dance Journey?
          </h2>
          <p className="text-xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-1">
            Join our vibrant community of dancers and musicians. Whether you're a complete beginner or looking to refine your skills, we have the perfect class for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up-delay-2">
            <Link to="/programs" className="btn-primary bg-white text-blue-800 hover:bg-gray-100 text-lg px-10 py-4">
              View All Classes
            </Link>
            <Link to="/contact" className="btn-outline text-lg px-10 py-4">
              Schedule Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
