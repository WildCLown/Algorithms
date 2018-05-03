import java.util.Scanner;

public class Fila {

	public static void main(String[] args) {
		Scanner leia = new Scanner(System.in);
		FilaY x = new FilaY();
		int aux = leia.nextInt();
		while (aux > 0) {
			String command = leia.next();
			if (command.equals("pop")) {
				x.pop();
			} else if (command.equals("push")) {
				int y = leia.nextInt();
				x.push(y);
			} else if (command.equals("check")) {
				x.check();
			}
			aux--;
		}
	}

}

class FilaY {
	private int head;
	private FilaY lista;
	private boolean check;

	public FilaY() {
		this.head = 0;
		this.check = false;
		this.lista = null;
	}

	public void push(int nani) { // insere um elemento
		if (this.check == false) {
			this.head = nani;
			this.check = true;
			this.lista = new FilaY();
		} else {
			this.lista.push(nani);
		}
	}

	public void pop() { /* retira o primeiro elemento da fila */
		if (this.lista != null) {
			this.head = this.lista.head;
			this.lista = this.lista.lista;
			if (this.lista == null) {
				this.check = false;
			}
		} else {
			this.head = 0;
			this.check = false;
		}
	}

	public void check() {
		if (this.check == false) {
			System.out.println("Não há elementos na fila.");
		} else {
			System.out.println(this.head);

		}
	}
}