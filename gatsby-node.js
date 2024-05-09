const path = require("path");
const { annualEvents } = require("./src/data/annualEvents");
const { conferences } = require("./src/data/conferences");

const toKebabCase = (str) =>
  (
    str?.match(
      /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
    ) ?? []
  )
    .map((x) => x.toLowerCase())
    .join("-");

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  /**
   * Create Pages
   */
  const pages = await graphql(`
    query GET_PAGES {
      allWpPage {
        nodes {
          id
          slug
        }
      }
    }
  `);
  pages.data.allWpPage.nodes.forEach(({ id, slug }) => {
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/page.tsx`),
      context: {
        id,
      },
    });
  });

  /**
   * Create Events
   */
  const events = await graphql(`
    query GET_EVENTS {
      allWpEvent {
        nodes {
          id
          slug
        }
      }
    }
  `);

  events.data.allWpEvent.nodes.forEach(({ id, slug }) => {
    createPage({
      path: `events/${slug}`,
      component: path.resolve(`./src/templates/event.tsx`),
      context: {
        id,
      },
    });
  });

  /**
   * Create Hirings
   */
  const hirings = await graphql(`
    query GET_HIRINGS {
      allWpHiring {
        nodes {
          id
          slug
        }
      }
    }
  `);

  hirings.data.allWpHiring.nodes.forEach(({ id, slug }) => {
    createPage({
      path: `hirings/${slug}`,
      component: path.resolve(`./src/templates/hiring.tsx`),
      context: {
        id,
      },
    });
  });

  /**
   * Create Annual Events
   */
  annualEvents.forEach((data) => {
    createPage({
      path: `annual-events/${toKebabCase(data.title)}`,
      component: path.resolve(`./src/templates/annualeventconference.tsx`),
      context: data,
    });
  });

  /**
   * Create Conference
   */
  conferences.forEach((data) => {
    createPage({
      path: `conferences/${toKebabCase(data.title)}`,
      component: path.resolve(`./src/templates/annualeventconference.tsx`),
      context: data,
    });
  });
};
