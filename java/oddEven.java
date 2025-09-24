import java.util.Scanner;

public class oddEven {

public static void main(String[] args){
Scanner input = new Scanner(System.in);
System.out.println("welcome to find odd and even");
System.out.println("enter a number: ");
int num = input.nextInt();

if(num % 2 == 0){
System.out.println("this is a odd number:");
}else{
System.out.println("this is a even number: ");
}
}
}
