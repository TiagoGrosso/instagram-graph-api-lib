# Instagram Graph API

[![npm version](https://img.shields.io/npm/v/instagram-graph-api.svg?style=flat-square)](https://www.npmjs.org/package/instagram-graph-api)
[![codecov](https://codecov.io/gh/TiagoGrosso/instagram-graph-api-lib/branch/master/graph/badge.svg?token=1WBXW0RE0Q)](https://codecov.io/gh/TiagoGrosso/instagram-graph-api-lib)
[![install size](https://packagephobia.com/badge?p=instagram-graph-api)](https://packagephobia.com/result?p=instagram-graph-api)
[![npm downloads](https://img.shields.io/npm/dm/instagram-graph-api.svg?style=flat-square)](http://npm-stat.com/charts.html?package=instagram-graph-api)
![License](https://img.shields.io/npm/l/instagram-graph-api)

## Description

This npm package lets you easily perform requests to the [Instagram Graph API](https://developers.facebook.com/docs/instagram-api/), aiming to reduce the integration time and allowing you to easily obtain the information you want through code and to publish your media without hassle.

This package is made by independent contributors and is in no way officially related to or supported by Instagram/Facebook.

You can find what changed in each version by checking the [Changelog](changelog/changelog.md).

## New since 5.0

You can now use this lib to publish reels to your page! Check out the [Publishing media](#publishing-media) section.

## Installation

Simply run `npm install instagram-graph-api`.

## What can this lib currently do?

This lib supports making requests to most of the Instagram Graph API resources. It does not yet cover:

-   `Mentions`, `Mentioned Comments` and `Mentioned Media` in the `IG User` node.
-   Webhooks.

As it currently stands, this lib allows you to get a lot of information about your page and media, including basic information and insights. It also allows you to create and publish media (photos and videos) as well as to create and reply to comments, delete them and hide them.
For now, this lib does not contain any complex logic. It simply models requests to the Instagram Graph API and gives you an easy way to execute them.

## How do I use this lib?

You can always check the [typedoc documentation](https://tiagogrosso.github.io/instagram-graph-api-lib/) if you are having doubts.

### Building requests

This lib was built with a simple mindset: creating requests should be as straightforward as possible. With that in mind, to start pumping out requests left and right, just create a client and use it to build requests for you:

```typescript
import { Client, GetPageInfoRequest, GetPageMediaRequest } from 'instagram-graph-api';

  const client: Client = new Client(ACCESS_TOKEN, PAGE_ID);

  const pageInfoRequest: GetPageInfoRequest = client.newGetPageInfoRequest();
  const pageMediaRequest: GetPageMediaRequest = client.newGetPageMediaRequest();
[...]
```

You can also build each request yourself, and that won't be hard at all. You'll just have to pass the Access Token and the Page ID to each new request. Here's an example:

```typescript
  const request: GetPageInfoRequest = new GetPageInfoRequest(ACCESS_TOKEN, PAGE_ID);
```

### Executing the requests

After you build your request object, you can do one of two things:

#### Built-in execute() method

You can execute the request with the built in method that returns a parsed response. This will use [Axios](https://www.npmjs.com/package/axios).

```typescript
import { GetPageInfoRequest, GetPageInfoResponse } from 'instagram-graph-api';

  const request: GetPageInfoRequest = new GetPageInfoRequest(ACCESS_TOKEN, PAGE_ID);

request.execute().then((response: GetPageInfoResponse) => {
    console.log(`The page ${response.getName()} has ${response.getFollowers()} followers.`);
});
```

#### Extract the config

Alternatively, you can extract the request config to modify it, execute it and parse the response as you see fit.

```typescript
import { GetPageInfoRequest, RequestConfig } from 'instagram-graph-api';

  const request: GetPageInfoRequest = new GetPageInfoRequest(ACCESS_TOKEN, PAGE_ID);

  const config: RequestConfig = request.config();

[...]
```

### Publishing media

Publishing Media through the Instagram Graph API, and conversely through this lib, follows these steps:

1. Create an IG Container object. The request will return the container id.
   - For photos use `PostPagePhotoMediaRequest`.
   - For videos use `PostPageVideoMediaRequest`.
   - For reels use `PostPageReelMediaRequest`.
   - For carousels check the [Publishing Carousels section below](#publishing-carousels).
2. Wait for the IG Container status to move to `FINISHED` (check the status through the `GetContainerRequest`).
3. Publish the IG Container (through the `PostPublishMediaRequest`).

For more info on this flow, refer to the [Content Publishing documentation](https://developers.facebook.com/docs/instagram-api/guides/content-publishing).

#### Publishing Carousels

Publishing carousels is similar to posting other media types, but you need to create the child containers first. The steps are:

1. Create photo or video containers (2-10 containers).
2. Wait for the IG Container status to move to `FINISHED`. **Do not publish them!**.
3. Use the container ids of your photo and video containers in a `PostPageCarouselMediaRequest`.
4. Wait for the carousel IG Container status to move to `FINISHED`.
5. Publish the carousel IG Container.

### Other request options

You can give paging and range options to the requests, as supported by certain resources on the Instagram Graph API. (check the [reference documentation](https://developers.facebook.com/docs/instagram-api/reference/) to see which ones do). For example, the Get Page Media request supports paging, here's a naive example of how to use:

```typescript
import { GetPageMediaRequest, GetPageMediaResponse, PageOption } from 'instagram-graph-api';

  const request: GetPageMediaRequest = new GetPageMediaRequest(ACCESS_TOKEN, PAGE_ID);

request.execute().then((response: GetPageMediaResponse) => {
      const nextPage: string | undefined = response.getPaging().getAfter();
    if (nextPage) {
        request.withPaging({ option: PageOption.AFTER, value: nextPage })
               .execute([...]); // you can reuse the old request 😎
    } else {
        console.log('🛑🛑🛑');
    }
});
```

Similarly, you can add a range option which the Get Insights requests use, like so:

```typescript
import { GetPageLifetimeInsightsRequest, GetPageLifetimeInsightsRequest } from 'instagram-graph-api';


const request: GetPageLifetimeInsightsRequest = new GetPageLifetimeInsightsRequest(ACCESS_TOKEN, PAGE_ID)
                                                        .withRange(new Date('2021-01-01'), new Date('2021-01-15'))

request.execute().then((response: GetPageLifetimeInsightsResponse) => {
    [...]
});
```

Finally, you can add a limit option that will limit the amount of objects retrieved with that request. For example:

```typescript
import { GetPageMediaRequest, GetPageMediaResponse } from 'instagram-graph-api';

const request: GetPageMediaRequest = new GetPageMediaRequest(ACCESS_TOKEN, PAGE_ID).withLimit(5);

request.execute().then((response: GetPageMediaResponse) => {
    console.log(response.getData().length); // This will be < 5
});
```

### Access Token

To use this lib you'll require an Access Token to Facebook's Graph API (over which the Instagram Graph API is built), which in turn will require a couple of other things. Check out the [before you start](https://developers.facebook.com/docs/instagram-api/getting-started) on the getting started documentation.

You can follow Facebook's documentation on how to [generate an access token](https://developers.facebook.com/docs/facebook-login/access-tokens/) to grab a token for yourself. You'll most likely want a Page Token. Check which permissions you'll need for the request you want to perform on the [Instagram Graph API Reference](https://developers.facebook.com/docs/instagram-api/reference/).

You can also extend your token's validity to avoid having to generate a new one once in a while. Once again, Facebook's documentation on how to [generate long-lived tokens](https://developers.facebook.com/docs/facebook-login/access-tokens/refreshing) will come in handy. Long-lived Page Tokens do not have an expiration date, making them ideal for most use cases of this lib.

#### Using this lib to manage user tokens

For some use cases, for example when you want to build a tool for your own pages, it's fine to go through the above steps to generate a long-lived token. For other uses cases, such as when you have an app that will make request on behalf of users, it becomes a bother.

This lib provides a few requests to get you around that:

1. First, you still need to get your hands on an initial access token. You can get it via a facebook login prompt for users of your app.
2. When you have a user token, you can build and execute a `GetUserLongLivedTokenRequest`:

    ```typescript
    import { GetUserLongLivedTokenRequest, GetUserLongLivedTokenResponse } from 'instagram-graph-api';

    // You can get your APP_ID and APP_SECRET_ID through the Facebook Developers website.
    const request: GetUserLongLivedTokenRequest = new GetUserLongLivedTokenRequest(
        APP_ID,
        APP_SECRET_ID,
        USER_ACCESS_TOKEN
    );

    request.execute().then((response: GetUserLongLivedTokenResponse) => {
        const longLivedToken: string = response.getLongLivedToken();
    });
    ```

### Page ID

All the requests to a page will require the use of a Page ID. To find out what the ID of a page is, you can:

-   [Directly make a call to the API](https://developers.facebook.com/docs/instagram-api/guides/business-discovery)
-   Use one of the many websites that will make that call for you (look for `Instagram Page ID` on a search engine)
-   Use this lib to make the request for you, by building and executing a `GetLinkedInstagramAccountRequest`, as such:

```typescript
import { GetLinkedInstagramAccountRequest, GetLinkedInstagramAccountResponse } from 'instagram-graph-api';

const request: GetLinkedInstagramAccountRequest = new GetLinkedInstagramAccountRequest(ACCESS_TOKEN, FACEBOOK_PAGE_ID);

request.execute().then((response: GetLinkedInstagramAccountResponse) => {
    const pageId: string = response.getInstagramPageId();
});
```

-   You can get the `FACEBOOK_PAGE_ID` through the Facebook Developers portal but you can also get it through this lib:

```typescript
import { GetAuthorizedFacebookPagesRequest, GetAuthorizedFacebookPagesResponse } from 'instagram-graph-api';

const request: GetAuthorizedFacebookPagesRequest = new GetAuthorizedFacebookPagesRequest(ACCESS_TOKEN);

request.execute().then((response: GetAuthorizedFacebookPagesResponse) => {
    const firstFacebookPage: string = pagesResponse.getAuthorizedFacebookPages()[0].id;
});
```

## Release Process

Releases of this lib should be very incremental. When a new resource is supported a release will be issued soon after without waiting to pile up new features to do big releases.
