MAX_T = 1000000
n, m = map(int, input().split())
a = [0] * (MAX_T + 1)
b = [0] * (MAX_T + 1)

time_a = 1
for _ in range(n):
    d, t = tuple(input().split())
    for i in range(int(t)):
        if d == 'R':
            a[time_a] = a[time_a - 1] + 1
        else:
            a[time_a] = a[time_a - 1] - 1

        time_a += 1

time_b = 1
for _ in range(m):
    d, t = tuple(input().split())
    for i in range(int(t)):
        if d == 'R':
            b[time_b] = b[time_b - 1] + 1
        else:
            b[time_b] = b[time_b - 1] - 1

        time_b += 1

ans = 0
for i in range(1, time_a):
    if a[i] == b[i]:
        ans = i
        break

print(ans)
