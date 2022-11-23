"use strict";

export default class Topic {
  id: number;
  name: string;
  color: string;
  icon: string;

  constructor(id: number, name: string, color: string, icon: string) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.icon = icon;
  }
}
