
public class Exemplos {

    public static void main(String[] args) {
        int[] numeros = { 10, 20, 30, 40, 50 };
        System.out.println("Exemplo 1 - Exibindo os valores de um vetor: ");
        for (int i = 0; i < numeros.length; i++) {
            System.out.println("Posição " + i + ": " + numeros[i]);
        }
        System.out.println("\n-----------------------------------\n");
        int[] idades = new int[3];
        idades[0] = 18;
        idades[1] = 25;
        idades[2] = 30;
        System.out.println("Exemplo 2 = Preenchendo vetor manualmente: ");
        for (int i = 0; i < idades.length; i++) {
            System.out.println("Idade " + (i + 1) + ": " + idades[i]);
        }
        System.out.println("\n-----------------------------------\n");
        int[] valores = { 5, 10, 15, 20 };
        int soma = 0;
        for (int i = 0; i < valores.length; i++) {
            soma += valores[i];
        }
        System.out.println("Exemolo 3- Soma dos valores do vetor " + soma);
        System.out.println("\n-----------------------------------\n");
        int[] dados = { 22, 17, 35, 9, 41 };
        int maior = dados[0];
        for (int i = 1; i < dados.length; i++) {
            if (dados[i] > maior) {
                maior = dados[i];
            }
        }
        System.out.println("Exemplo 4 - Maior número no vetor: " + maior);
        System.out.println("\n-----------------------------------\n");
        int[] numeros2 = { 3, 12, 7, 18, 2, 25 };
        int contador = 0;
        for (int i = 0; i < numeros2.length; i++) {
            if (numeros2[i] > 10) {
                contador++;
            }
        }
        System.out.println("Exemplo 5- Quantos números são maiores que 10: " + contador);
    }

}
