package logic;

import java.util.Scanner;

public class Backpack {
	public static void main(String args[]) {
		Scanner leia = new Scanner(System.in);
		int bagSize = leia.nextInt();
		int[] bag = new int[bagSize+1];
		int[] aux = new int[bagSize+1];
		int index = leia.nextInt();
		for(int i = 0; i<index; i++) {
			int value = leia.nextInt() , weight = leia.nextInt();
			for(int j = weight; j< bagSize+1; j++) {
				if(bag[j] < value + aux[j-weight]) {
					bag[j] = value + aux[j-weight];
				}
			}
			for(int j = 1; j< aux.length; j++) {
				aux[j] = bag[j];
			}
		}
		System.out.println(bag[bagSize]);
	}
}
