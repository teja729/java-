import java.util.Scanner;
public class PerimeterOfRectangle{
public static void main(String[] args){
Scanner input = new Scanner(System.in);
System.out.println("welcome to addition perimeter of rectagle");
System.out.print("enter all 4 sides of cms :");
double a = input.nextDouble();
double b = input.nextDouble();
double c = input.nextDouble();
double d = input.nextDouble();

double perimeter  = a + b + c + d;
System.out.print("perimeter of your rectangal is : " + perimeter +" cm");
}
}