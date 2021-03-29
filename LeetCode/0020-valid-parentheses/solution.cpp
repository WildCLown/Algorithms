class Solution {
public:
    bool isValid(string s) {
        stack<char>verify;
        bool control = true;
        for(int i = 0; i<s.size() && control ;i++){
            switch(s[i]){
                case ')':
                    if(verify.empty()){
                        control = false;   
                    }else if(verify.top() == '('){
                        verify.pop();
                    }else{
                        control = false;
                    }
                    break;
                case ']':
                    if(verify.empty()){
                        control = false;   
                    }else if(verify.top() == '['){
                        verify.pop();
                    }else{
                        control = false;
                    }
                    break;
                case '}':
                    if(verify.empty()){
                        control = false;   
                    }else if(verify.top() == '{'){
                        verify.pop();
                    }else{
                        control = false;
                    }
                    break;
                default:
                    verify.push(s[i]);
                    break;
            }
        }
        if(!verify.empty()){
            control = false;
        }
        return control;
    }
};
