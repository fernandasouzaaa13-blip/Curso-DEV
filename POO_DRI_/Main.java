package POO_DRI_;

public class Main {
    public static void main(String[] args) {
        Produto produto1 = new Produto("Arroz", 23.5, 6);
        Produto produto2 = new Produto("Feijão", 13.8, 9);
        System.out.println(produto1.calcularTotal());
        System.out.println(produto2.calcularTotal());

        System.out.println("========================");
        System.out.println(produto1.getNome());
        System.out.println(produto1.getPreco());
        System.out.println(produto1.getQuantidade());
        System.out.println("========================");
        
        produto1.setPreco(45.00);
        produto1.setQuantidade(1);
        System.out.println("Novo preço: " + produto1.getPreco());
        System.out.println("Nova quantidade: " + produto1.getQuantidade());
        System.out.println(produto1.calcularTotal());
        System.out.println("========================");

    }
}
