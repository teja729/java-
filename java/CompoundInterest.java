import java.util.Scanner;
public class CompoundInterest{
public static void main(String[] args){

Scanner input = new Scanner(System.in); 
System.out.println("welcome to compound interest calculator\n");
System.out.println("please enter your principle amount Rs");

int principle = input.nextInt();
System.out.print("tell me your rate of interest :");

float rate = input.nextFloat();
System.out.print("now tell me for how many years are you :");

float years = input.nextFloat();
double compInt = principle * Math.pow ((1 + rate/100),years);

System.out.println("your compound interest is Rs"+ compInt);
}
}