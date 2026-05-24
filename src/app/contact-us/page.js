import React from "react";
import Image from "next/image";
import Layout from "@/components/global/layout/Layout";
import PageHeading from "@/components/global/layout/heading/pageHeading";
import Contact from "@/components/global/common/forms/Contact";
import { FiMail, FiPhoneCall, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

export const metadata = {
  title: "Contact Us | E-Commerce",
  description: "Get in touch with our team. We are available 24/7 to help you with order issues, refunds, and inquiries.",
};

const CONTACT_CARDS = [
  {
    id: 1,
    title: "Email Us",
    info: "We respond to all inquiries within 2 hours.",
    contact: "support@ecommerce.com",
    icon: <FiMail className="w-6 h-6" />,
    link: "mailto:support@ecommerce.com"
  },
  {
    id: 2,
    title: "Call Us",
    info: "Toll-free customer hotline.",
    contact: "+1 (555) 123-4567",
    icon: <FiPhoneCall className="w-6 h-6" />,
    link: "tel:+15551234567"
  },
  {
    id: 3,
    title: "Visit Us",
    info: "Our office headquarters location.",
    contact: "Kazım Karabekir No:5 Ümraniye, İstanbul",
    icon: <FiMapPin className="w-6 h-6" />,
    link: "https://maps.google.com"
  }
];

const ContactUs = () => {
  return (
    <Layout>
      <PageHeading title="Contact Us" />

      <div className="bg-background text-foreground min-h-screen">
        <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10 space-y-16">
          
          {/* Contact Promo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {CONTACT_CARDS.map((card) => (
              <div
                key={card.id}
                className="bg-card border border-border p-8 rounded-2xl text-center flex flex-col items-center justify-between shadow-sm hover:shadow transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <div className="flex-1 space-y-2">
                  <h5 className="text-lg font-bold font-serif">{card.title}</h5>
                  <p className="text-sm text-muted-foreground">{card.info}</p>
                </div>
                <div className="mt-4 pt-2 w-full border-t border-border">
                  {card.link.startsWith("http") ? (
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-primary hover:underline break-words"
                    >
                      {card.contact}
                    </a>
                  ) : (
                    <a
                      href={card.link}
                      className="text-sm font-semibold text-primary hover:underline break-words"
                    >
                      {card.contact}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form & Hours */}
          <div className="grid lg:grid-cols-12 gap-12 items-start pt-8 border-t border-border">
            {/* Business Hours & Promo */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h4 className="text-xl sm:text-2xl font-bold font-serif">Reach out to us!</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Have a question about our products, a shipping delay, or an exchange request? Fill out our contact form and our support team will get in touch with you as soon as possible.
                </p>
              </div>

              {/* Working Hours */}
              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm space-y-4">
                <h5 className="font-bold text-md text-foreground">Business Hours</h5>
                <div className="text-sm space-y-2.5">
                  <div className="flex justify-between border-b border-border/50 pb-1.5">
                    <span className="text-muted-foreground">Monday – Friday</span>
                    <span className="font-semibold">9:00 AM – 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between border-b border-border/50 pb-1.5">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-semibold">10:00 AM – 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-rose-500 font-semibold">Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="space-y-3">
                <h5 className="font-bold text-sm text-muted-foreground uppercase tracking-wider">
                  Follow Our Socials
                </h5>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary rounded-full flex items-center justify-center transition-colors">
                    <FiFacebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary rounded-full flex items-center justify-center transition-colors">
                    <FiTwitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary rounded-full flex items-center justify-center transition-colors">
                    <FiInstagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary rounded-full flex items-center justify-center transition-colors">
                    <FiLinkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-inner hidden lg:block">
                <Image
                  width={874}
                  height={874}
                  src="/contact-us.png"
                  alt="Contact customer service illustration"
                  className="w-full object-cover"
                />
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 bg-card border border-border p-8 rounded-2xl shadow-sm">
              <h4 className="text-lg font-bold mb-6 border-b border-border pb-3 text-foreground">
                Send Us a Message
              </h4>
              <Contact />
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
