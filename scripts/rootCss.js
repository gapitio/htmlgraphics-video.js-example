import { readFileSync, writeFileSync } from "node:fs";

const IN_PATH = "src/rootCSS.css";
const OUT_PATH = "dist/rootCSS.css";

const writeRootCSS = () => {
  const rootCSS = readFileSync(IN_PATH, "utf8");
  writeFileSync(OUT_PATH, rootCSS);
  // eslint-disable-next-line no-console
  console.log(`Successfully written ${OUT_PATH}`);
};

writeRootCSS();
