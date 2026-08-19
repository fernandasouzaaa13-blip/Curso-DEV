/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package banco;

/**
 *
 * @author 1104695
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        System.out.println("+++++++++++++++++++++++++++++++++++++++++++");
        System.out.println("Bancon Senac Minas - Seu dinheiro Protegido");
        System.out.println("+++++++++++++++++++++++++++++++++++++++++++");
        //Criando um OBJETO TIPO BANCO
        Banco banco = new Banco();
        //Criando um OBJETO TIPO CLIENTE
        Cliente cliente1 = new Cliente("Marcelo", "1234566564");
        //Criando um OBJETO TIPO CONTA
        Conta conta1 = new Conta(1001, cliente1);
        banco.cadastrarConta(conta1);
        banco.listarContas();
        //Usando o método depositar
        conta1.depositar(500);
        //Usando o método cadastrarCliente a passo o objeto cliente1
        banco.cadastrarCliente(cliente1);
        //Usando o método listarCliente
        banco.listarClientes();

    }
}
