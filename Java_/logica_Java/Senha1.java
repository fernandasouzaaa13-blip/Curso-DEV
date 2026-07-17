package logica_Java;

import java.util.Scanner;

public class Senha1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite a senha: ");
        int senha = scanner.nextInt();
        if (senha == 1234){
            System.out.println("Acesso permitido!");
        }else{
               System.out.println("Senha incorreta!");
        }
       scanner.close();
    }
}