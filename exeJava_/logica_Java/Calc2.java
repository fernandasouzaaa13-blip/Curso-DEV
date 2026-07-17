package logica_Java;

import java.util.Scanner;

public class Calc2 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite o primeiro número: ");
        int numero1 = scanner.nextInt();
        System.out.print("Digite o segundo número: ");
        int numero2 = scanner.nextInt();

        System.out.println("\n====MNEU====");
        System.out.println("1- SOMAR ");
        System.out.println("2- SUBTRAIR ");
        System.out.print("Escolha uma opção ");
        int opcao = scanner.nextInt();

        switch (opcao) {
            case 1:
                System.out.print("Resultado " + (numero1 + numero2));
                break;

            case 2:
                System.out.print("Resultado " + (numero1 + numero2));
                break;

            default:

         System.out.println("Opção inválida");
        }
    }
}
