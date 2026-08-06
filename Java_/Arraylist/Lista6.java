package Arraylist;

import java.util.ArrayList;

public class Lista6 {
    public static void main(String[] args) {
        ArrayList<String> tarefas = new ArrayList<>();
        System.out.println("=========Lista de Tarefas=========");

        tarefas.add("Estudar java");
        tarefas.add("Fazer a lição do Cosme");
        tarefas.add("ler Dom Casmurro - Machado de Assis");
        tarefas.add("Comer um Frango Salada");
        tarefas.add("Sair do Curso e ir para casa");
        tarefas.forEach(tarefa -> {
            System.out.println(tarefa);
        });
        System.out.println("===================================");
        tarefas.remove(3);
        tarefas.forEach(tarefa -> {
            System.out.println(tarefa);

        });
        System.out.println("===================================");
       tarefas.forEach (System.out:: println); {
        System.out.println("Total de tarefas: " + tarefas.size());
        
       }
       
        }

    }


