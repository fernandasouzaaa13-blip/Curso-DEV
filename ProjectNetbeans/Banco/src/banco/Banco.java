/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package banco;      
/**
 *
 * @author 1104695
 */
import java.util.ArrayList;
public class Banco {
//atributos Arraylist com todos Clientes PRIVATE (ENCAPSULADO)

    private ArrayList<Cliente> clientes = new ArrayList<>();
    private ArrayList<Conta> contas = new ArrayList<>();

    public void cadastrarCliente(Cliente cliente) {
        clientes.add(cliente);

    }

    public void cadastrarConta(Conta conta) {
        contas.add(conta);
    }

    public void listarContas() {
        for (Conta conta : contas) {
            System.out.print(conta.numero + " " + conta.cliente.nome);
        }
    }

    public void listarClientes() {
        for (Cliente cliente : clientes) {
            System.out.println(cliente.nome);
        }
    }
}
