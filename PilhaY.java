import java.util.Scanner;

public class PilhaY {
	public static void main(String[] args) {
		Scanner leia = new Scanner(System.in);
		pilha x = new pilha();
		int aux = leia.nextInt();
		while (aux > 0) {
			String command = leia.next();
			if (command.equals("pop")) {
				x.pop();
			} else if (command.equals("push")) {
				int y = leia.nextInt();
				x.insert(y);
			} else if (command.equals("check")) {
				x.check();
			}
			aux--;
		}
	}
}

class PilhaAux {
	PilhaAux next;
	int key;

	public PilhaAux(int k) {
		this.key = k;
		this.next = null;
	}
}

class pilha {
	PilhaAux topo;
	int elementos;

	public void insert(int chave) {
		PilhaAux p = new PilhaAux(chave);
		p.next = topo;
		this.topo = p;
		this.elementos++;
	}

	public void pop() {
		if (this.elementos > 0) {
			this.topo = this.topo.next;
			elementos--;
		} else {
			System.out.println("Não há elementos na pilha.");
		}
	}

	public int check() {
		return this.topo.key;
	}
}
