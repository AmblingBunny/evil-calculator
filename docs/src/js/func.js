globalThis.globalObject = {
    characteristic: "Unkown",
    name: "Name",
    class: {
        class_basic: "Berserker",
        class_2nd: "None",
        class_3rd: "None"
    },
    pannel: {
        HP: {
            level: "Normal",
            value: 0
        },
        Satiety: {
            level: "Normal",
            value: 0
        },
        Mood: {
            level: "Normal",
            value: 0
        },
        Stamina: {
            level: "Normal",
            value: 0
        },
        ATK: {
            level: "Normal",
            value: 0
        },
        DEF: {
            level: "Normal",
            value: 0
        },
        CRIT: {
            level: "Normal",
            value: 0
        },
        ATKSPD: {
            level: "Normal",
            value: 0
        },
        Evasion: {
            level: "Normal",
            value: 0
        },
    },
    func1: function () {
        console.log(this.name);
    }
};



function town_select_click(element) {
    const town_content = document.getElementById("town-content");
    town_content.innerHTML = `<iframe src="/docs/src/html/town-part/${element.id}.html" frameborder="1" width="580" height="300"></iframe>`;
}

function hunter_select_click(element) {
    const hunter_content = document.getElementById("hunter-content");
    hunter_content.innerHTML = `<iframe src="/docs/src/html/hunter-part/${element.id}.html" frameborder="1" width="580" height="300"></iframe>`;
}

function hunter_type_change(hunter_type_basic) {
    const hunter_type_2nd = document.getElementById("hunter-type-2nd");
    const hunter_type_3rd = document.getElementById("hunter-type-3rd");
    hunter_type_2nd.options.length = 0;
    hunter_type_3rd.options.length = 0;

    let class_2nd_berserker = ["None", "Duelist", "Slayer", "Warrior"];
    let class_2nd_ranger = ["None", "HawkEye", "Sniper", "Summonarcher"];
    let class_2nd_sorcerer = ["None", "ArchMage", "DarkMage", "Ignis"];
    let class_2nd_paladin = ["None", "Crusader", "Templar", "DarkPaladin"];

    let class_3rd_berserker = ["None", "Barbarian", "SwordSaint", "Destoyer"];
    let class_3rd_ranger = ["None", "Minstrel", "Scout", "Arcanearcher"];
    let class_3rd_sorcerer = ["None", "Conjuror", "Darklord", "Illusionist"];
    let class_3rd_paladin = ["None", "Guardian", "Inquisitor", "Executor"];

    switch (hunter_type_basic.value) {
        case "Berserker":
            for (i = 0; i < class_2nd_berserker.length; i++) {
                hunter_type_2nd.innerHTML += `<option value=${class_2nd_berserker[i]}>${class_2nd_berserker[i]}</option>`
                hunter_type_3rd.innerHTML += `<option value=${class_3rd_berserker[i]}>${class_3rd_berserker[i]}</option>`
            }
            break;
        case "Ranger":
            for (i = 0; i < class_2nd_berserker.length; i++) {
                hunter_type_2nd.innerHTML += `<option value=${class_2nd_ranger[i]}>${class_2nd_ranger[i]}</option>`
                hunter_type_3rd.innerHTML += `<option value=${class_3rd_ranger[i]}>${class_3rd_ranger[i]}</option>`
            }
            break;
        case "Sorcerer":
            for (i = 0; i < class_2nd_berserker.length; i++) {
                hunter_type_2nd.innerHTML += `<option value=${class_2nd_sorcerer[i]}>${class_2nd_sorcerer[i]}</option>`
                hunter_type_3rd.innerHTML += `<option value=${class_3rd_sorcerer[i]}>${class_3rd_sorcerer[i]}</option>`
            }
            break;
        case "Paladin":
            for (i = 0; i < class_2nd_berserker.length; i++) {
                hunter_type_2nd.innerHTML += `<option value=${class_2nd_paladin[i]}>${class_2nd_paladin[i]}</option>`
                hunter_type_3rd.innerHTML += `<option value=${class_3rd_paladin[i]}>${class_3rd_paladin[i]}</option>`
            }
            break;
    }

}



function evil_calc() {
    // Attack Speed
    const atkspd_div = document.getElementById("atkspd_input")
    const inputs = atkspd_div.querySelectorAll('.atkspd_bonus');
    let atkspd_bonus_all = 0;
    inputs.forEach(input => {
        atkspd_bonus_all += Number(input.value);
    })

    const result_div = document.getElementById("Result")
    const atkspd_weapon = Number(document.getElementById("atkspd_weapon").value);
    const atkspd_expected = Number(document.getElementById("atkspd_expected").value);
    const quicken_level = Number(document.getElementById("quicken_level").value);
    const basic_spd_ratio = Number(document.getElementById("hunter_type").value);
    let atkspd_pannel = Math.max(Math.round(atkspd_weapon * (1 - atkspd_bonus_all / 100) / (1 + quicken_level * 0.1) * 100) / 100, 0.25);
    let atkspd_need = Math.max(Math.ceil((1 - atkspd_expected * (basic_spd_ratio + quicken_level * 0.1) / atkspd_weapon) * 100 - atkspd_bonus_all), 0);
    result_div.innerHTML = `<p>ATKSPD: ${atkspd_pannel}</p><p>Need: ${atkspd_need}%</p>`
}
