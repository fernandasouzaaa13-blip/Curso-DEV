/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package farmacia;

/**
 *
 * @author 1104695
 */
public class Venda {
    Cliente cliente;
    Medicamento medicamento;

    public Venda(Cliente cliente, Medicamento medicamento) {
        this.cliente = cliente;
        this.medicamento = medicamento;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public Medicamento getMedicamento() {
        return medicamento;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public void setMedicamento(Medicamento medicamento) {
        this.medicamento = medicamento;
    }

}
