/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
    let smap = {};
    let tmap = {};
    let answer = Infinity;
    for(let i = 0; i< s.length; i++){
        if(smap[s[i]]){
            smap[s[i]]++;
        }else{
            smap[s[i]] = 1;
        }
    }
    for(let i = 0; i< target.length; i++){
        if(tmap[target[i]]){
            tmap[target[i]]++;
        }else{
            tmap[target[i]] = 1;
        }
    }
    let aux = Object.keys(tmap);
    for(let i = 0; i < aux.length; i++){
        if(smap[aux[i]]){
            answer = Math.min(answer,Math.floor(smap[aux[i]] /tmap[aux[i]]));
        }else{
            answer = 0;
            break;
        }
    }
    return answer;
};
