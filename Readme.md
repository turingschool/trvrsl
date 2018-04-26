# trvrsl
The [website for the Traversal Conference][website].

:studio_microphone:

This project is a [react-static app][rs] utilizing GitHub as a CMS via markdown
files located in the [docs directory](/docs).

## Design
[Guiceworks][guiceworks] created the UX flows, designs and [Invision prototype][prototype].

## Development Requirements
For development, you will need [Node.js][node] installed on your machine. A
[Current or LTS version of Node.js][lts] should do the trick and gets installed
through [homebrew][brew].

```sh
brew install node
```

This project prefers [yarn][yarn] over [npm][npm] as it's package manager. You
can also install [yarn][yarn] through [homebrew][brew].

```sh
brew install yarn
```

Next, install the project dependencies:

```sh
yarn install
```

Normal [react-static scripts][rs_scripts] are now available:

```sh
yarn build  # Creates the prodution build
yarn flow   # Runs the Flow type checker
yarn lint   # Lints the project using eslint-config-mkitt
yarn start  # Starts the development environment
yarn shipit # Bypass CI and deploy directly to production
```

View the [package.json](package.json) file for a list of dependencies and
configuration options. To learn more about a dependency use npm's `home` command:

```sh
npm home humps
```

## CI and Deployments
[![CircleCI](https://circleci.com/gh/turingschool/trvrsl.svg?style=svg)](https://circleci.com/gh/turingschool/trvrsl)

The following commands must pass on [CI][circle] for deployments to occur.

```sh
yarn flow
yarn lint
```

[CircleCI][circle] will auto deploy to an S3 bucket when the master branch
passes.

The S3 bucket uses CloudFront as a CDN.

:raising_hand_woman: if you need access to S3 or CloudFront

<!-- Links -->
[brew]: https://brew.sh
[circle]: https://circleci.com/gh/turingschool/trvrsl
[guiceworks]: http://www.guice.works
[lts]: https://github.com/nodejs/Release#nodejs-release-working-group
[node]: https://nodejs.org
[npm]: https://www.npmjs.com/get-npm
[prototype]: https://projects.invisionapp.com/share/KFGS3AC83AM#/screens/290389250_Landing
[rs]: https://react-static.js.org
[rs_scripts]: https://github.com/nozzle/react-static#quick-start 
[website]: http://traversalconf.com
[yarn]: https://yarnpkg.com
