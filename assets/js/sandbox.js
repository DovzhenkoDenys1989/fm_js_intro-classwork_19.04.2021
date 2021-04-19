function uniqueizeArray(arr) {
  if(!Array.isArray(arr)){
    throw new TypeError();
  }
  return arr.filter((item, index, array) => {
    return array.indexOf(item) === index;
  });
}

const mySet = new Set([1, 2, 3, 4, 5, 6, 7, 8]);

const nums1 = [1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 44, 5, 6];
const nums2 = [1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 0, 0];

// Создать массив, содержащий уникальные элементы из предыдущих массивов

const unique = [...new Set([...nums1, ...nums2])];
