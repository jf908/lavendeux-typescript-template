# Lavendeux TypeScript Template

A TypeScript + Vite template for [Lavendeux](https://github.com/rscarson/Lavendeux) extensions.

- ✅ Include packages from npm
- ✅ Typing with TypeScript
- ✅ Bundling with Vite
- ✅ Testing with Vitest
- ✅ GitHub Actions

## Usage

1. Replace the name and author in package.json
2. Add a name for your extension in src/index.ts

## CI

- Keep `.github/workflows/ci.yml` if you want to run vitest automatically.
- keep `.github/workflows/release.yml` if you want to be able to create releases automatically, .

How to create a new release

> You must enable "Read and write permissions" in the Actions setting for the repo.

1. Create a git tag starting with v `git tag v1.0.1`
2. Push the tag `git push origin --tags`
3. A GitHub release will be created automatically.
