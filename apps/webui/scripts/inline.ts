const result = await Bun.build({
  entrypoints: ["dist/index.html"],
  compile: true,
  target: "browser",
  outdir: "../executable/web",
  minify: true,
  plugins: [
    {
      name: "inline assets in index.html",
      setup(build: any) {
        build.onResolve({ filter: /.*/, namespace: "file" }, (args: any) => {
          if (args.path.includes("/assets")) {
            return {
              path: args.path.replace("/assets", "/dist/assets"),
            };
          }
        });
      },
    },
  ],
});

if (!result.success) {
  console.error("[build]: failed!");
  for (const log of result.logs) {
    console.error("[error]: ", log);
  }
} else {
  console.log("\x1b[32m[build]: success\x1b[0m");
  console.log("\x1b[32m[build]:\x1b[0m wrote 1 file to", result.outputs[0].path);
}
