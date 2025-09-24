import java.util.Scanner;
public class multiplicationTable{
public static void main(String[] args){
Scanner scanner = new Scanner(System.in);
System.out.println("good morning");
System.out.print("enter your number: ");
int num = scanner.nextInt();
printmultiplicationTable(num);

}
public static void printmultiplicationTable(int num){
   int i =1;
   while(i <= 10){
  System.out.println(num + "X" + i + "=" + (num * i));
  i++;
  }
  } 
}
