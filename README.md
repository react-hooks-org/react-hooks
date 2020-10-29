<br/>
<br/>
<p align="center">
  <img src="https://i.gyazo.com/67b004be5aa811e9ccd8375b9ce274e1.png" height="300" />
</p>
<br/>

![Build Status](https://github.com/imbhargav5/rooks/workflows/Node%20CI/badge.svg) ![Release script](https://github.com/imbhargav5/rooks/workflows/Release%20script/badge.svg) [![All Contributors](https://img.shields.io/badge/all_contributors-15-orange.svg?style=flat-square)](#contributors)

<br/>

Collection of regularly used custom hooks as utils for React.

## [Stories](https://stories.react-hooks.org)
### [Docs](https://react-hooks.org/)

[![Image from Gyazo](https://i.gyazo.com/9d31687617a5ae080bc423cd8b747f51.gif)](https://gyazo.com/9d31687617a5ae080bc423cd8b747f51)

https://react-hooks.org

# Features

✅ Collection of 22+ hooks as separate modules

✅ Standalone package with all the hooks at one place

✅ CommonJS, UMD and ESM Support

# Installation

### For a specific hook like useDidMount

```
npm i -s @rooks/use-did-mount
```

```
npm i -s @rooks/use-interval
```

```jsx
import useDidMount from "@rooks/use-did-mount";
```

### For standalone build with all the hooks

```
npm i -s rooks
```

Import any hook from "rooks" and start using them!

```jsx
import { useDidMount } from "rooks";
```

# Usage

```jsx
function App() {
  useDidMount(() => {
    alert("mounted");
  });
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
```

# Documentation

[View the docs here](https://react-hooks.org)

## Standalone Package

Package containing all the hooks is over here. - [Docs](https://github.com/imbhargav5/rooks/tree/master/packages/rooks) and [Npm Install](https://npmjs.com/package/rooks)

<br/>

### License - MIT

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/all-contributors/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://imbhargav5.com/"><img src="https://avatars2.githubusercontent.com/u/2936644?v=4" width="100px;" alt=""/><br /><sub><b>Bhargav Ponnapalli</b></sub></a><br /><a href="https://github.com/imbhargav5/rooks/commits?author=imbhargav5" title="Code">💻</a> <a href="#ideas-imbhargav5" title="Ideas, Planning, & Feedback">🤔</a> <a href="#design-imbhargav5" title="Design">🎨</a> <a href="https://github.com/imbhargav5/rooks/commits?author=imbhargav5" title="Documentation">📖</a> <a href="https://github.com/imbhargav5/rooks/issues?q=author%3Aimbhargav5" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/fintara"><img src="https://avatars0.githubusercontent.com/u/4290594?v=4" width="100px;" alt=""/><br /><sub><b>Tsvetan</b></sub></a><br /><a href="https://github.com/imbhargav5/rooks/commits?author=fintara" title="Code">💻</a></td>
    <td align="center"><a href="http://twitter.com/yesmeck"><img src="https://avatars0.githubusercontent.com/u/465125?v=4" width="100px;" alt=""/><br /><sub><b>Wei Zhu</b></sub></a><br /><a href="https://github.com/imbhargav5/rooks/commits?author=yesmeck" title="Code">💻</a></td>
    <td align="center"><a href="https://www.akshaykadam.me?ref=github"><img src="https://avatars1.githubusercontent.com/u/16436270?v=4" width="100px;" alt=""/><br /><sub><b>Akshay Kadam (A2K)</b></sub></a><br /><a href="https://github.com/imbhargav5/rooks/commits?author=deadcoder0904" title="Code">💻</a></td>
    <td align="center"><a href="http://www.austinpeterson.info"><img src="https://avatars2.githubusercontent.com/u/8095506?v=4" width="100px;" alt=""/><br /><sub><b>Austin Peterson</b></sub></a><br /><a href="https://github.com/imbhargav5/rooks/commits?author=theskillwithin" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/fhellwig"><img src="https://avatars2.githubusercontent.com/u/1703592?v=4" width="100px;" alt=""/><br /><sub><b>Frank Hellwig</b></sub></a><br /><a href="https://github.com/imbhargav5/rooks/commits?author=fhellwig" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/neilor"><img src="https://avatars3.githubusercontent.com/u/4008023?v=4" width="100px;" alt=""/><br /><sub><b>Neilor Caldeira</b></sub></a><br /><a href="https://github.com/imbhargav5/rooks/commits?author=neilor" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://zhihu.com/people/dancerphil"><img src="https://avatars0.githubusercontent.com/u/7264444?v=4" width="100px;" alt=""/><br /><sub><b>Cong Zhang</b></sub></a><br /><a href="https://github.com/imbhargav5/rooks/commits?author=dancerphil" title="Code">💻</a></td>
    <td align="center"><a href="http://3dgo.net"><img src="https://avatars2.githubusercontent.com/u/1618956?v=4" width="100px;" alt=""/><br /><sub><b>Brian Steere</b></sub></a><br /><a href="https://github.com/imbhargav5/rooks/commits?author=Dianoga" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/simbathesailor"><img src="https://avatars2.githubusercontent.com/u/5938110?v=4" width="100px;" alt=""/><br /><sub><b>anil kumar chaudhary</b></sub></a><br /><a href="https://github.com/imbhargav5/rooks/commits?author=simbathesailor" title="Code">💻</a></td>
    <td align="center"><a href="https://foobars.in"><img src="https://avatars3.githubusercontent.com/u/5774849?v=4" width="100px;" alt=""/><br /><sub><b>Harsh Zalavadiya</b></sub></a><br /><a href="https://github.com/imbhargav5/rooks/commits?author=harshzalavadiya" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/maciekgrzybek"><img src="https://avatars2.githubusercontent.com/u/16546428?v=4" width="100px;" alt=""/><br /><sub><b>maciek_grzybek</b></sub></a><br /><a href="https://github.com/imbhargav5/rooks/commits?author=maciekgrzybek" title="Code">💻</a></td>
    <td align="center"><a href="https://twitter.com/wu_ct"><img src="https://avatars2.githubusercontent.com/u/1695958?v=4" width="100px;" alt=""/><br /><sub><b>CT Wu</b></sub></a><br /><a href="https://github.com/imbhargav5/rooks/commits?author=wuct" title="Code">💻</a> <a href="#ideas-wuct" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/braxtonchristensen"><img src="https://avatars2.githubusercontent.com/u/11494223?v=4" width="100px;" alt=""/><br /><sub><b>Braxton Christensen</b></sub></a><br /><a href="https://github.com/imbhargav5/rooks/commits?author=braxtonchristensen" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://elrumordelaluz.com"><img src="https://avatars3.githubusercontent.com/u/784056?v=4" width="100px;" alt=""/><br /><sub><b>Lionel</b></sub></a><br /><a href="https://github.com/imbhargav5/rooks/commits?author=elrumordelaluz" title="Code">💻</a></td>
    <td align="center"><a href="https://mxstbr.com"><img src="https://avatars0.githubusercontent.com/u/7525670?v=4" width="100px;" alt=""/><br /><sub><b>Max Stoiber</b></sub></a><br /><a href="https://github.com/imbhargav5/rooks/commits?author=mxstbr" title="Code">💻</a></td>
    <td align="center"><a href="https://stupidism.github.io/resume"><img src="https://avatars2.githubusercontent.com/u/5801015?v=4" width="100px;" alt=""/><br /><sub><b>Stupid</b></sub></a><br /><a href="https://github.com/imbhargav5/rooks/commits?author=Stupidism" title="Code">💻</a></td>
    <td align="center"><a href="http://mscottmoore.dev"><img src="https://avatars0.githubusercontent.com/u/5983927?v=4" width="100px;" alt=""/><br /><sub><b>Michael Moore</b></sub></a><br /><a href="https://github.com/imbhargav5/rooks/commits?author=mscottmoore" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
