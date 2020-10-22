class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> answer;
        bool found = false;
        for(int i = 0; i<nums.size() && !found;i++){
            for(int j = i+1; j<nums.size() && !found;j++){
                if(nums[i]+nums[j] == target){
                    answer.push_back(i);
                    answer.push_back(j);
                    found = true;
                }
            }
        }
        return answer;
    }
};
