export const customeValidator = (array) => {
    if (array.length > 10 || array.length < 1) {
      return false;
    }
    const length = array.length;
    return array.every(function (value, index) {
      const nextIndex = index + 1;
      return nextIndex < length
        ? (value <= array[nextIndex] || array[array.length - 1] == 0) &&
            value != array[nextIndex]
        : true;
    });
  };
  