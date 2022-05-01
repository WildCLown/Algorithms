/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let a = procecedString(s);
    let b = procecedString(t);
    return compareArray(a,b)
};

function procecedString(fon){
    let a = [];
    for(let i = 0; i<fon.length;i++){
        if(fon[i] == '#'){
            a.pop();
        }else{
            a.push(fon[i]);
        }
    }
    return a;
}
function compareArray(a,b){
    let answer = true;
    if(a.length != b.length){
        answer = false;
    }else{
        for(let i = 0; i<a.length;i++){
            if(a[i] != b[i]){
                answer = false;
                break;
            }
        }
    }
    return answer;
}
