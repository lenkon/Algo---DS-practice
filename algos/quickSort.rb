def partition(array)
  # write your code here
  pivot = array[0]
  left = []
  right = []
  (1...array.length).each do |i|
    if array[i] <= pivot
      left << array[i]
    else
      right << array[i]
    end
  end
  left + [pivot] + right
end

p partition([4, 5, 3, 9, 1])
# => [3, 1, 4, 5, 9]
