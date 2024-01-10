import type Link from "./link";

export default interface Entry {
	name: string;
	website: Link;
	interview: null | Link;
	examples: Link[];
	topics: string[];
}
