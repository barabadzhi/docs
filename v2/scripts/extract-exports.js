const fs = require("fs");

const source = fs.readFileSync("node_modules/@novorender/api/index.js", { encoding: "utf-8" });
const match = /export {\n([^}]*)};/g.exec(source);
const _exports = match[1];
const trimmed = _exports.replace(/\w+ as /g, "");
const proxyCode = `export const {\n${trimmed}} = window["__novorender__"];`;
fs.writeFileSync("static/api_proxy.js", proxyCode);