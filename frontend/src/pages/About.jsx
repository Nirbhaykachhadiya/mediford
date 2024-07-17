import React from "react";
import Years from "../Elements/Years";

const About = () => {
  return (
    <div className=" pt-[100px]  bg-[#F2F2F2] pb-10">

      <div className="text-[#3E3A39] font-sans flex justify-center p-7 sm:p-14 ">
        <div>
          <div className=" font-icu text-[24px] sm:text-[30px]">
            Who we are ...{" "}
          </div>
          <div className="font-product text-[16px] sm:text-[18px] mt-5">
            RK Mediford Private Limited stands as a premier provider of medical
            equipment, committed to delivering top-notch solutions to healthcare
            facilities worldwide. Our journey commenced in 2015 under the name
            Global Meditech, where we set the standard for excellence in the
            medical equipment industry. In 2020, we underwent a significant
            transformation, rebranding ourselves as RK Mediford Private Limited,
            signifying our dedication to innovation and quality as we continue
            to evolve and expand.
            <br />
            <br />
            As Mediford, we specialize in sourcing and supplying a wide array of
            medical equipment and supplies tailored to the needs of healthcare
            institutions, clinics, and professionals globally. Our product range
            encompasses state-of-the-art devices, instruments, and technologies
            carefully curated to meet the diverse requirements of modern
            healthcare practices.
            <br />
            <br />
            Understanding the pivotal role that reliable and advanced medical
            equipment plays in delivering superior patient care, we have
            cultivated strategic partnerships with leading manufacturers and
            suppliers. This ensures that we offer our clients the latest
            innovations and highest quality products available in the market.
            <br />
            <br />
            Our team comprises experienced professionals and industry experts
            who are dedicated to providing personalized service and support to
            our customers. Whether you seek assistance in selecting the right
            equipment or require technical support, our knowledgeable team is
            committed to guiding you through every step of the process.
            <br />
            At Mediford, we are driven by a fervent commitment to improving
            healthcare outcomes globally. We take pride in our unwavering
            dedication to excellence, innovation, and customer satisfaction. As
            your trusted partner, we are steadfast in our mission to advance
            healthcare solutions and contribute to enhanced patient care on a
            global scale.
          </div>
        </div>
      </div>
      <Years />
    </div>
  );
};

export default About;
