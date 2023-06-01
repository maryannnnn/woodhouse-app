export const findObjectBiId = (objects, id) => {

  const filteredObjects = objects.filter(obj => obj.id === id);
  return filteredObjects.length ? filteredObjects[0] : null;
}

export const shortText = (str, maxLength) => {
  if (str.length > maxLength) {
    const trimmedStr = str.slice(0, maxLength).trim() + "...";
    return trimmedStr;
  } else {
    return str;
  }
}
