const express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();

/* This is where we specify options for the http-proxy-middleware
 * We set the target to appbase.io backend here. You can also
 * add your own backend url here */
const options = {
    target: 'https://scalr.api.appbase.io/',
    auth: 'cf7QByt5e:d2d60548-82a9-43cc-8b40-93cbbe75c34c',
    changeOrigin: true
}

/* This is how we can extend this logic to do extra stuff before
 * sending requests to our backend for example doing verification
 * of access tokens or performing some other task */
app.use((req, res, next) => {
    console.log('Verifying requests ✔');

    /* After this we call next to tell express to proceed
     * to the next middleware function which happens to be our
     * proxy middleware */
    next();
})

/* Here we proxy all the requests from reactivesearch to our backend */
app.use('*', proxy(options));

app.listen(7777, () => console.log('Server running at http://localhost:7777 🚀'));