package logica_Java.exercicios;

import java.util.Scanner;

public class Fix4 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite um número: ");
        int numero1 = scanner.nextInt();

        int numero = 7;
        for (int i = 1; i <= 10; i++) {
            System.out.println(numero + " x " + i + " = " + (numero1 * i));
        }

    }
}
