public class Lista3 {
    public static void main(String[] args) {
        // Criar um Array 5 nomes com nomes e imprime-os todos separados por ","
        String[] nomes = { "Maria", "Fernanda", "Laura", "Ana", "Lucas" };
        for (int i = 0; i < nomes.length; i++) {
            System.out.println(nomes[i]);
            if (i < nomes.length - 1) {
                System.out.println(",");
            }
        }
    }
}
