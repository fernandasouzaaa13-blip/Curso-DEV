package logica_Java;

import java.util.Scanner;

public class Numero2 {
    public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.print("Digite um número: ");
     int numero2 = scanner.nextInt();
     double resto = numero2 %2;
     if (resto ==0 ){
         System.out.print("O valor é par. ");
     }else{
        System.out.print("O valor é impar. ");
     }
     scanner.close();
    
}
}

