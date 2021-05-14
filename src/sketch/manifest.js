const isDev = process.env.NODE_ENV === "development";
const name = `😯Xdriver-beta${isDev ? " DEV" : ""}`;
const identifier = isDev ? "Xdriver-beta.dev" : "Xdriver-beta";
const commands = ["XSearch"];

module.exports = {
  commands: commands
    .map((item) => {
      if (item !== "-")
        return {
          name: item,
          identifier: identifier + "." + item,
          script: "./app.ts",
          handler: item,
        };
    })
    .filter((item) => item),
  menu: {
    title: name,
    items: commands.map((item) =>
      item === "-" ? "-" : identifier + "." + item
    ),
  },
};
