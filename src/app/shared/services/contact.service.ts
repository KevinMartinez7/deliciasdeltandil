import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate?: string;
  guestCount?: string;
  message: string;
}

export interface ContactResponse {
  message: string;
  success?: boolean;
  error?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = environment.production ? '/api/contact' : '/api/contact';

  constructor(private http: HttpClient) { }

  sendContactForm(formData: ContactFormData): Observable<ContactResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<ContactResponse>(this.apiUrl, formData, { headers });
  }
}
