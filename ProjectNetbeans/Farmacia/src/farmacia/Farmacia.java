/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package farmacia;

import java.util.ArrayList;
/**
         *
         * @author 1104695
         */
public class Farmacia {
    ArrayList<Medicamento> medicamentos = new ArrayList<Medicamento>();
    ArrayList<Cliente> clientes = new ArrayList<Cliente>();
    ArrayList<Venda> vendas = new ArrayList<Venda>();

    public void cadastrarCliente(Cliente cliente) {
        clientes.add(cliente);
    }

    public void cadastrarMedicamento(Medicamento medicamento) {
        medicamentos.add(medicamento);
    }

    public void venderMedicamento(Cliente cliente, Medicamento medicamento) {
        if (medicamento.getQuantidadeEstoque() > 0) {
            Venda venda = new Venda(cliente, medicamento);
            vendas.add(venda);
            medicamento.setQuantidadeEstoque(medicamento.getQuantidadeEstoque() - 1);
        } else {
            System.out.println("Medicamento fora de estoque.");
        }
    }

    public void listarMedicamentos() {
        System.out.println("Lista de Medicamentos:");
        for (Medicamento medicamento : medicamentos) {
            System.out.println("Nome: " + medicamento.getNome() + ", Preço: " + medicamento.getPreco() + ", Quantidade em Estoque: " + medicamento.getQuantidadeEstoque());
        }
    }


}