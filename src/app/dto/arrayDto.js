
export class ArrayDto {
  array = [];
  loading = false;
  error = '';

  constructor(array, loading, error) {
    this.array = array;
    this.loading = loading;
    this.error = error;
  }
}