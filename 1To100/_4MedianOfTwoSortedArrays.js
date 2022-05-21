/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // Lengths of two arrays
  const m = nums1.length;
  const n = nums2.length;
  // Check if num1 is smaller than num2
  // If not, then we will swap num1 with num2
  if (m > n) {
    return findMedianSortedArrays(nums2, nums1);
  }
  let start = 0;
  let end = m;
  let realMid = Math.floor((n + m + 1) / 2);

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let leftASize = mid;
    let leftBSize = realMid - mid;
    let leftA = leftASize > 0 ? nums1[leftASize - 1] : Number.MIN_SAFE_INTEGER;
    let rightA = leftASize < m ? nums1[leftASize] : Number.MAX_SAFE_INTEGER;
    let leftB = leftBSize > 0 ? nums2[leftBSize - 1] : Number.MIN_SAFE_INTEGER;
    let rightB = leftBSize < n ? nums2[leftBSize] : Number.MAX_SAFE_INTEGER;
    if (leftA <= rightB && leftB <= rightA) {
      if ((m + n) % 2 == 0)
        return (Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2.0;
      return Math.max(leftA, leftB);
    } else if (leftA > rightB) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return 0.0;
};
