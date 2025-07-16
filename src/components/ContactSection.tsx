import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    setIsSending(true);
    setError(null);

    // EmailJS configuration
    const serviceID = 'service_rmvmagx'; // Replace with your EmailJS Service ID
    const templateID = 'template_izjj11v'; // Replace with your EmailJS Template ID
    const publicKey = 'Fdw0MGjnEWgJL2t0R'; // Replace with your EmailJS Public Key

    // EmailJS template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'vollerei21@gmail.com'
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        alert('Your message has been sent to vollerei21@gmail.com!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
        setError('Failed to send the message. Please try again later.');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold mb-6 glow-text">
            SUMMON THE BEARER
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
          <p className="font-crimson text-xl text-muted-foreground max-w-2xl mx-auto">
            Speak the ancient words through the digital ether, and I shall heed your call
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="ancient-border bg-card p-8 rounded-lg">
            <h3 className="font-cinzel text-2xl font-bold mb-6 rune-decoration">
              Cast Your Message
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="font-cinzel text-sm font-medium mb-2 block">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full ancient-border bg-muted p-3 rounded font-crimson focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Enter your name, traveler..."
                  required
                />
              </div>

              <div>
                <label className="font-cinzel text-sm font-medium mb-2 block">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full ancient-border bg-muted p-3 rounded font-crimson focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="font-cinzel text-sm font-medium mb-2 block">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full ancient-border bg-muted p-3 rounded font-crimson resize-none focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Share your thoughts from the digital realm..."
                  required
                />
              </div>

              {error && (
                <p className="text-red-500 font-crimson text-sm">{error}</p>
              )}

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSending}
                className={`w-full ancient-border bg-primary text-primary-foreground py-3 px-6 rounded font-cinzel font-medium hover:bg-primary/80 transform hover:scale-105 transition-all duration-300 glow-border ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSending ? 'Sending...' : 'Send Message Into The Void'}
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="ancient-border bg-card p-6 rounded-lg">
              <h4 className="font-cinzel text-xl font-bold mb-4 text-primary">
                ◆ Digital Coordinates ◆
              </h4>
              <div className="space-y-3 font-crimson">
                <p className="flex items-center">
                  <span className="text-primary mr-2">📧</span>
                  ishomnabil@gmail.com
                </p>
                <p className="flex items-center">
                  <span className="text-primary mr-2">🌐</span>
                  https://github.com/MoriKaslana
                </p>
                <p className="flex items-center"> 
                  <span className="text-primary mr-2">💼</span>
                  https://www.linkedin.com/in/ishom-nabil-umran-alihaq-98383a218/  
                </p>
              </div>
            </div>

            <div className="ancient-border bg-card p-6 rounded-lg">
              <h4 className="font-cinzel text-xl font-bold mb-4 text-primary">
                ◆ Realm Status ◆
              </h4>
              <div className="space-y-3 font-crimson">
                <p>🟢 Available for new quests</p>
                <p>⚡ Response time: 1-2 days</p>
                <p>🌟 Open to collaborations</p>
              </div>
            </div>

            <div className="ancient-border bg-card p-6 rounded-lg">
              <h4 className="font-cinzel text-xl font-bold mb-4 text-primary">
                ◆ Preferred Summons ◆
              </h4>
              <div className="space-y-2 font-crimson text-sm">
                <p>• Website Designer</p>
                <p>• UI/UX Design Consultations</p>
                <p>• Quality Assurance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
