var addTwoNumbers = function(l1, l2) {
  var List = new ListNode(0);
  var head = List;
  var sum = 0;
  var carry = 0;

  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum = sum + l1.val;

      l1 = l1.next;
    }

    if (l2 !== null) {
      sum = sum + l2.val;
      l2 = l2.next;
    }

    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }

    head.next = new ListNode(sum);
    head = head.next;

    sum = carry;
    carry = 0;
  }

  return List.next;
};

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let node1 = new ListNode(2);
node1.next = new ListNode(4);
node1.next.next = new ListNode(3);

let node2 = new ListNode(5);
node2.next = new ListNode(6);
node2.next.next = new ListNode(4);

addTwoNumbers(node1, node2);
