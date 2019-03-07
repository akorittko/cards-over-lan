((g) => {
    "use strict";
    const DEFAULT_LOCALE = "en";
    const VERSION_STRING = "v1.0.0b2";

    let uiStrings = {
        "ui_version": VERSION_STRING,
        "ui_game_title": {
            "en": "Cards Over LAN",
            "de": "Cards Over LAN"
        },
        "ui_feature_on": {
            "en": "ON",
            "de": "AN"
        },
        "ui_feature_off": {
            "en": "OFF",
            "de": "AUS"
        },
        "ui_join_mq_upgrades": {
            "en": "Card Upgrades: {0}",
            "de": "Kartenverbesserungen: {0}"
        },
        "ui_join_mq_allow_skips": {
            "en": "Allow Skipping Black Cards: {0}",
            "de": "Überspringungen von Fragekarten erlauben: {0}"
        },
        "ui_join_mq_perma_czar": {
            "en": "Perma-Czar",
            "de": "Permanenter Zar"
        },
        "ui_join_mq_hand_size": {
            "en": "Hand Size: {0}",
            "de": "Blattgröße: {0}"
        },
        "ui_join_mq_goal": {
            "en": "Goal: {0}\u2606 / {1} rounds",
            "de": "Ziel: {0}\u2606 / {1} Runden"
        },
        "ui_join_mq_bot_count": {
            "en": "Bots: {0}",
            "de": "Bots: {0}"
        },
        "ui_join_mq_bot_czars": {
            "en": "Bot Czars: {0}",
            "de": "Bot-Zaren: {0}"
        },
        "ui_join_mq_winner_czar": {
            "en": "Winner Is Czar: {0}",
            "de": "Rundensieger wird Zar: {0}"
        },
        "ui_join_mq_blanks": {
            "en": "Blank Cards: {0}",
            "de": "Leerkarten: {0}"
        },
        "ui_join_mq_discards": {
            "en": "Discards: {0}",
            "de": "Ablegungen: {0}"
        },
        "ui_loading_info": {
            "en": "Fetching server info...",
            "de": "Serverinfo wird abgerufen..."
        },
        "ui_server_unreachable": {
            "en": "Can't reach server",
            "de": "Server nicht erreichbar"
        },
        "ui_spectating_label": {
            "en": "(Spectating)",
            "de": "(Zuschauer)"
        },
        "ui_btn_play_game": {
            "en": "Join Game",
            "de": "Spiel beitreten"
        },
        "ui_btn_spectate_game": {
            "en": "Spectate",
            "de": "Zuschauen"
        },
        "ui_join_player_limit": {
            "en": "{1}/{2}",
            "de": "{1}/{2}"
        },
        "ui_player_limit": {
            "en": "Players",
            "de": "Spieler"
        },
        "ui_pack_count": {
            "en": "Packs",
            "de": "Packe"
        },
        "ui_white_card_count": {
            "en": "White Cards",
            "de": "Antwortkarten"
        },
        "ui_black_card_count": {
            "en": "Black Cards",
            "de": "Fragekarten"
        },
        "ui_default_player_name": {
            "en": "Player",
            "de": "Spieler"
        },
        "ui_hello": {
            "en": "Hello",
            "de": "Hallo"
        },
        "ui_hello_x": {
            "en": "Hello, {0}",
            "de": "Hallo, {0}"
        },
        "ui_not_connected": {
            "en": "Not connected",
            "de": "Nicht verbunden"
        },
        "ui_disconnected": {
            "en": "Disconnected ({0})",
            "de": "Verbindung getrennt ({0})"
        },
        "ui_reject_server_full": {
            "en": "Server is full",
            "de": "Server ist voll"
        },
        "ui_reject_duplicate": {
            "en": "Duplicate player",
            "de": "Duplizierter Spieler"
        },
        "ui_waiting_for_players": {
            "en": "Waiting for more players",
            "de": "Warte auf weitere Spieler"
        },
        "ui_fullscreen": {
            "en": "Fullscreen",
            "de": "Vollbildmodus"
        },
        "ui_options": {
            "en": "Options",
            "de": "Optionen"
        },
        "ui_about": {
            "en": "About",
            "de": "Über"
        },
        "ui_round_num": {
            "en": "Round {0}",
            "de": "Runde {0}"
        },
        "ui_card_czar": {
            "en": "Card Czar",
            "de": "Kartenzar"
        },
        "ui_score": {
            "en": "Score",
            "de": "Punktzahl"
        },
        "ui_aux_points": {
            "en": "Card Coins",
            "de": "Kartenmünzen"
        },
        "ui_upgrade_button": {
            "en": "Upgrade: {0}<span class='icon-coin'></span>",
            "de": "Verbessern: {0}<span class='icon-coin'></span>"
        },
        "ui_discard_tooltip": {
            "en": "Discard ({0} left)",
            "de": "Ablegen ({0} übrig)"
        },
        "ui_skip_tooltip": {
            "en": "Vote to skip black card",
            "de": "Für Überspringung stimmen"
        },
        "ui_pending_players": {
            "en": "Pending players",
            "de": "Ausstehende Spieler"
        },
        "ui_player_count": {
            "en": "Player count",
            "de": "Spieleranzahl"
        },
        "ui_btn_play": {
            "en": "PLAY",
            "de": "FERTIG"
        },
        "ui_btn_vote": {
            "en": "VOTE",
            "de": "WÄHLEN"
        },
        "ui_btn_skip": {
            "en": "SKIP",
            "de": "ÜBERSPRINGEN"
        },
        "ui_btn_skip_undo": {
            "en": "UNDO SKIP VOTE",
            "de": "NICHT ÜBERSPRINGEN"
        },
        "ui_idle": {
            "en": "idle",
            "de": "untätig"
        },
        "ui_blank_card_prompt": {
            "en": "Write your card here.",
            "de": "Kartentext hier eingeben."
        },
        "ui_choose_best_play": {
            "en": "Choose the best play.",
            "de": "Wähle die beste Antwort aus."
        },
        "ui_czar_deciding": {
            "en": "Card Czar is deciding...",
            "de": "Der Zar entscheidet sich..."
        },
        "ui_nobody_wins_round": {
            "en": "Nobody wins the round.",
            "de": "Keiner hat die Runde gewonnen."
        },
        "ui_x_wins_round": {
            "en": "{0} wins the round!",
            "de": "{0} hat die Runde gewonnen!"
        },
        "ui_you_win_round": {
            "en": "You win the round!",
            "de": "Du hast die Runde gewonnen!"
        },
        "ui_you_are_czar": {
            "en": "You're the Card Czar.",
            "de": "Du bist der Kartenzar."
        },
        "ui_sub_nobody": {
            "en": "Nobody",
            "de": "Keiner"
        },
        "ui_x_is_czar": {
            "en": "{0} is the Card Czar.",
            "de": "{0} ist der Kartenzar."
        },
        "ui_winner_left_nobody_scores": {
            "en": "Round winner left. Nobody scores.",
            "de": "Der Rundensieger hat das Spiel verlassen. Punkte für keinen!"
        },
        "ui_waiting_for_other_players": {
            "en": "Waiting for other players...",
            "de": "Warte auf andere Spieler..."
        },
        "ui_waiting_for_x": {
            "en": "Waiting for {0}...",
            "de": "Warte auf {0}..."
        },
        "ui_list_and": {
            "en": "and ",
            "de": "und "
        },
        "ui_list_comma": {
            "en": ", ",
            "de": ", "
        },
        "ui_list_space": {
            "en": " ",
            "de": " "
        },
        "ui_game_over": {
            "en": "Game Over!",
            "de": "Spielende"
        },
        "ui_no_trophies": {
            "en": "None!",
            "de": "Keine!"
        },
        "ui_username_placeholder": {
            "en": "Who are you?",
            "de": "Wer bist du?"
        },
        "ui_nickname": {
            "en": "Nickname",
            "de": "Spitzname"
        },
        "ui_options_apply": {
            "en": "Apply",
            "de": "Speichern"
        },
        "ui_game_results": {
            "en": "Game Results",
            "de": "Spielergebnisse"
        },
        "ui_accent_color": {
            "en": "Accent color",
            "de": "Akzentfarbe"
        },
        "ui_accent_color_placeholder": {
            "en": "Type a color name (e.g. \"dead babies\")",
            "de": "Farbename hier eingeben"
        },
        "ui_menu_title": {
            "en": "Menu",
            "de": "Menü"
        },
        "ui_trophies": {
            "en": "Trophies",
            "de": "Errungen\u00adschaften"
        },
        "ui_scoreboard_score": {
            "en": "Score",
            "de": "Punkte"
        },
        "ui_scoreboard_trophies": {
            "en": "Trophies",
            "de": "Errungen\u00adschaften"
        },
        "ui_player_list_title": {
            "en": "Players",
            "de": "Spielerliste"
        },
        "ui_card_skipped_msg": {
            "en": "Black card skipped.",
            "de": "Fragekarte übersprungen."
        }
    };

    let fmt = function (format) {
        var args = Array.prototype.slice.call(arguments, 1);
        return format.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match;
        })
    };

    g.getUiString = function (key) {
        let entry = uiStrings[key];
        if (!entry) return key;
        if (typeof entry === "string") return entry;
        let lang = navigator.language;
        let fmtStr = entry[lang] || entry[lang.replace(/(.*)-[a-z0-9_\-]+/i, (m, p) => p)] || entry[DEFAULT_LOCALE] || Object.values(entry)[0];
        if (!fmtStr) return key;
        return fmt(fmtStr, ...(Array.prototype.slice.call(arguments, 1) || []));
    }

    // Localize text contents
    const localizables = document.querySelectorAll("*[data-ui-string]");
    for(let e of localizables) {
        e.textContent = getUiString(e.getAttribute("data-ui-string"));
    }

    // Localize attributes
    const localizePfx = "data-localize-";
    const attrLocalizables = document.querySelectorAll("body *");
    for(let e of attrLocalizables) {
        for(let attr of e.attributes) {
            if (attr.nodeName.startsWith(localizePfx)) {
                e.setAttribute(attr.nodeName.substring(localizePfx.length), getUiString(attr.nodeValue));
            }
        }
    }
})(this);