package Arraylist;

import java.util.ArrayList;
import java.util.Scanner;

public class Avaliativa3 {
    public static void main(String[] args) {

        // Lista para armazenar os clientes
        ArrayList<String> clientes = new ArrayList<>();
        Scanner entrada = new Scanner(System.in);
        int opcao;

        // Exibe o menu até o usuário escolher sair
        do {
            System.out.println("\n== BANCO SENAC ==");
            System.out.println("1- Cadastrar cliente");
            System.out.println("2- Listar clientes");
            System.out.println("3- Alterar cliente");
            System.out.println("4- Remover cliente");
            System.out.println("5- Pesquisar cliente");
            System.out.println("6- Quantidade de clientes");
            System.out.println("0- Sair");

            System.out.println("\nEscolha uma opção:");
            opcao = entrada.nextInt();

            // Limpa o Enter deixado pelo nextInt()
            entrada.nextLine();

            // Executa a opção escolhida no menu
            switch (opcao) {

                // Cadastra um novo cliente
                case 1:
                    System.out.println("Digite um nome:");
                    String nome = entrada.nextLine();
                    clientes.add(nome);
                    break;

                // Lista todos os clientes cadastrados
                case 2:
                    System.out.println("Lista de clientes");
                    for (int i = 0; i < clientes.size(); i++) {
                        System.out.println(clientes.get(i));
                    }
                    break;

                // Altera o nome de um cliente
                case 3:
                    System.out.println("Qual cliente você quer alterar:");
                    String alterar = entrada.nextLine();
                    int posicao = clientes.indexOf(alterar);

                    if (posicao != -1) {
                        System.out.println("Digite um novo nome:");
                        alterar = entrada.nextLine();
                        clientes.set(posicao, alterar);
                    } else {
                        System.out.println("Cliente não encontrado.");
                    }
                    break;

                // Remove um cliente da lista
                case 4:
                    System.out.println("Qual cliente deseja remover:");
                    String remover = entrada.nextLine();
                    int posicao2 = clientes.indexOf(remover);

                    if (posicao2 != -1) {
                        clientes.remove(posicao2);
                    } else {
                        System.out.println("Cliente não encontrado");
                    }
                    break;

                // Pesquisa um cliente e mostra sua posição
                case 5:
                    System.out.println("Qual cliente deseja pesquisar:");
                    String pesquisar = entrada.nextLine();
                    int posicao3 = clientes.indexOf(pesquisar);

                    if (posicao3 != -1) {
                        System.out.println("O cliente " + pesquisar + " está na posição " + posicao3);
                    } else {
                        System.out.println("Cliente não encontrado");
                    }
                    break;

                // Exibe a quantidade de clientes cadastrados
                case 6:
                    System.out.println("A quantidade de clientes é: " + clientes.size());
                    break;

                // Caso o usuário digite uma opção inválida
                default:
                    System.out.println("Opção inválida");
                    break;
            }

        } while (opcao != 0);

        // Encerra o programa
        System.out.println("Programa encerrado.");
        entrada.close();
    }
}