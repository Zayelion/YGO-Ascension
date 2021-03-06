/*jslint node:true*/
'use strict';

function Card(code) {
    var card = {
        scrtype: 0,
        ref_handle: 0,
        data: {},
        previous: {},
        temp: {},
        current: {},
        q_cache: {},
        owner: 0,
        summon_player: 0,
        summon_info: 0,
        status: 0,
        operation_param: 0,
        announce_count: 0,
        attacked_count: 0,
        attack_all_target: 0,
        cardid: 0,
        fieldid: 0,
        fieldid_r: 0,
        turnid: 0,
        turn_counter: 0,
        unique_pos: [0, 0],
        unique_uid: 0,
        unique_code: 0,
        unique_location: 0,
        spsummon_code: 0,
        spsummon_counter: [0, 0],
        spsummon_counter_rst: [0, 0],
        assume_type: 0,
        assume_value: 0,
        unique_effect: {},
        equiping_target: {},
        pre_equip_target: {},
        overlay_target: {},
        relations: 0,
        counters: {},
        indestructable_effects: {},
        announced_cards: {},
        attacked_cards: {},
        battled_cards: {},
        equiping_cards: {},
        material_cards: {},
        effect_target_owner: {},
        effect_target_cards: {},
        xyz_materials: {},
        single_effect: {},
        field_effect: {},
        equip_effect: {},
        indexer: {},
        relate_effect: {},
        immune_effect: {}
    };
    return card;
}