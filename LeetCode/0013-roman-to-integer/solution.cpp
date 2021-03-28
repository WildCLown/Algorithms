class Solution {
public:
    int romanToInt(string s) {
        map<char,int> trad;
        trad['I'] = 1;
        trad['V'] = 5;
        trad['X'] = 10;
        trad['L'] = 50;
        trad['C'] = 100;
        trad['D'] = 500;
        trad['M'] = 1000;
        int answer = 0;
        for(int i = 0; i<s.size();i++){
            if(i < s.size()-1){
                if(trad[s[i]] < trad[s[i+1]]){
                    answer+= (trad[s[i+1]] - trad[s[i]]);
                    i++;
                }else{
                    answer+=trad[s[i]];
                }
            }else{
                answer+= trad[s[i]];
            }
        }
        return answer;
    }
};
