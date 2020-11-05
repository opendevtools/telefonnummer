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
