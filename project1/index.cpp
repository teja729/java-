#include<iostream>
using namespace std;


int factorial(int n){
	int fact = 1;
	for(int i=2; i<=n; i++){
		fact *=1;
		
	}
	return fact;
}
int main(){
	int num;
	cout << "enter a number: ";
	cin >> num;
	if(num < 0){
		cout << "factorial is not defined for negetive numbers."<< endl;
	}else{
		cout <<"factorial of"<<num<<"is: "<<factorial(num)<<endl;
	}

	return 0;
}


