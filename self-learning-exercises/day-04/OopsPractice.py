#classes are user defined blueprint or prototype
#class will have methods, variables, instance variables and constructor etc
#Constructor is another method, if there is not method created, at run time that is created
#Class variables and instance variables, class
class Calculator:
    num = 100
    num1 = 10
    #default constructor
#    def __init__(self, c, d):
 #       self.firstNumber = c
 #       self.secondNumber = d
 #       print("I am called automatically when object is created")

#def Summation(self):
 #       return self.firstNumber + self.secondNumber
 #s       print("I am now executing as method in class")

#    def multiply(self,a,b):
    def getData(self):
        print("This is good")



Calculator().getData()
print(Calculator().num)

obj = Calculator()
obj.getData()
print(obj.num1)

#methods perform actions; __int__ sets up objects initial state.

class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance

account1 = BankAccount("John", 100)
account2 = BankAccount("Bob", 200)

#class defines the data and behaviour a type of object can have
#An object is a specific instance of a class
#self keyword is mandatory for calling variable names into method
#instance and class variables have whole different purposes
#constructor name should be __int__
#new keyword is not required when you create object
