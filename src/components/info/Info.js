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
              icon="https://cdn.lordicon.com/rbtjfgoz.json"
              heading="Custom Software Development"
              content="Our team of experienced developers can create custom software
              tailored to your unique business needs. We work closely with our
              clients to understand their requirements, and then build
              software solutions that are scalable, secure, and user-friendly.
              Whether you need a new app or a complex system, we can help."
            />
            <Card
              icon="https://cdn.lordicon.com/zlyxhzar.json"
              heading="Custom Software Development"
              content="Our team of experienced developers can create custom software
            tailored to your unique business needs. We work closely with our
            clients to understand their requirements, and then build software
            solutions that are scalable, secure, and user-friendly. Whether you
            need a new app or a complex system, we can help."
            />
            <Card
              icon="https://cdn.lordicon.com/tftaqjwp.json"
              heading="Custom Software Development"
              content="Our team of experienced developers can create custom software
            tailored to your unique business needs. We work closely with our
            clients to understand their requirements, and then build software
            solutions that are scalable, secure, and user-friendly. Whether you
            need a new app or a complex system, we can help."
            />
            <Card
              icon="https://cdn.lordicon.com/tgolujfo.json"
              heading="Custom Software Development"
              content="Our team of experienced developers can create custom software
            tailored to your unique business needs. We work closely with our
            clients to understand their requirements, and then build software
            solutions that are scalable, secure, and user-friendly. Whether you
            need a new app or a complex system, we can help."
            />
            <Card
              icon="https://cdn.lordicon.com/nxooksci.json"
              heading="Custom Software Development"
              content="Our team of experienced developers can create custom software
            tailored to your unique business needs. We work closely with our
            clients to understand their requirements, and then build software
            solutions that are scalable, secure, and user-friendly. Whether you
            need a new app or a complex system, we can help."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
