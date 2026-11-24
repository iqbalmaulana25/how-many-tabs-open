// How Many Tabs Do You Have Open?
// Writes one number, digits only — an honest count of open browser tabs — to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line = "404";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
