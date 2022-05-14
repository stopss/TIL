
# 노드 정의
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.nodelength = 0

    # 노드 보여주기 - 순회
    def traverse(self):
        cur = self.head

        while cur is not None:
            print(cur.val)
            cur = cur.next

    # 역순
    # def reverse(self):
    #     cur = self.head
    #     prev = None
    #     print(cur.next.val)
    #
    #     while cur:
    #         temp = cur
    #         cur = prev
    #
    #     return prev




    # 노드의 인덱스 알아내기
    def get_node(self, index):
        cnt = 0
        node = self.head
        while cnt < index:
            cnt += 1
            node = node.next
            print("a", node)

        print("b", node.val)
        return node

    # 헤더부터 탐색해 뒤에 새로운 노드 추가하기
    def append(self, val):
        if not self.head:
            self.head = ListNode(val, None)
            return

        node = self.head
        while node.next:
            node = node.next

        node.next = ListNode(val, None)


if __name__ == '__main__':
    li = LinkedList()
    li.append('a')
    li.append('b')
    li.append('c')
    li.append('d')
    li.get_node(0)
