const countEl = document.querySelector('.count')
const frontEl = document. querySelector('.loading-bar-front')



let load = 0;

lodingFun();

function lodingFun(){
    countEl.textContent = load + '%';
    frontEl.style.width = load + '%';
    load++;
    if(load < 101){
        setTimeout(lodingFun, 20)
    };
}