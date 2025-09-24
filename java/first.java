import java.util.Scanner;
public class first{
public static void main(String[] args){
Scanner input = new Scanner(System.in);
System.out.println("welcome");
System.out.println("enter your ring");
int first = input.nextInt();
System.out.println("please enter first number: ");
int second = input.nextInt();
System.out.println("please enter second number: ");
int add = first + second;
System.out.println("Addition is: " +add);
}
}