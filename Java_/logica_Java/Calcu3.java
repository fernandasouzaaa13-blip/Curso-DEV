package logica_Java; // Pacote onde a classe está localizada.

import java.util.Scanner; // Importa a classe Scanner para ler dados digitados pelo usuário.

public class Calcu3 { // Declara a classe.

    public static void main(String[] args) { // Método principal, onde o programa começa.

        Scanner scanner = new Scanner(System.in); // Cria um Scanner para receber entradas do teclado.

        // Solicita o primeiro número.
        System.out.print("Digite o primeiro número: ");
        int numero1 = scanner.nextInt(); // Lê um número inteiro.

        // Solicita o segundo número.
        System.out.print("Digite o segundo número: ");
        int numero2 = scanner.nextInt(); // Lê outro número inteiro.

        // Exibe o menu de operações.
        System.out.println();
        System.out.println("1 - Soma");
        System.out.println("2 - Subtração");
        System.out.println("3 - Multiplicação");
        System.out.println("4 - Divisão");
        System.out.println("5 - Resto da Divisão");

        // Pede ao usuário que escolha uma opção.
        System.out.print("Escolha uma opção: ");
        int opcao = scanner.nextInt(); // Armazena a opção escolhida.

        // Verifica qual opção foi escolhida.
        if (opcao == 1) {

            // Soma os dois números.
            System.out.println("Resultado: " + (numero1 + numero2));

        } else if (opcao == 2) {

            // Subtrai o segundo número do primeiro.
            System.out.println("Resultado: " + (numero1 - numero2));

        } else if (opcao == 3) {

            // Multiplica os dois números.
            System.out.println("Resultado: " + (numero1 * numero2));

        } else if (opcao == 4) {

            // Divide o primeiro número pelo segundo.
            System.out.println("Resultado: " + (numero1 / numero2));

        } else if (opcao == 5) {

            // Calcula o resto da divisão.
            System.out.println("Resultado: " + (numero1 % numero2));

        } else {

            // Executa caso a opção digitada seja inválida.
            System.out.println("Opção inválida.");
        }

        // Fecha o Scanner para liberar recursos.
        scanner.close();
    }
}