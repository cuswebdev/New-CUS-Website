const Parser = require("rss-parser");

let parser = new Parser();
const medium_url = "https://medium.com";

function getMediaFromContent(content) {
  let index = content.indexOf("<img");
  if (index >= 0) {
    let tag = "";
    while (content[index] != ">") {
      tag += content[index];
      index++;
    }

    index = tag.indexOf("http");
    let url = "";

    while (
      index >= 0 &&
      index < tag.length &&
      tag[index] !== '"' &&
      tag[index] != "'"
    ) {
      url += tag[index];
      index++;
    }
    return url;
  }
  return "";
}

export default async (req, res) => {
  try {
    let feed = await parser.parseURL(
      medium_url + "/feed/" + process.env.MEDIUM_USER
    );

    let responseData :any = {
      posts: [],
    };

    for (let post of feed.items) {
      let content = post.content || post["content:encoded"] || "";
      let description = post.contentSnippet || "";
      let media = getMediaFromContent(content) || "";

      responseData.posts.push({
        title: post.title,
        href: post.link,
        category: post.category,
        media: media,
        description: description,
      });
    }

    res.status(200).json(JSON.stringify(responseData));
  } catch (err) {
    console.log(err);
    res.status(500).json(JSON.stringify(err));
  }
};
