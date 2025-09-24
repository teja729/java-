import java.util.Scanner;
public class SimpleInterest {
public static void main(String[] args){
Scanner input = new Scanner(System.in);
System.out.println("welcome to simple interest calculator\n");
System.out.print("please enter your principle amount Rs");
int principle = input.nextInt();
System.out.print("tell me your rate of interest: ");
float rate = input.nextFloat();
System.out.print("tell me for how many year are you borrow :");
float years = input.nextFloat();

float interest = (principle * rate * years)/100;
System.out.println("\n\n your simple interest is rs :" + interest);
}
}