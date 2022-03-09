import argv from "argv";
import shell from "shelljs";
import { resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
// let argsFn = () => {
argv.option([
  {
    name: "mode",
    short: "m",
    type: "string",
    description: "dev:web, dev:node, build:web, build:node, ",
    example: "'script --opiton=value' or 'script -o value'",
  },
  {
    name: "config",
    short: "c",
    type: "string",
    description: "config file",
    example: "'script --opiton=value' or 'script -o value'",
  },
]);
const args = argv.run();
const {
  options: { mode, config },
} = args;
const tsNode = resolve(__filename, "../node_modules/ts-node/register");
const tsConfig = resolve(__filename, "../webpack/tsconfig.json");
switch (mode) {
  case "dev:web": {
    const buildSpa = resolve(__filename, "../scripts/dev.ts");
    shell.exec(
      `TS_NODE_PROJECT=${tsConfig} PROJECT_CONFIG=${config} node -r ${tsNode}  ${buildSpa}`
    );
    break;
  }
  case "build:spa": {
    const buildSpa = resolve(__filename, "../scripts/build.spa.ts");
    shell.exec(
      `TS_NODE_PROJECT=${tsConfig} PROJECT_CONFIG=${config} node  -r ${tsNode}  ${buildSpa}`
    );
    break;
  }
  case "build:ssr": {
    const buildSpa = resolve(__filename, "../scripts/build.ssr.ts");
    shell.exec(
      `TS_NODE_PROJECT=${tsConfig} PROJECT_CONFIG=${config} node  -r ${tsNode}  ${buildSpa}`
    );
    break;
  }
  case "build:offline":
    throw new Error("暂时没有build:offline");
  case "dev:web:debugger": {
    const buildSpa = resolve(__filename, "../scripts/dev.ts");
    shell.exec(
      `TS_NODE_PROJECT=${tsConfig} PROJECT_CONFIG=${config} node --inspect-brk=9222 -r ${tsNode}  ${buildSpa}`
    );
    break;
  }
  case "build:spa:debugger": {
    const buildSpa = resolve(__filename, "../scripts/build.spa.ts");
    shell.exec(
      `TS_NODE_PROJECT=${tsConfig} PROJECT_CONFIG=${config} node --inspect-brk=9222 -r ${tsNode}  ${buildSpa}`
    );
    break;
  }
  case "build:ssr:debugger": {
    const buildSpa = resolve(__filename, "../scripts/build.ssr.ts");
    shell.exec(
      `TS_NODE_PROJECT=${tsConfig} PROJECT_CONFIG=${config} node --inspect-brk=9222 -r ${tsNode}  ${buildSpa}`
    );
    break;
  }
  default:
    throw new Error("mode参数不合法！");
}
