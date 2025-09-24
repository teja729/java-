import java.util.Scanner;
public class TriangleArea{
public static void main(String[] args){
Scanner input = new Scanner(System.in);
System.out.println("welcome to area calculator\n");
System.out.print("please enter your base in cms: ");
double base = input.nextDouble();
System.out.print("enter your perpendicular height in cms : ");
double height = input.nextDouble();
 double area = 0.5*base*height;

System.out.println("The area of your triangle is : "+ area + "cms2");
}
}