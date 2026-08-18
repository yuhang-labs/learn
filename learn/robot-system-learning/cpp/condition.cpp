 #include <iostream>
  using namespace std;
  int main() {
      int score;
      cout << "input score: ";
      cin >> score;
      if (score >= 60) cout << "pass" << endl;
      else cout << "fail" << endl;
      return 0;
    }