
export class ArrayDto {
  array = [];
  //item = {};
  isLoading = false;
  error = '';

  constructor(array, isLoading, error) {
    this.array = array;
    //this.item = item;
    this.isLoading = isLoading;
    this.error = error;
  }
}