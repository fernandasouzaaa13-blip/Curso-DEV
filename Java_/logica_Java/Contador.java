package logica_Java;

public class Contador {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
           System.out.println("\u001B[34mi\u001B[0m");

        }
        int contador = 1;
        while (contador<=5) {
         System.out.println("\u001B[34m contador \u001B[0m");
        contador++;
        }
        int numero = 1;
        do{
            System.out.println("\u001B[34m numero \u001B[0m");
            numero++;
        }while(numero<=5);
    }
}
