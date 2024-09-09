import React from 'react';
import Hero from '../components/Hero/Hero';
import Feature from '../components/Features/Features';
import chatIcon from '../img/icon-chat.webp';
import moneyIcon from '../img/icon-money.webp';
import securityIcon from '../img/icon-security.webp';


function HomePage() {
  return (
    <main>
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <Feature imgSrc={chatIcon} imgAlt="Chat Icon" title="You are our #1 priority">
          Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.
        </Feature>
        <Feature imgSrc={moneyIcon} imgAlt="Money Icon" title="More savings means higher rates">
          The more you save with us, the higher your interest rate will be!
        </Feature>
        <Feature imgSrc={securityIcon} imgAlt="Security Icon" title="Security you can trust">
          We use top of the line encryption to make sure your data and money is always safe.
        </Feature>
      </section>
    </main>
  );
}

export default HomePage;