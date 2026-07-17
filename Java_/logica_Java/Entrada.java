package logica_Java;

import java.util.Scanner;

public class Entrada {

    public static void main(String[] args) {

        // Cria o objeto responsável por ler na tela
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite seu nome: ");
        // Cria a variável que vai armazenar a informação digitada
        String nome = scanner.nextLine();
        System.out.println("Olá! Meu nome é " + nome + ".");
        scanner.close();

    }
}
