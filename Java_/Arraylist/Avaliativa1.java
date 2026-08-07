package Arraylist;

import java.util.ArrayList;

public class Avaliativa1 {
    public static void main(String[] args) {
        ArrayList<String> estoque = new ArrayList<>();
        System.out.println("===== ESTOQUE DE PRODUTOS =====\n");

        estoque.add("Smartphone-Iphone16");
        estoque.add("Notbook Accer");
        estoque.add("Televisão Samsung");
        estoque.add("Progetor");
        estoque.add("PlayStation5");
        estoque.add("PC Gamer");

        // Uso do get para pegar o primeiro elemento do Arraylist
        estoque.get(0);

        // Mostrar o ultimo da lista
        estoque.get(estoque.size() - 1);
        // Alteração de estoque para "Controle PS5"
        estoque.set(3, "Controle PS5");
        // Remoção do estoque
        estoque.remove(1);
        // Adição no estoque
        estoque.add("Headset");
        // Print
        estoque.forEach(System.out::println);
        // Quantidade de produtos no estoque
        System.out.println("Total de produtos: " + estoque.size());
    }
}
/* 
estoque.forEach(estoque->{
    System.out.println(estoque)
});
*/

