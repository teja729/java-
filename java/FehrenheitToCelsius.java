import java.util.Scanner;
public class FehrenheitToCelsius{
public static void main(String[] args){

Scanner input = new Scanner(System.in);
System.out.println("welcome to temperature converter");
System.out.print("enter your temp in f:");
float fah = input.nextFloat();
float cel = (fah-32)*5/9;
System.out.println("your temperature is :"+cel +"c");
}
}