import copy

key = input("Masukan key : ").upper()
word = input("Masukan word : ").upper()

word = list(word)
pos = copy.deepcopy(word)
found = True

for i in range(len(word)):
    if key.find(word[i]) >= 0:
        pos[i] = True
    else:
        pos[i] = False

if False in pos:
    print('No')
else:
    print('Yes')