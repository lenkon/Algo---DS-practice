function advancedQuicksort(array) {
  advancedQuicksortRecursive(array, 0, array.length - 1);
  return array;
}

function advancedQuicksortRecursive(array, low, high) {
  if (low < high) {
    const pivotIndex = partition(array, low, high);
    advancedQuicksortRecursive(array, low, pivotIndex - 1);
    advancedQuicksortRecursive(array, pivotIndex + 1, high);
  }
}

function partition(array, low, high) {
  const pivot = array[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (array[j] <= pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  [array[i + 1], array[high]] = [array[high], array[i + 1]];
  console.log('[' + array.join(', ') + ']');

  return i + 1;
}

console.log(advancedQuicksort([1, 3, 9, 8, 2, 7, 5]));
