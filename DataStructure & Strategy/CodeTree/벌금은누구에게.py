# n은 학생의 수
# m은 7번에 걸쳐 벌칙에 걸린 학생의 번호
# k는 한 학생이 k번 이상 벌칙을 받게 되면 벌금을 물어야 한다.

n, m, k = tuple(map(int, input().split()))

penalized_person = [
    int(input())
    for _ in range(m)
]

penalty_num = [0] * (n + 1)

# 각 패널티 횟수를 세서 최초로 k번 이상 벌칙을 받는 사람을 추적
# ans는 최초로 벌칙을 받게 되는 사람(벌칙을 받을 사람이 없다면 -1을 출력)
ans = -1
for target in penalized_person:
    penalty_num[target] += 1

    # 벌칙을 k번 이상 받은 학생을 출력
    if penalty_num[target] >= k:
        ans = target
        break
print(ans)
