class Solution {
    public int hammingDistance(int x, int y) {
        int aux = x^y;
        int answer = 0;
        if(aux<0){
            aux = aux^(-1);
            for(int i = 0; i<32;i++){
                if(aux%2 == 1){
                    answer++;
                }
                aux = aux>>1;
            }
            answer = 32 - answer;
        }else{
            for(int i = 0; i<32;i++){
                if(aux%2 == 1){
                    answer++;
                }
                aux = aux>>1;
            }   
        }
        return answer;
    }
}
