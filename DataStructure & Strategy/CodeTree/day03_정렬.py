"""
# 문제1_오름 내림차순 정렬
n = int(input())
arr = list(map(int, input().split()))

arr.sort()

for e in arr:
    print(e, end=' ')

print()

for e in arr[::-1]:
    print(e, end=' ')

"""

