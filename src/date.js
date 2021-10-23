startFunctionForDate();

function startFunctionForDate() {

    /* --------- Variaveis --------- */

    const _date_ = new Date();
    
    const _Date_ = _date_.getHours();
    
    const HelloDate = document.getElementById('jpta-xl');
    

    /* --------- Condicionais --------- */
    
    if(_Date_ >= 0 && _Date_ < 6) {
        HelloDate.innerHTML = "Boa Madrugada!"
    }
    if(_Date_ >= 6 && _Date_ <= 12) {
        HelloDate.innerHTML = "Bom Dia!";
    }
    if(_Date_ > 12 && _Date_ <= 18) {
        HelloDate.innerHTML = "Boa Tarde!"
    }
    if(_Date_ > 18 && _Date_ <= 23) {
        HelloDate.innerHTML = "Boa Noite!"
    }

    return 0
}