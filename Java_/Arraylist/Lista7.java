package Arraylist;

import java.util.ArrayList;

public class Lista7 {
    public static void main(String[] args) {
        ArrayList<String> produtos = new ArrayList<>();
        System.out.println("========= PRODUTOS ==========");
        // Exercício 01 -Imprir a lista -> imprima todos os protudos utilizando forEach
        produtos.add("Mouse");
        produtos.add("Teclado");
        produtos.add("Monitor");
        produtos.add("Notbook");
        produtos.add("Headset");

        produtos.forEach(System.out::println);

        System.out.println("=============================");
        // Exercício 02- Remover um produto -> Remova o produto "Monitor" e imprima
        // lista novamente
        produtos.remove(2);
        produtos.forEach(System.out::println);
          System.out.println("=============================");
        // Exercício 03- Contar produtos -> Ultilize size() para mostrar quantos
        // produtos existem na
        // lista
        produtos.forEach(System.out::println);
        {
            System.out.println("Total de produtos: " + produtos.size());

            System.out.println("=============================");

            // Exercício 04-Verificar se existe -> Verifique se o produto "Mouse" está na
            // lista
            // utilizando contains().
            // Obs: Deve ser tratado com IF se foi ou não encontrado
            produtos.forEach(System.out::println);
            boolean resp = produtos.contains("Mouse");
            if (resp) {
                System.out.println("O Mouse está dentro da lista");
            } else {
                System.out.println("O Mouse não está na lista");
            }
        }
        /*
         * ou if (produtos.contains("Mouse")) {
         * System.out.println("O Mouse está dentro da lista");
         * } else {
         * System.out.println("O Mouse não está na lista");
         */

            System.out.println("=============================");
        // Exercício 05- Alterar um produto -> Troque "Headset" por "Caixa de Som"
        // utilizando set().
        // Depois imprima a lista
        // Altera o produto que está na posição 3 da lista para "Caixa de Som"
        produtos.set(3, "Caixa de Som");
        // Percorre a lista e imprime todos os produtos atualizados
        produtos.forEach(System.out::println);
           System.out.println("=============================");

        // Exercício 06- Mostrar um produto específico -> Utilize get()para mostrar o
        // terceiro produto
        // da lista. Saída esperada: Terceiro produto: Monitor

        // Exibe o produto que está na posição 2 da lista (terceiro produto, pois a
        // contagem começa em 0)
        System.out.println("Terceiro produto: " + produtos.get(3));

    }
}
