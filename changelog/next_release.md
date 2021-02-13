# `next.release`

## Added

-   `GetTagsRequest` to get media that a page was tagged in.
-   Utils class.
-   Added `children` media objects to all Get Media responses (was missing from some).

## Changed

-   Split `MediaField` enum into `PublicMediaField` and `PrivateMediaField`.
-   Changed `MediaField` to a type that encompasses both private public media fields.

## Removed

-   `HashtagMediaField` enum.
