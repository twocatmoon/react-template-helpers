<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">React Template Helpers</h3>

  <p align="center">
    Branching and iterative logic helpers for React, to help make your templates cleaner.
    <br />
    <a href="https://github.com/twocatmoon/react-template-helpers"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/twocatmoon/react-template-helpers/issues">Report Bug</a>
    ·
    <a href="https://github.com/twocatmoon/react-template-helpers/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#conditional-rendering">Conditional Rendering</a></li>
        <li><a href="#collection-rendering">Collection Rendering</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

React Template Helpers implements a control flow API inspired by Vue.js. 

<p align="right">(<a href="#top">back to top</a>)</p>



### Conditional Rendering

Use the `If` function to conditionally render a block. The block will only be rendered if the condition returns a truthy value.

```tsx
{ 
  If(condition, () => (<h1>Hello, world!</h1>)).EndIf()
}
```

It is also possible to add an “else block” with `ElseIf` and `Else`:

```tsx
{ 
  If(condition, () => (<h1>Hello, world!</h1>))
  .ElseIf(otherCondition, () => (<h1>Hello, again!</h1>))
  .Else(() => (<h1>Goodbye.</h1>))
  .EndIf() 
}
```

<p align="right">(<a href="#top">back to top</a>)</p>



### Collection Rendering

Use the `For` function to render a collection of items, like an array:

```tsx
{
  For([1, 2, 3], (item, i) => (
    <p key={i}>{item}</p>
  ))
}
```

When using `For` with an array, you can get additional context about the current item's place in the array:

```tsx
{
  For([1, 2, 3], (item, i, { isFirst, isLast, isEven, isNth }) => (
    <p key={i} className={isEven ? '--even' : '--odd'}>{item}</p>
  ))
}
```

You can also use `For` with objects, although the output order is not guaranteed, and additional context about the item is not available:

```tsx
{
  For({ a: 1, b: 2, c: 3 }, (item, key) => (
    <p key={key}>{item}</p>
  ))
}
```

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [React.js](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Vite](https://vitejs.dev/)
* [TypeDoc](https://typedoc.org/)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- INSTALLATION -->
## Installation

1. Install from NPM
   ```sh
   npm i @twocatmoon/react-template-helpers
   ```
2. Include in your project
   ```ts
   import { If, For } from '@twocatmoon/react-template-helpers'
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

_Please refer to the [Documentation](https://twocatmoon.github.io/react-template-helpers)_

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Twitter - [@twocatmoon](https://twitter.com/twocatmoon)

Project Link - [https://github.com/twocatmoon/react-template-helpers](https://github.com/twocatmoon/react-template-helpers)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/twocatmoon/react-template-helpers.svg?style=for-the-badge
[contributors-url]: https://github.com/twocatmoon/react-template-helpers/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/twocatmoon/react-template-helpers.svg?style=for-the-badge
[forks-url]: https://github.com/twocatmoon/react-template-helpers/network/members
[stars-shield]: https://img.shields.io/github/stars/twocatmoon/react-template-helpers.svg?style=for-the-badge
[stars-url]: https://github.com/twocatmoon/react-template-helpers/stargazers
[issues-shield]: https://img.shields.io/github/issues/twocatmoon/react-template-helpers.svg?style=for-the-badge
[issues-url]: https://github.com/twocatmoon/react-template-helpers/issues
[license-shield]: https://img.shields.io/github/license/twocatmoon/react-template-helpers.svg?style=for-the-badge
[license-url]: https://github.com/twocatmoon/react-template-helpers/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
