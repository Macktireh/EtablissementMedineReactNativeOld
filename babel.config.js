module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "#screens": "./src/screens",
            "#navigations": "./src/navigations",
            "#components": "./src/components",
            "#context": "./src/context",
            "#constant": "./src/constant",
            "#hooks": "./src/hooks",
            "#models": "./src/models",
            "#services": "./src/services",
            "#widgets": "./src/widgets",
            "#app": "./src/app",
            "#features": "./src/features",
          },
          extentions: [".js", ".jsx", ".ts", ".tsx"],
        },
      ],
    ],
  };
};
