import React from "react";
import { Layout, ContentSection } from "components";
import { PageTitle } from "components/PageTitle";
import { ExpandableCardGrid } from "components/ExpandableCardGrid";
import { ViewMoreCard } from "components/ViewMoreCard";
import { SimpleGrid } from "@chakra-ui/react";
import { FullWidthCTA } from "components/CTAComponents";
import { Heading } from "@chakra-ui/react";

const CUSAffiliatedClubs = () => (
  <>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} pb={5}>
      <ViewMoreCard
        title="UBC Accounting Club"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/UBCAC_Logo.png"
        content="The UBC Accounting hosts over 15 high-quality events annually with a membership of 250 students and growing. We are a student-run organization dedicated to providing exclusive opportunities in the Accounting field. With the generous support of the accounting community, we are devoted to bringing our members a unique experience. Whether it is an accounting designation, networking with business professionals, or meeting more of your peers, the club offers various events, workshops, and information sessions to meet your needs"
        imageContain={true}
      />
      <ViewMoreCard
        title="UBC Ascend "
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/Ascend-UBC.png"
        content="Ascend is the largest, non-profit Pan-Asian organization for business professionals in North America. Established in 2005, Ascend is focused on enhancing the presence, visibility, and influence of current and future business leaders in the corporate workforce. Our chapter at UBC strives to develop the full potential of our members through providing career mentorship, skill-building workshops, and networking opportunities."
      />
      <ViewMoreCard
        title="UBC BizChina Club"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/UBC-BizChina-Club.png"
        content="Founded in 2011, UBC BizChina puts its emphasis on organizing corporate presentations, networking sessions, and large-scale conferences to benefit students of all backgrounds. Named the CUS Top Small Club in 2018 and hosting the first-ever UBC China Forum in 2019, we strive to become a bridge between the East and the West to exchange successful business ideas as well as be the ideal platform for Sino-Canadian business collaboration. Our central objective is to nurture and empower global leaders of tomorrow."
      />
      <ViewMoreCard
        title="UBC Bolt"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/UBC-BOLT.png"
        content="UBC BOLT provides opportunities for students to gain experience and insight into the world of data analytics. We aim to build the proficiency of data skills among students and provide experience in integrating data analytics and visualization into career applications. We achieve this through hands-on workshop-style events, where we invite professionals to teach and network. Students are also given the opportunity to showcase their learning in our year-end week-long bootcamp competition."
      />
      <ViewMoreCard
        title="UBC Business Technology Network"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/UBCBizTech_Logo.png"
        content="As the largest technology club on campus, UBC BizTech strives to bridge the gap between business, technology, and you. Through interactive workshops, our tri-mentorship program, competitions, and conferences, we offer students opportunities to launch their careers, learn about the latest trends in technology and grow their personal and professional networks. Awarded the CUS Top Big Club twice and Most Innovative Club three times, we are proud of the community we have fostered and always look to reach new heights!"
      />
      <ViewMoreCard
        title="UBC Creative Industries Network"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/default.png"
        content="The Creative Industries Network aims to transform the way students approach their passions by equipping them with the resources and opportunities to break through conventions and design their careers in the creative industries. We’ve hosted successful events featuring industry professionals ranging from podcasting to fashion. We’re the first ever business club for the creative industries."
      />
      <ViewMoreCard
        title="Enactus UBC"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/Enactus-UBC.png"
        content="First founded as Advancing Canadian Entrepreneurship UBC in 2001, Enactus UBC’s purpose has been the same since: to make long-term improvements in the community through entrepreneurial action. We believe that by channeling each person’s unique talents, passions, and ideas, we can make a greater impact. With driven members and supporters who collaborate to provide innovative solutions to some of the world’s most pressing social issues, our club is committed to making a difference through our social projects."
      />
      <ViewMoreCard
        title="UBC eProjects"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/eprojects_rebranded_logo_blue_more_spaces_around.png"
        content="Big ideas start-up small - that’s why we’re all about start-ups! eProjects is UBC’s largest entrepreneurship and innovation hub that connects change-makers and aspiring entrepreneurs with the opportunities, resources, and industry connections to enable students to flourish in Vancouver’s ever-growing start-up industry. Come dine with CEOs (CEO Dinner Night), participate in UBC's very own Dragons’ Den (LiteHacks), and get funky with our office tour and speaker series (Startup Crawl)."
      />
      <ViewMoreCard
        title="UBC Finance Association"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/default.png"
        content="For over 30 years, the UBC Finance Association has become established as one of the largest industry-focused clubs at UBC through connecting students to their futures. The UBCFA strives to facilitate the careers and personal development of undergraduate students interested in finance, by providing education, networking events, information sessions, workshops, and competitions."
      />
      <ViewMoreCard
        title="UBC Human Resources Management Club"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/UBC-Human-Resources-Management-Club-HRMC.jpg"
        content="The UBC Human Resources Management Club strives to strengthen the HR community through engaging and impactful events - such as case competitions, interactive panels, and informative workshops - for students regardless of year or faculty. As the largest HR club on campus, we utilize our connections with industry professionals to deliver valuable opportunities. HR management skills are transferable to any occupation, thus we believe that there is something within HRMC for every student."
      />
      <ViewMoreCard
        title="UBC Marketing Association"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/UBCMA-Logo-_-Text-Red.png"
        content="Home to over 300 members, the UBC Marketing Association is the only marketing-focused club at UBC. As CUS' Top Large Club (17', 18', 20'), UBCMA has consistently delivered a high-quality club experience through its three core pillars: Educate, Engage, and Execute. UBCMA provides meaningful connections for students through case competitions, company fairs, and action-packed networking conferences (Top Conference 20’). UBCMA is where students develop the skills they need to become the next big marketer."
      />
      <ViewMoreCard
        title="UBC Real Estate Club"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2022/11/real-estate-club.png"
        content="The core purpose of the UBC Real Estate Club is to connect students with the industry in the most simple way possible. We hope to present students with job postings, help them build connections, and eventually integrate them within the workforce. This is done through hosting in-person and online networking events, guiding them towards potential job opportunities and giving them the necessary tools to help their application stand out against those not in the club."
      />
      <ViewMoreCard
        title="UBC Social Enterprise Club"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/SEC-Logo-Color.png"
        content="The UBC Social Enterprise Club bridges disciplines, unites students and social enterprise, and creates changemakers. We define a social enterprise as an organization that cares about more than just profit, innovating on business models to achieve positive social impact. Through our events, conference and case competition, UBC SEC is a hub for passionate changemakers who believe businesses are catalysts for sustainable positive change."
        imageContain={true}
      />
      <ViewMoreCard
        title="UBC Supply Chain & Operations Association"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/UBC-Supply-Chain-Management-Club.jpg"
        content="The UBC Supply Chain & Operations Association (SCOA) is the sole club dedicated to the Operations & Logistics and Global Supply Chain and Logistics Management options at UBC Sauder. SCOA works to inspire students to pursue these options and succeed in them. We create opportunities for members to build relationships with professionals in the supply chain and logistics industry through networking events, specialization showcases, and facility tours."
      />
      <ViewMoreCard
        title="UBC Tax Association Clinic"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2022/01/tacslogo.png"
        content="The UBC Tax Assistance Clinic (TACS) is a non-profit student-run initiative that allows volunteers to learn and apply their knowledge about the Canadian Tax System, while giving back to the community."
      />
      <ViewMoreCard
        title="UBC Trading Group"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/UBC-Trading-Group.jpg"
        content="The UBC Trading Group was established with the mission of inspiring students to learn to look at the markets daily, take capital markets education beyond the classroom, and become a part of the action in the personal or professional context."
      />
      <ViewMoreCard
        title="Young Women in Business"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/Young-Women-in-Business.png"
        content="Young Women in Business UBC is an empowering community for emerging female leaders. We believe in giving students access to valuable experiences before stepping into the workplace to benefit the next generation of female professionals. Through our Blossom Mentorship Program, Philanthropic Program, conferences, case competitions, and networking events, students can expand their skills and knowledge while building valuable industry connections. With 350+ members and 700+ event attendees, we are excited to grow our community and inspire and challenge students."
      />
    </SimpleGrid>
  </>
);

const Services = () => (
  <>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} pb={5}>
      <ViewMoreCard
        title="Awards & Recognition Committee "
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/Award_Recognition-LOGO.png"
        content="The Awards & Recognition Committee is dedicated to recognizing the accomplishments and service of Sauder students, clubs, conferences, and faculty. The CUS Awards Night and Recognition Committee caps off the year with an extravagant gala event to congratulate and celebrate the invitees."
      />
      <ViewMoreCard
        title="Business and Computer Science Representative"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/BUCS-Rep.png"
        content="The BUCS Representative liaises between the BUCS Night Student Association and the CUS Executive Council with two main goals: representing the CUS in a respectable and honourable way to the BUCS contingent while keeping the CUS informed on the processes leading up to the BUCS nights."
        imageContain={true}
      />
      <ViewMoreCard
        title="Campus Ambassador Program"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/Updated-CAP.png"
        content="The Campus Ambassador Program (CAP) is dedicated to promoting the Sauder School of Business via student presentations at high schools across the Lower Mainland, and attracting the best and brightest to join the Sauder community."
        imageContain={true}
      />
      <ViewMoreCard
        title="Clarify"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/Clarify_updated.png"
        content="Clarify represents the CUS’s commitment to creating a culture of consent and respect at UBC Sauder. Our mission is to shed light on the systemic issue of sexual violence in the workplace through ongoing education, activism, and open dialogue with students. Clarify’s responsibility to the student body is to listen actively, facilitate learning, and connect students affected by sexual violence to available resources and support."
      />
      <ViewMoreCard
        title="Comm Collection"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2022/11/comm-collection.png"
        content="The Comm Collection is the CUS Sales and Merchandise service under the marketing portfolio, which has been designing and selling CUS merchandise since 2021. We provide affordable, socially responsible, and stylish merch for the entire student body here at UBC Sauder! Our goals are to make our merchandise be seen as a symbol of pride, make students feel proud being in the Sauder school, and encourage togetherness and team spirit within the community. "
      />
      <ViewMoreCard
        title="Commerce Community Program"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/Commerce-Community-Program.png"
        content="The Commerce Community Program (CCP) promotes social responsibility and trains future business leaders within the faculty of Commerce through volunteering and fundraising initiatives. CCP has a mission to look #BeyondBusiness and give back to Sauder, UBC, and the Vancouver community."
      />
      <ViewMoreCard
        title="Commerce Mentorship Program"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/Commerce-Mentorship-Program-CMP.png"
        content="The Commerce Mentorship Program (CMP) is a professional, non-profit academic program at UBC Sauder with a vision of promoting the academic growth and development of all UBC Sauder students. CMP’s tutors are committed to hosting free, high-quality exam review sessions for core commerce courses to help you understand the material and obtain that outstanding GPA!"
      />
      <ViewMoreCard
        title="Co-op Student Association"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2022/11/cosas.png"
        content="The Co-op Student Association (COSAS) aims to serve the general Co-op Community at UBC Sauder. Our mission is to facilitate the building of networks between Co-op students across specializations and experiences. Throughout the year, we offer various events and initiatives targeted to our Co-op student community."
      />
      <ViewMoreCard
        title="Elections Committee "
        content="The Elections Committee is responsible for organizing the CUS Elections and voting procedures, as well as providing information, support, and encouragement for those who may be interested in running for a CUS position. Our mission is to enhance the engagement between electoral candidates and students to create a more cohesive community within the Sauder School of Business."
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/cus-elections-logo.jpg"
      />
      <ViewMoreCard
        title="Executive Mentorship Program"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/UBC-Executive-Mentorship-Program.png"
        content="The Executive Mentorship Program (EMP) has been fostering its members’ ability to develop professional qualities, build relationships and broaden perspectives through the gift of quality mentoring for over 15 years. They connect aspiring Sauder students with industry professionals in the Vancouver business community through one-on-one meetings and signature events."
      />
      <ViewMoreCard
        title="External Conferences"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/External-Conferences.png"
        content="External Conferences (ExCo) enables Sauder students to attend external conferences based on their interests and academic pursuits without heavy financial burden by subsidizing conference, accommodation, and travel expenses. The overarching goal of ExCo is to support Sauder students in reaching unique opportunities that drive their personal, academic, and professional goals."
      />
      <ViewMoreCard
        title="First Year Committee "
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/FYC.png"
        content="The First Year Committee (FYC) aims to further enrich the first year experience of Sauder students by delivering events specifically for first year BCom students. These events are meant to provide a comforting and inviting space for students to relax, be active, and have fun! Be on the lookout for the hiring event for the First Year Committee Chairperson! "
      />
      <ViewMoreCard
        title="Graduation Night"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/Sauder-Grad-Night-2.png"
        content="Sauder Grad Night is a memorable event held annually at the end of the academic year to celebrate the completion of the BCom degree for UBC Sauder undergraduate students. Our mission is to host an exciting and highly-anticipated experience that commemorates and toasts the hard work students have put into their degrees. After all those exams, networking sessions, and tons of caffeine, there is no better way to celebrate this accomplishment alongside friends and peers than at UBC Sauder Grad Night!"
      />
      <ViewMoreCard
        title="Health and Wellness (HeWe)"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/Updated-HeWe-Logo.png"
        content="Born in 2015 to improve students’ health and wellbeing, HeWe is a CUS service that hosts fun and engaging health-focused events to help students take care of their physical and mental wellbeing. They spread the joy of health to empower a life filled with vitality, meaning, and happiness through events like free exam care packages, monthly HeWe Eats, and more!"
      />
      <ViewMoreCard
        title="Imprint"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/Imprint.png"
        content="With the mission to service and enlighten students, UBC Imprint works to integrate corporate branding and marketing concepts to provide students with a holistic view of the topic. Considered as Western Canada’s premier student-led branding conference, the event attracts 300+ students and business delegates across Canada each year to engage in conversations on what branding is and how to succeed in the industry. Through the years, we have bridged the gap between top candidates and industry professionals."
      />
      <ViewMoreCard
        title="JDC West"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/Sauder-JDC-West.png"
        content="JDC West is Western Canada’s largest and most prestigious business competition. The team is composed of 50 students who compete in 10 business disciplines, as well as debate, social, and athletic challenges over a unique and transformational weekend. JDC West also strives to give back to the community by volunteering and raising funds for charity."
      />
      <ViewMoreCard
        title="JDC West Junior Development"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/JDC-Junior-development.png"
        content="JDC West Junior Development aims to help first and second year standing students gain valuable case experience and elevate the case competitor quality in Sauder. It addresses a gap in knowledge between the curriculum and other case development programs via targeted bootcamps, constant feedback, and a final Mock Case Competition that solidifies all of the learning objectives. JDC West Junior Development’s main program runs in the second term of the academic year and serves as a vehicle for experienced senior students to give back to the younger cohorts."
      />
      <ViewMoreCard
        title="Me Inc. Conference"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/updated-Me-Inc..png"
        content="Running for over a decade, Me Inc. continues to foster hundreds of students each year in discovering their passions and aligning them with a desirable career in business. We host valuable workshops leading up to the ultimate conference that encompasses all BCom specializations and more. Me Inc. provides a platform for self-exploration while allowing students to connect with industry professionals in various business disciplines."
      />
      <ViewMoreCard
        title="NSCC"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/NSCC-Logo.png"
        content="The National Strategy Consulting Competition & Conference (NSCC) brings together North America’s top undergraduate and MBA talent in a three-day completion and one-day conference to showcase their knowledge and abilities to respected professionals in the consulting industry. Supported by top consulting practices and national brands, NSCC 2021/22 is proud to host over 250 students from around the world."
      />
      <ViewMoreCard
        title="P.O.I.T.S."
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/POITS-LIGHT-Non-transparent.png"
        content="P.O.I.T.S. is a long-standing tradition among commerce students at the University of British Columbia. Since its inception in 1970, P.O.I.T.S. has served the primary purpose of providing an opportunity for commerce students to socialize at a bi-weekly beer garden on campus. Our service brings the Sauder community together, including our alumni network who share similar experiences of attending P.O.I.T.S. during their time as an undergraduate."
      />
      <ViewMoreCard
        title="CUS Pride"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/CUS-Pride.png"
        content="The personal and professional lives of students are important to the CUS. As part of its commitment towards supporting equality practices and the wellness of students, the CUS is reaching out to the LGBTQ2+ community at UBC Sauder and beyond. Events such as workshops are held to raise awareness and celebrate diversity and inclusion, and they are open to students who are either part of the community themselves or are allies looking to learn more about LGBT+ related topics."
      />
      <ViewMoreCard
        title="Sauder Sports"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/Sauder-Sports-logo.png"
        content="Sauder Sports aims to create an active, balanced, and social lifestyle for students by hosting engaging events and classes. Whether you’re looking for hikes, intramurals, or yoga classes, they’re here to help! They also aim at creating opportunities and awareness of the sports-business industry. So what are you waiting for? Come out and let’s #getsomeaction, Sauder!"
        imageContain={true}
      />
      <ViewMoreCard
        title="Sauder International Student Association"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/Sauder-International-Student-Association.jpg"
        content="UBC Sauder’s representative for the international students and their perspectives. They promote global citizenship and cross-cultural awareness along with a strong sense of community within Sauder. SISA also seeks to provide opportunities for its members to create meaningful connections with other students with similar experiences of moving to Canada and adjusting to the culture. Main events include Sauder 101, the start of the year Scavenger Hunt, Cultural Night, Sauder’s very own first Latin event, and more!"
      />
      <ViewMoreCard
        title="CUS Sustainability"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/CUS-Sustainability-1.png"
        content="CUS Sustainability strives to bridge the gap between business and sustainability. Through a variety of events including their Chasing Sustainability conference, case competition, speaker series, and collaborative workshops, they aim to leave a lasting impact on future business leaders that increases their awareness and drives their actions to be more socially, economically, and environmentally sustainable."
      />
      <ViewMoreCard
        title="CUS Visual Media"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/default.png"
        content="CUSVM is the professional documentation crew for UBC Sauder’s Commerce Undergraduate Society and they specialize in providing visual content for all the CUS events. Their team provides a stimulating and encouraging environment for the creatively-enthusiastic individuals of Sauder. Their goal is to breed artistry and share their passion for visual media within the Sauder community."
      />
      <ViewMoreCard
        title="Yearbook & Prospectus"
        description=""
        imageSrc="https://admin.cus.ca/wp-content/uploads/2021/08/default.png"
        content="The Yearbook and Prospectus committee facilitates the creation and distribution of the annual Prospectus agenda and yearbook for UBC Sauder graduates. The student agenda consists of two parts: a help book section to provide necessary information about resources at UBC Sauder and a planner section you can utilize to organize your time throughout the coming school year. We hope that you will be able to improve your time management skills and improve your productivity, all while leaving room to be creative and innovative. For the agenda theme this year, we integrated a journaling and scrapbooking style into our design, giving you maximum space to record, reflect, and plan your schedule accordingly while still keeping a sense of professionalism"
      />
    </SimpleGrid>
  </>
);

const GetToKnowPage = () => {
  return (
    <Layout seoTitle="Get To Know">
      <PageTitle title="Get To Know" />
      <ContentSection>
        <Heading pb={4}>Services</Heading>
        <Services />
        <Heading pb={4}>CUS-Affiliated Clubs</Heading>
        <CUSAffiliatedClubs />
      </ContentSection>
      <FullWidthCTA
        title="Hiring Opportunities"
        text="Get Involved with the CUS starting today!"
        button1={{ text: "Get Involved", url: "/hiring-opportunities" }}
      />
    </Layout>
  );
};

export default GetToKnowPage;
