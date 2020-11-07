class Solution {
public:
    bool isPalindrome(int x) {
        bool answer = true;
        string toCheck = to_string(x);
        int tCSize = toCheck.size();
        if(x<0){
            answer = false;
        }else if(x<10){
            answer = true;
        }else{
            for(int i = 0; i<tCSize/2 && answer;i++){
                if(toCheck[i] != toCheck[(tCSize - 1)- i])answer = false;
            }
        }
        return answer;
    }
};
