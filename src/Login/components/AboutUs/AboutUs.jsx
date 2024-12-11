import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <h1 className="about-us-heading" style={{ marginLeft: "96px" }}>About Us</h1>
            {/* <h2 className="about-us-subheading" style={{ marginLeft: "96px" }}>What Is U20</h2> */}
            <p className="about-us-content">
                Our mission is to empower rural communities by connecting them to the right government schemes and initiatives. We focus on leveraging data insights to identify the unique socio-economic challenges faced by rural areas. Using demographic information such as average income levels, the number of children, and female population ratios, we are able to tailor solutions that meet the specific needs of individual villages and communities. Our primary goal is to create opportunities, reduce inequalities, and improve the lives of families through government-backed support and welfare programs.            </p>
            <p className="about-us-content">
                With our innovative data analysis, we are helping ensure that critical schemes reach the right people at the right time. From child welfare support to female empowerment programs and income-based financial schemes, we use evidence and data to bring transparency and strategic planning to policymakers and communities. Our platform offers insights that provide guidance on educational opportunities, health services, and rural development projects while ensuring that every suggestion is informed by accurate and up-to-date socio-economic data.            </p>
            <p className="about-us-content">
                We envision a sustainable future where fair access to opportunities empowers every rural resident. Through skill development projects, infrastructure improvements, and financial programs, we aim to support rural areas in achieving long-term development. Our vision is built on collaboration, innovation, and equality, translating insights into actions that improve rural living standards. Together with policymakers, government officials, and community members, we strive to create impactful, data-driven solutions that address challenges, uplift families, and transform lives.

            </p>
            <p className="about-us-content">
                Looking forward, we are committed to advancing our vision by expanding data accessibility, improving program outreach, and strengthening rural development strategies. Our focus lies in creating sustainable, long-lasting solutions that empower rural families to break the cycle of poverty and inequality. With innovation, dedication, and informed decision-making, we aspire to build self-reliant, prosperous communities where opportunities are equitable, and dreams can be realized for every individual.
            </p>
        </div>
    );
};

export default AboutUs;