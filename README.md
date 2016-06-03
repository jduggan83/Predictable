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
    
	  
#### Design Ideas

##### Match Details

- Teams at the top
- Then Buttons for "Sweden to Win", "Draw", or Ireland - a picture of some sort underneath.
- Date, time, and location of the game, and if it is on TV
- A property of a match is draw possible.
- This prediction will then show in my prediction in a list where the item will show - "Sweden to beaten Ireland" - tapping this will bring you back to match details again where the prediction can be changed
- Have odds below the predictions
- Latest headlines or news on the match, or either of the teams next.
