package logica_Java.exercicios;

import java.util.Scanner;

public class Fix5 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int numero = 5;
        do {
            System.out.print("Digite um número: ");
            numero = scanner.nextInt();
            System.out.println("\u001B[34m" + numero + "\u001B[0m");

        } while (numero != 0);
    }
}