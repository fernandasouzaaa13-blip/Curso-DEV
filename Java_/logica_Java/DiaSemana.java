package logica_Java;

import java.util.Scanner;

public class DiaSemana {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
       
        System.out.println();
        System.out.println("1 - Domingo");
        System.out.println("2 - Segunda-feira");
        System.out.println("3 - Terça-feira");
        System.out.println("4 - Quarta-feira");
        System.out.println("5 - Quinta-feira");
        System.out.println("6 - Sexta-feira");
        System.out.println("6 - Sábado");

        System.out.print("Digite o dia da semana desejado: ");
        int opcao = scanner.nextInt();

        switch (opcao) {

            case 1:
                System.out.println("Resultado: " + (numero == opcao));
                break;
            case 2:
                System.out.println("Resultado: " + (numero == opcao));
                break;
            case 3:
                System.out.println("Resultado: " + (numero == opcao));
                break;
            case 4:
                System.out.println("Resultado: " + (numero == opcao));
                break;
        }
    }
}
