'use strict';

const Nodal = require('nodal');

/* Include this file to enable Model relationships */

    const User = Nodal.require('app/models/user.js');
    const Prediction = Nodal.require('app/models/prediction.js');
    const Match = Nodal.require('app/models/match.js');

    User.joinsTo(Prediction, {multiple: true});
    Match.joinsTo(Prediction, {multiple: true});

module.exports = {}; // Don't need to export anything
