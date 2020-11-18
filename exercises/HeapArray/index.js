const minHeapify = array => {
  let heap = [];
  for (let i = 0; i < array.length; i++) {
    heap.push(array[i]);
    //Percolate up:
    if (heap.length > 1) {
      percolate(heap.length - 1, heap);
      console.log(heap);
    }
  }
  return heap;
};

const percolate = (index, heap) => {
  //parent index
  let parent = Math.floor((index - 1) / 2);
  while (heap[index] < heap[parent]) {
    [heap[index], heap[parent]] = [heap[parent], heap[index]];
    index = parent;
    parent = Math.floor((index - 1) / 2);
  }
  return heap;
};

minHeapify([2, 3, 4, 1]);
