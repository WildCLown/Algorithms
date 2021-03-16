class Solution {
public:
    int findCenter(vector<vector<int>>& edges) {
        stack<int>dfs;
        vector<int>countEdge;
        pair<int,int> maxW;
        for(int i = 0; i<=edges.size()+1;i++){
            countEdge.push_back(0);
        }
        for(int i = 0; i<edges.size();i++){
            countEdge[edges[i][0]]++;
            countEdge[edges[i][1]]++;
            if(countEdge[edges[i][0]] > maxW.first){
                maxW.first = countEdge[edges[i][0]];
                maxW.second = edges[i][0];
            }
            if(countEdge[edges[i][1]] > maxW.first){
                maxW.first = countEdge[edges[i][1]];
                maxW.second = edges[i][1];
            }
        }
        return maxW.second;
    }
};
