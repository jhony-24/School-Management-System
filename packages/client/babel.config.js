module.exports = {
  "presets" : [
    [
      "@babel/preset-env",
      {
        "useBuiltIns" : "entry",
        "corejs" : 3.15
      }
    ],
    [
      "@babel/preset-react",
      {
        "runtime" : "automatic"
      }
    ],
    "@babel/preset-typescript"
  ]
}