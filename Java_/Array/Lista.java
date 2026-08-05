
public class Lista {
    public static void main(String[] args) {
        int[] notas = { 15, 12, 18, 14, 16 };
        int soma = 0;
        double media;
        for (int i = 0; i < notas.length; i++) {
            System.out.println(notas[i]);
            soma += notas[i];
        }
    
        System.out.println("Soma: " + soma);
        media = soma / notas.length;
        System.out.println("Média: " + media);




    }
}
