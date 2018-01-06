# reactivesearch-proxy-server

A middleware to demonstrate how to secure reactivesearch using a simple Node/Express server. Here I'm using [`http-proxy-middleware`](https://github.com/chimurai/http-proxy-middleware) for brevity however the logic can be extended easily with express based routing.

## Instructions

1. Clone the repo with `git clone`
2. Install dependencies with `yarn`
3. Run the server with `yarn start`.
4. In order to connect this with reactivesearch you should add a `url` prop in `ReactiveBase` in the client side app. Check the [docs](https://opensource.appbase.io/reactive-manual/getting-started/reactivebase.html) for more info 😸