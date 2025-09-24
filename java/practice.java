import java.util.Scanner;

public class practice {

public static void main(String[] args){
Scanner input = new Scanner(System.in);
System.out.println("welcome to find negative or positive");
System.out.println("enter a number: ");
int num = input.nextInt();

if(num > 0){
System.out.println("number is positive");
}else{
System.out.println("number is negative");
}
}
}