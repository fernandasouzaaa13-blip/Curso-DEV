public class Lista4 {
    public static void main(String[] args) {

        double[] notas = { 8.5, 10.0, 7.0, 9.5, 10.5, 6.0, 12.0 };
        int aprovados =0;
        int reprovados =0;

        for (int i = 0; i < notas.length; i++) {
            if (notas[i] >= 10) {
                aprovados++;
            }else{
                reprovados++;
            }
        }
            System.out.println("Aprovados " + aprovados );
            System.out.println("-----------------------");
            System.out.println("Reprovados " +  reprovados);

    }
}
