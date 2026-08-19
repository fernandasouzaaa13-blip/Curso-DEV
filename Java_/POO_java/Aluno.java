package POO_java;

public class Aluno{
    //Atributos(características do objeto)


    private String nome;
    private int idade;
    private double media;

    //Construtor(Como o objeto "nasce")
    public Aluno(String nome,int idade){
        this.nome = nome;
        this.idade = idade;
        this.media = 0.0;

    }
    //Métodos (Comportamentos do objeto)
    public void estudar(){
        System.out.println(nome + "está estudando......");
    }
    public String getNome(){
        return nome;
    }

    
}
