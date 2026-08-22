#include <iostream>

using namespace std;
int sum(int a, int b) { return a + b; }
int main() {
    int total = 0;
    for (int i = 1; i <= 5; i++) {
        total += i;
    }
    cout << "sum = " << total << endl;
    cout << "function sum: " << sum(3, 5) << endl;
    return 0;
  }