import React, { useState } from 'react'
import './Contact.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
    const email = 'darshkumar.jasani@gmail.com';
    const [formData, setFormData] = useState({
        subject: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            setIsSubmitting(true);
            const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.email}\n\n${formData.message}`)}`;
            window.location.href = mailtoLink;
            
            // Reset form after submission
            setTimeout(() => {
                setFormData({ subject: '', email: '', message: '' });
                setIsSubmitting(false);
            }, 1000);
        }
    };

    const socialLinks = [
        {
            icon: <LinkedInIcon />,
            label: 'LinkedIn',
            url: 'https://www.linkedin.com/in/darsh-jasani/',
            color: '#0077b5'
        },
        {
            icon: <GitHubIcon />,
            label: 'GitHub',
            url: 'https://github.com/darshjasani',
            color: '#333'
        },
        {
            icon: <EmailIcon />,
            label: 'Email',
            url: `mailto:${email}`,
            color: '#ea4335'
        }
    ];

    return (
        <section id="contact" className='contact-section reveal-on-scroll'>
            <div className='contactBody'>
            <div className='contactDesc'>
                    <h2 className='start'>Let's connect</h2>
                    <p className='end'>
                        Now that you know a lot about me, let me know if you are interested to hire me. 
                        I'm always open to discussing new opportunities and collaborations.
                    </p>
                    
                    {/* Social Links */}
                    <div className='social-links'>
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target={link.url.startsWith('http') ? '_blank' : '_self'}
                                rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                                className='social-link'
                                aria-label={link.label}
                                style={{ '--hover-color': link.color }}
                            >
                                {link.icon}
                                <span>{link.label}</span>
                            </a>
                        ))}
            </div>
                </div>

                <form className='contactForm' onSubmit={handleSubmit} noValidate>
                    <div className='form-group'>
                        <label htmlFor='subject'>Subject *</label>
                        <input
                            type='text'
                            id='subject'
                            name='subject'
                            value={formData.subject}
                            onChange={handleChange}
                            className={errors.subject ? 'error' : ''}
                            placeholder='What do you want to discuss?'
                            aria-required="true"
                            aria-invalid={errors.subject ? 'true' : 'false'}
                            aria-describedby={errors.subject ? 'subject-error' : undefined}
                        />
                        {errors.subject && (
                            <span id='subject-error' className='error-message' role='alert'>
                                {errors.subject}
                            </span>
                        )}
                    </div>

                    <div className='form-group'>
                        <label htmlFor='email'>Email Address *</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? 'error' : ''}
                            placeholder='your.email@example.com'
                            aria-required="true"
                            aria-invalid={errors.email ? 'true' : 'false'}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && (
                            <span id='email-error' className='error-message' role='alert'>
                                {errors.email}
                            </span>
                        )}
                </div>
                
                    <div className='form-group'>
                        <label htmlFor='message'>Message *</label>
                        <textarea
                            id='message'
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            className={errors.message ? 'error' : ''}
                            placeholder='Tell me about your project or opportunity...'
                            rows='5'
                            aria-required="true"
                            aria-invalid={errors.message ? 'true' : 'false'}
                            aria-describedby={errors.message ? 'message-error' : undefined}
                        />
                        {errors.message && (
                            <span id='message-error' className='error-message' role='alert'>
                                {errors.message}
                            </span>
                        )}
                </div>
                
                    <button 
                        type='submit' 
                        className='submit-btn'
                        disabled={isSubmitting}
                        aria-busy={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : "Let's get started"}
                    </button>
                </form>
            </div>
        </section>
  )
}

export default Contact
