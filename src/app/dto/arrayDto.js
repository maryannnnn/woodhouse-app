
export class ArrayDto {
  array = [];
  isLoading = false;
  error = '';

  constructor(array, isLoading, error) {
    this.array = array;
    this.isLoading = isLoading;
    this.error = error;
  }
}