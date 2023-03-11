module.exports = {
  name: "Chris Higgins",
  shortDesc:
    "Perspectives on B2B marketing.",
  url: "",
  authorEmail: "",
  authorHandle: "@MikeRiethmuller",
  authorName: "Chris",
  postsPerPage: 10,
  socialImage: "/img/social.jpg",
  theme: {
    primary: {
      background: "white",
      text: "black",
      highlight: "#666",
    },
    secondary: {
      background: "black",
      text: "white",
      highlight: "#666",
    },
  },

  keystone: {
    comments: true,
    bookmarks: true,
    claps: true,
    login: true,
  },
  // Critical CSS results in much slower build times and uses a lot of system resources
  // turn on in production :)
  // See `site/transforms/critical-css-transform.js` for more details
  criticalCSS: false,
};
