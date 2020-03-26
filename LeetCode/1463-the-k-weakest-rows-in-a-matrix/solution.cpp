class Solution {
public:
    vector<int> kWeakestRows(vector<vector<int>>& mat, int k) {
        int m = mat.size();
        int n = mat[0].size();
        priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>>> pq;
        vector<int>order (m);
        vector<int>answer;
        pair<int,int>p;
        for(int i = 0; i<m;i++){
            for(int j = 0; j<n;j++){
                if(mat[i][j] == 1)order[i]++;
            }
            p = {order[i],i};
            pq.push(p);
        }
        for(int i = 0; i<k;i++){
            p=pq.top();
            answer.push_back(p.second);
            pq.pop();
        }
        return answer;
    }
};
