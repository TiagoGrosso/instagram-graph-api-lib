# [6.1.0](https://github.com/TiagoGrosso/instagram-graph-api-lib/compare/v6.0.0...v6.1.0) (2024-01-24)


### Features

* **page:** adds requests to publish stories to page ([#315](https://github.com/TiagoGrosso/instagram-graph-api-lib/issues/315)) ([04658b7](https://github.com/TiagoGrosso/instagram-graph-api-lib/commit/04658b766a08b282892625dc8a7d64c8692b328d))

# [6.0.0](https://github.com/TiagoGrosso/instagram-graph-api-lib/compare/v5.0.1...v6.0.0) (2024-01-23)


### Bug Fixes

* remove deprecated VIDEO container ([#310](https://github.com/TiagoGrosso/instagram-graph-api-lib/issues/310)) ([12a8056](https://github.com/TiagoGrosso/instagram-graph-api-lib/commit/12a80568f191295976a02548f730b60513f71791))


### BREAKING CHANGES

* The PostPageVideoMediaRequest class and related client methods has been removed since it was no longer functional
This also means that it is no longer possible to publish videos to CAROUSEL media via the API. Removed 'VIDEO' from MediaType enum
