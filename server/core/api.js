/*jslint node:true*/
'use strict';

var LuaVM = require('lua.vm.js');

function seed() {
    return Math.floor(Math.random() * (4294967295));
}

function shuffle(array) {
    var jumpTo, target;
    array.forEach(function (unit, iteration) {
        jumpTo = Math.floor(Math.random() * iteration);
        target = array[iteration - 1];
        array[iteration - 1] = array[jumpTo];
        array[jumpTo] = target;
    });

}

function set_player_info(duel, player_id, lifepoints, start_count, draws_count) {
    var player = {
        lp: lifepoints,
        start_count: start_count,
        draws_count: draws_count
    };
    duel.game_field.player_info.push(player);
    return player;
}

function create_duel(seed) {
    var duel = {
        interpreter: new LuaVM.Lua.State(),
        mtrandom: seed,
        cards: {},
        assumes: {},
        groups: {},
        sgroups: {},
        effects: {},
        uncopy: {},
        game_field: {
            player_info: []
        }
    };
    return duel;
}
module.exports = {
    seed: seed,
    shuffle: shuffle,
    create_duel: create_duel,
    set_player_info: set_player_info
};