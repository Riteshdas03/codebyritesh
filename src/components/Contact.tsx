
import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Code, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        'service_pn0ftsl', // Service ID
        'template_gou87s6', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        '_9mo824crJGUYWsk8' // Public Key
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "riteshdas495@gmail.com",
      href: "mailto:riteshdas495@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91-8093328935",
      href: "tel:+918093328935"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/Riteshdas03",
      href: "https://github.com/Riteshdas03",
      color: "hover:text-gray-900"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/ritesh-das-a96ab4273",
      href: "http://www.linkedin.com/in/ritesh-das-a96ab4273",
      color: "hover:text-blue-600"
    },
    {
      icon: <Code className="w-5 h-5" />,
      label: "LeetCode",
      value: "leetcode.com/u/Ritesh_das03",
      href: "https://leetcode.com/u/Ritesh_das03/",
      color: "hover:text-orange-600"
    },
    {
      icon: <Brain className="w-5 h-5" />,
      label: "GeeksforGeeks",
      value: "geeksforgeeks.org/user/riteshdyjqr",
      href: "https://www.geeksforgeeks.org/user/riteshdyjqr/",
      color: "hover:text-green-600"
    }
  ];

  return (
    <section id="contact" className="section-min-height section-spacing relative overflow-hidden flex items-center">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div 
          className="absolute top-20 -left-20 w-40 h-40 lg:w-64 lg:h-64 bg-primary/10 lg:bg-primary/20 rounded-full blur-lg lg:blur-xl"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 -right-20 w-36 h-36 lg:w-56 lg:h-56 bg-accent/10 lg:bg-accent/20 rounded-full blur-lg lg:blur-xl"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-5xl lg:text-6xl font-bold gradient-text mb-6">Let's Connect</h2>
          <div className="w-32 h-2 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div data-aos="fade-right" data-aos-delay="200">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 sm:p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div data-aos="fade-up" data-aos-delay="300">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full h-10 sm:h-12"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div data-aos="fade-up" data-aos-delay="400">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full h-10 sm:h-12"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div data-aos="fade-up" data-aos-delay="500">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full h-10 sm:h-12"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div data-aos="fade-up" data-aos-delay="600">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full min-h-[100px] sm:min-h-[120px]"
                    placeholder="Tell me about your project or idea..."
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 sm:py-4 rounded-full transition-all duration-300 hover:animate-pulse disabled:opacity-50 h-12 sm:h-14 text-sm sm:text-base"
                  data-aos="zoom-in"
                  data-aos-delay="700"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div data-aos="fade-left" data-aos-delay="300">
            <div className="space-y-6 sm:space-y-8">
              {/* Direct Contact */}
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Get in Touch</h3>
                <div className="space-y-3 sm:space-y-4">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={contact.label}
                      href={contact.href}
                      className="flex items-center p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl hover:shadow-md hover:scale-105 transition-all duration-300"
                      data-aos="fade-left"
                      data-aos-delay={400 + (index * 100)}
                    >
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0 hover:scale-110 hover:rotate-12 transition-all duration-300">
                        {contact.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-gray-900 text-sm sm:text-base">{contact.label}</p>
                        <p className="text-gray-600 text-sm sm:text-base break-all">{contact.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div data-aos="fade-left" data-aos-delay="600">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Find me online</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center p-3 sm:p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all duration-300 transform hover:scale-105 ${social.color}`}
                      data-aos="zoom-in"
                      data-aos-delay={700 + (index * 100)}
                    >
                      <div className="mr-2 sm:mr-3 text-gray-600 flex-shrink-0 hover:scale-110 hover:rotate-12 transition-all duration-300">
                        {social.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-gray-900 text-sm sm:text-base">{social.label}</p>
                        <p className="text-xs sm:text-sm text-gray-600 break-all">{social.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div 
                className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 sm:p-8 rounded-2xl text-white"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Ready to collaborate?</h4>
                <p className="text-blue-100 mb-4 sm:mb-6 text-sm sm:text-base">
                  Whether you have a project in mind, want to discuss opportunities, or just want to connect, 
                  I'm always open to meaningful conversations.
                </p>
                <Button
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 hover:animate-pulse px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base transition-all duration-300"
                  data-aos="zoom-in"
                  data-aos-delay="1000"
                >
                  Let's Talk!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
