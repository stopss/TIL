MAX_T = 1000000


n, m = tuple(map(int, input().split()))
a, b = [0] * (MAX_T + 1), [0] * (MAX_T + 1)

time_a = 1
for _ in range(n):
    v, t = tuple(map(int, input().split()))
    for _ in range(t):
        a[time_a] = a[time_a - 1] + v
        print('t: ', t, ' v: ', v, '  time_a: ', time_a, ' a[time_a]: ', a[time_a])
        time_a += 1

time_b = 1
for _ in range(m):
    v, t = tuple(map(int, input().split()))
    for _ in range(t):
        b[time_b] = b[time_b - 1] + v
        time_b += 1

# A와 B 중 더 앞서 있는 경우를 확인합니다.
# A가 리더면 1, B가 리더면 2로 관리합니다.
leader, ans = 0, 0
for i in range(1, time_a):
    if a[i] > b[i]:
        # 기존 리더가 B였다면 답을 갱신
        if leader == 2:
            ans += 1

        # 리더를 A로 변경
        leader = 1
    elif a[i] < b[i]:
        # 기존 리더가 A였다면 답을 갱신
        if leader == 1:
            ans += 1
        # 리더를 B로 변경
        leader = 2

print(ans)


