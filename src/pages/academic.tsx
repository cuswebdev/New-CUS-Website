import React from "react";
import { Layout, ContentSection } from "components";
import { PageTitle } from "components/PageTitle";
import { ImageSection } from "components/ImageSection";
import {
  Box,
  Heading,
  Link,
  Stack,
  Text,
  Image,
  Button,
  UnorderedList,
  ListItem,
  List,
  OrderedList,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import { Email } from "components/Email";
import { CarouselCard } from "components/CarouselCard";
import { Blog } from "components/Pages/Home/LatestNews/LatestNews";
import { CusAccordion, CusAccordionItem } from "components/CusAccordion";
import { IgPost, InstagramFeed } from "components/Pages/Academic";
import Helmet from "react-helmet";
import { HeroTextOverlay } from "components/HeroTextOverlay";
import { IconDescriptions } from "components/IconDescriptions";
import { FaMailBulk, FaPeopleArrows } from "react-icons/fa";
import { PortalBox } from "components/PortalBox";
import { ImageRightCTA } from "components/CTAComponents";
interface StudySpace {
  link: string;
  image: string;
  name: string;
}

const studySpaces: StudySpace[] = [
  {
    name: "The Irving K. Barber Learning Center",
    link: "https://ikblc.ubc.ca/spaces/book-a-study-space/",
    image: "https://admin.cus.ca/wp-content/uploads/2021/08/ikb-1024x576.jpeg",
  },
  {
    name: "Walter C. Koerner Library",
    link: "https://koerner.library.ubc.ca/",
    image: "https://admin.cus.ca/wp-content/uploads/2021/08/walter.jpeg",
  },
  {
    name: "Woodward Library",
    link: "https://woodward.library.ubc.ca/woodward/groupstudy/",
    image:
      "https://admin.cus.ca/wp-content/uploads/2021/08/woodward-1024x640.jpeg",
  },
  {
    name: "The Canaccord Learning Commons",
    link: "https://booking.sauder.ubc.ca/",
    image: "https://admin.cus.ca/wp-content/uploads/2021/08/clc.jpeg",
  },
];

const peerTutoringItems: CusAccordionItem[] = [
  {
    title: "Peer Assisted Study Sessions (PASS)",
    content: (
      <Box py={4} px={{ base: 4, md: 8 }} color="black" bg="white">
        Peer Assisted Study Sessions or PASS is an academic support program run
        by the Canaccord Learning Commons with the goal of helping Sauder
        students understand key concepts and practice necessary skills for
        success in challenging courses. Held weekly in a collaborative group
        environment and led by upper-year students, PASS provides the
        opportunity to meet new people and work together to break down tough
        course material.
        <Box my={2} />
        For more information, visit the CLC: Online canvas course:{" "}
        <Link
          href="https://mybcom.sauder.ubc.ca/get-better-grades/pass"
          color="primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://canvas.ubc.ca/courses/51980
        </Link>
      </Box>
    ),
  },
  {
    title: "Commerce Mentorship Program (CMP)",
    content: (
      <Box py={4} px={{ base: 4, md: 8 }} color="black" bg="white">
        The Commerce Mentorship Program or CMP is a free, professional exam
        review program with a vision of promoting the academic growth and
        development of all Sauder students. CMP’s tutors are outstanding
        upper-year students who have done exceptionally well in their studies
        and are committed to leading high-quality midterm and final exam reviews
        for a wide range of core COMM courses.
        <Box my={2} />
        In recent years, CMP has also expanded its undertakings to include
        Internship Night, Study Week and the CMP Connect mentor platform to
        support students more holistically.
        <Box my={2} />
        For more information, visit:{" "}
        <Link
          href="https://cmp.cus.ca "
          color="primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://cmp.cus.ca
        </Link>
      </Box>
    ),
  },
  {
    title: "AMS Tutoring",
    content: (
      <Box py={4} px={{ base: 4, md: 8 }} color="black" bg="white">
        The AMS provides Group and Private Tutoring for a small selection of
        non-COMM courses. The sessions are led by verified AMS tutors who have
        received at least an A- in the course. Group tutoring is offered for
        free and has options for drop-in, while private tutoring is offered at
        $35 per hour.
        <Box my={2} />
        For more information, visit:{" "}
        <Link
          href="https://www.ams.ubc.ca/student-services/tutoring/"
          color="primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.ams.ubc.ca/student-services/tutoring/
        </Link>
      </Box>
    ),
  },
  {
    title: "Presentation Coaching",
    content: (
      <Box py={4} px={{ base: 4, md: 8 }} color="black" bg="white">
        The Presentation Coaching program is led by peer coaches who are
        fourth-year BCom students working as COMM 395 Business Communications
        TAs. Bookings are 30 minutes in length, easy to set up and flexible for
        individuals or groups.
        <Box my={2} />
        For more information, visit:{" "}
        <Link
          href="https://mybcom.sauder.ubc.ca/get-better-grades/presentation-coaching "
          color="primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://mybcom.sauder.ubc.ca/get-better-grades/presentation-coaching
        </Link>
      </Box>
    ),
  },
  {
    title: "Math Learning Centre (MLC)",
    content: (
      <Box py={4} px={{ base: 4, md: 8 }} color="black" bg="white">
        The Math Learning Centre or MLC is a space for students to study Math
        and work through questions together, with support from tutors, who are
        graduate students in the Department. This centre is open for drop-in to
        all undergraduate students taking Math courses. No appointments are
        required.
        <Box my={2} />
        For more information, visit:{" "}
        <Link
          href="https://www.math.ubc.ca/undergraduate/advising-and-resources/drop-help"
          color="primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.math.ubc.ca/undergraduate/advising-and-resources/drop-help
        </Link>
      </Box>
    ),
  },
];

const coursePlanningItems: CusAccordionItem[] = [
  {
    title: "Academic Advising",
    content: (
      <Box py={4} px={{ base: 4, md: 8 }} color="black" bg="white">
        Academic advising can be used to get the most out of your degree by understanding
        policy, structuring your study program, and planning out your courses to get
        the most out of opportunities relevant to your career path. To access academic advising,
        click{" "}
        <Link
          href="https://mybcom.sauder.ubc.ca/ugo#bookadvising"
          color="primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </Link>{" "}
      </Box>
    ),
  },
  {
    title: "Degree Credit Check",
    content: (
      <Box py={4} px={{ base: 4, md: 8 }} color="black" bg="white">
        If you are unsure how many credits you have remaining, or are unsure
        which requirements you have yet to meet to advance, you can fill in a
        course credit check form{" "}
        <Link
          href=" https://webforms.sauder.ubc.ca/degree-credit-check"
          color="primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </Link>{" "}
        which will provide you with a detailed breakdown of your remaining
        credit requirements.
      </Box>
    ),
  },
  {
    title: "Course Registration Assistance",
    content: (
      <Box py={4} px={{ base: 4, md: 8 }} color="black" bg="white">
        If you are having difficulty registering for your courses, you can
        request help through this link! Assistance through the UGO can only be
        done for COMM, COMR, and COHR courses. For other faculties, contact them
        directly for registration help.
        <Box my={2} />
        For more information, visit:{" "}
        <Link
          href=" https://mybcom.sauder.ubc.ca/courses-money-enrolment/courses-and-registration/registration-assistance "
          color="primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://mybcom.sauder.ubc.ca/courses-money-enrolment/courses-and-registration/registration-assistance
        </Link>
      </Box>
    ),
  },
  {
    title: "Course Planning",
    content: (
      <Box py={4} px={{ base: 4, md: 8 }} color="black" bg="white">
        Meeting credit requirements and course planning can be difficult. The UGO has BCom{" "}
        <Link
        href="https://mybcom.sauder.ubc.ca/bcom-program-planning-worksheets"
        color="primary"
        target="_blank"
        rel="noopener noreferrer"
        >
          course planning worksheets
        </Link>{" "}
        to help you keep track of your BCom degree requirements and credits.
        <Box my={2} />

        <p> For general information around courses and registration, see here:{" "} </p>
        <Link
         href=" https://mybcom.sauder.ubc.ca/courses-money-and-enrolment/courses-and-registration "
         color="primary"
         target="_blank"
         rel="noopener noreferrer"
         >
        https://mybcom.sauder.ubc.ca/courses-money-and-enrolment/courses-and-registration
         </Link>
        <Box my={2} />
        
        <p> For information on Options:{" "} </p>
        <Link
         href=" https://mybcom.sauder.ubc.ca/options  "
         color="primary"
         target="_blank"
         rel="noopener noreferrer"
         >
        https://mybcom.sauder.ubc.ca/options 
         </Link>
        <Box my={2} />

        <p>For information on Minors and Concentrations, see here:{" "}</p>
        <Link
         href=" https://mybcom.sauder.ubc.ca/courses-money-and-enrolment/minors-and-concentrations   "
         color="primary"
         target="_blank"
         rel="noopener noreferrer"
         >
        https://mybcom.sauder.ubc.ca/courses-money-and-enrolment/minors-and-concentrations 
         </Link> 
        <Box my={2} />
      
      <p>For any general inquiries, please email vpacademic@cus.ca with subject line “Inquiry- Student Name - Topic of Inquiry”.</p>
      </Box>
    ),
  },
];

const ugoItems: CusAccordionItem[] = [
  {
    title: "Academic Concession",
    content: (
      <Box py={4} px={{ base: 4, md: 8 }} color="black" bg="white">
        If an unanticipated circumstance affects your ability to perform your academic 
        responsibilities, you may be able to apply for an academic concession. The UGO 
        recognizes various grounds to quality for concession.
        <Box my={2} />
        You will receive approval or dismissal of your application by the UGO through email. For 
        more information on academic concessions, visit: 
        <Link
          href="https://webforms.sauder.ubc.ca/academic-concession"
          color="primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://mybcom.sauder.ubc.ca/academic-concession
        </Link>
      </Box>
    ),
  },
  {
    title: "Resources Supporting Academic Success",
    content: (
      <Box py={4} px={{ base: 4, md: 8 }} color="black" bg="white">
        The CLC and the David Lam Library offer various supportive resources for academic 
        success, as well as bookable study spaces, and equipment that you can borrow. For 
        more information on the CLC, take a look at their website 
        (<Link
          href="https://mybcom.sauder.ubc.ca/clc"
          color="primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://mybcom.sauder.ubc.ca/clc
        </Link>) or enroll in the CLC Canvas course 
        (<Link
          href="https://canvas.ubc.ca/enroll/DKC69E"
          color="primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://canvas.ubc.ca/enroll/DKC69E
        </Link>).  
        <Box my={2} />
        To learn more about CLC resources, see here:{" "}
        <Link
          href="https://mybcom.sauder.ubc.ca/get-better-grades."
          color="primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://mybcom.sauder.ubc.ca/get-better-grades.
        </Link>
      </Box>
    ),
  },
  {
    title: "Career Development",
    content: (
      <Box py={4} px={{ base: 4, md: 8 }} color="black" bg="white">
        Career Development 
        For personalized coaching and advising, mentorship programs, co-operative learning 
        placements, recruitment events information, and work opportunities, you can find 
        support at the BCC.  

        <Box my={2} />
        Come meet with BCC Career Coaches and trained-Peer Career Advisors by booking an 
        appointment here:{" "} 
        <Link
          href="https://sauder-ubc-csm.symplicity.com/students/index.php?ss=app_main&s=calendar&mode=form "
          color="primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://sauder-ubc-csm.symplicity.com/students/index.php?ss=app_main&s=calendar&mode=form 
        </Link> 
        
        <Box my={2} />
        For more information, visit:{" "}
        <Link
          href="https://mybcom.sauder.ubc.ca/get-advice"
          color="primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://mybcom.sauder.ubc.ca/get-advice
        </Link> 
      </Box>
    ),
  },
  {
    title: "Credit/D/Fail",
    content: (
      <Box py={4} px={{ base: 4, md: 8 }} color="black" bg="white">
        The Credit/D/Fail grading policy allows you to take non-required elective courses safely 
        and earn a Credit, D, or Fail standing instead of a percentage grade on your transcript. 
        This is a great option if you would like to explore new areas of study, but are unsure 
        about your interest or abilities within that subject. 
        <Box my={2} />
        For more information, visit:{" "} 
        <Link
          href="https://students.ubc.ca/enrolment/courses/creditdfail-grading"
          color="primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://students.ubc.ca/enrolment/courses/creditdfail-grading
        </Link> 
      </Box>
    ),
  },
  {
    title: "Accessibility Resources",
    content: (
      <Box py={4} px={{ base: 4, md: 8 }} color="black" bg="white">
        If you have a disability or a long-term medical condition that impacts your academics or 
        your ability to access facilities or activities at UBC, you may be eligible for disability-
        related supports, services and accommodations. The Centre for Accessibility 
        (<Link
          href="https://students.ubc.ca/about-student-services/centre-for-accessibility"
          color="primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://students.ubc.ca/about-student-services/centre-for-accessibility
        </Link>)
        facilitates disability-related accommodations and programming initiatives designed to remove 
        barriers for students with disabilities and ongoing medical conditions in all aspects of 
        university life. You can contact the Centre by phone (604-822-5844) or email 
        (<Email>info.accessibility@ubc.ca</Email>) to get more information about the accessibility programs.
      </Box>
    ),
  },
];

const AcademicPage = () => {
  const igPosts: IgPost[] = [];
  return (
    <Layout seoTitle="Academic">
      <PageTitle title="Academic" />
      <HeroTextOverlay
        title="Voice Your Concerns"
        description="The CUS aims to ensure that the opinion of students is represented in any decision that would affect their BCom degree or academic journey at UBC Sauder."
        img="https://admin.cus.ca/wp-content/uploads/2021/08/IMG_1163-scaled.jpg"
      />
      <ContentSection small pt={0}>
        <Heading pb={4} size="md">
          About Academic Advocacy
        </Heading>
        <Text pb={8}>
          The CUS aims to ensure that the opinion of students is represented in
          any decision that would affect their BCom degree or academic journey
          at UBC Sauder. In doing so, the CUS President, VP Academic, and
          Commerce Student Senator each hold one seat on the faculty’s academic
          caucus and voice student concerns by bringing serious issues up for
          discussion and voting on matters pertaining to academic changes.
          <Box my={2} />
          It is very important for the CUS to be aware of student opinions with
          regard to their studies. As such, we strongly urge students to respond
          to annual surveys, submit grievances to our online submission box or
          reach out directly to the VP Academic with their concerns.
        </Text>
        <IconDescriptions
          items={[
            {
              icon: FaMailBulk,
              title: "Academic Grievances",
              description: (
                <Text>
                  The Academic Grievances submission box allows students to
                  bring academic-related issues directly to the CUS and seek
                  help through the assistance of the VP Academic. By analyzing
                  submissions made in this box, the VP Academic and the Academic
                  Committee are able to gain insight into student hardships
                  within the current system and advocate for change.
                  <Box my={2} />
                  The information provided in all submissions will be kept
                  confidential, however with the exception of certain staff at
                  the UGO and Dean’s office who may be consulted while
                  attempting to solve the issue. The writer of the submission
                  may also be contacted for a follow-up chat regarding their
                  grievance.
                  <Box my={2} />
                  Submit your academic grievances{" "}
                  <Link
                    sx={{ color: "white", textDecoration: "underline" }}
                    href="https://docs.google.com/forms/d/e/1FAIpQLScbAHemyVedSiWiu6SmjAjbY1WRgEY9GgNBskdalSjzU18WBA/viewform?usp=sf_link"
                  >
                    here
                  </Link>
                </Text>
              ),
            },
            {
              icon: FaPeopleArrows,
              title: "Request a Meeting With VPA",
              description: (
                <Text>
                  Are you feeling lost with where you’re going with your
                  academics? Are you seeking peer advice with regards to
                  courses, specializations or study resources? Or maybe you’re
                  curious about the CUS and wondering how to get involved?
                  <Box my={2} />
                  If so, request a meeting with your VP Academic!
                  <Box my={2} />
                  The CUS VP Academic is well versed in both the educative and
                  community involvement sides of Sauder and can offer a balanced
                  perspective on any topic of query. Simply send an email titled
                  “VPA Meeting Request - Student Name - Topic of Inquiry ” to{" "}
                  <Email sx={{ color: "white", textDecoration: "underline" }}>
                    vpacademic@cus.ca
                  </Email>{" "}
                  and they will get back to you as soon as they can with some
                  meeting options!
                </Text>
              ),
            },
          ]}
        />
      </ContentSection>
      <ImageSection img="https://admin.cus.ca/wp-content/uploads/2021/08/IMG_1248-scaled.jpg" />
      <ContentSection small>
        <Heading pb={4}>Learning Success</Heading>
        <Text pb={8}>
          Are you feeling lost with where you’re going with your academics? Are
          you seeking peer advice with regards to courses, specializations or
          study resources? Or maybe you’re curious about the CUS and wondering
          how to get involved?
        </Text>
        <Heading pb={4} size="md">
          Study Spaces
        </Heading>
        <Text>
          If you are looking for a general study space around campus, click{" "}
          <Link
            color="primary"
            href="https://learningspaces.ubc.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </Link>
          <Box my={2} />
          View Libraries (Group and Silent Study Spaces){" "}
          <Link
            color="primary"
            href="https://services.library.ubc.ca/facilities/group-silent-study-space/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </Link>
          <Box my={2} />
          View Casual and Social Study Spaces{" "}
          <Link
            color="primary"
            href="https://learningspaces.ubc.ca/find-space/informal-learning-spaces"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </Link>
        </Text>
        <SimpleGrid mt={4} columns={{ base: 1, md: 2 }} spacing={10}>
          {studySpaces.map(({ name, link, image }) => (
            <PortalBox img={image} url={link} description={""} title={name} />
          ))}
        </SimpleGrid>
      </ContentSection>

      <ContentSection small>
        <Heading pb={4} size="md">
          Peer Tutoring Services
        </Heading>
        <CusAccordion items={peerTutoringItems} />
      </ContentSection>

      <ImageRightCTA
        image="https://admin.cus.ca/wp-content/uploads/2021/08/85ddd8b7212c0d55ef7bf573c27151b9.png"
        title="CMP Connect: Academic Mentorship"
        smallTitle
        text={
          <>
            <Text pb={4}>
              CMP Connect is CMP's brand new initiative that aims to bridge the
              gap between upper-year students wanting to give back to the Sauder
              community and younger students who may benefit from extra support
              as they begin to navigate through their university experience.
              <Box my={2} />
              How does it work?
            </Text>
            <OrderedList>
              <ListItem>
                Go to the{" "}
                <Link href="https://cmp.cus.ca/cmp-connect/">
                  CMP Connect portal
                </Link>
              </ListItem>
              <ListItem>Browse through the mentor profiles.</ListItem>
              <ListItem>
                Submit a request for advice, study notes and other academic
                resources (resources will be shared at the mentor’s discretion)
                along with your email address.
              </ListItem>
              <ListItem>
                Only the CMP team and the requested mentor will have access to
                your questions and will aim to get back to you within a week via
                email.
              </ListItem>
            </OrderedList>
            <Text as="i" fontSize="sm">
              Interested in becoming a Mentor? Send your resume and a short
              statement of interest to <Email>cmp@cus.ca</Email>!
            </Text>
          </>
        }
      />
      <ContentSection small>
        <Heading pb={4} size="md">
          External Resources
        </Heading>
        <Box pb={10}>
          <Box maxWidth="400px">
            <Image src="https://cbrl.ca/wp-content/uploads/2021/04/Large-Use_RGB_Blue_128px_Learning_RGB.png" />
          </Box>
          <Text pb={4}>
            Offered through the Vancouver Public Library (VPL), LinkedIn
            Learning is a platform that offers various video courses in
            business, computer technology, software, and creative skills, all
            conducted by experts in their fields. Build your skills or learn
            more about your areas of interest.
          </Text>
          <Text pb={4}>
            A LinkedIn account is not required; You are able to just use your
            VPL card number and PIN!
          </Text>
          <Text pb={4}>
            If you do not have a library card, you can obtain one by signing up{" "}
            <Link
              href="https://www.vpl.ca/librarycard"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              here
            </Link>
          </Text>
          <GatsbyLink to="https://www.vpl.ca/digital-library/linkedin-learning">
            <Button>Learn More</Button>
          </GatsbyLink>
        </Box>
        <Box pb={10}>
          <Box maxWidth="400px">
            <Image
              py={2}
              src="data:image/png;base64,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"
            />
          </Box>
          <Text pb={4}>
            CaseCoach is an online tool job-seeking students can use to help
            prepare for applications and case interviews in various industries.
            Access CaseCoach’s Resume Course and comprehensive Interview Prep
            Course to enhance your probability of landing an offer. Best of all,
            it’s free for UBC Sauder students!
          </Text>
          <Text pb={4}>
            With case coach, you get access to 26 video lectures, 16 interview
            videos featuring real candidates, unlimited case practice and
            extensive prep material.
          </Text>
          <Text pb={4}>
            To access case coach, contact a Bcom Career Manager or your Co-op
            Manager, and they will submit a request on your behalf. Once
            submitted, you will receive an email with a link to set up your
            account.
          </Text>
          <Text pb={4}>
            <Link
              href="https://mybcom.sauder.ubc.ca/career-experience/career-coaching/bcom-career-managers"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              Access List of Bcom Career Managers
            </Link>
          </Text>
          <GatsbyLink to="https://casecoach.com/">
            <Button>Learn More</Button>
          </GatsbyLink>
        </Box>
        <Box pb={10}>
          <Box maxWidth="400px">
            <Image
              py={2}
              src="https://writeaway.ca/sites/writeaway.ca/files/WriteAway_Logo_2019_RGB_TAG_Large.png"
            />
          </Box>
          <Text pb={4}>
            WriteAway is an online writing support service that connects
            undergraduate students with an online tutor who will read over
            papers and written assignments. Students will receive feedback
            geared towards Sauder’s school system, as well as tips that will
            help with improving their writing and summarizing skills.
          </Text>
          <Text pb={4}>
            Services for assignment submission feedback, questions about
            writing, and online chatting with a librarian are all made available
            here.
          </Text>
          <GatsbyLink to="https://writeaway.ca/connect">
            <Button>Learn More</Button>
          </GatsbyLink>
        </Box>
        <Box>
          <Heading size="md">Citation Resources</Heading>
          <Text pb={4}>
            Not sure how to use APA citation for your assignments? Below are a
            few resources that will guide you!
            <br />
            <Link
              href="https://www.unlockingresearch.com/citation-styles/apa-in-text-citations/"
              color="primary"
            >
              APA in-text citations
            </Link>
            <br />
            <Link
              href="https://learningcommons.ubc.ca/resource-guides/cite-sources/"
              color="primary"
            >
              UBC Learning Commons Cite Sources Guide
            </Link>
          </Text>
        </Box>
      </ContentSection>
      <ContentSection small>
        <Heading pb={4}>Course Planning</Heading>
        <CusAccordion items={coursePlanningItems} />
      </ContentSection>
      <ContentSection small>
        <Heading pb={4}>UGO Useful Links</Heading>
        <CusAccordion items={ugoItems} />
      </ContentSection>
      <Box background="url(https://admin.cus.ca/wp-content/uploads/2021/08/IMG_1158-1024x683.jpg)">
        <ContentSection py={10}>
          <Box
            rounded="lg"
            background="primary"
            width={{ base: "100%", md: "50" }}
            p={8}
            color="white"
          >
            <Heading size="lg">
              Visit the academic instagram page for more information!
            </Heading>
            <GatsbyLink to="https://www.instagram.com/cusacademics/?utm_medium=copy_link">
              <Button mt={3} variant="outline">
                Go To Instagram Page
              </Button>
            </GatsbyLink>
          </Box>
        </ContentSection>
      </Box>
    </Layout>
  );
};

// export const query = graphql`
//   query {
//     allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 6) {
//       nodes {
//         id
//         likes
//         localFile {
//           childImageSharp {
//             fluid(maxWidth: 320) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export default AcademicPage;
