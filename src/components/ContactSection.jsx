import { Github, Linkedin, Mail, Phone, School2 } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/300">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>

        {/* Description */}
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          I’m always open to discussing new opportunities, collaborations, or just a friendly chat. Feel free to reach out!
        </p>

        {/* Contact Information Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-8">
          {/* Email */}
          <div className="flex flex-col items-center space-y-2">
            <div className="p-3 rounded-full bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-medium">Email</h4>
            <a
              href="mailto:sanyam.sapra1113@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              sanyam.sapra1113@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center space-y-2">
            <div className="p-3 rounded-full bg-primary/10">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-medium">Phone</h4>
            <a
              href="tel:+919910167403"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              +91 9910167403
            </a>
          </div>

          {/* Education */}
          <div className="flex flex-col items-center space-y-2">
            <div className="p-3 rounded-full bg-primary/10">
              <School2 className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-medium">Education</h4>
            <p className="text-muted-foreground">DIT University, Dehradun</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="pt-12">
          <h4 className="font-medium mb-4">Connect With Me</h4>
          <div className="flex space-x-6 justify-center">
            <a
              href="https://www.linkedin.com/in/sanyam-sapra-057668279/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/SanyamSapra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6 hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
