#!/usr/bin/env node --experimental-modules --es-module-specifier-resolution=node
import { phonespell } from "../lib/index";
import { existsSync, readFileSync } from "fs";
import url from "url";
const { URL } = url;

const word: string = process.argv.slice(2)[0];

function getVersion(): string | void {
  const path: url.URL = new URL("../../package.json", import.meta.url);
  if (!existsSync(path)) {
    return;
  }
  const raw: string = readFileSync(path, { encoding: "utf-8" });
  if (!raw) {
    return;
  }
  const packageInfo: { version: string } = JSON.parse(raw);
  return packageInfo.version;
}

if (!word) {
  console.log(`phonespell
v${getVersion()}
Convert a word to its dialpad number equivalent

Usage:
  $ phonespell word

Example:
  $ phonespell "SPELL"`);
} else {
  console.log(phonespell(word));
}
