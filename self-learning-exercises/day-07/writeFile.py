#read the file and store all the lines in a list
#reverse the list
#write the list back to the file

with open('test.txt', 'r') as reader:
    contest = reader.readlines()
    reversed(contest)
    with open('test.txt', 'w') as writer:
        for line in reversed(contest):
            writer.write(line)