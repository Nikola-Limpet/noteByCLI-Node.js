#!/usr/bin/env node
import { count } from "./util";
const note = process.argv[2];

const newNote = {
  content: note,
  id : Date.now()

};

console.log(newNote);


(() => {
  console.log('IIFE');
})();