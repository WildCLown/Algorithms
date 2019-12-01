#include <bits/stdc++.h>
using namespace std;
class Solution {
public:
    int game[3][3] = {{0,0,0},{0,0,0},{0,0,0}};
    string tictactoe(vector<vector<int>>& moves) {
        bool xo = false;
        int win = 0;
        for(int i =0;i<moves.size();i++){
            if(xo){
                game[moves[i][0]][moves[i][1]] = 2;//2 == O
            }else{
                game[moves[i][0]][moves[i][1]] = 1;//1 == X
            }
            xo = !xo;
        }
        win = checkGame();
        if(moves.size() == 9 && win == 0){
            win = 3;
        }
        for(int i = 0;i<3;i++){
            for(int j = 0; j<3;j++){
                cout<<game[i][j];
            }
            cout<<'\n';
        }
        cout<<'\n';
        if(win == 0){
            return "Pending";
        }else if(win == 1){
            return "A";
        }else if(win == 2){
            return "B";
        }else{
            return "Draw";
        }
            return "batata";
    }
    int checkGame(){
        int win = 0;
        for(int i = 0; i<3;i++){
            if((game[i][0] == game[i][1]) && (game[i][1] == game[i][2])){
                if(game[i][1] != 0){
                    win = game[i][1];
                    cout<<"Line equals "<<game[i][0]<<game[i][1]<<game[i][2]<<'\n';
                    break;
                }
            }
            if((game[0][i] == game[1][i]) && (game[1][i] == game[2][i])){
                if(game[1][i] != 0){
                    win = game[1][i];
                    cout<<"Colum equals "<<game[0][i]<<game[1][i]<<game[2][i]<<'\n';
                    break;
                }
            }
        }
        if(win == 0){
            if((game[0][0] == game[1][1]) && (game[1][1] == game[2][2])){
                win = game[1][1];
                cout<<"Diag equals "<<game[0][0]<<game[1][1]<<game[2][2]<<'\n';
            }else if((game[2][0] == game[1][1]) && (game[1][1] == game[0][2])){
                if(game[1][1] != 0){
                    win = game[1][1];
                    cout<<"Diag-1 equals "<<game[2][0]<<game[1][1]<<game[0][2]<<'\n';
                }
            }
        }
        return win;
    }
};
/*
[[2,2],[0,2],[1,0],[0,1],[2,0],[0,0]]
022
100
001
B
/**/
