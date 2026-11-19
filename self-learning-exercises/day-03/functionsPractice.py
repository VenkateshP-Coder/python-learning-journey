#In Python, function us a group of related statements that perform a specific task
#Function Declaration
def GreetMe():
    print("Greetings")

#Function calling
GreetMe()

#Functions with parameters
def GreetMe(name):
    print("Good Morning " + name)


GreetMe("Venkatesh Pasala")

#Sum of 2 integers
def Sum(num1, num2):
    print("Sum: " + str(num1 + num2))

Sum(3,5)

#Funtion with retunr
def Multiplication(a,b,c):
    return a * b * c

print(Multiplication(3,5,6))