class Solution {
public:
    string generateTheString(int n) {
        string aux = "";
        if(n%2){
            for(int i = 0; i<n;i++){
                aux+='x';
            }
        }else{
            for(int i = 1; i<n;i++){
                aux+='x';
            }
            aux+='y';
        }
        return aux;
    }
};
