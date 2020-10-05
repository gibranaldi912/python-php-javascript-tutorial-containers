import math

def kotak():
    print('Insert the dimmension is multiple of 3 separated by space, ex : 11 33')
    row, col = map(int, input('Insert here : ').split())
    col_mid = math.ceil(col / 2)
    row_mid = math.ceil(row / 2) - 1
    data = [[j for j in range(1, col + 1)] for i in range(1, row + 1)]
    new_data = data[:]
    for i in range(len(data)):
        for j in range(len(data[i])):
            if i == math.ceil(row / 2) - 1:
                if j == col_mid:
                    new_data[i][col_mid-4:col_mid+3] = 'WELCOME'
            elif i < math.ceil(row / 2) - 1:
                if j == col_mid:
                    new_data[i][col_mid - 2 -
                                (3 * i):col_mid + 1 + (3 * i)] = '.|.'*(i + (i + 1))
        if i > math.ceil(row / 2) - 1:
            new_data[i] = new_data[row_mid - (i - row_mid)]

    for i in range(len(new_data)):
        for j in range(len(new_data[i])):
            if str(new_data[i][j]).isdigit():
                print('-', end='')
            else:
                print(new_data[i][j], end='')
        print()