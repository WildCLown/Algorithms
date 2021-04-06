class Solution {
public:
    int minOperations(int n) {
        vector<int> a;
        int answer = 0;
        for(int i = 0; i<n/2;i++){
            answer += (n - ((i*2) +1));
        }
        return answer;
    }
};
