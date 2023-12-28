import React from "react";
import { images } from "../../images";
import "./info.scss";
import Card from "./Card";

const Info = () => {
  return (
    <div>
      <div className="we-are-different">
        <div className="container">
          <h2 className="title1 title1--mod">Solutions we provide</h2>
          <div className="we-are-different__content">
            <Card
              icon="https://cdn.lordicon.com/rbtjfgoz.json"
              heading="Custom Software Development"
              content="Our team of experienced developers can create custom software
            tailored to your unique business needs. We work closely with our
            clients to understand their requirements, and then build software
            solutions that are scalable, secure, and user-friendly. Whether you
            need a new app or a complex system, we can help."
            />
            <Card
              icon="https://cdn.lordicon.com/zlyxhzar.json"
              heading="Web Development"
              content="Our web development solutions cover everything from simple
              landing pages to complex e-commerce platforms. We use the latest
              web technologies to create engaging and interactive websites
              that meet your business objectives. We can also optimize your
              website for search engines and ensure that it is responsive
              across all devices."
            />
            <Card
              icon="https://cdn.lordicon.com/tftaqjwp.json"
              heading="Mobile App Development"
              content=" With the increasing use of mobile devices, it's important for
              businesses to have a presence on mobile platforms. Our mobile
              app development solutions cover both iOS and Android platforms,
              and we can help you create apps that are intuitive, engaging,
              and feature-rich."
            />
            <Card
              icon="https://cdn.lordicon.com/xylbqpho.json"
              heading="Cloud-Based Solutions"
              content="Cloud-based solutions offer several benefits, including
              scalability, cost-effectiveness, and increased accessibility.
              Our team can help businesses migrate their applications to the
              cloud or develop cloud-native applications"
            />
            <Card
              icon="https://cdn.lordicon.com/tgolujfo.json"
              heading="Software Integration"
              content="In many cases, businesses have existing software solutions that
              need to be integrated with other applications to streamline
              processes and increase efficiency. We can provide solutions that
              integrate different software applications and systems, providing
              a unified platform for businesses."
            />
            <Card
              icon="https://cdn.lordicon.com/nxooksci.json"
              heading="Software Testing and Quality Assurance"
              content=" We understand the importance of delivering high-quality software
              solutions. Our team conducts rigorous testing and quality
              assurance to ensure that applications are bug-free, secure, and
              reliable."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
