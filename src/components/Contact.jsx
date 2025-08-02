import Section from './Section';
import { personalInfo, socialLinks } from '../data';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        setStatus('Thank you for your message!');
        setFormData({ name: '', email: '', message: '' });
    };
    
  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-2xl mx-auto ">
        <p className="mb-8 text-lg font-bold ">
          Get in touch with me to discuss ideas, collaborations, or opportunities. I'd love to hear from you!
        </p>
        
        <form action="https://formsubmit.co/chaitanyabehlforwork@gmail.com"  method="POST"  className="space-y-4" >
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full p-3 rounded-md bg-white/10 border border-slate-300/30 focus:ring-2 focus:ring-accent outline-none" />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full p-3 rounded-md bg-white/10 border border-slate-300/30 focus:ring-2 focus:ring-accent outline-none" />
            <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required className="w-full p-3 rounded-md bg-white/10 border border-slate-300/30 focus:ring-2 focus:ring-accent outline-none"></textarea>
            <button type="submit" className="w-full px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors">
                Send Message
            </button>
            {status && <p className="mt-4 text-accent">{status}</p>}
        </form>
       
      </div>
    </Section>
  );
};

export default Contact;