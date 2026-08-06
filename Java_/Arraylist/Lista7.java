package Arraylist;

import java.util.ArrayList;

public class Lista7 {
    public static void main(String[] args) {
        ArrayList<String> produtos = new ArrayList<>();
        // Imprir a lista -> imprima todos os protudos utilizando forEach
        produtos.add("Mouse");
        produtos.add("Teclado");
        produtos.add("Monitor");
        produtos.add("Notbook");
        produtos.add("Headset");

        produtos.forEach(System.out::println);

        System.out.println("===================================");
        // Remover um produto -> Remova o produto "Monitor" e imprima lista novamente
        produtos.remove(2);
        produtos.forEach(System.out::println);
        System.out.println("===================================");
        // Contar produtos -> Ultilize size() para mostrar quantos produtos existem na
        // lista
        produtos.forEach(System.out::println);
        {
            System.out.println("Total de produtos: " + produtos.size());

            System.out.println("===================================");

            // Verificar se existe -> Verifique se o produto "Mouse" está na lista
            // utilizando contains().
            // Obs: Deve ser tratado com IF se foi ou não encontrado

            boolean resp = produtos.contains("Mouse");
            if (resp == true) {
                System.out.println("O Mouse está dentro da lista");
            } else {
                System.out.println("O Mouse não está na lista");
            }
            produtos.forEach(System.out::println);

            System.out.println("===================================");
            // Alterar um produto -> Troque "Headset" por " Caixa de Som" utilizando set().
            // Depois imprima a lista

            produtos.set(3, "Caixa de Som");
            produtos.forEach(System.out::println);

            // Mostrar um produto específico -> Utilize get()para mostrar o terceiro produto
            // da lista. Saída esperada: Terceiro produto: Monitor

        }
    }
}
