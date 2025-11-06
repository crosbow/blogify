const sort = (array, type = "asc") => {
  if (!array && Array.isArray(array)) return;

  for (let i = 0; i < array.length - 1; i++) {
    const Idate = new Date(array[i].date);

    for (let j = i; j < array.length; j++) {
      const Jdate = new Date(array[j].date);

      const arrange = type === "asc" ? Idate > Jdate : Idate < Jdate;

      if (arrange) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  return array;
};
export default sort;
