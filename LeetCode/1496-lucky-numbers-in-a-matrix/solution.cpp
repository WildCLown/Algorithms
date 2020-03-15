class Solution {
public:
    vector<int> luckyNumbers (vector<vector<int>>& matrix) {
        vector<int> minimun;
        vector<int> maximum;
        vector<int> answer;
        int aux = 1e9;
        for(int i = 0; i<matrix.size();i++){
            for(int j = 0; j<matrix[0].size();j++){
                aux = min(matrix[i][j], aux);
            }
            //cout<<aux<<"\n";
            maximum.push_back(aux);
            aux = 1e9;
        }
        //cout<<"\n";
        aux = -1;
        for(int i = 0; i<matrix[0].size();i++){
            for(int j = 0; j<matrix.size();j++){
                aux = max(matrix[j][i], aux);
            }
            minimun.push_back(aux);
            //cout<<aux<<"\n";
            aux = -1;
        }
        if(minimun.size() >= maximum.size()){
            for(int i = 0; i<maximum.size();i++){
                for(int j = 0; j<minimun.size();j++){
                    if(maximum[i] == minimun[j]){
                        answer.push_back(maximum[i]);
                        minimun[j] = -1;
                        break;
                    }
                }
            }
        }else{
            for(int i = 0; i<minimun.size();i++){
                for(int j = 0; j<maximum.size();j++){
                    if(minimun[i] == maximum[j]){
                        answer.push_back(minimun[i]);
                        maximum[j] = -1;
                        break;
                    }
                }
            }
        }
        return answer;
    }
};
