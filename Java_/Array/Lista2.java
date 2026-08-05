public class Lista2 {
    public static void main(String[] args) {

        System.out.println("\n-------------------------------------------------------\n");

        int[] notas = { 15, 12, 18, 14, 16 };
        int maior = notas[0];
        int menor = notas[0];
        for (int i = 0; i < notas.length; i++) {
            if (notas[i] > maior) {
                maior = notas[i];
            }

            if (notas[i] < menor) {
                menor = notas[i];

            }
        }
        System.out.println(" As maior nota é: " + maior + " e a menor nota é: " + menor);
    }
}
