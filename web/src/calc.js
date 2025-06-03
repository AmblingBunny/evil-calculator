function evil_calc(){
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
    let atkspd_pannel = Math.max(Math.round(atkspd_weapon*(1-atkspd_bonus_all/100)/(1 + quicken_level * 0.1)*100)/100, 0.25);
    let atkspd_need = Math.max(Math.ceil((1 - atkspd_expected * (basic_spd_ratio + quicken_level * 0.1) / atkspd_weapon)*100 - atkspd_bonus_all), 0);
    result_div.innerHTML = `<p>ATKSPD: ${atkspd_pannel}</p><p>Need: ${atkspd_need}%</p>`
}
