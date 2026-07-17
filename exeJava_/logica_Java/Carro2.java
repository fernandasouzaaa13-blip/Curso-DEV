package logica_Java;

import java.util.Scanner;

public class Carro2 {

    public static void main(String[] args) {
        // Cria o objeto responsável por ler na tela
        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite o marca do carro: ");
        // ler e guardar dentro da variável
        String marca = scanner.nextLine();
        System.out.println("Digite o modelo do carro: ");
        String modelo = scanner.nextLine();
        System.out.println("Digite o ano carro: ");
        String ano = scanner.nextLine();
        System.out.println("A marca do carro é " + marca + "o modelo é " +  modelo + "," + " e o Ano de lançamento " + ano );
        
           scanner.close();
    }
}