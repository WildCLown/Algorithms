class Solution {
public:
    int numOfMinutes(int n, int headID, vector<int>& manager, vector<int>& informTime) {
        if(n == 1)return 0;
        
        vector<int> calculated (n,-1);
        calculated[headID] = 0;
        int answer = 0;
        for(int i = 0; i<n;i++){
            doCalculate(i, manager, informTime, calculated);   
        }
        for(int i = 0; i<n;i++){
            answer = max( answer, calculated[i]);
        }
        return answer;
    }
    int doCalculate(int atual, vector<int>& manager, vector<int>& informTime, vector<int>& calculate){
            if(calculate[atual] == -1){
                    if(calculate[manager[atual]] != -1){
                        calculate[atual] = (calculate[manager[atual]] + informTime[manager[atual]]);
                    }else{
                        calculate[atual] = doCalculate(manager[atual], manager, informTime, calculate) + informTime[manager[atual]];
                    }
            }
            return calculate[atual];
        
    }
};
/*
[-1,-1,0,-1,-1,-1]

/**/
