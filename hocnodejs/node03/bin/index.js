#! /usr/bin/env node
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv._;
const type = argv[0];
const name = argv[1];
const fs = require("fs");
if (type === "make:transformer") {
  //Tạo file
  const path = process.cwd() + "/transformers/" + name + ".transformer.js";
  try {
    fs.readFileSync(path);
    console.log("Transformer đã có sẵn");
  } catch (e) {
    const transformerContent = fs.readFileSync(
      process.cwd() + "/bin/templates/transformer.tpl",
    );
    fs.writeFileSync(path, transformerContent.toString());
    console.log("Tạo transformer thành công");
  }
}
