import java.util.Scanner;
public class FloatMultiplication {
public static void main(String[] args){
Scanner input = new Scanner(System.in);
System.out.println("enter the first number :");
double first = input.nextDouble();
System.out.print("enter the second number :");
double second = input.nextDouble();

double mul = first * second;

System.out.print("\n Result is : " + mul);
}
} 