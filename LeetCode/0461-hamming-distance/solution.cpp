class Solution {
public:
    int hammingDistance(int x, int y) {
        int aux = 0;
        for(int i = 0; i<32;i++){
            if(x%2 != y%2){
                aux++;
            }
            x>>=1;
            y>>=1;
        }
        return aux;
    }
};
