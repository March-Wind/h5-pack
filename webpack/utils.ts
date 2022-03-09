import path from "path";
//解决作为npm包时，产生的依赖包安装位置不同的问题，这是npm的包依赖管理机制导致的。
const requirePackage = (packageName: string) => {
  let content = null;
  try {
      content = require(path.resolve(__dirname, `../node_modules/${packageName}`));
  } catch (err) {
      content = packageName;
  }
  return content;
}
export {
  requirePackage
}