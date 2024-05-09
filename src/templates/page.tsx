import React, { useEffect } from "react";
import parse from "html-react-parser";

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
// import "../css/@wordpress/block-library/build-style/style.css"
// import "../css/@wordpress/block-library/build-style/theme.css"

import { Layout } from "../components/Layout";
import { graphql } from "gatsby";
import { ContentSection } from "components";

import "./page.scss";
import { PageTitle } from "components/PageTitle";
import AOS from "aos";
import "aos/dist/aos.css";

const PageTemplate = ({
  data: {
    wpPage: { title, content, id },
  },
}) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <Layout isHomePage={false}>
      <PageTitle title={title} description="" />
      <ContentSection>
        {!!content && (
          <div data-aos="fade-up">
            <section className="content" itemProp="articleBody">
              {parse(content)}
            </section>
          </div>
        )}
      </ContentSection>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    wpPage(id: { eq: $id }) {
      id
      title
      content
      date
    }
  }
`;

export default PageTemplate;
