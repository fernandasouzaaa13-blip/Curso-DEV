package logica_Java;

import java.util.Scanner;

public class Idade {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite o ano que você nasceu: ");
        int anoNascimento = scanner.nextInt();
        int idade = 2026 - anoNascimento;
        System.out.println("Você tem " + idade + " anos.");
        scanner.close();

    }
}
