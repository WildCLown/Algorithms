class Solution {
public:
    string longestPalindrome(string s) {
        string answer = "";
        string ret1 = "";
        string ret2 = "";
        if(s.size() == 0){
            answer = "";
        }else{
            for(int i = 0; i<s.size();i++){
                ret1 = expandCenter(s,i,i);
                ret2 = expandCenter(s,i,i+1);
                if(ret1.size() > ret2.size()){
                    if(ret1.size() > answer.size()){
                        answer = ret1;
                    }
                }else{
                    if(ret2.size() > answer.size()){
                        answer = ret2;
                    }
                }
            }
        }
        return answer;
    }
    string expandCenter(string s, int a, int b){
        bool isPal = true;
        int auxi = a;
        int auxj = b;
        string answer = "";
        while((auxi >=0 && auxj < s.size()) && isPal){
            if(s[auxi] == s[auxj]){
                answer = s.substr(auxi,(auxj-auxi)+1);
                //cout<<"Palindromo "<<answer<<" in "<<auxi<<" and "<<auxj<<" Com "<<s[auxi]<<" e "<<s[auxj]<<" "<<auxi<<" "<<auxj<<"\n";
                auxi--;
                auxj++;
            }else{
                isPal = false;
            }
        }
        return answer;
    }
};
