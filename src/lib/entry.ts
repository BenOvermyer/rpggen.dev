"use strict";

import Link from "./link";

export default class Entry {
  name: string;
  website: Link;
  interview: null|Link;
  examples: Link[];
  topics: string[];

  constructor(name: string, website: Link, interview: null|Link, examples: Link[], topics: string[]) {
    this.name = name;
    this.website = website;
    this.interview = interview;
    this.examples = examples;
    this.topics = topics;
  }
}
