// Usa o for para descobrir qual foi o dia mais quente e o mais frio da semana
public class Lista5 {
    public static void main(String[] args) {
        double[] temperaturas = { 28.5, 30.2, 27.8, 31.5, 29.0, 33.1, 32.4 };

        String[] dias = { "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta", "Sábado", "Domingo" };

        double menorTemperatura = temperaturas[0];
        double maiorTemperatura = temperaturas[0];
        String quente = dias[0];
        String frio= dias[0];
        for (int i = 0; i < temperaturas.length; i++) {

            if (temperaturas[i] > maiorTemperatura) {

                maiorTemperatura = temperaturas[i];

                quente = dias[i];
            }
            if (temperaturas[i]<menorTemperatura){
                menorTemperatura = temperaturas[i];
                frio = dias[i];
            
            }
        }

        // Resultado final
        System.out.println("O dia mais quente foi: " + quente+" e a temperatura foi: " + maiorTemperatura + " graus.");
        System.out.println("O dia mais frio foi: " + frio + " e a temperatura foi: "+ menorTemperatura + " graus");
    
    }
}