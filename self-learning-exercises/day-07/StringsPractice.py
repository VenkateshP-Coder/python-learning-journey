str = "RahulShettyAcademy.com"
str1 = "Consulting Firm"
str3 = "RahulShetty"

print(str[1]) #one string
print(str[0:4]) #to get substring

print(str+str1)
print(str3 in str) #to see whether the string is presnt in other string

print(str.split("."))
print(str.split(".")[0])
print(str.split(".")[1])

str4 = " great "
print(str4.strip())
print(str4.lstrip())
print(str4.rstrip())