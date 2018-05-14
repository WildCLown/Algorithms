import java.util.Scanner;

public class PilhaArrey {

	public static void main(String[] args) {
		Scanner leia = new Scanner(System.in);
		System.out.print("Insira o tamanho da pilha : ");
		int x = leia.nextInt();
		leia.nextLine();
		String stack[] = new String[x];
		int controlSize = 0;
		System.out.println("Insira um dos seguintes comandos : ");
		System.out.println("1 - Inserir");
		System.out.println("2 - Deletar");
		System.out.println("3 - Imprimir");
		System.out.println("4 - Informações");
		System.out.println("5 - Checagem");
		boolean stopTime = false;
		while (leia.hasNext() && !stopTime) {
			String command = leia.nextLine();
			if (command.equals("Inserir") || command.equals("1") || command.equals("1 - Inserir")) {
				//Comando "Push", ensinado em sala
				if (stack[x - 1] != null) {
					System.out.println("Pilha cheia, é necessário remover um elemento");
					System.out.println("Comando não realizado.");
				} else {
					stack[controlSize] = leia.nextLine();
					controlSize++;
					System.out.println("Comando efetuado com sucesso.");
				}
			}
			else if (command.equals("Deletar") || command.equals("2") || command.equals("2 - Deletar")) {
				//Comando "POP", ensinado em sala
				if (controlSize == 0) {
					System.out.println("Não há elementos na pilha, insira um elemento antes.");
					System.out.println("Comando não realizado.");
				} else {
					controlSize--;
					stack[controlSize] = null;
					System.out.println("Comando efetuado com sucesso.");
				}
			} else if (command.equals("Imprimir") || command.equals("3") || command.equals("3 - Imprimir")) {
				stopTime = true;
			} else if (command.equals("Informações") || command.equals("4") || command.equals("4 - Informações")) {
				System.out.println("Inserir: Dê uma frase para ser inserida na pilha.");
				System.out.println("Deletar: Retira o ultimo elemento inserido na pilha.");
				System.out.println("Imprimir: Para o programa, e informa cada alocação da pilha.");
				System.out.println("Informações: Fornece informações para o usuário.");
				System.out.println("Checagem: Informa o ultimo termo da pilha para o usuário");
			} else if (command.equals("Checagem") || command.equals("5") || command.equals("5 - Checagem")) {
				if (controlSize > 0) {
					System.out.println(stack[controlSize - 1]);
				}else {
					System.out.println("Não há elementos na pilha, insira um elemento antes.");
				}
			}

			else {
				System.out.println("Comando Inexistente");
			}
			if (!stopTime) {
				System.out.println();
				System.out.println("Insira um dos seguintes comandos : ");
				System.out.println("1 - Inserir");
				System.out.println("2 - Deletar");
				System.out.println("3 - Imprimir");
				System.out.println("4 - Informações");
				System.out.println("5 - Checagem");
				System.out.println();
			}
		}
		for (int aux = 0; aux < x; aux++) {
			System.out.println(stack[aux]);
		}
	}
}