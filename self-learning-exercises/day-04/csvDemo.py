import csv

with open(r"C:\Users\VPASALA\PycharmProjects\python-learning-journey\self-learning-exercises/loanData.csv") as csvfile:
    csvreader = csv.reader(csvfile, delimiter=',')
    #print(csvreader)
    #print(list(csvreader))

    names = []
    status = []
    for row in csvreader:
        names.append(row[0])
        status.append(row[1])

print(names)
print(status)


Index = names.index('Venkatesh')
loanStatus = status[Index]

print(loanStatus)
with open(r"C:\Users\VPASALA\PycharmProjects\python-learning-journey\self-learning-exercises/loanData.csv", 'a', newline="") as wfile:
    write = csv.writer(wfile)
    write.writerow(["Sandeep", "Pending"])