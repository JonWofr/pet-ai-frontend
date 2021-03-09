import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

export abstract class DataService<T> {
  constructor(
    private url: string,
    private http: HttpClient,
    private auth: AngularFireAuth
  ) {}

  getAll() {
    return new Observable<T[]>((subscriber) => {
      this.getIdToken().then((idToken) => {
        this.http
          .get<T[]>(this.url, {
            headers: { Authorization: 'Bearer ' + idToken },
          })
          .subscribe(
            (response) => {
              subscriber.next(response);
            },
            (error: any) => {
              subscriber.error(error);
            },
            () => {
              subscriber.complete();
            }
          );
      });
    });
  }

  get(id: string) {
    return new Observable<T>((subscriber) => {
      this.getIdToken().then((idToken) => {
        this.http
          .get<T>(this.url + '/' + id, {
            headers: { Authorization: 'Bearer ' + idToken },
          })
          .subscribe(
            (response) => {
              subscriber.next(response);
            },
            (error: any) => {
              subscriber.error(error);
            },
            () => {
              subscriber.complete();
            }
          );
      });
    });
  }

  createJson(resource: any) {
    return new Observable<T>((subscriber) => {
      this.getIdToken().then((idToken) => {
        this.http
          .post<T>(this.url, JSON.stringify(resource), {
            headers: { Authorization: 'Bearer ' + idToken },
          })
          .subscribe(
            (response) => {
              subscriber.next(response);
            },
            (error: any) => {
              subscriber.error(error);
            },
            () => {
              subscriber.complete();
            }
          );
      });
    });
  }

  createFormData(resource: FormData) {
    return new Observable<T>((subscriber) => {
      this.getIdToken().then((idToken) => {
        this.http
          .post<T>(this.url, resource, {
            headers: { Authorization: 'Bearer ' + idToken },
          })
          .subscribe(
            (response) => {
              subscriber.next(response);
            },
            (error: any) => {
              subscriber.error(error);
            },
            () => {
              subscriber.complete();
            }
          );
      });
    });
  }

  getIdToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.auth.onAuthStateChanged(async (user) => {
        if (user) {
          const idToken = await user.getIdToken();
          resolve(idToken);
        } else {
          reject(
            new Error(
              'No user is signed in. Cannot make a http request without an attached token.'
            )
          );
        }
      }, reject);
    });
  }
}
