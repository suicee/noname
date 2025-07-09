game.import("extension", function (lib, game, ui, get, ai, _status) {
    return {
        name: "君子", content: function (config, pack) {

        }, precontent: function () {

        }, help: {}, config: {}, package: {
            character: {
                character: {
                    "千变万化": ["male", "shen", "3/3/0", ["rehuashen", "rexinsheng", "retuogu", "sbyingmen", "sbpingjian"], []],
                    "君子": ["male", "shen", "4/4/0", ["shiyu", "liuyi"], []],
                    "东皇钟": ["male", "shen", "3/3/0", ["heti_zhaohuan"], []],
                    "神眭固": ["male", "shen", "5/5/0", ["shen_tuntian","shen_qianjun"], []],
                },
                translate: {
                    "千变万化": "千变万化",
                    "君子": "君子",
                    "东皇钟": "东皇钟",
                    "神眭固": "神眭固",
                },
            },
            card: {
                card: {
                    dian: {
                        audio: true,
                        type: "basic",
                        enable: false,
                        destroy: "discardPile",
                        getDian: function (count) {
                            var cards = [];
                            if (typeof count != 'number') count = 1;
                            while (count--) {
                                let card = game.createCard('dian')//, 'spade', 1);
                                cards.push(card);
                            }
                            return cards;
                        },
                        ai: {
                            basic: {
                                useful: 0,
                                value: 0,
                            },
                        },
                        fullimage: true,
                    },
                    xiao: {
                        audio: true,
                        type: "basic",
                        enable: false,
                        destroy: "discardPile",
                        getXiao: function (count) {
                            var cards = [];
                            if (typeof count != 'number') count = 1;
                            while (count--) {
                                let card = game.createCard('xiao');
                                cards.push(card);
                            }
                            return cards;
                        },
                        ai: {
                            basic: {
                                useful: 0,
                                value: 0,
                            },
                        },
                        fullimage: true,
                    },
                    ji: {
                        audio: true,
                        type: "basic",
                        enable: false,
                        destroy: "discardPile",
                        getJi: function (count) {
                            var cards = [];
                            if (typeof count != 'number') count = 1;
                            while (count--) {
                                let card = game.createCard('ji');
                                cards.push(card);
                            }
                            return cards;
                        },
                        ai: {
                            basic: {
                                useful: 0,
                                value: 0,
                            },
                        },
                        fullimage: true,
                    },
                    le: {
                        audio: true,
                        type: "basic",
                        enable: false,
                        destroy: "discardPile",
                        getLe: function (count) {
                            var cards = [];
                            if (typeof count != 'number') count = 1;
                            while (count--) {
                                let card = game.createCard('le');
                                cards.push(card);
                            }
                            return cards;
                        },
                        ai: {
                            basic: {
                                useful: 0,
                                value: 0,
                            },
                        },
                        fullimage: true,
                    },
                    beng: {
                        audio: true,
                        type: "basic",
                        enable: false,
                        destroy: "discardPile",
                        getBeng: function (count) {
                            var cards = [];
                            if (typeof count != 'number') count = 1;
                            while (count--) {
                                let card = game.createCard('beng');
                                cards.push(card);
                            }
                            return cards;
                        },
                        ai: {
                            basic: {
                                useful: 0,
                                value: 0,
                            },
                        },
                        fullimage: true,
                    },
                    "junzi_ying": {
                        audio: true,
                        type: "basic",
                        enable: false,
                        destroy: "discardPile",
                        "getJunzi_Ying": function (count) {
                            var cards = [];
                            if (typeof count != 'number') count = 1;
                            while (count--) {
                                let card = game.createCard('junzi_ying');
                                cards.push(card);
                            }
                            return cards;
                        },
                        ai: {
                            basic: {
                                useful: 0,
                                value: 0,
                            },
                        },
                        fullimage: true,
                    },
                },
                translate: {
                    dian: "典",
                    "dian_info": "当此牌进入弃牌堆后，系统将此牌移出游戏。",
                    xiao: "孝",
                    "xiao_info": "当此牌进入弃牌堆后，系统将此牌移出游戏。",
                    ji: "急",
                    "ji_info": "当此牌进入弃牌堆后，系统将此牌移出游戏。",
                    le: "乐",
                    "le_info": "当此牌进入弃牌堆后，系统将此牌移出游戏。",
                    beng: "绷",
                    "beng_info": "当此牌进入弃牌堆后，系统将此牌移出游戏。",
                    "junzi_ying": "赢",
                    "junzi_ying_info": "当此牌进入弃牌堆后，系统将此牌移出游戏。",
                },
                list: [],
            },
            skill: {
                skill: {
                    heti_zhaohuan: {
                        group: ["heti_zhaohuan_mark_gong", "heti_zhaohuan_mark_shou", "heti_zhaohuan_mark_mou"],
                        // mode:["identity","guozhan"],
                        enable: "phaseUse",
                        mark: true,
                        usable:1,

                        init: function (player) {
                            player.storage.zhaohuanwu_gong = ['guanyu', 'zhangfei','machao','huangzhong','zhaoyun'];//['re_xusheng', 'sb_huangzhong'];
                            player.storage.zhaohuanwu_shou = ['old_zhoutai', "huatuo",'lvmeng','xiahoudun','daqiao'];
                            player.storage.zhaohuanwu_mou = ["sunquan", "guojia",'luxun','sunshangxiang','zhenji'];

                            player.markSkill("heti_zhaohuan_mark_gong");
                            player.markSkill("heti_zhaohuan_mark_shou");
                            player.markSkill("heti_zhaohuan_mark_mou");
                        },

                        filter: function (event, player) {
                            return player.storage.zhaohuanwu_gong.length > 0 || player.storage.zhaohuanwu_shou.length > 0 || player.storage.zhaohuanwu_mou.length > 0;
                        },
                        filterTarget: function (card, player, target) {
                            if (target.movable(-1, 0)) return true;
                            if (target.movable(1, 0)) return true;
                            if (target.movable(0, -1)) return true;
                            if (target.movable(0, 1)) return true;
                            return false;
                        },

                        content: function () {
                            var xy = target.getXY();
                            var x = xy[0];
                            var y = xy[1];
                            var movable_pos = [];
                            if (target.movable(-1, 0)) {
                                movable_pos.push([x - 1, y]);
                            }
                            if (target.movable(1, 0)) {
                                movable_pos.push([x + 1, y]);
                            }
                            if (target.movable(0, 1)) {
                                movable_pos.push([x, y + 1]);
                            }
                            if (target.movable(0, -1)) {
                                movable_pos.push([x, y - 1]);
                            }
                            'step 0'
                            var enable_type = [];

                            if (player.storage.zhaohuanwu_gong.length > 0) enable_type.push('攻者');
                            if (player.storage.zhaohuanwu_shou.length > 0) enable_type.push('守者');
                            if (player.storage.zhaohuanwu_mou.length > 0) enable_type.push('谋者');
                            player.chooseControl(enable_type).set('prompt', get.translation('heti_zhaohuan')).set('prompt2', "选择一个召唤类型");


                            'step 1'
                            var zhaohuan_list;
                            player.storage.current_zhaohuan = result.control;
                            if (player.storage.current_zhaohuan == '攻者') zhaohuan_list = player.storage.zhaohuanwu_gong;
                            if (player.storage.current_zhaohuan == '守者') zhaohuan_list = player.storage.zhaohuanwu_shou;
                            if (player.storage.current_zhaohuan == '谋者') zhaohuan_list = player.storage.zhaohuanwu_mou;
                            event.dialog = ui.create.dialog([zhaohuan_list, 'character']);
                            event.dialog.videoId = event.videoId;
                            // event.dialog.add('选择一个角色');
                            var next = player.chooseButton(true).set('dialog', event.videoId);

                            'step 2'
                            // var group=player.group;
                            // if(group=='unknown') group=lib.group.randomGet();
                            // var list=[];
                            // for(var i in lib.character){
                            //     if(lib.character[i][1]==group) list.push(i);
                            // }
                            // var player2=game.addChessPlayer();
                            // if(get.config('double_character')){
                            //     var list2=list.randomGets(2);
                            //     player2.init(list2[0],list2[1]);
                            // }
                            // else{
                            //     player2.init(list.randomGet())
                            // }
                            var player2 = game.addChessPlayer();
                            player2.init(result.links[0]);
                            // player.storage.zhaohuanwu.remove(result.links[0]);

                            if (player.storage.current_zhaohuan == '攻者') zhaohuan_list = player.storage.zhaohuanwu_gong.remove(result.links[0]);
                            if (player.storage.current_zhaohuan == '守者') zhaohuan_list = player.storage.zhaohuanwu_shou.remove(result.links[0]);
                            if (player.storage.current_zhaohuan == '谋者') zhaohuan_list = player.storage.zhaohuanwu_mou.remove(result.links[0]);

                            player2.identity = "friend";
                            player2.side = player.side;
                            player2.setIdentity("friend");
                            player2.identityShown = true;
                            player2.node.identity.dataset.color = get.translation(player.side + 'Color')

                            xy = movable_pos.randomGet();
                            player2.moveTo(xy[0], xy[1]);
                            player2.addSkill("heti_remove");

                            if (player.storage.current_zhaohuan == '攻者') {
                                player2.addSkill("heti_fanbu_gong");
                                player2.loseMaxHp(player2.maxHp - 2, true);
                            }
                            player2.addSkill("heti_remove");
                            if (player.storage.current_zhaohuan == '守者') {
                                player2.addSkill("heti_fanbu_shou");
                                player2.loseMaxHp(player2.maxHp - 3, true);
                            }
                            player2.addSkill("heti_remove");
                            if (player.storage.current_zhaohuan == '谋者') {
                                player2.addSkill("heti_fanbu_mou");
                                player2.loseMaxHp(player2.maxHp - 1, true);
                            }
                            event.dialog.close();
                        },

                        subSkill: {


                            mark_gong: {

                                marktext: '攻',
                                mark: true,
                                intro: {
                                    name: '攻者',
                                    mark: function (dialog, storage, player) {
                                        if (!player.storage.zhaohuanwu_gong || !player.storage.zhaohuanwu_gong.length) return '无';

                                        dialog.addSmall([player.storage.zhaohuanwu_gong, 'character']);
                                    },
                                },
                                sub:true,

                            },

                            mark_shou: {

                                marktext: '守',
                                mark: true,
                                intro: {
                                    name: '守者',
                                    mark: function (dialog, storage, player) {
                                        if (!player.storage.zhaohuanwu_shou || !player.storage.zhaohuanwu_shou.length) return '无';
                                        dialog.addSmall([player.storage.zhaohuanwu_shou, 'character']);
                                    },
                                },

                            },

                            mark_mou: {
                                marktext: '谋',
                                mark: true,
                                intro: {
                                    name: '谋者',
                                    mark: function (dialog, storage, player) {
                                        if (!player.storage.zhaohuanwu_mou || !player.storage.zhaohuanwu_mou.length) return '无';
                                        dialog.addSmall([player.storage.zhaohuanwu_mou, 'character']);
                                    },
                                },

                            },

                        }



                    },

                    heti_remove: {
                        trigger: {
                            player: "dieBefore",
                        },
                        forced: true,
                        popup: false,
                        content: function () {
                            var target = game.filterPlayer(function (current) {
                                return current != player && current.hasSkill('heti_zhaohuan');
                            });
                            if (target.length == 1) {
                                if (player.hasSkill('heti_fanbu_gong')) target[0].storage.zhaohuanwu_gong.push(player.name);
                                if (player.hasSkill('heti_fanbu_shou')) target[0].storage.zhaohuanwu_shou.push(player.name);
                                if (player.hasSkill('heti_fanbu_mou')) target[0].storage.zhaohuanwu_mou.push(player.name);
                            }
                            game.removePlayer(player);
                        },
                        sub: true,
                        "_priority": 0,
                    },
                    heti_fanbu_gong: {
                        group: ["heti_fanbu_gong_pos", "heti_fanbu_gong_neg"],

                        mark: true,
                        marktext: '攻',
                        intro: { content: '攻击型召唤物' },

                        init: function (player) {
                            player.storage.master = game.filterPlayer(function (current) {
                                return current != player && current.hasSkill('heti_zhaohuan');
                            })[0];
                        },

                        subSkill: {
                            pos: {
                                trigger: { player: 'useCardToTarget' },
                                forced: true,
                                popup: "heti_fanbu_gong",

                                // filter:function(event,player){
                                // 	return game.hasPlayer(function(current){
                                // 		return current!=player&&current.hasSkill('heti_zhaohuan');
                                // 	});
                                // },

                                filter: function (event, player) {
                                    // if (protect.length!=1) return false;
                                    if (!event.targets || event.targets.length != 1 || event.player == event.target) return false;
                                    return (event.card.name == 'sha' || (get.type2(event.card, false) == 'trick'))
                                },
                                content: function () {
                                    // var target=game.filterPlayer(function(current){
                                    // 	return current!=player&&current.hasSkill('heti_zhaohuan');
                                    // });
                                    // var num=trigger.num
                                    // if (target.length==1){
                                    //     target[0].draw(num);
                                    // }
                                    var master = player.storage.master;
                                    'step 0'
                                    master.chooseTarget('是否弃置一名角色区域里的一张牌？', (card, master, target) => {
                                        return target.countDiscardableCards(master, 'hej');
                                    })
                                    'step 1'
                                    if (result.bool) {
                                        master.discardPlayerCard(result.targets[0], 'hej', true);
                                    }

                                },
                                // sub:true,
                                // "_priority":0,
                            },

                            neg: {
                                forced: true,
                                popup: "heti_fanbu_gong",
                                trigger: { player: 'phaseUseEnd' },
                                // direct:true,
                                filter: function (event, player) {
                                    var hs = player.getCards('h');
                                    if (!hs.length) return false;
                                    return true;
                                },
                                content: function () {
                                    player.discard(player.getCards('h'))
                                },
                            },
                            // neg: {
                            //     trigger: { player: ['phaseJudgeBefore', 'phaseDrawBefore'] },
                            //     forced: true,
                            //     popup: "heti_fanbu_gong",
                            //     content: function () {
                            //         trigger.cancel();
                            //     },
                            // },
                        },

                    },
                    heti_fanbu_shou: {

                        group: ["heti_fanbu_shou_pos1", "heti_fanbu_shou_pos2", "heti_fanbu_shou_neg"],

                        mark: true,
                        marktext: '守',
                        intro: { content: '防御型召唤物' },

                        init: function (player) {
                            player.storage.master = game.filterPlayer(function (current) {
                                return current != player && current.hasSkill('heti_zhaohuan');
                            })[0];
                        },

                        subSkill: {
                            pos1: {
                                forced: true,
                                popup: "heti_fanbu_shou",
                                trigger: { global: 'useCardToTarget' },

                                filter: function (event, player) {

                                    // if (protect.length!=1) return false;
                                    return player.storage.master == event.target &&
                                        (event.card.name == 'sha' || (get.type2(event.card, false) == 'trick' && get.tag(event.card, 'damage') > 0))
                                },
                                content: function () {

                                    var ruka = trigger.target, evt = trigger.getParent();
                                    player.logSkill(event.name, ruka);
                                    player.line(ruka, "green");

                                    evt.targets.remove(ruka);
                                    evt.triggeredTargets2.remove(ruka);
                                    evt.targets.push(player);
                                    evt.triggeredTargets2.push(player);
                                },
                            },

                            pos2: {
                                forced: true,
                                popup: "heti_fanbu_shou",
                                trigger: { player: 'recoverAfter' },

                                filter: function (event, player) {

                                    // if (protect.length!=1) return false;
                                    return player.storage.master.isDamaged();
                                },
                                content: function () {
                                    player.storage.master.recover(trigger.num);
                                },
                            },

                            neg: {
                                popup: "heti_fanbu_shou",
                                mod: {
                                    playerEnabled: function (card, player, target) {
                                        if (player != target) return false;
                                    }
                                }
                            },
                        },
                    },
                    heti_fanbu_mou: {

                        group: ["heti_fanbu_mou_pos", "heti_fanbu_mou_neg"],
                        mark: true,
                        marktext: '谋',
                        intro: { content: '谋略型召唤物' },

                        subSkill: {
                            pos: {
                                forced: true,
                                popup: "heti_fanbu_mou",
                                trigger: { player: 'gainAfter' },
                                // direct:true,

                                init: function (player) {
                                    player.storage.master = game.filterPlayer(function (current) {
                                        return current != player && current.hasSkill('heti_zhaohuan');
                                    })[0];
                                },
                                filter: function (event, player) {

                                    var evt = event.getParent('phaseDraw');
                                    if (evt && evt.player == player) return false;
                                    return event.getg(player).length > 0;

                                },
                                content: function () {
                                    player.storage.master.draw(trigger.getg(player).length);
                                },
                            },

                            neg: {
                                trigger: { player: ['phaseJudgeBefore', 'phaseDrawBefore'] },
                                forced: true,
                                popup: "heti_fanbu_mou",
                                content: function () {
                                    trigger.cancel();
                                },
                            },

                            // neg: {
                            //     forced: true,
                            //     popup: "heti_fanbu_mou",
                            //     trigger: { player: 'phaseUseEnd' },
                            //     // direct:true,
                            //     filter: function (event, player) {
                            //         var hs = player.getCards('h');
                            //         if (!hs.length) return false;
                            //         return true;
                            //     },
                            //     content: function () {
                            //         player.discard(player.getCards('h'))
                            //     },
                            // },
                        },
                    },
                    shiyu: {
                        forced: true,
                        trigger: {
                            global: "phaseBefore",
                            player: "enterGame",
                        },
                        filter: function (event, player) {
                            var hs = player.getCards('h');

                            return (event.name != 'phase' || game.phaseNumber == 0) && player.getCards('h').filter(function (card) {
                                // return card.type!='equip';
                                // return card.type!='trick';
                                return get.type(card) == 'trick' || get.type(card) == 'basic' || get.type(card) == 'delay';
                            }).length > 0;
                        },
                        content: function () {


                            var hs = player.getCards('h'), cards = player.getCards('h').filter(function (card) {
                                // return card.type!='equip';
                                // return card.type=='basic'||card.type!='trick'||card.type=='delay';
                                // return card.type!='trick';
                                return get.type(card) == 'trick' || get.type(card) == 'basic' || get.type(card) == 'delay';
                            });
                            event.cards = cards;
                            event.rawCards = cards.slice(0);
                            player.loseToDiscardpile(cards);

                            var new_cards = [];

                            //randomly get dian xiao ji le beng ying with length cards.length
                            for (var i = 0; i < cards.length; i++) {
                                var index = Math.floor(Math.random() * 6);
                                switch (index) {
                                    case 0: new_cards.push(lib.card.dian.getDian(1)[0]); break;
                                    case 1: new_cards.push(lib.card.xiao.getXiao(1)[0]); break;
                                    case 2: new_cards.push(lib.card.ji.getJi(1)[0]); break;
                                    case 3: new_cards.push(lib.card.le.getLe(1)[0]); break;
                                    case 4: new_cards.push(lib.card.beng.getBeng(1)[0]); break;
                                    case 5: new_cards.push(lib.card.junzi_ying.getJunzi_Ying(1)[0]); break;

                                }
                            }
                            player.gain(new_cards, 'gain2').type = 'shiyu';


                        },
                        group: "shiyu2",
                        "_priority": 0,
                    },
                    "shiyu2": {
                        forced: true,
                        trigger: {
                            player: "gainAfter",
                            global: "loseAsyncAfter",
                        },
                        filter: function (event, player) {
                            var hs = player.getCards('h');
                            return event.type != 'shiyu' && event.getg(player).filter(function (card) {
                                return get.type(card) == 'trick' || get.type(card) == 'basic' || get.type(card) == 'delay';
                            }).length > 0;
                        },
                        content: function () {


                            var hs = player.getCards('h'), cards = trigger.getg(player).filter(function (card) {
                                return get.type(card) == 'trick' || get.type(card) == 'basic' || get.type(card) == 'delay';
                            });
                            event.cards = cards;
                            event.rawCards = cards.slice(0);
                            player.loseToDiscardpile(cards);

                            var new_cards = [];

                            //randomly get dian xiao ji le beng ying with length cards.length
                            for (var i = 0; i < cards.length; i++) {
                                var index = Math.floor(Math.random() * 6);
                                switch (index) {
                                    case 0: new_cards.push(lib.card.dian.getDian(1)[0]); break;
                                    case 1: new_cards.push(lib.card.xiao.getXiao(1)[0]); break;
                                    case 2: new_cards.push(lib.card.ji.getJi(1)[0]); break;
                                    case 3: new_cards.push(lib.card.le.getLe(1)[0]); break;
                                    case 4: new_cards.push(lib.card.beng.getBeng(1)[0]); break;
                                    case 5: new_cards.push(lib.card.junzi_ying.getJunzi_Ying(1)[0]); break;

                                }
                            }
                            player.gain(new_cards, 'gain2').type = 'shiyu';


                        },
                        "_priority": 0,
                    },
                    liuyi: {
                        group: ["liuyi_zhuanhua", "liuyi_zhuanhua_ying", "liuyi_xue"],
                        initList: function () {
                            var list, skills = [];
                            var banned = ['xunyi'];
                            if (get.mode() == 'guozhan') {
                                list = [];
                                for (var i in lib.characterPack.mode_guozhan) list.push(i);
                            }
                            else if (_status.connectMode) list = get.charactersOL();
                            else {
                                list = [];
                                for (var i in lib.character) {
                                    if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
                                    list.push(i);
                                }
                            }
                            for (var i of list) {
                                if (i.indexOf('gz_jun') == 0) continue;
                                for (var j of lib.character[i][3]) {
                                    var skill = lib.skill[j];
                                    if (!skill || skill.zhuSkill || banned.contains(j)) continue;
                                    if (skill.ai && (skill.ai.combo || skill.ai.notemp || skill.ai.neg)) continue;
                                    var info = get.translation(j);
                                    for (var ix = 0; ix < info.length; ix++) {
                                        if (/典|点|孝|笑|啸|效|急|及|吉|极|疾|集|乐|勒|崩|绷|赢|营|萤|盈|迎/.test(info[ix]) == true) {
                                            // if(/典|孝|急|绝|礼|乐|射|御|书|数/.test(info[ix])==true){
                                            // if(/礼|乐|射|御|书|数/.test(info[ix])==true){
                                            // if(/仁|义|礼|智|信/.test(info[ix])==true){
                                            skills.add(j);
                                            break;
                                        }
                                    }
                                }
                            }
                            _status.liuyi_list = skills;
                        },
                        subSkill: {
                            xue: {
                                trigger: {
                                    player: ["useCard", "respond"],
                                },
                                usable: 1,
                                forced: true,
                                init: function (player, skill) {
                                    if (!player.storage.liuyi) player.storage.liuyi = [];
                                },
                                filter: function (event, player) {
                                    // return event.skill=='liuyi_dian'||event.skill=='liuyi_xiao'||event.skill=='liuyi_ji'||event.skill=='liuyi_le'||event.skill=='liuyi_beng'||event.skill=='liuyi_ying';
                                    // return event.skill=='liuyi_zhuanhua';
                                    if (event.cards == null) return false;
                                    return event.skill == null && (event.cards[0].name == 'dian' || event.cards[0].name == 'ji' || event.cards[0].name == 'xiao' || event.cards[0].name == 'junzi_ying' || event.cards[0].name == 'le' || event.cards[0].name == 'beng');
                                },
                                content: function () {

                                    if (!_status.liuyi_list) lib.skill.liuyi.initList();
                                    var list = _status.liuyi_list.filter(function (i) {
                                        return !player.hasSkill(i, null, null, false);// && /典|点/.test(get.translation(i))==true;
                                    }).randomGets(3);
                                    'step 0'
                                    if (list.length == 0) return;
                                    else {
                                        event.videoId = lib.status.videoId++;
                                        var func = function (skills, id, player) {
                                            var dialog = ui.create.dialog('forcebutton');
                                            dialog.videoId = id;
                                            dialog.add('令' + get.translation(player) + '获得一个技能');
                                            for (var i = 0; i < skills.length; i++) {
                                                dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + get.translation(skills[i]) + '】</div><div>' + lib.translate[skills[i] + '_info'] + '</div></div>');
                                            }
                                            dialog.addText(' <br> ');
                                        }
                                        if (player.isOnline()) player.send(func, list, event.videoId, player);
                                        else if (player == game.me) func(list, event.videoId, player);
                                        player.chooseControl(list).set('ai', function () {
                                            var controls = _status.event.controls;
                                            if (controls.contains('cslilu')) return 'cslilu';
                                            return controls[0];
                                        });

                                    }
                                    'step 1'
                                    game.broadcastAll('closeDialog', event.videoId);
                                    player.addSkillLog(result.control);
                                    player.storage.liuyi.push(result.control);
                                    'step 2'
                                    // var skills=player.getSkills(null,false,false).filter(function(i){
                                    //     var info=get.info(i);
                                    //     return info&&!info.charlotte;
                                    // });
                                    if (player.storage.liuyi.length <= 6) event.finish();
                                    if (player.storage.liuyi.length > 6) {
                                        player.chooseControl(player.storage.liuyi).set('prompt', get.translation('liuyi')).set('prompt2', "选择一个技能失去");
                                    }
                                    'step 3'
                                    if (result.control) {
                                        game.log(player, '失去了技能', '#g【' + get.translation(result.control) + '】');
                                        player.removeSkill(result.control);
                                        player.storage.liuyi.remove(result.control);
                                    }

                                },
                                sub: true,
                                "_priority": 0,
                            },
                            zhuanhua: {
                                trigger: ["chooseToUse", "chooseToRespond"],
                                forced: true,
                                mod: {
                                    cardname: function (card, player) {
                                        if (card.name == 'dian') return 'sha';

                                        if (card.name == 'xiao') return 'tiesuo';
                                        if (card.name == 'ji') return 'shan';
                                        if (card.name == 'le') return 'tao';
                                        if (card.name == 'beng') return 'wuxie';
                                        if (card.name == 'junzi_ying') return 'chitu';
                                    },
                                    cardnature: function (card, player) {
                                        if (card.name == 'dian') return "thunder";
                                    },
                                },
                                sub: true,
                                "_priority": 0,
                            },
                            "zhuanhua_ying": {
                                trigger: {
                                    player: ["equipAfter"],
                                },
                                forced: true,
                                filter: function (event, player) {
                                    return player.countCards('e', { name: 'junzi_ying' }) > 0;
                                },
                                content: function () { },
                                mod: {
                                    globalFrom: function (from, to, current) {
                                        if (from.countCards('e', { name: 'junzi_ying' }) > 0) return current - from.countCards('e', { name: 'junzi_ying' });
                                    },
                                },
                                sub: true,
                                "_priority": 0,
                            },
                        },
                        "_priority": 0,
                    },

                    //神眭固
                    shen_tuntian: {
                        trigger: { player: "phaseZhunbeiBegin" },
                        forced: true,
                        content(event, trigger, player) {
                            // Initialize or increment the stack counter
                            if (!player.storage.shen_tuntian_count) {
                                player.storage.shen_tuntian_count = 1;
                            } else {
                                player.storage.shen_tuntian_count++;
                            }

                            // Apply or refresh the skill with current stack value
                            player.addSkill("shen_tuntian_strong");
                        },
                        subSkill: {
                            strong: {
                                mark: true,
                                intro: {
                                    content: function(storage, player) {
                                    let count = player.storage.shen_tuntian_count || 0;
                                    if (player.storage.shen_baofa) {
                                        return '屯犬效果层数：' + count +
                                            '（摸牌+' + count + '，手牌上限+' + count + '，所有伤害+' + count + '）';
                                        }
                                    else {
                                    return '屯犬效果层数：' + count +
                                        '（摸牌+' + count + '，手牌上限+' + count + '，首次伤害+' + count + '）';
                                    
                                    }
                                    },
                                },
                                mod: {
                                    maxHandcard(player, num) {
                                        return num + (player.storage.shen_tuntian_count || 0);
                                    },
                                },
                                trigger: {
                                    player: ["phaseDrawBegin2", "phaseJieshuBegin"],
                                    source: "damageBegin1",
                                },
                                forced: true,
                                filter(event, player) {
                                    if (event.name == "phaseDraw") return !event.numFixed;
                                    if (event.name == "damage"){
                                        if (!player.storage.shen_baofa){
                                            return game.getGlobalHistory("everything", evt => evt.name == "damage" && evt.source == player).indexOf(event) == 0;
                                        }
                                        else {
                                            return true;
                                        }
                                }
                                    if (event.name == "phaseJieshu") 
                                        return player.storage.shen_baofa;
                                    
                                },
                                content(event, trigger, player) {
                                    if (trigger.name == "phaseJieshu") {
                                        player.storage.shen_baofa = false;
                                    }
                                    else{
                                    let count = player.storage.shen_tuntian_count || 0;
                                    trigger.num += count;
                                }
                                },
                            },
                        },
                    },

                    shen_qianjun: {
                        limited: true,
                        enable: "phaseUse",
                        seatRelated: true,
                        changeSeat: true,
                        skillAnimation: true,
                        animationColor: "orange",
                        derivation: "olluanji",
                        filter(event, player) {
                            return true;
                        },
                        filterTarget: lib.filter.notMe,
                        async content(event, trigger, player) {
                            const target = event.targets[0];
                            player.awakenSkill(event.name);
                            // await target.gain(player.getCards("e"), "gain2").set("giver", player);
                            game.broadcastAll(
                                function (target1, target2) {
                                    game.swapSeat(target1, target2);
                                },
                                player,
                                target
                            );
                            await player.recover();
                            await player.addSkills("olluanji");

                            if (!player.storage.shen_baofa) 
                                player.storage.shen_baofa = true;
                        },
                        ai: {
                            order: 13,
                            result: {
                                player: 1,
                                target: 2,
                            },
                            threaten: 1.5,
                        },
                    },

                    shen_qianjun2: {
                        trigger: {
                            player: "damageEnd",
                        },
                        direct: true,
                        seatRelated: true,
                        changeSeat: true,
                        skillAnimation: true,
                        animationColor: "orange",
                        derivation: "luanji",
                        filter(event, player) {
                            return game.hasPlayer((p) => p !== player);
                        },
                        content: function () {
                            "step 0";
                            player.chooseTarget("是否与一名角色交换位置？", false, function (card, player, target) {
                                return target != player;
                            });
                            "step 1";
                            if (result.bool && result.targets.length) {
                                player.awakenSkill(event.name);
                                game.broadcastAll(function (a, b) {
                                    game.swapSeat(a, b);
                                }, player, result.targets[0]);
                            }
                            "step 2";
                            player.chooseBool("是否发动一次【乱击】？");
                            "step 3";
                            if (result.bool) {
                                player.addTempSkill("luanji", {player: 'phaseBegin'});
                                player.useSkill("luanji");
                            }
                        },
                    },

                    shen_qianjun_3: {
                        trigger: { player: "damageEnd" },
                        direct: true,
                        seatRelated: true,
                        changeSeat: true,
                        skillAnimation: true,
                        animationColor: "orange",
                        filter(event, player) {
                            return game.hasPlayer(p => p !== player);
                        },
                        content: function () {
                            "step 0";
                            player.chooseTarget("是否与一名角色交换位置？", false, function (card, player, target) {
                                return target != player;
                            });
                            "step 1";
                            if (result.bool && result.targets.length) {
                                player.awakenSkill(event.name);
                                event.swapTarget = result.targets[0];
                                game.broadcastAll(function (a, b) {
                                    game.swapSeat(a, b);
                                }, player, event.swapTarget);
                            } else {
                                event.finish();
                            }
                            "step 2";
                            const cards = player.getCards("hs");
                            const suits = {};
                            for (let i = 0; i < cards.length; i++) {
                                const suit = get.suit(cards[i]);
                                if (!suits[suit]) suits[suit] = [];
                                suits[suit].push(cards[i]);
                            }
                            const suitOptions = Object.values(suits).filter(list => list.length >= 2);
                            if (!suitOptions.length) {
                                event.finish();
                            } else {
                                player.chooseCard("是否将两张同花色牌当【万箭齐发】使用？", 2, function (card, player) {
                                    if (ui.selected.cards.length === 0) return true;
                                    return get.suit(card) === get.suit(ui.selected.cards[0]);
                                }, "hs").set("ai", function (card) {
                                    return 6 - get.value(card);
                                });
                            }
                            "step 3";
                            if (result.bool && result.cards && result.cards.length === 2) {
                                player.logSkill("shen_qianjun");
                                player.useCard({ name: "wanjian" }, result.cards);
                            }
                        }
                    }
                },
                translate: {
                    shiyu: "失语",
                    "shiyu_info": "锁定技，每当你获得装备牌以外的牌时，你失去这些牌并获得随机等量的【典】、【孝】、【急】、【乐】、【绷】、【赢】。",
                    liuyi: "六艺",
                    "liuyi_lose_info": "选择一个技能失去",
                    "liuyi_info": "锁定技。你的【典】视为雷【杀】；【孝】视为【铁索连环】；【急】视为【闪】；【乐】视为【桃】；【绷】视为【无懈可击】；【赢】视为效果与进攻马相同的无种类装备牌。每回合限一次，每当你以此法使用或打出牌时，你从三个名字包含“典/孝/急/乐/绷/赢”或其同音字的技能中选择一个获得，然后若你以此法获得的技能数大于六，你从中选择一个失去。",
                    heti_zhaohuan: "召唤",
                    "heti_zhaohuan_info": "出牌阶段限一次，你可以在一名角色周围召唤一个记录在你谋/攻/守列表中的一名武将，令其体力上限变为1/2/3，并令其获得技能【谋者/攻者/守者】。",
                    heti_fanbu_gong: "攻者",
                    "heti_fanbu_gong_info": "锁定技。你始终跳过判定阶段与摸牌阶段。你使用【杀】或者单目标普通锦囊指定目标后，拥有【召唤】技能的可以选择并弃置一名角色区域里的一张牌。",
                    heti_fanbu_shou: "守者",
                    "heti_fanbu_shou_info": "锁定技。你不能使用指定其他角色为目标的牌。当拥有【召唤】技能的角色成为【杀】或者伤害类锦囊的目标时，你将此牌的目标转移成你；你回复体力后，拥有【召唤】技能的角色回复等量体力。",
                    heti_fanbu_mou: "谋者",
                    "heti_fanbu_mou_info": "锁定技。你的出牌阶段结束时，你弃置所有手牌。当你在摸牌阶段以外获得牌时，你令拥有【召唤】技能的角色获得等量的牌。",

                    shen_tuntian: "屯犬",
                    shen_tuntian_info: "锁定技，准备阶段，你令你本局游戏的摸牌阶段摸牌数、手牌上限、每回合首次造成的伤害+1。",
                    shen_qianjun: "迁军",
                    shen_qianjun_info: "限定技，出牌阶段，你可以与一名其他角色交换座次，然后你获得〖乱击〗并删除【囤犬】中的【每回合首次】直到回合结束。",

                },
            },
            intro: "",
            author: "伯小符",
            diskURL: "",
            forumURL: "",
            version: "1.0",
        }, files: { "character": ["君子.jpg", "千变万化.jpg", "东皇钟.jpg","神眭固.jpg"], "card": ["dian.jpg", "xiao.jpg", "ji.jpg", "junzi_ying.jpg", "le.jpg", "beng.jpg"], "skill": [], "audio": [] }
    }
})