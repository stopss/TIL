class Node:
    def __init__(self, item, next):
        self.item = item
        self.next = next

class Queue:
    def __init__(self):
        self.front = None

    def is_empty(self):
        return self.front is None

    def push(self, value):
        # front가 비어있다면,
        if not self.front:
            self.front = Node(value, None)
            return

        # 비어 있지 않다면
        node = self.front
        # 마지막 요소까지 간다.
        while node.next:
            node = node.next

        node.next = Node(value, None)

    def pop(self):
        # front가 비어있다면,
        if not self.front:
            return None

        # 비어 있지 않다면
        node = self.front
        self.front = self.front.next
        return node.item

def test_queue():
    queue = Queue()

    queue.push(1)
    queue.push(2)
    queue.push(3)
    queue.push(4)
    queue.push(5)

    assert queue.pop() == 1
    assert queue.pop() == 2
    assert queue.pop() == 3
    assert queue.pop() == 4
    assert queue.pop() == 5
    assert queue.pop() is None
    assert queue.is_empty()

if __name__ == '__main__':
    test_queue()
    print(test_queue())
