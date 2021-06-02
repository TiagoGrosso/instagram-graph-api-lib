# Instagram Graph API

[![npm version](https://img.shields.io/npm/v/instagram-graph-api.svg?style=flat-square)](https://www.npmjs.org/package/instagram-graph-api)
[![codecov](https://codecov.io/gh/TiagoGrosso/instagram-graph-api-lib/branch/master/graph/badge.svg?token=1WBXW0RE0Q)](https://codecov.io/gh/TiagoGrosso/instagram-graph-api-lib)
[![install size](https://packagephobia.com/badge?p=instagram-graph-api)](https://packagephobia.com/result?p=instagram-graph-api)
[![npm downloads](https://img.shields.io/npm/dm/instagram-graph-api.svg?style=flat-square)](http://npm-stat.com/charts.html?package=instagram-graph-api)
![License](https://img.shields.io/npm/l/instagram-graph-api)

## Description

This npm package lets you easily perform requests to the [Instagram Graph API](https://developers.facebook.com/docs/instagram-api/), aiming to reduce the integration time and allowing you to easily obtain the information you want through code.

This package is made by independent contributors and is in no way officially related to or supported by Instagram/Facebook.

You can find what changed in each version by checking the [Changelog](changelog/changelog.md).

## Installation

Simply run `npm install instagram-graph-api`.

## How do I use this lib?

You can always check the [typedoc documentation](https://tiagogrosso.github.io/instagram-graph-api-lib/) if you are having doubts.

## What can this lib currently do?

This lib supports making requests to most of the Instagram Graph API resources. It does not yet cover:

-   `Recently Searched Hashtags` in the `IG User` node.
-   `Stories` in the `IG User` node
-   `Mentions`, `Mentioned Comments` and `Mentioned Media` in the `IG User` node.
-   Webhooks.

As it currently stands, this lib allows you to get a lot of information about your page and media, including basic information and insights. It also allows you to create and reply to comments, delete them and hide them.
For now, this lib does not contain any complex logic. It simply models requests to the Instagram Graph API and gives you an easy way to execute them.

### Building requests

This lib was built with a simple mindset: creating requests should be as straightforward as possible. With that in mind, to start pumping out requests left and right, just create a client and use it to build requests for you:

```typescript
import { Client, GetPageInfoRequest, GetPageMediaRequest } from 'instagram-graph-api';

let client: Client = new Client(ACCESS_TOKEN, PAGE_ID);

let pageInfoRequest: GetPageInfoRequest = client.newGetPageInfoRequest();
let pageMediaRequest: GetPageMediaRequest = client.newGetPageMediaRequest();
[...]
```

You can also build each request yourself, and that won't be hard at all. You'll just have to pass the Access Token and the Page ID to each new request. Here's an example:

```typescript
let request: GetPageInfoRequest = new GetPageInfoRequest(ACCESS_TOKEN, PAGE_ID);
```

### Executing the requests

After you build your request object, you can do one of two things:

#### Built-in execute() method

You can execute the request with the built in method that returns a parsed response or extract the config to easily execute the requests yourself. This will use [Axios](https://www.npmjs.com/package/axios).

```typescript
import { GetPageInfoRequest, GetPageInfoResponse } from 'instagram-graph-api';

let request: GetPageInfoRequest = new GetPageInfoRequest(ACCESS_TOKEN, PAGE_ID);

request.execute().then((response: GetPageInfoResponse) => {
    console.log(`The page ${response.getName()} has ${response.getFollowers()} followers.`);
});
```

#### Extract the config

Alternatively, you can extract the request config to modify it, execute it and parse the response as you see fit.

```typescript
import { GetPageInfoRequest, RequestConfig } from 'instagram-graph-api';

let request: GetPageInfoRequest = new GetPageInfoRequest(ACCESS_TOKEN, PAGE_ID);

let config: RequestConfig = request.config();

[...]
```

### Publishing media

Publishing Media through the Instagram Graph API, and conversely through this lib, follows these steps:

1. Create an IG Container object (through the `PostPagePhotoMediaRequest` or the `PostPageVideoMediaRequest`).
2. Wait for the IG Container status to move to `FINISHED` (check the status through the `GetContainerRequest`).
3. Publish the IG Container (through the `PostPublishMediaRequest`).

For more info on this flow, refer to the [Content Publishing documentation](https://developers.facebook.com/docs/instagram-api/guides/content-publishing).

### Other request options

You can give paging and range options to the requests, as supported by certain resources on the Instagram Graph API. (check the [reference documentation](https://developers.facebook.com/docs/instagram-api/reference/) to see which ones do). For example, the Get Page Media request supports paging, here's a naive example of how to use:

```typescript
import { GetPageMediaRequest, GetPageMediaResponse, PageOption } from 'instagram-graph-api';

let request: GetPageMediaRequest = new GetPageMediaRequest(ACCESS_TOKEN, PAGE_ID);

request.execute().then((response: GetPageMediaResponse) => {
    let nextPage: string | undefined = response.getPaging().getAfter();
    if (nextPage) {
        request.addPaging({ option: PageOption.AFTER, value: nextPage }); // you can reuse the old request 😎
        request.execute([...])
    } else {
        console.log('🛑🛑🛑');
    }
});
```

Similarly, you can add a range option which the Get Insights requests use, like so:

```typescript
import { GetPageLifetimeInsightsRequest, GetPageLifetimeInsightsRequest } from 'instagram-graph-api';


const request: GetPageLifetimeInsightsRequest = new GetPageLifetimeInsightsRequest(ACCESS_TOKEN, PAGE_ID);
request.addRange(new Date('2021-01-01'), new Date('2021-01-15'))

request.execute().then((response: GetPageLifetimeInsightsResponse) => {
    [...]
});
```

Finally, you can add a limit option that will limit the amount of objects retrieved with that request. For example:

```typescript
import { GetPageMediaRequest, GetPageMediaResponse } from 'instagram-graph-api';

const request: GetPageMediaRequest = new GetPageMediaRequest(ACCESS_TOKEN, PAGE_ID);
request.addLimit(5);

request.execute().then((response: GetPageMediaResponse) => {
    console.log(response.getData().length); // This will be < 5
});
```

### Access Token

To use this lib you'll require an Access Token to Facebook's Graph API (over which the Instagram Graph API is built), which in turn will require a couple of other things. Check out the [before you start](https://developers.facebook.com/docs/instagram-api/getting-started) on the getting started documentation.

You can follow Facebook's documentation on how to [generate an access token](https://developers.facebook.com/docs/facebook-login/access-tokens/) to grab a token for yourself. You'll most likely want a Page Token. Check which permissions you'll need for the request you want to perform on the [Instagram Graph API Reference](https://developers.facebook.com/docs/instagram-api/reference/).

You can also extend your token's validity to avoid having to generate a new one once in a while. Once again, Facebook's documentation on how to [generate long-lived tokens](https://developers.facebook.com/docs/facebook-login/access-tokens/refreshing) will come in handy. Long-lived Page Tokens do not have an expiration date, making them ideal for most use cases of this lib.

### Page ID

All the requests to a page will require the use of a Page ID. To find out what the ID of a page is, you can:

-   [Directly make a call to the API](https://developers.facebook.com/docs/instagram-api/guides/business-discovery)
-   Use one of the many websites that will make that call for you (look for `Instagram Page ID` on a search engine)
-   Use this lib to make the request for you, by building and executing a `GetMeRequest`, as such:

    ```typescript
    import { GetMeRequest, GetMeResponse } from 'instagram-graph-api';

    let request: GetMeRequest = new GetMeRequest(ACCESS_TOKEN);

    request.execute().then((response: GetMeResponse) => {
        console.log(response.getIgPageId());
    });
    ```

## Release Process

Releases of this lib should be very incremental. When a new resource is supported a release will be issued soon after without waiting to pile up new features to do big releases.
