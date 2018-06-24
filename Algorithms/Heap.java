import java.util.Arrays;

public class HeapIt {

	public static void main(String[] args) {
		int[] array = { 4, 8, 1, 6, 3, 2, 7, 5, 9, 18 };
		passtoHeap(array);
		System.out.println(Arrays.toString(array));
	}

	private static void passtoHeap(int[] array) { // Ordena um array para que seja atribuído a propriedade de Heap
		for (int i = array.length / 2; i >= 0; i--) {
			siftDown(i, array);
			System.out.println(Arrays.toString(array));
		}
	}

	public static void siftDown(int i, int[] array) { // realoca a raiz, posicionando em seu devido lugar
		if ((i * 2) + 1 > array.length - 1) {

		} else {
			if((i * 2) + 2 > array.length - 1) {
				if (array[i] < array[(i * 2) + 1]) {
					int aux = array[i];
					array[i] = array[(i * 2) + 1];
					array[(i * 2) + 1] = aux;
					siftDown((i * 2) + 1, array);
				}
			}
			else if (array[(i * 2) + 1] > array[(i * 2) + 2]) {
				if (array[i] < array[(i * 2) + 1]) {
					int aux = array[i];
					array[i] = array[(i * 2) + 1];
					array[(i * 2) + 1] = aux;
					siftDown((i * 2) + 1, array);
				}
			} else {
				if (array[i] < array[(i * 2) + 2]) {
					int aux = array[i];
					array[i] = array[(i * 2) + 2];
					array[(i * 2) + 2] = aux;
					siftDown((i * 2) + 2, array);
				}
			}
		}
	}

}
