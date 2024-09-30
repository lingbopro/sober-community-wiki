# Contribution Guide

[View Chinese / 查看中文](./CONTRIBUTING.zh-CN.md)

Welcome your contributions! Please follow these guidelines:

Fork the repository.  
Create a new branch for your changes.  
Write your code / docs for the changes.  
Commit your changes with a descriptive message.  
**Note: The commit message _must_ follow the [format below](#commit-message-format)**  
Push your branch to your fork.  
Submit a pull request to the main repository.

## Commit Message Format

The commit message follows the following format:

```
<type>: <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

You can include only the first line, or you can omit the footer.  
Meaning explained below.  
You can install [this VSCode extension](https://marketplace.visualstudio.com/items?itemName=redjue.git-commit-plugin) to assist with filling in the message.

### Tag Meanings

#### type

Must be one of the following types:  
| Type | Explanation |
|------|-------------|
| init | Project initialization |
| feat | Adding new features |
| fix | Fixing bugs |
| **docs** | Modify documentation |
| mod | Changes of any other type than in this table |
| style | Only the spaces, formatting, commas, etc. were changed, not the code logic |
| refactor | Code refactoring, no new features added or bug fixed |
| perf | Optimization-related, such as improving performance, experience |
| test | Adding test cases |
| build | Dependency-related content |
| ci | CI configuration related e.g. changes to k8s, docker configuration files |
| chore | Change build process, or add dependencies, tools, etc. |
| revert | Rollback to the previous version |

#### subject

Subject.  
The subject contains a brief description of the change.

#### footer

Footer.  
The footer should contain any information about major changes and is also the location to reference the GitHub Issue that this commit closes.

## Hint

-   Use [Prettier](https://prettier.io) to format your code.
-   Never use hard-coded values.
