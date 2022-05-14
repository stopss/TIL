# Single Linked List

# 노드 정의
class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next

class LinkedList():
    def __init__(self):
        self.head = None
        self.size = 0

    def listSize(self):
        return self.size

    # 프린트 기능
    def print_all(self):
        cur = self.head

        while cur :
            if cur.next != None:
                print(cur.value, '-> ', end='')
                cur = cur.next
            else:
                print(cur.value)
                cur = cur.next

    # 헤더부터 탐색해 뒤에 새로운 노드 추가하기
    def append(self, val):
        # 첫 번째 노드가 없는 경우
        if not self.head:
            self.head = Node(val, None)
            print(self.head)
            return

        node = self.head
        while node.next:
            node = node.next

        node.next = Node(val, None)

    # 특정 인덱스 값 찾기
    def selectNode(self, index):
        # 리스트보다 인덱스 값이 큰 경우 -> None 값 리턴
        # if self.size < index:
        #     print("Index Error")
        #     return None
        #
        # cnt = 0
        # while cnt < index:
        #     cnt += 1
        #     node = node.next
        #
        # return node

        cnt = 0
        node = self.head
        while cnt < index:
            cnt += 1
            node = node.next
            print("a", node)

        print("b", node.val)
        return node









if __name__ == '__main__':
    li = LinkedList()
    li.append('a')
    li.append('b')
    li.append('c')
    li.append('d')
    li.selectNode(0)
    li.selectNode(1)


