import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="day-band-white relative px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <p className="section-kicker text-center">Open channel</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Start a <span className="text-primary">conversation</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate, or just to chat? Feel free to reach out.
          I'm always open to discussing new opportunities and meeting new people!!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 text-left">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-sm bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:vuanbaolam@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    vuanbaolam@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-sm bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+14193789241"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (419) 378-9241
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-sm bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Santa Clara, CA, USA
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/lam-an-bao-vu/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-sm border border-border transition-colors hover:border-primary hover:text-primary">
                  <Linkedin />
                </a>
                
                <a href="https://www.instagram.com/_.blam/" target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-sm border border-border transition-colors hover:border-primary hover:text-primary">
                  <Instagram />
                </a>
                
              </div>
            </div>
          </div>

          <div
            className="mission-panel p-6 text-left sm:p-8"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6"> Shoot me a message</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-sm border border-border bg-background px-4 py-3 focus:border-primary focus:outline-none"
                  placeholder="Nikola Tesla"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-sm border border-border bg-background px-4 py-3 focus:border-primary focus:outline-none"
                  placeholder="iamnoob@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="min-h-32 w-full resize-none rounded-sm border border-border bg-background px-4 py-3 focus:border-primary focus:outline-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "lab-button lab-button-primary w-full"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
