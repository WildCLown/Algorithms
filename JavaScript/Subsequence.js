function main(){
    var a = "acbcf";
    var b = "abcdaf";
    var matrix = Array(a.length).fill(Array(b.length));
    for(let i = 0; i<a.length;i++){
        for(let j = 0; j<b.length;j++){
            var trigg = 0;
            if(a[i] == b[j]){
                trigg = 1;
            }
            if(i == 0 && j == 0){
                matrix[i][j] = trigg;
            }else if(i == 0){
                matrix[i][j] = matrix[i][j-1] + trigg;
            }else if(j == 0){
                matrix[i][j] = Math.max(matrix[i-1][j], trigg);   
            }else{
                matrix[i][j] = Math.max(matrix[i-1][j],matrix[i][j-1] + trigg);
            }
        }
    }
    console.log(matrix[a.length-1][b.length-1]);
}
if (require.main === module) {
    main();
  }