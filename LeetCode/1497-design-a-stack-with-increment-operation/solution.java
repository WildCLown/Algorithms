class CustomStack {
    int maxSize = 0;
    int actualSize = 0;
    int arranjo[] = null;
    public CustomStack(int maxSize) {
        this.maxSize = maxSize;
        this.actualSize = 0;
        this.arranjo = new int[maxSize];
    }
    
    public void push(int x) {
        if(this.actualSize < this.maxSize){
            this.arranjo[actualSize] = x;
            this.actualSize++;
        }
    }
    
    public int pop() {
        if(this.actualSize == 0){
            return -1;
        }else{
            int aux = this.arranjo[actualSize-1];
            actualSize--;
            return aux;
        }
    }
    
    public void increment(int k, int val) {
        for(int i = 0; i<k && i<this.actualSize; i++){
            this.arranjo[i]+=val;
        }
    }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * CustomStack obj = new CustomStack(maxSize);
 * obj.push(x);
 * int param_2 = obj.pop();
 * obj.increment(k,val);
 */
