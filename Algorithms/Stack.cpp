#include<bits/stdc++.h>
using namespace std;

    struct node{
        int info;
        node* next;
    };
    struct Stack{
      node* top;  
    };
    Stack *insert(Stack *topper, int key){
        node *newEl = new node();
        newEl->info = key;
        newEl->next = NULL;

        if(topper->top==NULL){
            topper->top = newEl;
        }else{
            newEl->next = topper->top;
            topper->top = newEl; 
        }

        return topper;
    }
    Stack *remove(Stack *topper){
        if(topper->top==NULL){
            cout<<"Stack is already empty\n";
        }else{
            topper->top = topper->top->next;
        }
            return topper;
    }
    Stack *check(Stack *topper){
        if(topper->top==NULL){
            cout<<"Stack is empty\n";
        }else{
            cout<<topper->top->info<<endl;
        }
            return topper;
    }
    void printS(Stack *s){
        node *aux = s->top;
        cout<<"top<---\n";
        while(aux!=NULL){
            cout<<aux->info<<" ";
            aux = aux->next;
        }
        cout<<endl;
    }
    

int main(){
    Stack *s = new Stack();
    s = remove(s);
    s=insert(s,1);
    s=insert(s,2);
    s=insert(s,4);
    s=insert(s,5);
    s=check(s);
    s=remove(s);
    s=check(s);

    printS(s);
    return 0;
}