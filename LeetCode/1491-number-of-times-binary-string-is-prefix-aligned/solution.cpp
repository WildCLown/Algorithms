class Solution {
public:
    int numTimesAllBlue(vector<int>& light) {
        int answer = 0;
        int lastBlue = 0;
        int maxLight = 0;
        set<int>lightUp;
        for(int i = 0; i<light.size();i++){
            maxLight = max(maxLight,light[i]);
            lightUp.insert(light[i]);
            if(light[i] == lastBlue+1){
                for(int i = lastBlue+1; i<= maxLight;i++){
                    if(!lightUp.count(i)){
                        break;   
                    }
                    lastBlue++;
                }
            }
            if(lastBlue == maxLight){
                answer++;
                cout<<"lighted on "<<i<<"\n";
            }
        }
        return answer;
    }
};
