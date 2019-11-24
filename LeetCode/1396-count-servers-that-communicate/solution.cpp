#include <bits/stdc++.h>
using namespace std;
class Solution {
public:
    int countServers(vector<vector<int>>& grid) {
        int result = 0;
        vector<vector<int>> aux = grid;
        for(int i = 0;i<grid.size();i++){
            for(int j = 0;j<grid[i].size();j++){
                aux[i][j] = 0;
            }
        }
        for(int i =0;i<grid.size();i++){
            for(int j = 0; j<grid[i].size();j++){

                if(grid[i][j]){
                    if(i != grid.size()-1){
                        for(int k = 0; k<grid.size();k++){
                            if(k != i){
                                if(grid[k][j] == 1 && !aux[k][j]){
                                    result++;
                                    aux[k][j] = 1;
                                    if(!aux[i][j]){
                                        result++;
                                        aux[i][j] = 1;
                                    }
                                }
                            }
                            
                        }
                    }
                    if(j != grid[i].size()-1){
                        for(int k = 0;k<grid[i].size();k++){
                            if(k != j){
                                if(grid[i][k] == 1 && !aux[i][k]){
                                    result++;
                                    aux[i][k] = 1;
                                    if(!aux[i][j]){
                                        result++;
                                        aux[i][j] = 1;
                                    }
                                }
                            }

                        }
                    }
                }
            }
        }
    
        return result;
    }
};
