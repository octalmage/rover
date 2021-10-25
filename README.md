rover
=====

Terra development suite

# Planned features 

- [x] Includes a starter smart contract, can be cw-template or similar.
- [x] Has a directory structure defined for organizing and managing your project.
- [ ] Includes a frontend starter.
- [ ] Uses wallet-provider to talk to the sample smart contract provided.
- [ ] Config file for managing supported networks, and their respective keys.
- Command line tool (rover) that includes commands to perform the following functions:
  - [x] Scaffolding a new project
  - [ ] Compiling/optimizing smart contracts
  - [ ] Deploying smart contracts to specified network


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g rover
$ rover COMMAND
running command...
$ rover (-v|--version|version)
rover/0.0.0 darwin-x64 node-v16.9.1
$ rover --help [COMMAND]
USAGE
  $ rover COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`rover hello [FILE]`](#rover-hello-file)
* [`rover help [COMMAND]`](#rover-help-command)

## `rover hello [FILE]`

describe the command here

```
USAGE
  $ rover hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ rover hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/terra-money/rover/blob/v0.0.0/src/commands/hello.ts)_

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
<!-- commandsstop -->
