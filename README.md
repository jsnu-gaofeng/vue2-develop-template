# vue2-frame

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 1、集成 editorconfig 配置

为不同 IDE 编辑器上处理同一项目的多个开发人员维护一致的编码风格

## 2、prettier 格式化工具

配置.prettierrc 文件
创建.prettierignore 忽略文件
全局 prettier 配置命令："prettier": "prettier --write ."

## 3、prettier 和 eslint 冲突

插件：npm i eslint-plugin-prettier eslint-config-prettier -D
添加 prettier 插件： 在 eslintrc.js 中 'plugin:prettier/recommended'
重启就好

## 4、git 代码提交规范

husky 是一个 git hook 工具，可以帮助我们触发 git 提交的各个阶段：pre-commit、commit-msg、pre-push
如何使用 husky 呢？
(1)安装 ：npm i husky -D
(2)启用 ：npx husky install
(3)生成配置文件：npx husky add .husky/pre-commit "npm run lint"

## 提交风格

(1)安装 Commitizen
(2)初始化 会自动帮我们在 package.json 中生成一个配置文件
`shell npx commitizen init cz-conventional-changelog --save-dev --save-exact ` 在.bin 文件中对应的是 cz 这个工具
(3)用 npx cz 提交

## 封装 axios
