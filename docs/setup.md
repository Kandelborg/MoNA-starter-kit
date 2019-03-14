# Setup

This document will get you up and running with the example app in less than 30 minutes.

Due to the nature of the project, some things are assumed:

- You know how to read reference documentation
- You know how to use npm
- You know how to use TypeScript

The steps in this document are first described, then followed by an example and possibly extra information.

## Index

- [Prerequisites](#prerequisites)
- [Installing](#installing)
  - [The editor](#the-editor)
  - [The project](#the-project)
    - [Configuration](#configuration)
  - [The API](#the-api)

## Prerequisites

- Git
- Node & NPM
- (optional) VS Code with [extensions](/docs/vscode-extensions.md)
  - An IDE or editor with IDE-like capabilities such as atom, neovim or whatever else you like
- Docker for running the API locally

## Installing

- Make a new folder for your project

```bash
mkdir myProject
cd myProject
```

### The editor

I've built this project with VSCode. For now, there'll only be instructions for setting up VSCode, more will be added.

Go the the [extensions document](/docs/vscode-extensions.md) for a list of extensions used.

Commands for installing extensions for the insiders edition are also stored in that document.

1. Install the extensions via the provided commands

The settings in `/.vscode/settings.json` are all you need for a great developer experience.
Make sure those settings are the ones in use.

---

### The project

1. Fork or clone the MoNA repo
1. Go to [configuration.md](/docs/configuration.md), then come back here.
1. Install dependencies

> From your project directory

```bash
git clone https://github.com/MathiasKandelborg/mona-starter-kit.git .
```

> Install dependencies

```bash
npm install
# or
yarn
```

---

### The API

I haven't released this project yet, it's coming _very_ soon. It'll be under the MIT license too! :)
