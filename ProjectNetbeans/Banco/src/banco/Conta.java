/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package banco;

/**
 *
 * @author 1104695
 */
public class Conta {

    //1. Atributos
    int numero;
    double saldo;
    Cliente cliente;

    //2.Construtor
    //recebe o número eo cliente dono da conta completo
    public Conta(int numero, Cliente cliente) {
        this.numero = numero;
        this.cliente = cliente;
        this.saldo = 0;
    }
    
    //3. Métodos
    public void depositar(double valor) {
        saldo = saldo + valor;
    }

    public void sacar(double valor) {
        saldo = saldo - valor;
    }

    public void consultarSaldo() {
        System.out.println("Saldo: R$" + saldo);
    }

}
