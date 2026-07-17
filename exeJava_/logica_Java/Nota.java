package logica_Java;

public class Nota {
   public static void main (String[]args){
    int nota = 8;

    if ( nota>=9){
        System.out.println("Excelente");

    }else if (nota >= 7){

        System.out.println("Aprovado");

    }else if (nota >= 5){

        System.out.println("Recuperação");

    }else{

        System.out.println("Reprovado");
    }
   } 
}
