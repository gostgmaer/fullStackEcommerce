import React from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/global/layout/Layout";
import PageHeading from "@/components/global/layout/heading/pageHeading";
import { content } from "@/assets/jsonfile/content";
import { FiCheckCircle, FiTruck, FiShield, FiPhoneCall, FiLinkedin, FiTwitter, FiGlobe } from "react-icons/fi";

export const metadata = {
  title: "About Us | E-Commerce",
  description: "Learn more about our mission, our values, our team, and why we are the leading e-commerce platform for high-quality goods.",
};

const TEAM_MEMBERS = [
  {
    name: "Joshinim",
    role: "Co-Founder & CEO",
    image: "/team/team-1.jpg",
    bio: "Passionate about building scalable digital solutions and creating meaningful user experiences."
  },
  {
    name: "Orla Dwyer",
    role: "Chief Executive",
    image: "/team/team-2.jpg",
    bio: "Focuses on strategic growth, partnerships, and delivering long-term value to our customers."
  },
  {
    name: "Danien James",
    role: "Co-Founder & Chairman",
    image: "/team/team-3.jpg",
    bio: "Bringing over 15 years of industry experience to guide the company's vision and governance."
  },
  {
    name: "Dara Frazier",
    role: "Chief Strategy Officer",
    image: "/team/team-4.jpg",
    bio: "Leads market analysis, product innovation, and expanding our global e-commerce footprint."
  },
  {
    name: "Glenda Arvidson",
    role: "HR Director",
    image: "/team/team-5.jpg",
    bio: "Dedicated to cultivating a supportive, diverse, and innovative team environment."
  },
  {
    name: "Melvin Davis",
    role: "Lead Developer",
    image: "/team/team-6.jpg",
    bio: "Oversees core software architecture, ensuring peak website speed, security, and stability."
  }
];

const VALUES = [
  {
    icon: <FiCheckCircle className="w-6 h-6 text-primary" />,
    title: "Curated Selection",
    desc: "Every product in our store undergoes a rigorous inspection process to ensure it meets our strict quality standards."
  },
  {
    icon: <FiTruck className="w-6 h-6 text-primary" />,
    title: "Fast & Reliable Delivery",
    desc: "We partner with leading global logistics providers to dispatch packages swiftly and provide real-time tracking."
  },
  {
    icon: <FiShield className="w-6 h-6 text-primary" />,
    title: "Secure Transactions",
    desc: "Our checkout is protected by industry-standard SSL encryption and modern fraud prevention mechanisms."
  },
  {
    icon: <FiPhoneCall className="w-6 h-6 text-primary" />,
    title: "24/7 Dedicated Support",
    desc: "Our customer success managers are available around the clock to resolve any questions or ordering concerns."
  }
];

const AboutUs = () => {
  return (
    <Layout>
      <PageHeading title="About Us" />

      <div className="bg-background text-foreground min-h-screen">
        
        {/* Intro Section */}
        <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10">
          <div className="grid grid-flow-row lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our Mission</p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-4 font-serif font-bold leading-tight">
                {content["about-section-title"] || "We are redefining the e-commerce shopping experience."}
              </h3>
              <div className="mt-3 text-base text-muted-foreground leading-relaxed space-y-4">
                <p>{content["about-section-top-paragraph1"]}</p>
                <p>{content["about-section-top-paragraph2"]}</p>
              </div>
              
              {/* Stats Boxes */}
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow transition-shadow">
                  <span className="text-3xl block font-extrabold font-serif mb-2 text-primary">
                    10K+
                  </span>
                  <h4 className="text-md font-bold mb-1">
                    {content["about-listed-products-box-title"] || "Listed Products"}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {content["about-listed-products-box-text"] || "A rich catalog of quality products tailored to your everyday lifestyle needs."}
                  </p>
                </div>
                <div className="p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow transition-shadow">
                  <span className="text-3xl block font-extrabold font-serif mb-2 text-primary">
                    8K+
                  </span>
                  <h4 className="text-md font-bold mb-1">
                    {content["about-customer-box-title"] || "Happy Customers"}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {content["about-customers-box-text"] || "Over eight thousand active satisfied shoppers trust our store for daily purchases."}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="mt-10 lg:mt-0 relative rounded-2xl overflow-hidden shadow-lg border border-border">
              <Image 
                width={920} 
                height={750} 
                src="/about-us.jpg" 
                alt="About our storefront" 
                className="w-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="mt-16 text-base text-muted-foreground leading-relaxed space-y-4">
            <p>{content["about-section-top-paragraph3"]}</p>
            <p>{content["about-section-top-paragraph4"]}</p>
          </div>

          {/* Banner Image */}
          <div className="mt-16 rounded-2xl overflow-hidden shadow-md border border-border">
            <Image
              width={1920}
              height={570}
              src="/about-banner.jpg"
              alt="Our office warehouse team banner"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Why Choose Us Values Section */}
        <div className="border-t border-border bg-muted/20 py-16 lg:py-24">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our Values</p>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif">Why Customers Choose Us</h3>
              <p className="text-sm text-muted-foreground mt-2">
                We are committed to providing value, safety, and a premium shopping journey for everyone.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {VALUES.map((val, idx) => (
                <div key={idx} className="p-6 bg-card border border-border rounded-xl shadow-sm hover:translate-y-[-4px] transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    {val.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{val.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="border-t border-border py-16 lg:py-24">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
            <div className="max-w-2xl mb-12">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Leadership Team</p>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif mb-2">
                {content["about-our-founder-title"] || "Meet the Visionaries"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {content["about-our-founder-paragraph"] || "Our management team brings diverse expertise and a shared focus on e-commerce innovation."}
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {TEAM_MEMBERS.map((member, idx) => (
                <div key={idx} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm group">
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <Image
                      width={420}
                      height={420}
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <h5 className="text-lg font-bold font-serif text-foreground">{member.name}</h5>
                    <span className="text-xs font-semibold text-primary block mt-0.5">{member.role}</span>
                    <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                      {member.bio}
                    </p>
                    {/* Social Media placeholders */}
                    <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border text-muted-foreground">
                      <a href="#" className="hover:text-primary transition-colors"><FiLinkedin className="w-4 h-4" /></a>
                      <a href="#" className="hover:text-primary transition-colors"><FiTwitter className="w-4 h-4" /></a>
                      <a href="#" className="hover:text-primary transition-colors"><FiGlobe className="w-4 h-4" /></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default AboutUs;
