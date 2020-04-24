import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Book } from '../model/Book';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) {
  }

  getUsers() {
    return this.httpClient.get<User[]>('/users/get');
  }

  addUser(newUser: User) {
    return this.httpClient.post<User>('/users/add', newUser);
  }

  deleteUser(id) {
    return this.httpClient.delete<User>('/users/' + id);
  }

  getBooks() {
    return this.httpClient.get<Book[]>('/books/get');
  }

  addUploadData(selectedFile) {
    return this.httpClient.post('/books/upload', selectedFile);
  }

  addBook(newBook) {
    return this.httpClient.post<Book>('/books/add', newBook);
  }

  deleteBook(id) {
    return this.httpClient.delete<Book>('/books/' + id);
  }

  updateBook(updatedBook: Book) {
    return this.httpClient.put<Book>('/books/update', updatedBook);
  }
}
