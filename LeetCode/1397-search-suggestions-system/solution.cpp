#include <bits/stdc++.h>
using namespace std;
class Solution {
public:
    vector<vector<string>> suggestedProducts(vector<string>& products, string searchWord) {
        bool showSearch[products.size()];
        vector<vector<string> > answer;
        vector<string> aux;
        for(int i = 0; i<products.size();i++){
            showSearch[i] = true;
        }
        sort(products.begin() , products.end());
        for(int i = 0; i< searchWord.length();i++){
            for(int j = 0; j<products.size();j++){
                if(i<products[j].length()){
                    if(searchWord[i] == products[j][i] && showSearch[j]){
                        if(aux.size() < 3)aux.push_back(products[j]);
                    }else{
                        showSearch[j] = false;
                    }
                }else{
                    showSearch[j] = false;
                }
            }
            answer.push_back(aux);
            aux.clear();
        }
        return answer;
    }
};
