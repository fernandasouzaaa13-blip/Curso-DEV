package POO_DRI_;

// Criando a class produto com seus métodos e atributos...
public class Produto {
    // Atributos
    private String nome;
    private double preco;
    private int quantidade;

    // Métodos ->
    // Construtor...
    public Produto(String nome, double preco, int quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    public double calcularTotal() {
        return preco * quantidade;
    }

    // Getter -> Ele é método que devolve o valor de um atributo..
    public String getNome() {
        return nome;
    }

    public double getPreco() {
        return preco;
    }

    public int getQuantidade() {
        return quantidade;
    }

    // Setter -> Ele altera o valor atributo e normalmente ele tem uma validação.
    public void setNome(String nome) {
        if (nome != null && !nome.isBlank()) {
            this.nome = nome;
        }
    }

    public void setPreco(double preco) {
        if (preco > 0) {
            this.preco = preco;
        }
    }

    public void setQuantidade(int quantidade) {
        if (quantidade >= 0) {
            this.quantidade = quantidade;
        }
    }
}
