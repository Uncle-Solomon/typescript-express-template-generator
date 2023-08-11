#!/usr/bin/env node

import path from "path";
import shell from "shelljs";

const templatePath = path.join(__dirname, "..", "templates");
const destinationPath = process.cwd();

shell.cp("-R", templatePath, destinationPath);

console.log("Express TypeScript project generated successfully!");
