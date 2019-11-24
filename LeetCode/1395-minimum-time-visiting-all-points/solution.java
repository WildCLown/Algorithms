class Solution {
    public int minTimeToVisitAllPoints(int[][] points) {
        int result = 0;
        int aux[] = new int[2];
        for(int i = 0; i<points.length-1;i++){
            aux[0] = max(points[i][0],points[i+1][0]) - min(points[i+1][0],points[i][0]);
            aux[1] = max(points[i][1],points[i+1][1]) - min(points[i+1][1],points[i][1]);
            result+= max(aux[0],aux[1]);
        }
        return result;
    }
    public static int max(int i, int j){
        if(i>=j){
            return i;
        }else{
            return j;
        }
    }
    public static int min(int i, int j){
        if(i>=j){
            return j;
        }else{
            return i;
        }
    }
}
