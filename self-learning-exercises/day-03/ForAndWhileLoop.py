#For loop practice
#3 value in the range says how many numbers to jump
for i in range(1,10,3):
    print(i)
#just one value in the brackets to say just start from 0 to 10.
for k in range(10):
    print(k)

#while loop, this is used to check the condition
it = 4

while it>1:
    print(it)
    it = it-1

print("While loop is done looping")

its = 10
while its>1:
    if its%2==0:
        print(its)

    its = its-1
print("While loop with condition is done looping")

#break key word, want to break the loop when the value is exactly what we want

val = 50
while val > 0:
    if val == 25:
        break
    print(val)
    val = val-1
print("While loop is done looping and broke because of the value we wanted it to break")

#continue key word meaning stop that particular iteration and continue with the next iteration
#max = 100
#while max > 0:
#    if max == 50:
 #       continue
  #  if max == 25:
 #       break
 #   print(max)
 #   max =  max - 1

#above code will go into infinite loop because when max is 50, it reached continue and its skipping that iteration and max - 1 will also skip so its not decrementing.

max1 = 100
while max1 > 0:
    if max1 == 50:
        max1 = max1 - 1
        continue
    if max1 == 25:
        break
    print(max1)
    max1 =  max1 - 1