# [6.2.0](https://github.com/TiagoGrosso/instagram-graph-api-lib/compare/v6.1.1...v6.2.0) (2024-08-06)


### Features

* **comments:** add 'from' and 'parent_id' fields to comment data ([#395](https://github.com/TiagoGrosso/instagram-graph-api-lib/issues/395)) ([1a0cb14](https://github.com/TiagoGrosso/instagram-graph-api-lib/commit/1a0cb144de4e13896e1b324b89e3a67a56d026ea))

## [6.1.1](https://github.com/TiagoGrosso/instagram-graph-api-lib/compare/v6.1.0...v6.1.1) (2024-07-15)


### Bug Fixes

* **ci:** allow sentence case in commmits ([985cb7e](https://github.com/TiagoGrosso/instagram-graph-api-lib/commit/985cb7ed97860cd7a89abe9be240f3978f76876c))
* **it:** increase timeout for video publishing tests ([#380](https://github.com/TiagoGrosso/instagram-graph-api-lib/issues/380)) ([2b8af70](https://github.com/TiagoGrosso/instagram-graph-api-lib/commit/2b8af707917006b599d395ef28b21681629368bc))
* **it:** replace stale video links in ITs ([bde0cf9](https://github.com/TiagoGrosso/instagram-graph-api-lib/commit/bde0cf967084684098ff038105c232c1a6b13ebe))

# [6.1.0](https://github.com/TiagoGrosso/instagram-graph-api-lib/compare/v6.0.0...v6.1.0) (2024-01-24)


### Features

* **page:** adds requests to publish stories to page ([#315](https://github.com/TiagoGrosso/instagram-graph-api-lib/issues/315)) ([04658b7](https://github.com/TiagoGrosso/instagram-graph-api-lib/commit/04658b766a08b282892625dc8a7d64c8692b328d))

# [6.0.0](https://github.com/TiagoGrosso/instagram-graph-api-lib/compare/v5.0.1...v6.0.0) (2024-01-23)


### Bug Fixes

* remove deprecated VIDEO container ([#310](https://github.com/TiagoGrosso/instagram-graph-api-lib/issues/310)) ([12a8056](https://github.com/TiagoGrosso/instagram-graph-api-lib/commit/12a80568f191295976a02548f730b60513f71791))


### BREAKING CHANGES

* The PostPageVideoMediaRequest class and related client methods has been removed since it was no longer functional
This also means that it is no longer possible to publish videos to CAROUSEL media via the API. Removed 'VIDEO' from MediaType enum
