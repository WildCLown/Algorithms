import java.util.Arrays;

public class QuickSort {

	public static void main(String[] args) {
		int[] array = {10, 2, 10, 4, 10, 3, 6, 3, 1 , 10};
		quicksort(array);
		System.out.println(Arrays.toString(array));

	}

	public static void quicksort(int[] array) {
		sort(array, 0, array.length - 1);
	}

	public static void sort(int[] array, int beg, int end) {
		if (beg < end) {
			int j = separar(array, beg, end);
			sort(array, beg, j - 1);
			sort(array, j + 1, end);
		}
	}

	private static int separar(int[] array, int beg, int end) {
		int i = beg, j = end;
		while (i < j) {
			while (i < end && array[i] <= array[beg])
				i++;
			while (j > beg && array[j] >= array[beg])
				j--;
			if (i < j) {
				trocar(array, i, j);
				i++;
				j--;
			}
		}
		trocar(array, beg, j);
		return j;
	}

	private static void trocar(int[] array, int i, int j) {
		int aux = array[i];
		array[i] = array[j];
		array[j] = aux;

	}
}
