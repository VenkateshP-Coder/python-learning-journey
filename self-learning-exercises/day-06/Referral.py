class Referral:
    def __init__(self, patient_name):
        self.patient_name = patient_name

    def display(self):
        print(self.patient_name)

referral1 = Referral("Ravi")
referral1.display()

def greet(name):
    print("Hello", name)

greet("Ravi")
greet("Bob")


class Calculator:
    def add(self, a, b):
        print(a + b)

    def subtract(self, a, b):
        print(a - b)

    def multiply(self, a, b):
        print(a * b)

calc = Calculator()
calc.add(1, 2)
calc.subtract(3, 4)
calc.multiply(5, 6)
