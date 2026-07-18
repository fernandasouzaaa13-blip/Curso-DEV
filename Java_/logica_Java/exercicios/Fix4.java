package logica_Java.exercicios;

import java.util.Scanner;

public class Fix4 {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        // Pede ao usuário um número para calcular a tabuada.
        System.out.print("Digite um número: ");
        int numero = scanner.nextInt();

        // Repete 10 vezes para montar a tabuada.
        for (int i = 1; i <= 10; i++) {

            // Mostra a multiplicação e o resultado.
            System.out.println(numero + " x " + i + " = " + (numero * i));
        }

        // Fecha o Scanner.
        scanner.close();
    }
}