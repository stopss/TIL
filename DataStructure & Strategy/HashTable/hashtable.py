# 해쉬 테이블
"""
    [해쉬테이블의 시간복잡도]
    Insertion, Delection, Search : O(1)

    핵심 아이디어 : 고유값을 준다.

    해시를 사용할 때 충돌이 일어나면 어떻게 해결하지?
    1) 개별 체이닝 - 중복되는 부분 연결 리스트로 연결하기. 일반적. 최악의 경우 탐색 O(n)
    2) 오픈 어드레싱 - probing 전략에 따라 다름. 선형이 제일 쉬움.

    파이썬은 딕셔너리에 해시 테이블 사용
"""

class HashTable:
    def __init__(self, table_size):
        self.size = table_size
        # 해쉬 테이블 만들기
        self.hash_table = [0 for i in range(self.size)]

    # 간단한 해쉬 함수 만들기
    def hashfunction(self, key):
        return key % self.size

    def getKey(self, data):
        # ord() : 문자의 ASCII(아스키)코드 리턴
        self.key = ord(data[0])
        return self.key

    def  getAddress(self, key):
        myKey = self.getKey(key)
        hash_address = self.hashfunction(myKey)
        return hash_address

    def save(self, key, value):
        hash_address = self.getAddress(key)
        self.hash_table[hash_address] = value

    def read(self, key):
        hash_address = self.getAddress(key)
        return self.hash_table[hash_address]

    def delete(self, key):
        hash_address = self.getAddress(key)

        if self.hash_table[hash_address] != 0:
            self.hash_table[hash_address] = 0
            return True
        else:
            return False
