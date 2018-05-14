import java.util.Scanner;

public class Tree {

	public static void main(String[] args) {
		Scanner leia = new Scanner(System.in);
		PauBrasil pauBrasil = new PauBrasil();
		int aux = 0;
		while (leia.hasNext()) {
			int preOrder = leia.nextInt();
			pauBrasil.Insert(preOrder);
			aux++;
		}
			pauBrasil.printPosOrder();
	}
}

class PauBrasil {
	// Uma Arvore necessita ter o filho da esquerda e o da direita, logo, podemos
	// inicializar uma arvore da seguinte forma:
	PauBrasil left;
	PauBrasil right;
	int key;
	int balance;
	// Uma booleana de checagem, para saber se o número de fato existe.
	boolean check;

	public PauBrasil() {
		this.left = null;
		this.right = null;
		this.key = 0;
		this.balance = 0;
		this.check = false;
	}

	public void Insert(int key) { // Pelo conceito de árvores, o elemento da esquerda é menor que o elemento do
									// nó, e o da direita é maior.
		if (this.check) {
			if (this.key > key) {
				this.left.Insert(key);
			}else {
					this.right.Insert(key);					
				}
		} else {
			this.key = key;
			this.check = true;
			if (this.left == null) {
				this.left = new PauBrasil();
				this.right = new PauBrasil();
			}
		}
	}

	public void Pop(int key) {
		if (this.check) {
			if (this.left.check == false && this.right.check == false) {
			} else {
				System.out.println("Chave Inexistete.");
			}
		}
	}

	// PRINTS//

	public void printPosOrder() { // A arvore recebe os termos, a forma pósfixa imprime o elemento da esquerda >
									// Direita > Nó
		if (this.left != null && this.left.check) {
			this.left.printPosOrder();
		}
		if (this.right != null && this.right.check) {
			this.right.printPosOrder();
		}
		System.out.println(this.key);

	}
}
