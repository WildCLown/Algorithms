import java.util.Arrays;
import java.util.Scanner;

public class Heap {

	public static void main(String[] args) {
		Scanner leia = new Scanner(System.in);
		int index = leia.nextInt();
		maxRIP x = new maxRIP(index);
		for (int i = 0; i < index; i++) {
			String command = leia.next();
			if (command.equals("pop")) {
				x.pop();
			} else if (command.equals("push")) {
				int y = leia.nextInt();
				x.push(y);
			} else if (command.equals("check")) {
				x.check(0);
			}
		}
		System.out.print("[");
		for (int i = 0; i < x.getSize(); i++) {
			System.out.print(x.check(i));
			if (i + 1 < x.getSize()) {
				System.out.print(",");
			}
		}
		System.out.println("]");
		x.heapSort();
		System.out.print("[");
		for (int i = 0; i < x.getSize(); i++) {
			System.out.print(x.check(i));
			if (i + 1 < x.getSize()) {
				System.out.print(",");
			}
		}
		System.out.println("]");
	}

}

class maxRIP {
	public int[] heap;
	private int heapSize;
	private int heapMaxSize;

	public maxRIP(int i) {
		this.heap = new int[i];
		this.heapSize = 0;
		this.heapMaxSize = i;
	}

	public void heapSort() {
		int aux = this.heapSize;
		while (this.heapSize-1 > 1) {
			int aux2 = this.heap[this.heapSize - 1];
			this.heap[this.heapSize - 1] = this.heap[0];
			this.heap[0] = aux2;
			this.heapSize--;
			siftDown(0);
		}
		this.heapSize = aux;
	}

	public int getSize() {
		return heapSize;
	}

	public void push(int key) {
		if (this.heapSize < this.heapMaxSize) {
			this.heap[this.heapSize] = key;
			siftUp(this.heapSize);
			this.heapSize++;
		} else {
			System.out.println("Elemento não inserido, Heap cheio");
		}
	}

	public void siftUp(int i) { // realoca a chave de baixo, posicionando em seu devido lugar
		if (i == 0) {
			// fazer nada
		} else if (this.heap[i] > this.heap[(i - 1) / 2]) {
			int aux = this.heap[(i - 1) / 2];
			this.heap[(i - 1) / 2] = this.heap[i];
			this.heap[i] = aux;
			siftUp((i - 1) / 2);
		}
	}

	public void siftDown(int i) { // realoca a raiz, posicionando em seu devido lugar
		if ((i * 2) + 2 > heapSize -1 ) {

		} else if (this.heap[(i * 2) + 1] > this.heap[(i * 2) + 2]) {
			if (this.heap[i] < this.heap[(i * 2) + 1]) {
				int aux = this.heap[i];
				this.heap[i] = this.heap[(i * 2) + 1];
				this.heap[(i * 2) + 1] = aux;
				siftDown((i * 2) + 1);
			}
		} else {
			if (this.heap[i] < this.heap[(i * 2) + 2]) {
				int aux = this.heap[i];
				this.heap[i] = this.heap[(i * 2) + 2];
				this.heap[(i * 2) + 2] = aux;
				siftDown((i * 2) + 2);
			}
		}
	}

	public int check(int index) { // retorna a raiz
		return this.heap[index];
	}

	public void pop() {
		if (this.heapSize > 0) {
			this.heap[0] = this.heap[this.heapSize - 1];
			this.heap[this.heapSize - 1] = 0;
			this.heapSize--;
			siftDown(0);
		} else {
			System.out.println("Não há elementos na Heap");
		}
	}
}