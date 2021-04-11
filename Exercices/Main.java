import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner leia = new Scanner(System.in);
		int cases = leia.nextInt();
		for (int i = 1; i <= cases; i++) {
			int edges = leia.nextInt(), arestas = leia.nextInt(), from = leia.nextInt(), to = leia.nextInt();
			graph graph = new graph(edges);
			for (int j = 0; j < arestas; j++) {
				int edge = leia.nextInt(), conected = leia.nextInt(), height = leia.nextInt();
				graph.insert(edge, conected, height);
			}
			int distance = graph.dijkstra(from, to);
			System.out.println("Case #" + i + ": " + distance);
		}
	}
}

class LinkedHeavy {
	LinkedHeavy list;
	boolean check;
	int key;
	int height;

	public LinkedHeavy() {
		this.list = null;
		this.key = 0;
		this.height = 0;
		this.check = false;
	}

	public void insert(int key, int height) {
		if (this.list == null) {
			this.key = key;
			this.height = height;
			this.check = true;
			this.list = new LinkedHeavy();
		} else {
			this.list.insert(key, height);
		}
	}

	public void pop(int key) {
		if (this.key == key) {
			if (this.check) {
				this.key = this.list.key;
				this.height = this.list.height;
				this.check = this.list.check;
				this.list = this.list.list;
			}
		} else {
			if (!this.check) {
				System.out.println("Elemento não existente.");
			} else {
				this.list.pop(key);
			}
		}
	}
}

class queue {
	queue fila;
	int key;
	boolean isNumber;

	public queue() {
		this.key = 0;
		this.fila = null;
		this.isNumber = false;
	}

	public void insert(int key) {
		if (this.isNumber) {
			this.fila.insert(key);
		} else {
			this.isNumber = true;
			this.key = key;
			this.fila = new queue();
		}
	}

	public void deQueue() {
		if (this.isNumber) {
			this.key = this.fila.key;
			this.isNumber = this.fila.isNumber;
			this.fila = this.fila.fila;
		} else {
			System.out.println("Não há elemento na fila.");
		}
	}

	public int check() {
		return this.key;
	}
}

class graph {
	LinkedHeavy[] grafo;

	public graph(int index) {
		this.grafo = new LinkedHeavy[index];
		for (int i = 0; i < index; i++) {
			this.grafo[i] = new LinkedHeavy();
		}
	}

	public int dijkstra(int from, int to) {
		int i = this.grafo.length;
		int[] distanceMap = new int[i];
		minRIP mapHeap = new minRIP(i);
		return 0;
	}

	public void insert(int index, int location, int height) {
		this.grafo[index].insert(location, height);
		this.grafo[location].insert(index, height);
	}

	public void pop(int index, int location) {
		this.grafo[index].pop(location);
		this.grafo[location].pop(index);
	}
}

class minRIP {
	boolean[] heapcheck;
	public int[] heap;
	private int heapSize;
	private int heapMaxSize;

	public minRIP(int i) {
		this.heap = new int[i];
		this.heapSize = 0;
		this.heapMaxSize = i;
	}

	public void heapSort() {
		int aux = this.heapSize;
		while (this.heapSize - 1 > 0) {
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
		} else if (this.heap[i] <= this.heap[(i - 1) / 2]) {
			int aux = this.heap[(i - 1) / 2];
			this.heap[(i - 1) / 2] = this.heap[i];
			this.heap[i] = aux;
			siftUp((i - 1) / 2);
		}
	}

	public void siftDown(int i) { // realoca a raiz, posicionando em seu devido lugar
		if ((i * 2) + 2 > heapSize - 1) {

		} else if (this.heap[(i * 2) + 1] < this.heap[(i * 2) + 2]) {
			if (this.heap[i] > this.heap[(i * 2) + 1]) {
				int aux = this.heap[i];
				this.heap[i] = this.heap[(i * 2) + 1];
				this.heap[(i * 2) + 1] = aux;
				siftDown((i * 2) + 1);
			}
		} else {
			if (this.heap[i] > this.heap[(i * 2) + 2]) {
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
