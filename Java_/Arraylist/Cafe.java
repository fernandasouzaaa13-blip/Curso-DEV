package Arraylist;

import java.util.ArrayList;
import java.util.Scanner;

public class Cafe {

    public static void main(String[] args) {

        ArrayList<String> menu = new ArrayList<>();
        Scanner entrada = new Scanner(System.in);

        int opcao;
        System.out.println("\n===CARDÁPIO DA ROÇA ===");
        // Menu para uma padária
        System.out.println("1- PÃO SOVADO DE MILHO");
        System.out.println("2- ROSCA DE QUEIJO");
        System.out.println("3- BOlO DE CUZCUZ");
        System.out.println("4- PÃO DE QUEIJO");
        System.out.println("5- CROISSANT");
        System.out.println("6- CAFÉ COADO");
        System.out.println("7- RAPADURA");
        System.out.println("0- SAIR");

        do {
            System.out.println(" \n=======================");
            // Menu para uma padária
            System.out.println("1- Adicionar ");
            System.out.println("2- Remover item");
            System.out.println("3- Alterar algo item");
            System.out.println("4- Lista do pedido");
            System.out.println("0- Pagamento ");

            System.out.print("\nEscolha uma opção:");
            opcao = entrada.nextInt();
            entrada.nextLine();

            switch (opcao) {
                case 1:
                    System.out.println("Qual item deseja adiocinar:");
                    String check = entrada.nextLine();
                    System.out.println(" Deseja adionar o item ao carrinho:");
                    String adicionar = entrada.nextLine();
                    // equalIgnoreCase -> não se importa se usam letras maiúsculas ou minúsculas
                    if (adicionar.equalsIgnoreCase("sim") || adicionar.equalsIgnoreCase("s")) {
                        System.out.println("Item adicionado.");
                    } else if (adicionar.equalsIgnoreCase("nao") || adicionar.equalsIgnoreCase("n")
                            || adicionar.equalsIgnoreCase("não")) {
                        System.out.println("Item não adicionado.");
                        menu.add(adicionar);
                    } else {
                        System.out.println("Resposta inválida.");
                    }

                    // IF/ELSE

                    break;
                case 2:
                    System.out.println(" Deseja remover do carrinho:");
                    String remover = entrada.nextLine();
                    int posicao = menu.indexOf(remover);
                    if (remover.equalsIgnoreCase("sim") || remover.equalsIgnoreCase("s")) {
                        System.out.println("Item adicionado.");
                    } else if (remover.equalsIgnoreCase("nao") || remover.equalsIgnoreCase("n")
                            || remover.equalsIgnoreCase("não")) {
                        System.out.println("Item não adicionado.");
                        menu.add(remover);
                    } else {
                        System.out.println("Resposta inválida.");
                    }
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




                default:
                    break;
            }

        } while (opcao != 0);
    }
}
