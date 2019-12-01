class Solution {
public:
    vector<int> numOfBurgers(int tomatoSlices, int cheeseSlices) {
        int smallB = 0;
        int bigB = 0;
        vector<int> answer;
        if(cheeseSlices >ceil(tomatoSlices/2) || tomatoSlices > cheeseSlices*4 || tomatoSlices%2){
            return answer;
        }else{
            tomatoSlices -= cheeseSlices*2;
            smallB = cheeseSlices;
            if(tomatoSlices<0){
                return answer;
            }else if(tomatoSlices == 0){
                answer.push_back(bigB);
                answer.push_back(smallB);
                return answer;
            }else{
                bigB = tomatoSlices/2;
                smallB -=bigB;
                answer.push_back(bigB);
                answer.push_back(smallB);
                return answer;
            }
        }
    }
};
