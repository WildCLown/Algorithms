class Solution {
public:
    int countCharacters(vector<string>& words, string chars) {
        int charCount [26] = { };
        int charAuxCount [26] = { };
        int answer = 0;
        bool doinsert = true;
        for(int i = 0; i<chars.size();i++){
            charCount[chars[i] - 'a']++;
        }
        for(int i = 0; i< words.size();i++){
            if(words[i] == "") continue;
            if( i != 0){
                for(int j = 0; j<26;j++){
                    charAuxCount[j] = 0;
                }
            }
            doinsert = true;
            for(int j = 0; j<words[i].size();j++){
                charAuxCount[words[i][j] - 'a']++;
            }
            for(int j = 0; j<26 && doinsert;j++){
                if(charAuxCount[j] > charCount[j]){
                    doinsert = false;
                }
            }
            if(doinsert){
                answer+=words[i].size();
            }
        }
        return answer;
    }
};
