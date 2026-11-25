class Patient:
    def display(self, name, age):
        print("Patient:", name)
        print("Age:", age)

patient1 = Patient()
patient2 = Patient()
patient1.display("Patient 1", 1)
patient2.display("Patient 2", 2)

class Patient2:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def display1(self):
        print("Patient:", self.name)
        print("Age:", self.age)

patient1 = Patient2("Patient 1", 1)
patient2 = Patient2("Patient 2", 2)

patient1.display1()
patient2.display1()


class Patient3:

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def display2(self):
        print("Patient:", self.name)
        print("Age:", self.age)

    def is_adult(self):
        return self.age >= 18

    def updateAge(self, new_age):
        self.age = new_age

patient3 = Patient3("Patient 3", 15)
patient3.display2()
patient3.is_adult()
patient3.updateAge(20)
patient3.display2()
print(patient3.is_adult())