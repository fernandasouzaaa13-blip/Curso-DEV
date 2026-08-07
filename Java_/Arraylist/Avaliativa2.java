package Arraylist;

import java.util.ArrayList;

public class Avaliativa2 {
    public static void main(String[] args) {
        ArrayList<String> compras = new ArrayList<>();

        compras.add("Arroz");
        compras.add("Feijão");
        compras.add("Leite");
        compras.add("Café");
        compras.add("Açúcar");
        // Uso do get para pegar o primeiro elemento do Arraylist
        compras.get(0);
        // Mostrar o ultimo da lista
        compras.get(compras.size() - 1);
        // Alteração de estoque para "Controle PS5"
        compras.set(2, "Suco");
        // Remoção da lista de compras
        compras.remove(1);
        // Adição de Macarrão a lista de compra
        compras.add("Macarrão");
        for (int i = 0; i < compras.size(); i++) {
            System.out.println(compras.get(i));
        }
        System.out.println("Total de produtos no carrinho de compras: " + compras.size());
       
    }
}