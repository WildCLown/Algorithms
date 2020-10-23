class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int answer = 0;
        set<char> checkString;
        int i = 0;
        int j = 0;
        if(s == ""){
            answer = 0;
        }else{
            while(i < s.size() && j < s.size()){
                if(!checkString.count(s[j])){
                    checkString.insert(s[j]);
                    answer = max(answer,(j-i)+1);
                    j++;
                }else{
                    checkString.erase(s[i]);
                    i++;
                }
            }
        }
        return answer;
    }
};
