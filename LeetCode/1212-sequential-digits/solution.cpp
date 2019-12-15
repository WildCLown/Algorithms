class Solution {
public:
    vector<int> sequentialDigits(int low, int high) {
        vector<int> answer;
        int auxl = to_string(low).size();
        int auxh = to_string(high).size();
        int auxGambiarra = auxl;
        int socorr = 0;
        string auxM = "123456789";
        for(int j = auxGambiarra; j<=auxh;j++){
            for(int i = 0; i+j<= 9; i++){
                socorr = stoi(auxM.substr(i,j));
                cout<<socorr<<" ";
                if(low <= socorr && high >= socorr){
                    answer.push_back(socorr);
                }
            }
        }
        return answer;
    }
};
