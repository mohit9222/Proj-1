import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>
          IT - Financial Planning - Capital Expense.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[16px] max-w-8xl leading-[30px]"
      >
        As a seasoned Program Manager, I have spearheaded capital and expense
        planning initiatives across all departments within my organization,
        driving efficiency and transparency in financial management processes.
        By introducing effective processes and leveraging technology, I
        successfully reduced manual processes by an impressive 80%, resulting in
        significant time and cost savings.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[16px] max-w-8xl leading-[30px]"
      >
        My meticulous attention to detail and commitment to excellence were
        highly appreciated as I set up these processes, ensuring accuracy,
        reliability, and compliance with organizational policies and
        regulations. Utilizing metrics to track and display budget and expenses,
        I provided leadership with real-time insights into financial
        performance, enabling informed decision-making and resource allocation.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[16px] max-w-8xl leading-[30px]"
      >
        To secure budget approvals, I wrote compelling business case studies
        that clearly articulated the value proposition and return on investment
        of proposed initiatives. By effectively communicating the financial
        implications and strategic importance of these projects, I garnered
        support from stakeholders and facilitated alignment with organizational
        goals.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[16px] max-w-8xl leading-[30px]"
      >
        In addition to my role in financial management, I actively engaged with
        leadership, vendors, and stakeholders to ensure alignment of priorities
        and foster collaborative partnerships. By building strong relationships
        and facilitating open communication, I facilitated smooth execution of
        projects and initiatives, driving positive outcomes for the
        organization.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[16px] max-w-8xl leading-[30px]"
      >
        My experience in capital and expense planning underscores my ability to
        drive operational excellence and deliver measurable results through
        effective financial management strategies. I am passionate about
        leveraging my expertise to drive value and innovation in every project I
        undertake.
      </motion.p>

      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </div>
  );
};

export default SectionWrapper(About, "about");
