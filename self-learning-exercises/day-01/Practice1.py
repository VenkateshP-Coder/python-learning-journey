#11/16/2026 Learning and Practice
from operator import truediv

myname = "Venkatesh Pasala"
print(myname)

name = "Venkatesh"
print(name)
print("This is Venkatesh Pasala")

str = "hello world!!"
print(str)

len = 9

print(len)

#print( str + len)

name = "Venkatesh"
age = 36
weight = 81.5
is_active = True

print(type(name))
print(type(age))
print(type(weight))
print(type(is_active))

patient_name = "John Smith"
patient_age = "45"
patient_weight = 82.5
patient_is_active = True

print(type(patient_name))
print(type(patient_age))
print(type(patient_weight))
print(type(patient_is_active))

print(patient_age)
print(patient_weight)
print(patient_is_active)
print(age)


patient_id = 45869
first_name = "Sam"
last_name = "Smith"
age = 45
height = 80
active = True

#print("age is " + age)

print(age)
print(height)
print(first_name)
print(last_name)
print(active)
print(patient_id)

print(type(patient_id))

print(first_name + last_name)
print(first_name + " " + last_name)

b, c, d = 5, 6.4, "Great"
print("{} {}".format("Value is", b))

name = "Venkatesh Pasala"
starbucks_name = "Sam Pasala"
print(name + starbucks_name)

print(type(name))

#Different Data Types
#Numeric (int, long, float and complex), String, List, Tuple, Dictionary
#we need not to declare datatype while declaring a variable.
#when put in single or double quote its a string datatype
#List Data type - this is nothing but a array. is a datatype that allows multiple values and can be different data types.
values = [1,2,3, "Venkatesh", "Pasala", 'Nivaan']
print(values)
print(type(values))
print(values[0])
print(values[1])
print(values[2])
print(values[3])
print(values[4])
print(values[5])
print(values[-1])
print(values[1:3])
values.insert(0,"Sravanthi")
values.append("Pasala")
values[2] = "Test"
del values[2]
print(values)