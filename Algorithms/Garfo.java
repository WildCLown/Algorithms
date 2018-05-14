
public class Garfo {
	public static void main(String[] args) {
		graph batata = new graph(11);
		batata.insert(5, 4);
		batata.insert(4, 3);
		batata.insert(3, 2);
		batata.insert(2, 8);
		batata.insert(8, 9);
		batata.insert(8, 10);
		batata.insert(5, 6);
		batata.insert(6, 7);
		batata.insert(7, 2);
		batata.topoSort();
	}
}

class Linked {
	Linked list;
	boolean check;
	int key;

	public Linked() {
		this.list = null;
		this.key = 0;
		this.check = false;
	}

	public void insert(int key) {
		if (this.list == null) {
			this.key = key;
			this.check = true;
			this.list = new Linked();
		} else {
			this.list.insert(key);
		}
	}

	public void pop(int key) {
		if (this.key == key) {
			if (this.check) {
				this.key = this.list.key;
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
	Linked[] grafo;

	public graph(int index) {
		this.grafo = new Linked[index];
		for (int i = 0; i < index; i++) {
			this.grafo[i] = new Linked();
		}
	}

	public void insert(int index, int location) {
		this.grafo[index].insert(location);
	}

	public void pop(int index, int location) {
		this.grafo[index].pop(location);
		this.grafo[location].pop(index);
	}

	public void topoSort() {
		pilha toposort = new pilha();
		boolean[] graphcheck = new boolean[this.grafo.length];
		boolean[] batata = topoSortAux(0, graphcheck, toposort);
		for (int i = 0; i < batata.length; i++) {
			if (batata[i] == false) {
				batata = topoSortAux(i, batata, toposort);
			}
		}
		while (toposort.elementos > 0) {
			if(toposort.elementos == 1) {
				System.out.print(toposort.check());
				toposort.pop();
			}else {
				System.out.print(toposort.check()+" ");
				toposort.pop();				
			}
		}
	}

	public boolean[] topoSortAux(int x, boolean[] checklist, pilha pilha) {
		pilha Poha = new pilha();
		checklist[x] = true;
		Linked temp = this.grafo[x];
		while (temp.check != false) {
			Poha.insert(temp.key);
			temp = temp.list;
		}
		while (Poha.elementos > 0) {
			if (checklist[Poha.topo.key] == false) {
				topoSortAux(Poha.topo.key, checklist, pilha);
			}
			Poha.pop();
		}
		pilha.insert(x);
		return checklist;
	}

	public void dfs(int x) {
		boolean[] graphcheck = new boolean[this.grafo.length];
		pilha Poha = new pilha();
		Poha.insert(x);
		graphcheck[x] = true;
		while (Poha.elementos > 0) {
			int aux = Poha.check();
			Poha.pop();
			System.out.println(aux);
			Linked temp = this.grafo[aux];
			while (temp.check != false) {
				if (graphcheck[temp.key] != true) {
					graphcheck[temp.key] = true;
					Poha.insert(temp.key);
				}
				temp = temp.list;
			}
		}
	}

	public void bfs(int x) {
		boolean[] graphcheck = new boolean[this.grafo.length];
		queue Poha = new queue();
		Poha.insert(x);
		graphcheck[x] = true;
		while (Poha.isNumber) {
			int aux = Poha.check();
			Poha.deQueue();
			System.out.println(aux);
			Linked temp = this.grafo[aux];
			while (temp.check != false) {
				if (graphcheck[temp.key] != true) {
					graphcheck[temp.key] = true;
					Poha.insert(temp.key);
				}
				temp = temp.list;
			}

		}
	}

}