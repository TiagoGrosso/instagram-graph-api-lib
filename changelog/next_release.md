# `next.release`

### Added

- Moved `MediaTypeInResponse` enum to `Enums.ts`.

### Changed

- Changed type of the `media_type` field in `MediaData` from `string` to `MediaTypeInResponse`.
- Changed enum values for `MediaType` to all caps to match the API.
- Fixed `CONTAINER_STATUS_CODE` enum not having the correspondent string value.
- Rename `Client#newPostPageCaroulselMediaRequest` to `Client#newPostPageCarouselMediaRequest` to fix typo.