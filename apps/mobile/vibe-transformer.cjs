const original = require("@expo/metro-config/babel-transformer");

exports.transform = function (args) {
  if (args.filename.endsWith(".vibe")) {
    const { compileProjectSync, nearestProject } = require("vibelang/project");
    const result = compileProjectSync({ project: nearestProject(args.filename) });
    const output = result.outputs.get(args.filename);
    if (!output) throw new Error(JSON.stringify(result.errors));
    args = { ...args, src: output.code };
  }
  return original.transform(args);
};
