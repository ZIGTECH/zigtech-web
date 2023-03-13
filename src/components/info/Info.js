import React from "react";
import { images } from "../../images";
import "./info.scss";

const Info = () => {
  return (
    <div>
      <div className="we-are-different">
        <div className="container">
          <h2 className="title1 title1--mod">Solutions we provide</h2>
          <div className="we-are-different__content">
            <div className="snappy">
              <lord-icon
                src="https://cdn.lordicon.com/rbtjfgoz.json"
                trigger="loop"
                colors="primary:#996d31"
                state="intro"
                style={{ width: "120px", height: "120px" }}
              ></lord-icon>
              <h3>Custom Software Development</h3>
              <p>
                Our team of experienced developers can create custom software
                tailored to your unique business needs. We work closely with our
                clients to understand their requirements, and then build
                software solutions that are scalable, secure, and user-friendly.
                Whether you need a new app or a complex system, we can help.
              </p>
            </div>
            <div className="affordable">
              <lord-icon
                src="https://cdn.lordicon.com/zlyxhzar.json"
                trigger="loop"
                colors="primary:#996d31"
                style={{ width: "120px", height: "120px" }}
              ></lord-icon>
              <h3>Web Development</h3>
              <p>
                Our web development solutions cover everything from simple
                landing pages to complex e-commerce platforms. We use the latest
                web technologies to create engaging and interactive websites
                that meet your business objectives. We can also optimize your
                website for search engines and ensure that it is responsive
                across all devices.
              </p>
            </div>
            <div className="people">
              <lord-icon
                src="https://cdn.lordicon.com/tftaqjwp.json"
                trigger="loop"
                colors="primary:#996d31"
                style={{ width: "120px", height: "120px" }}
              ></lord-icon>
              <h3>Mobile App Development</h3>
              <p>
                With the increasing use of mobile devices, it's important for
                businesses to have a presence on mobile platforms. Our mobile
                app development solutions cover both iOS and Android platforms,
                and we can help you create apps that are intuitive, engaging,
                and feature-rich.
              </p>
            </div>
            <div className="people">
              <lord-icon
                src="https://cdn.lordicon.com/xylbqpho.json"
                trigger="loop"
                colors="primary:#996d31"
                style={{ width: "120px", height: "120px" }}
              ></lord-icon>
              <h3>Cloud-Based Solutions</h3>
              <p>
                Cloud-based solutions offer several benefits, including
                scalability, cost-effectiveness, and increased accessibility.
                Our team can help businesses migrate their applications to the
                cloud or develop cloud-native applications.
              </p>
            </div>
            <div className="people">
              <lord-icon
                src="https://cdn.lordicon.com/tgolujfo.json"
                trigger="loop"
                colors="primary:#996d31"
                style={{ width: "120px", height: "120px" }}
              ></lord-icon>
              <h3>Software Integration</h3>
              <p>
                In many cases, businesses have existing software solutions that
                need to be integrated with other applications to streamline
                processes and increase efficiency. We can provide solutions that
                integrate different software applications and systems, providing
                a unified platform for businesses.
              </p>
            </div>
            <div className="people">
              <lord-icon
                src="https://cdn.lordicon.com/nxooksci.json"
                trigger="loop"
                colors="primary:#996d31"
                style={{ width: "120px", height: "120px" }}
              ></lord-icon>
              <h3>Software Testing and Quality Assurance</h3>
              <p>
                We understand the importance of delivering high-quality software
                solutions. Our team conducts rigorous testing and quality
                assurance to ensure that applications are bug-free, secure, and
                reliable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
