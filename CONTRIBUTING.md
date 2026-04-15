# Contributing to flux

Thank you for your interest in contributing. This document explains how to get involved.

---

## Before You Start

Read the existing code. Understand how the component works before making changes. Check open issues and pull requests to avoid duplicating work.

---

## Ways to Contribute

- Report bugs
- Fix bugs
- Improve documentation
- Add tests
- Suggest or build new features

---

## Reporting Bugs

Open an issue at github.com/Laucs-sudo/Flux/issues.

Include:

- A clear description of the problem
- Steps to reproduce it
- Expected behavior
- Actual behavior
- Your environment (OS, browser, React version, Node version)
- A code snippet or minimal reproduction if possible

---

## Suggesting Features

Open an issue before writing any code. Describe what you want to build and why it belongs in this library. Wait for feedback before starting work.

---

## Setting Up the Project

Requirements:

- Node 18 or higher
- npm, yarn, or pnpm

Steps:

1. Fork the repository on GitHub
2. Clone your fork locally

git clone https://github.com/your-username/Flux.git

3. Move into the project directory

cd Flux

4. Install dependencies

npm install

5. Start the development server

npm run dev

---

## Making Changes

- Work on a new branch, not main
- Name your branch clearly (fix/null-handling, feat/custom-formatter)
- Keep changes focused. One fix or feature per pull request
- Write clear commit messages that describe what changed and why

---

## Code Standards

- Use TypeScript for all source files
- Keep components and functions small and focused
- Avoid unnecessary dependencies
- Match the existing code style
- Export new types from the main entry point

---

## Testing Your Changes

Before submitting, verify:

- The component renders without errors
- Animations work as expected
- Edge cases (null, undefined, NaN, Infinity) still display 0
- Locale formatting produces correct output
- TypeScript compiles without errors

Run the build:

npm run build

---

## Submitting a Pull Request

1. Push your branch to your fork
2. Open a pull request against the main branch of the original repository
3. Fill in the pull request description with:
   - What changed
   - Why it changed
   - How to test it
4. Link any related issues

---

## Pull Request Review

A maintainer will review your pull request. They may request changes. Respond to feedback and push updates to the same branch.

Pull requests are merged once approved and all checks pass.

---

## Commit Message Format

Use this structure:

type: short description

Types:

- fix: for bug fixes
- feat: for new features
- docs: for documentation changes
- refactor: for code changes that do not fix bugs or add features
- test: for adding or updating tests
- chore: for build or config changes

Example:

fix: handle NaN input without throwing

---

## Code of Conduct

Be respectful. Focus on the work. Treat others the way you want to be treated. Maintainers reserve the right to remove contributions or block users who behave poorly.

---

## Questions

Open a discussion at github.com/Laucs-sudo/Flux/discussions if you are unsure about anything before starting work.

---

Made with care by Laucs, Aulvar Team.
