class Solution {
public:
    vector<vector<int>> flipAndInvertImage(vector<vector<int>>& A) {
        vector<vector<int>> answer;
        vector<int> aux;
        for(int i = 0; i< A.size(); i++){
            for(int j = A[i].size()-1; j>= 0; j--){
                if(A[i][j]){
                    aux.push_back(0);
                }else{
                    aux.push_back(1);
                }
            }
            answer.push_back(aux);
            aux.clear();
        }
        return answer;
    }
};
