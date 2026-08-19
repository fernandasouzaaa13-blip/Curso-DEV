package farmacianew;

import java.util.ArrayList;

public class Farmacia {

    ArrayList<Cliente> clientes = new ArrayList<>();
    ArrayList<Medicamento> medicamentos = new ArrayList<>();
    ArrayList<Venda> vendas = new ArrayList<>();
    double totalArrecadado = 0.0;

    public void cadastrarCliente(Cliente cliente) {
        //
        clientes.add(cliente);
    }

    public void cadastrarMedicamento(Medicamento medicamento) {
        //
        medicamentos.add(medicamento);
    }

    public void venderMedicamento(Cliente cliente, Medicamento medicamento) {
        if (medicamento.quantidadeEstoque > 0) {
            // Se entrar no if -> posso fazer a venda:
            // Criando o objeto venda para adicioná-lo ao Arraylist de vendas
            Venda venda = new Venda(cliente, medicamento);
            vendas.add(venda);

            //Descontando 1 unidade do medicamento vendido do estoque da farmacia
            medicamento.quantidadeEstoque = medicamento.quantidadeEstoque - 1;

            //Adicionando o valor do medicamento vendido ao total arrecadado da farmacia
            totalArrecadado = totalArrecadado + medicamento.preco;

            System.out.println("Venda realizada com sucesso");
            System.out.println("Total Arrecadado: " + totalArrecadado);
        } else {
            System.out.println("Medicamento fora de estoque");
        }
    }

    public void listarMedicamentos() {
        System.out.println("Lista de medicamentos cadastrados na farmacia:");
        for (Medicamento medicamento : medicamentos) {
            System.out.println("nome: " + medicamento.nome + " preço: " + medicamento.preco + " estoque: "
                    + medicamento.quantidadeEstoque);
        }
    }

    public void listarClientes() {
        System.out.println("Lista de clientes cadastrados na farmácia: ");
        for (Cliente cliente : clientes) {
            System.out.println("Nome: " + cliente.nome + " Cpf:" + cliente.cpf + " Telefone:" + cliente.telefone);
        }
    }

    public void listarVendas() {
        System.out.println("Lista de itens vendidos na farmácia: ");
        for (Venda venda : vendas) {
            System.out.println("Cliente: " + venda.cliente.nome + " Medicamento: " + venda.medicamento.nome + " Preço: "+ venda.medicamento.preco);
        }

    }

}
