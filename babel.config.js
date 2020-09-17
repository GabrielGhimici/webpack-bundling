module.exports = api => {
    const config = {
      presets: [
        "@babel/preset-react",
        "@babel/preset-typescript"
      ],
      plugins:[
        [
          "@babel/plugin-proposal-decorators",
          {
            "legacy": true
          }
        ],
        "@babel/plugin-proposal-class-properties"
      ]
    };
  
    const isTest = api.env('test');
    if (isTest) {
      const presetEnv = [
        "@babel/preset-env",
        {
          "targets": {
            "node": "current"
          }
        }
      ];
  
      config.presets.push(presetEnv);
    }
  
    return config;
  };