import React from 'react';
import { MessageCircle, Users, Star, Quote, ArrowRight } from 'lucide-react';

const Community = () => {
  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'CODM Champion',
      avatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'GameBox Arena has the most professional tournaments I\'ve ever participated in. The organization is exceptional.'
    },
    {
      name: 'Sarah Williams',
      role: 'Apex Legends Pro',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'The community here is incredible. I\'ve made lifelong friends and improved my skills dramatically.'
    },
    {
      name: 'Mike Rodriguez',
      role: 'FIFA Pro Player',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'From online qualifiers to LAN finals, GameBox Arena delivers an amazing competitive experience.'
    }
  ];

  const features = [
    {
      icon: Star,
      title: 'Exclusive Content',
      description: 'Early access to tournament announcements and professional gaming insights'
    },
    {
      icon: Users,
      title: 'Team Formation',
      description: 'Connect with like-minded players and build your competitive squad'
    },
    {
      icon: MessageCircle,
      title: 'Live Support',
      description: '24/7 community support from our dedicated moderator team'
    }
  ];

  return (
    <section id="community" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark-900">
            Join Our <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">Community</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Connect with fellow gamers, share strategies, and stay updated on tournaments and events
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Community Features */}
          <div>
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center">
                <Users className="w-8 h-8 text-primary-blue mx-auto mb-4" />
                <div className="text-2xl font-bold text-dark-900 mb-2">2,500+</div>
                <div className="text-gray-600 text-sm">Community Members</div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center">
                <MessageCircle className="w-8 h-8 text-primary-purple mx-auto mb-4" />
                <div className="text-2xl font-bold text-dark-900 mb-2">24/7</div>
                <div className="text-gray-600 text-sm">Active Support</div>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-blue to-primary-purple rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-primary-blue to-primary-purple px-6 py-3 rounded-lg text-white font-semibold hover:shadow-medium transition-all duration-200 flex items-center justify-center">
                Join Discord
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className="border border-primary-blue px-6 py-3 rounded-lg text-primary-blue font-semibold hover:bg-primary-blue hover:text-white transition-all duration-200">
                Join Telegram
              </button>
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <h3 className="text-2xl font-bold text-dark-900 mb-8">What Our Players Say</h3>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-primary-blue/30 hover:shadow-soft transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <Quote className="w-4 h-4 text-primary-blue mr-2" />
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3 italic">"{testimonial.quote}"</p>
                      <div>
                        <div className="font-semibold text-dark-900">{testimonial.name}</div>
                        <div className="text-sm text-primary-blue">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;