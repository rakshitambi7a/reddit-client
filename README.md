# Reddit Client Documentation

## Introduction

Welcome to the Reddit Client project! This is an Astro-based project built with React, designed to enhance your Reddit browsing experience by introducing custom lanes for better content organization and navigation.

## Getting Started

To start using this project, you can set up a new Astro project with React integration using the following command:

```sh
npm create astro@latest -- --template react
```

You can also explore the project using online development environments:

- [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/react)
- [![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/react)
- [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/react/devcontainer.json)

## Project Structure

The project is organized as follows:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Lane.astro
│   │   └── PostCard.astro
│   ├── layouts/
│   │   └── MainLayout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

### Key Directories

- **`src/pages/`**: Contains `.astro` or `.md` files that define routes for your site.
- **`src/components/`**: Houses reusable components such as lanes and post cards built with Astro and React.
- **`public/`**: Stores static assets like images and icons.

## Commands

Run the following commands from the root directory of the project:

| Command                   | Description                                      |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Install project dependencies                     |
| `npm run dev`             | Start the development server at `localhost:4321` |
| `npm run build`           | Build the production site to `./dist/`           |
| `npm run preview`         | Preview the production build locally             |
| `npm run astro ...`       | Execute Astro CLI commands                       |
| `npm run astro -- --help` | Display help for Astro CLI commands              |

## Features

- **Custom Lanes**: Organize Reddit posts into customizable lanes for better browsing.
- **React Integration**: Leverage React components for dynamic and interactive features.
- **Fast Performance**: Built with Astro for optimized static site generation.

## Resources

- [Astro Documentation](https://docs.astro.build)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Astro Discord Community](https://astro.build/chat)

## Notes

> 🧑‍🚀 **Experienced developer?** Feel free to delete this file and start customizing your project!

## Visual Overview

![Reddit Client Overview](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

Enjoy building your Reddit client with Astro and React!
