import React, { FunctionComponent } from "react";
import { useStaticQuery, graphql } from "gatsby";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Helmet from "react-helmet";
import "@wordpress/block-library/build-style/style.css";
import "./Layout.scss";

export interface LayoutProps {
  isHomePage?: boolean;
  children?: any;
  seoTitle?: string;
}

export const Layout: FunctionComponent<LayoutProps> = ({
  isHomePage,
  children,
  seoTitle,
}) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `);

  return (
    <>
      <Helmet title={seoTitle ? seoTitle : "CUS"} defer={false}>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
