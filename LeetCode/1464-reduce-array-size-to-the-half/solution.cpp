class Solution {
public:
    int minSetSize(vector<int>& arr) {
        map<int,int>dale;
        priority_queue<int>dalepq;
        vector<int>fon;
        for(int i = 0; i<arr.size();i++){
            dale[arr[i]]++;
        }
        for(auto p : dale){
            dalepq.push(p.second);
        }
        int answer = 0;;
        int control = 0;
        while(control<arr.size()/2){
            control+=dalepq.top();
            dalepq.pop();
            answer++;
        }
        return answer;
    }
};
