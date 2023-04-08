module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          envName: "APP_ENV",
          moduleName: "@env",
          path: ".env",
          blocklist: null,
          allowlist: null,
          safe: false,
          allowUndefined: true,
          verbose: false,
        },
      ],
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "#app": "./src/app",
            "#components": "./src/components",
            "#config": "./src/config",
            "#constant": "./src/constant",
            "#context": "./src/context",
            "#features": "./src/features",
            "#hooks": "./src/hooks",
            "#models": "./src/models",
            "#navigations": "./src/navigations",
            "#screens": "./src/screens",
            "#services": "./src/services",
            "#types": "./src/types",
            "#utils": "./src/utils",
            "#widgets": "./src/widgets",
          },
          extentions: [".js", ".jsx", ".ts", ".tsx"],
        },
      ],
    ],
  };
};
