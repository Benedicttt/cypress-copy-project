# cypress-example-reporters [![renovate-app badge][renovate-badge]][renovate-app] [![CircleCI](https://circleci.com/gh/cypress-io/cypress-example-reporters/tree/master.svg?style=svg)](https://circleci.com/gh/cypress-io/cypress-example-reporters/tree/master)
Read [Cypress Reporters Guide](https://on.cypress.io/reporters)

## CI

The tests are executed on [CircleCI](https://app.circleci.com/pipelines/github/Benedicttt/cypress), see configuration file [circle.yml](.circleci/config.yml). One job generates Mochawesome report, while the second one stores JUnit test results. Both jobs store automatic screenshots and videos.

## Mochawesome

On each CI run, the generated Mochawesome report is stored as a test artifact

![test artifact](images/ci-view.png)

The report is a static site

![test report](images/junit-fail-pass.png)

## JUnit

JUnit test results are generated using NPM script `test:junit` and are stored on Circle.

![JUnit pass](images/junit-fail-pass2.png)

When a test fails, the error message and stack trace is shown in the test results

![JUnit fail](images/junit-fail-pass3.png)

Screenshots and videos stored as test artifacts can help debug the failures

![Test artifacts](images/reports.png)

[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
