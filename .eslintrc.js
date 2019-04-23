module.exports = {
    "extends": [
      "airbnb",
      "prettier",
      "prettier/react"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaVersion": 2018,
      // Can I remove these now?
      "ecmaFeatures": {
        "impliedStrict": true,
        "classes": true
      }
    },
    "env": {
      "browser": true,
      "es6": true,
      "node": true,
      "jquery": true,
      "mocha": true
    },
    "rules": {
      "no-debugger": 0,
      "no-alert": 0,  
      "no-console": 0,    
      "prefer-template": 0,
      "max-len": 0,
      "padded-blocks": 0,
      "no-trailing-spaces": 0,
      "no-multiple-empty-lines": 0,    
      "prettier/prettier": [
        "error",
        {
          "trailingComma": "es5",
          "singleQuote": false,
          "printWidth": 80,
          "insertPragma": true
        }
      ],
      
    },
    "plugins": [
      "mocha",
      "html",
      "prettier",
      "react-hooks"
    ]
  }
  