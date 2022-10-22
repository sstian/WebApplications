
## Version
```json
    "webpack": "^4.46.0",
    "webpack-cli": "^3.3.12",
```

## Command
```cmd
# initialize and create package.json
npm init --yes

# webpack locally and globally
npm install webpack@4 webpack-cli@3 -D
npm install webpack@4 webpack-cli@3 -g

# package css/less
npm install style-loader css-loader less-loader less -D --force

# package html
npm install html-webpack-plugin -D --force

# package image from style
npm install url-loader -D --force

# package image from html
npm install html-loader -D --force

# package other resources: font, audio, video...
npm install file-loader -D --force

# webpack-dev-server locally and globally
npm install webpack-dev-server -D --force
npm install webpack-dev-server -g

// prod
# 提取css为单独文件
npm install mini-css-extract-plugin -D --force

# css兼容性处理
npm install postcss postcss-loader postcss-preset-env -D --force

# js语法检查
npm install eslint-loader eslint -D --force
npm install eslint-config-airbnb-base eslint-plugin-import  -D --force

# js语法转换
npm install babel-loader @babel/core @babel/preset-env -d --force

# js兼容性处理
npm install @babel/polyfill --force

# 压缩html/js
# npm install html-webpack-plugin -D --force

# 压缩css
npm install optimize-css-assets-webpack-plugin --D --force
```