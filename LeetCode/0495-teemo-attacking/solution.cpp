class Solution {
public:
    int findPoisonedDuration(vector<int>& timeSeries, int duration) {
        int answ = 0;
        if(timeSeries.size() > 0){
            answ = duration;
        }
        for(int i = 1; i<timeSeries.size();i++){
            answ+= min(duration,timeSeries[i]-timeSeries[i-1]);
        }
        cout<<answ<<'\n';
        return answ;
    }
};
