/*jslint node:true, bitwise:true*/
'use strict';

var LuaVM = require('lua.vm.js'),
    enums = require('./enums.js');

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

function new_card(duel, code, owner, playerid, location, sequence, position) {
    if (duel.game_field.is_location_useable(playerid, location, sequence)) {
        var card = new Card(code);
    }
}

function set_player_info(duel, player_id, lifepoints, start_count, draws_count) {
    var player = {
        lp: lifepoints,
        start_count: start_count,
        draws_count: draws_count,
        disabled_location: 0,
        used_location: 0,
        extra_p_count: 0,
        tag_extra_p_count: 0,
        list_mzone: new Array(8),
        list_szone: new Array(8),
        list_main: new Array(45),
        list_hand: new Array(10),
        list_grave: new Array(30),
        list_remove: new Array(30),
        list_extra: new Array(15)
    };

    duel.core.shuffle_deck_check[player_id] = false;
    duel.core.shuffle_hand_check[player_id] = false;

    duel.game_field.player.push(player);
    return player;
}

function create_duel(seed) {

    var duel = {
        lua: new LuaVM.Lua.State(),
        core: {
            shuffle_deck_check: [],
            shuffle_hand_check: []
        },
        random: seed,
        cards: {},
        assumes: {},
        groups: {},
        sgroups: {},
        effects: {},
        uncopy: {},
        game_field: {
            infos: {
                field_id: 1,
                copy_id: 1,
                can_shuffle: true,
                turn_id: 0,
                card_id: 1,
                phase: 0,
                turn_player: 0
            },
            player_info: [],
            player: []
        }
    };

    duel.new_card = function new_card(code) {

    };
    duel.game_field.is_location_useable = function is_location_useable(playerid, location, sequence) {

        var player = duel.game_field.player,
            flag = player[playerid].disabled_location | player[playerid].used_location;
        if (location !== enums.LOCATION_MZONE && location !== enums.LOCATION_SZONE) {
            return true;
        }
        if (location === enums.LOCATION_MZONE && flag & (1 << sequence)) {
            return false;
        }
        if (location === enums.LOCATION_SZONE && flag & (256 << sequence)) {
            return false;
        }
        return true;

    };

    return duel;
}
module.exports = {
    seed: seed,
    shuffle: shuffle,
    create_duel: create_duel,
    set_player_info: set_player_info,
    new_card: new_card
};