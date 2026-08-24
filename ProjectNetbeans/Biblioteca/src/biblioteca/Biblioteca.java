/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package biblioteca;

/**
 *
 * @author User
 */
import java.util.ArrayList;

public class Biblioteca {

    private ArrayList<Aluno> alunos = new ArrayList<>();
    private ArrayList<Livro> livros = new ArrayList<>();
    private ArrayList<Emprestimo> emprestimos = new ArrayList<>();

    public void cadastrarAluno(Aluno aluno) {
        alunos.add(aluno);
        System.out.println("Aluno Cadastrado");
    }

    public void cadastrarLivro(Livro livro) {
        livros.add(livro);
        System.out.println("Livro Cadastrado");

    }

    public void emprestarLivro(Aluno aluno, Livro livro) {
        Emprestimo emprestimo1 = new Emprestimo(aluno, livro);

        emprestimos.add(emprestimo1);
        livro.disponivel = false;
        System.out.print("Emprestimo realizado");
    }

    public void listarLivros() {
        for (Livro livro : livros) {

            System.out.println("Titulo:" + livro.titulo + "Autor:" + livro.autor + "Disponível:" + livro.disponivel);
        }

    }

}
