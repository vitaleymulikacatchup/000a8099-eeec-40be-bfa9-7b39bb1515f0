"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Instagram } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="floatingGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="flat"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            {name: "Home", id: "home"},
            {name: "About", id: "about"},
            {name: "Blog", id: "blog"},
            {name: "Contact", id: "contact"}
          ]}
          button={{
            text: "Order Now",
            href: "https://www.coffeeshop.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Welcome to Our Coffee Shop"
          description="Experience the best brew in town."
          imageSrc="https://images.pexels.com/photos/3352765/pexels-photo-3352765.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Cozy coffee shop"
          buttons={[
            {
              text: "Order Now",
              href: "https://www.coffeeshop.com/order"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="Crafting the Perfect Cup of Coffee Since 1989"
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Real feedback from those who love our coffee."
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Coffee Enthusiast",
              testimonial: "The best coffee I've ever had!",
              imageSrc: "https://images.pexels.com/photos/3796810/pexels-photo-3796810.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Mike Brown",
              role: "Frequent Visitor",
              testimonial: "A delightful experience every time.",
              imageSrc: "https://images.pexels.com/photos/8936888/pexels-photo-8936888.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Emily White",
              role: "Daily Drinker",
              testimonial: "Can't start my day without it.",
              imageSrc: "https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "John Doe",
              role: "Coffee Lover",
              testimonial: "Rich flavors and great atmosphere.",
              imageSrc: "https://images.pexels.com/photos/3796810/pexels-photo-3796810.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Our Coffee Stories"
          description="Insights and updates from our team."
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          title="Stay Updated"
          description="Join our newsletter for the latest updates."
          imageSrc="https://images.pexels.com/photos/6166751/pexels-photo-6166751.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Barista making coffee"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Coffee Shop"
          columns={[
            {
              title: "Product",
              items: [
                {label: "Features", href: "features"},
                {label: "Pricing", href: "pricing"}
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/coffeeshop",
              ariaLabel: "Instagram"
            }
          ]}
          copyrightText="© Coffee Shop, 2025"
        />
      </div>
    </ThemeProvider>
  );
}