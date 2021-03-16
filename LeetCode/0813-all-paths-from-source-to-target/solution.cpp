class Solution {
public:
    vector<vector<int>> allPathsSourceTarget(vector<vector<int>>& graph) {
        vector<vector<int>> answer;
        queue<pair<int,vector<int>>>bfs;
        pair<int,vector<int>> state;
        pair<int,vector<int>> toinsert;
        vector<int>formation;
        formation.push_back(0);
        state.first = 0;
        state.second = formation;
        bfs.push(state);
        int aux = 0;
        while(!bfs.empty()){
            state = bfs.front();
            aux = state.first;
            bfs.pop();
            if(aux != graph.size()-1){
                for(int j = 0; j<graph[aux].size();j++){
                    toinsert.first = graph[aux][j];
                    toinsert.second = state.second;
                    toinsert.second.push_back(graph[aux][j]);
                    bfs.push(toinsert);
                }
            }else{
                answer.push_back(state.second);
            }
        }
        return answer;
    }
};
