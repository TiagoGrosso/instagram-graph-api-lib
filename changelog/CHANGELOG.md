# [7.0.0](https://github.com/TiagoGrosso/instagram-graph-api-lib/compare/v6.2.0...v7.0.0) (2024-08-08)


### Bug Fixes

* **docs:** update readme after axios removal ([#397](https://github.com/TiagoGrosso/instagram-graph-api-lib/issues/397)) ([2987796](https://github.com/TiagoGrosso/instagram-graph-api-lib/commit/2987796132bec3b3a16c19136b94d2f5f9676035))
* **it:** remove fetch mock from integration tests ([#399](https://github.com/TiagoGrosso/instagram-graph-api-lib/issues/399)) ([e8ae3c3](https://github.com/TiagoGrosso/instagram-graph-api-lib/commit/e8ae3c330000943d0c1eeca85dba36047af2b75b))


### chore

* remove deprecated methods for paging, range and limit ([#398](https://github.com/TiagoGrosso/instagram-graph-api-lib/issues/398)) ([560100b](https://github.com/TiagoGrosso/instagram-graph-api-lib/commit/560100bb8eb659f187895fe7c9e3176dc1bcb238))


### Features

* **request:** remove axios and use native fetch instead ([#396](https://github.com/TiagoGrosso/instagram-graph-api-lib/issues/396)) ([6036fea](https://github.com/TiagoGrosso/instagram-graph-api-lib/commit/6036fea128da8d3a0be7d57a8fd87139f1f8dfe1))


### BREAKING CHANGES

* `addPaging()`, `addRange()` and `addLimit()` are no
longer available and should be replaced with `withPaging()`,
`withRange()` and `withLimit()`
* **request:** Since Axios has been removed, error handling with
`AxiosError` will no longer work and should be done in accordance with
the native Node `fetch`.

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
