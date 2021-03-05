import { HttpClient } from '@angular/common/http';

export abstract class DataService<T> {
  constructor(private url: string, private http: HttpClient) {}

  getAll() {
    return this.http.get<T[]>(this.url);
  }

  get(id: string) {
    return this.http.get<T>(this.url + '/' + id);
  }

  createJson(resource: any) {
    return this.http.post<T>(this.url, JSON.stringify(resource));
  }

  createFormData(resource: FormData) {
    return this.http.post<T>(this.url, resource);
  }
}
