class Solution {
public:
    int minSteps(string s, string t) {
        vector<int>alphabet (26);
        vector<int>alphabet2 (26);
        int answer = 0;
        for(int i = 0; i<s.size();i++){
            alphabet[s[i]-'a']++;
            alphabet2[t[i]-'a']++;
        }
        for(int i = 0; i<26;i++){
            if(alphabet[i]<alphabet2[i]){
                answer+=alphabet2[i]-alphabet[i];
            }
        }
        return answer;
    }
};
