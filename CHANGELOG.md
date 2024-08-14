## [2.3.3](https://github.com/opendevtools/telefonnummer/compare/v2.3.2...v2.3.3) (2024-08-14)


### Bug Fixes

* type import ([a27fde2](https://github.com/opendevtools/telefonnummer/commit/a27fde26c7336218c3b4f24a18f3ae9f441a274d))

## [2.3.2](https://github.com/opendevtools/telefonnummer/compare/v2.3.1...v2.3.2) (2024-08-14)


### Bug Fixes

* imports matches filenames ([ab368c4](https://github.com/opendevtools/telefonnummer/commit/ab368c4eeb0290d844199a8e0639ab28143b57a3))

## [2.3.1](https://github.com/opendevtools/telefonnummer/compare/v2.3.0...v2.3.1) (2023-09-12)


### Bug Fixes

* only include built files in npm publish ([95324e0](https://github.com/opendevtools/telefonnummer/commit/95324e041d1fc505dd6baef732b14b1565e86d68))

# [2.3.0](https://github.com/opendevtools/telefonnummer/compare/v2.2.0...v2.3.0) (2023-09-12)


### Features

* use bun for tests and bundling ([9be493f](https://github.com/opendevtools/telefonnummer/commit/9be493f331486573f1c6fec46a8d22f95f45a827))

# [2.2.0](https://github.com/opendevtools/telefonnummer/compare/v2.1.1...v2.2.0) (2020-11-05)


### Features

* publish as @opendevtools/telefonnummer ([0ccbcf1](https://github.com/opendevtools/telefonnummer/commit/0ccbcf18a514e9550036a287334b4b7ded66e7bc))

## [2.1.1](https://github.com/opendevtools/telefonnummer/compare/v2.1.0...v2.1.1) (2020-11-05)


### Bug Fixes

* publish as @opendevtools/telefonnummer ([19ef867](https://github.com/opendevtools/telefonnummer/commit/19ef8679cc6d4482333ed124a315a313ca7a6111))

# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [2.0.2] - 2018-12-10
### Fixed
- Handle internationalized numbers with a leading zero, i.e. `+46 0700123456`

## [2.0.1] - 2018-11-27
### Fixed
- Update versions after `flatmap-stream` incident

## [2.0.0] - 2018-05-09
### Added
- Internationalization option
- Rollup build

### Fixed
- Fixed potential `null` problems
- Updated some types

### Breaking changes
- Second parameter to `parse` has been changed to an options object
