class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        int minSize = INT_MAX;
        string minStr = "";
        for(int i = 0; i<strs.size();i++){
            if(strs[i].size() < minSize){
                minSize = strs[i].size();
                minStr = strs[i];
            }
        }
        for(int i = 0; i<strs.size();i++){
            for(int j = 0; j<minStr.size();j++){
                if(minStr[j] != strs[i][j]){
                    if(j == 0){
                        minStr = "";
                    }else{
                        minStr = minStr.substr(0,j);    
                    }
                    break;
                }
            }
        }
        return minStr;
    }
};
