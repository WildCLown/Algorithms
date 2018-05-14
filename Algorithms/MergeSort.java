import java.util.Scanner;

public class MergeSort {

	public static void main(String[] args) {
		Scanner leia = new Scanner(System.in);
		int index = leia.nextInt();
		int[] arrey = new int[index];
		for (int i = 0; i < index; i++) {
			arrey[i] = leia.nextInt();
		}
		merge(arrey);
		for (int i = 0; i < arrey.length; i++) {
			System.out.println(arrey[i]);
		}
	}

	public static void merge(int[] array) {
		int[] arreyAux = new int[array.length];
		divide(array, arreyAux, 0, array.length - 1);

	}

	public static void divide(int[] array, int[] arrayAux, int beg, int end) {
		if (beg < end) {
			int mid = (beg + end) / 2;
			divide(array, arrayAux, beg, mid);
			// Divide a parte da esquerda, até possua somente 1 elemento
			divide(array, arrayAux, mid + 1, end);
			// Divide a parte da direita, até que possua somente 1 elemento
			conqueror(array, arrayAux, beg, mid, end);
			// Concatena os elementos, organizando, e colocando em sua devida posição
		}
	}

	public static void conqueror(int[] array, int[] arrayAux, int beg, int mid, int end) {
		for (int k = beg; k <= end; k++) // Copia o pedaço de arrey que possui em um arrey auxiliar
			arrayAux[k] = array[k];

		int i = beg;
		int j = mid + 1;
		for (int k = beg; k <= end; k++) {
			if (i > mid)
				array[k] = arrayAux[j++];
			else if ((j > end) || (arrayAux[i] < arrayAux[j]))
				array[k] = arrayAux[i++];
			else if (arrayAux[i] < arrayAux[j])
				array[k] = arrayAux[i++];
			else
				array[k] = arrayAux[j++];

		}
	}
}