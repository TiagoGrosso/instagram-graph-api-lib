# Instagram Graph API

## Description

This npm package lets you easily perform requests to the [Instagram Graph API](https://developers.facebook.com/docs/instagram-api/).

> :warning: **This package is still in its early stages**: While it's expected that the general structure of building and executing requests will remain the same, this is not a guarantee as the package expands to cover more parts of the Instagram Graph API. Any breaking change will, however, be well documented on each release.

This package is made by independent contributors and is in no way officially related to or supported by Instagram/Facebook.

## Installation

Simply run `npm install instagram-graph-api`.

## How do I use this lib?

You can always check the [typedoc documentation](https://tiagogrosso.github.io/instagram-graph-api-lib/) if you are having doubts.

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

After you get your request object, you can do one of two things:

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

### Other request options

You can give paging and range options to the requests, as supported by certain resources on the Instagram Graph API. (check the [reference documentation](<(https://developers.facebook.com/docs/instagram-api/reference/)>) to see which ones do). For example, the Get Page Media request supports paging, here's a naive example of how to use:

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


let request: GetPageLifetimeInsightsRequest = new GetPageLifetimeInsightsRequest(ACCESS_TOKEN, PAGE_ID);
request.addRange(new Date('2021-01-01'), new Date('2021-01-15'))

request.execute().then((response: GetPageLifetimeInsightsResponse) => {
    [...]
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

# What can this lib currently do?

As previously stated, this lib is in its early stages and, as such, only supports requests to a reduced number of resources on the Instagram Graph API.
