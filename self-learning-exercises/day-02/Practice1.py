#11/17/2026 Learning and Practice
#List is mutable - we can change the values later point.
#Tuple is immutable - its locked and we cannot change it. updation is not possbile

values = (1,2,3,4,5)
print(values)
print(type(values))
print(values[0])
#values[1] = "Rahul";

#Dictionary - key-value pair. it is similar to the hash table type. Dictionaries are written with in curly braces.
dic = {1: "First Name", 2: "Last Name", "Zip": 194575}
print(dic)
print(type(dic))
print(dic[1])
print(dic[2])
print(dic["Zip"])

dict = {}
dict[1] = "First Name"
dict[2] = "Last Name"
dict["Zip"] = 194575
dict["City"] = "Malvern"
print(dict)
print(type(dict))
print(dict[1])
print(dict[2])
print(dict["Zip"])
print(dict["City"])

#if and else block - condition
greeting = "ood Morning"
if greeting == "Good Morning":
    print("Good Morning")
else:
    print("not Good Morning")


age = 35
if age >= 18:
    print("You are old enough to vote")
else:
    print("You are not old enough to vote")

#For loop
obj = [1,2,3,4,5]
for x in obj:
    if (x%2) == 0:
        print(x)
    else:
        print(x)

#Sum of first natural numbers 1+2+3+4+5 = 15
#range(i,j) -> i to j-1
a = 0
for i in range(1,6):
    a = i + a
print(a)