### Predictable

Compete against your friends in predicting all the sporting events going on. The more you predict you more you stand to gain, or lose!!!

### Tech

This is phonegap app, using angular and Onsen UI. It is an offline first app using pouchDB and syncs to a couchDB hosted on cloudant.com.

#### Requirements

- [Install node.js](http://nodejs.org/) version `>=0.10.x`
    
#### Install

    $ npm install -g phonegap
    $ npm install -g bower
    $ bower install

#### Debugging the app

    $ cd app
    $ phonegap serve
    
#### Building the app

    $ cd app
    $ phonegap build android    #apk file goes to app/platforms/android
    $ phonegap build ios        #on an ios environment only
    

##### todo

- stop making 2 predictions on 1 match, and bubble prediction information to fixture if one is made
- prediction/match details page - should be same as match but with prediction on it.
- oauth angular implementation
- lock down all prediction requests with authorize
- style list and details pages
