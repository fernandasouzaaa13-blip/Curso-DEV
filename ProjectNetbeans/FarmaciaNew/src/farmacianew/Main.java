package farmacianew;

public class Main {

    public static void main(String[] args) {

        System.out.println("==============FARMÁCIA======================");
        System.out.println("=============================================");
        //Criando objeto farmacia
        Farmacia farmacia = new Farmacia();

        //Criando objeto cliente
        Cliente cliente1 = new Cliente("Maria Fernanda", "111111111-11", "(35)99999-9999");
        Cliente cliente2 = new Cliente("Lucas", "141111211-11", "(35)98888-9999");
        Cliente cliente3 = new Cliente("Matheus", "223111211-11", "(35)98888-5555");

        //Adicionado objeto cliente na lista de clientes da farmacia
        farmacia.cadastrarCliente(cliente1);
        farmacia.cadastrarCliente(cliente2);
        farmacia.cadastrarCliente(cliente3);

        //Criando objetos medicamento
        Medicamento medicamento1 = new Medicamento("Paracetamol", 10.00, 3);
        Medicamento medicamento2 = new Medicamento("Amoxicilina", 35.00, 9);
        Medicamento medicamento3 = new Medicamento("Dipirona", 45.00, 15);

        //Adicionado objetos medicamento na lista de medicamentos da farmacia    
        farmacia.cadastrarMedicamento(medicamento1);
        farmacia.cadastrarMedicamento(medicamento2);
        farmacia.cadastrarMedicamento(medicamento3);

        //Listar medicamentos cadastrados na farmacia
        farmacia.listarMedicamentos();

        System.out.println("----------------------------");
        System.out.println("----------------------------");

        //Vender medicamentos para o cliente
        farmacia.venderMedicamento(cliente1, medicamento1);
        System.out.println("----------------------------");
        farmacia.venderMedicamento(cliente1, medicamento2);
        System.out.println("----------------------------");
        farmacia.venderMedicamento(cliente2, medicamento2);
        System.out.println("----------------------------");
        farmacia.venderMedicamento(cliente2, medicamento3);
        farmacia.venderMedicamento(cliente3, medicamento3);
        System.out.println("----------------------------"); 
        System.out.println("-------------------");

        System.out.println("---------------------------------------------");
        System.out.println("---------------------------------------------");
        //Listar medicamentos cadastrados na farmacia após a venda
        farmacia.listarMedicamentos();
        System.out.println("------------------------------------------------------------");
        farmacia.listarClientes();
        System.out.println("------------------------------------------------------------");
        farmacia.listarVendas();

    }
}
