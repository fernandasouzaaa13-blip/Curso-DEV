// Usa o for para descobrir qual foi o dia mais quente da semana
public class Lista5 {
    public static void main(String[] args) {

        // Vetor que guarda as temperaturas de cada dia da semana
        double[] temperaturas = { 28.5, 30.2, 27.8, 31.5, 29.0, 33.1, 32.4 };

        // Vetor que guarda o nome dos dias da semana
        String[] dias = { "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo" };

        // Assume que a primeira temperatura é a maior, por enquanto
        double maiorTemperatura = temperaturas[0];

        // Assume que o primeiro dia é o dia mais quente, por enquanto
        String diaSemana = dias[0];

        // Percorre todas as posições do vetor de temperaturas
        for (int i = 0; i < temperaturas.length; i++) {

            // Verifica se a temperatura atual é maior que a maior encontrada até agora
            if (temperaturas[i] > maiorTemperatura) {

                // Atualiza a maior temperatura
                maiorTemperatura = temperaturas[i];

                // Guarda o dia correspondente à nova maior temperatura
                diaSemana = dias[i];
            }
        }

        // Exibe o resultado final
        System.out.println("O dia mais quente foi: " + diaSemana +
                " e a temperatura foi: " + maiorTemperatura + " graus.");
    }
}