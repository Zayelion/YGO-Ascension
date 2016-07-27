/*jslint node:true*/
/*global describe, it*/

'use strict';
var assert = require('chai').assert,
    api = require('../server/core/api.js');

describe('API', function () {
    it('#seed', function (done) {
        var seed = api.seed();
        assert.isNumber(seed);
        assert.isAbove(seed, 0);
        assert.isBelow(seed, 4294967295);
        done();
    });
    it('#shuffle', function (done) {
        var deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        api.shuffle(deck);
        assert.isArray(deck);
        assert.equal(deck.length, 20);
        done();
    });
    it('#create_duel', function (done) {
        var seed = api.seed(),
            duel = api.create_duel(seed);
        assert.isObject(duel);
        assert.property(duel, 'lua');
        assert.property(duel, 'game_field');
        assert.property(duel, 'random');
        assert.property(duel, 'cards');
        assert.property(duel, 'assumes');
        assert.property(duel, 'groups');
        assert.property(duel, 'sgroups');
        assert.property(duel, 'effects');
        assert.property(duel, 'uncopy');
        assert.isObject(duel.lua);
        assert.isObject(duel.game_field);
        assert.isNumber(duel.random);
        done();
    });

    it('#set_player_info', function () {
        var seed = api.seed(),
            duel = api.create_duel(seed);
        api.set_player_info(duel, 0, 8000, 5, 1);
        assert.isObject(duel.game_field.player[0]);
        assert.isNumber(duel.game_field.player[0].lp);
        assert.isNumber(duel.game_field.player[0].start_count);
        assert.isNumber(duel.game_field.player[0].draws_count);
    });
});