'use strict';

const Nodal = require('nodal');

class Match extends Nodal.Model {}

Match.setDatabase(Nodal.require('db/main.js'));
Match.setSchema(Nodal.my.Schema.models.Match);

module.exports = Match;
