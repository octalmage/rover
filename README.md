rover
=====

Terra development suite

<!-- toc -->
* [Planned features](#planned-features)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Planned features 

- [x] Includes a starter smart contract, can be cw-template or similar.
- [x] Has a directory structure defined for organizing and managing your project.
- [x] Includes a frontend starter.
- [x] Uses wallet-provider to talk to the sample smart contract provided.
- [ ] Config file for managing supported networks, and their respective keys.
- [ ] Implements best practices for dapp frontends.
- Command line tool (rover) that includes commands to perform the following functions:
  - [x] Scaffolding a new project
  - [ ] Compiling/optimizing smart contracts
  - [ ] Deploying smart contracts to specified network

# Usage
<!-- usage -->
```sh-session
$ npm install -g rover
$ rover COMMAND
running command...
$ rover (-v|--version|version)
rover/0.0.0 darwin-x64 node-v12.21.0
$ rover --help [COMMAND]
USAGE
  $ rover COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`rover help [COMMAND]`](#rover-help-command)
* [`rover new DIRECTORY`](#rover-new-directory)

## `rover help [COMMAND]`

display help for rover

```
USAGE
  $ rover help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_

## `rover new DIRECTORY`

Generate a new Terra dapp.

```
USAGE
  $ rover new DIRECTORY

ARGUMENTS
  DIRECTORY  Output directory for new project.

OPTIONS
  -f, --force

EXAMPLE
  $ rover new my-terra-project
```

_See code: [src/commands/new.ts](https://github.com/terra-money/rover/blob/v0.0.0/src/commands/new.ts)_
<!-- commandsstop -->
