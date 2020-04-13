<h1 align="center">Welcome to makreo 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Automate repetitive manipulations with your codebase. Or create a codebase generator. Or something else.

## Features
- Both API and CLI usage
- Human readable `ao-down` format
- Manipulation with files
- Installing and uninstalling npm packages

## Usage

### CLI
#### 1. Install `makreo` globaly
```sh
yarn global add makreo
# OR
npm install -g makreo
```

#### 2. [Write some macros](#how-to-create-a-macro)
#### 3. Use
```sh
makreo --help

  Usage
    $ makreo [path to your macros directory]

  Examples
    $ makreo ~/Documents/Macros
```

### API

#### 1. Add `makreo` to your dev dependencies 
```sh
yarn add -D makreo
# OR
npm install -dev makreo
```

#### 2. Create your makreo file
```js
// makreo.js contents
require('makreo')('your/macro/directory')
```

#### 3. [Write some macros](#How-to-create-a-macro) and add them to this directory

#### 4. Done! You can now use your macros!
```sh
node makreo.js
```

> Tip: You may also add it to your npm scripts!

## Docs

### How to create a macro
All `makreo` macros must be named as `<name>.macro.md`.

Macros are written in the `ao-down` format:

```md
Everything not matching the syntax is considered a comment

// Action parameter is required by makreo
`Action:` Action name

// Other parameters depend on Action
`First parameter:` Inline value

`Second parameter:`
```text
    ^
    | Specifying the language isn't required

Multiline value
```​

`Third parameter:` 

---

`Action:` Another action name

...

```

### Actions
- [Insert](#insert)
- [Replace](#replace)
- [New file](#new-file)
- [New folder](#new-folder)
- [Install](#install)
- [Uninstall](#uninstall)

#### Insert
| Parameter | Description                                                                |
| --------: | -------------------------------------------------------------------------- |
|    target | Path to the file(s) you want to modify. Supports wildcards.                |
|     regex | This defines where the `Content` will be placed (see `Position`).          |
|  position | Is either `before` or `after`. <br> Defines whether the `Content` is placed before or after the `RegEx` match. |
|   content | The text you want to insert.                                               |

#### Replace
| Parameter | Description                                                 |
| --------: | ----------------------------------------------------------- |
|    Target | Path to the file(s) you want to modify. Supports wildcards. |
|     RegEx | This defines what should be replaced by `Content`.          |
|   Content | The text you want to replace `RegEx` match by.              |

#### New file
| Parameter | Description                                                             |
| --------: | ----------------------------------------------------------------------- |
|      Path | Path to the directory you want to create a file in. Supports wildcards. |
|  Filename | A name for your file                                                    |
|   Content | The text you want to insert into the new file                           |

#### New folder
|   Parameter | Description                                                               |
| ----------: | ------------------------------------------------------------------------- |
|        Path | Path to the directory you want to create a folder in. Supports wildcards. |
| Folder name | A name for your folder                                                    |

#### Install
|    Parameter | Description                                       |
| -----------: | ------------------------------------------------- |
|      Package | Name of the package you want to install from npm. |
| Project root | Defines where to run the install comand.          |
>Uses yarn if lock present in `Project root`.

#### Uninstall
|    Parameter | Description                                |
| -----------: | ------------------------------------------ |
|      Package | Name of the package you want to uninstall. |
| Project root | Defines where to run the uninstall comand. |
>Uses yarn if lock present in `Project root`.