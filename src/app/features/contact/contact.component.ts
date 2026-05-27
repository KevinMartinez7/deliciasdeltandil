import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../shared/services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  successMessage = false;
  errorMessage = false;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      eventType: ['', [Validators.required]],
      eventDate: [''],
      guestCount: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.errorMessage = false;
    this.successMessage = false;

    if (this.contactForm.invalid) {
      return;
    }

    this.isLoading = true;

    // Enviar formulario a través del servicio
    this.contactService.sendContactForm(this.contactForm.value).subscribe({
      next: (response) => {
        console.log('Email enviado exitosamente:', response);
        this.successMessage = true;
        this.contactForm.reset();
        this.submitted = false;
        this.isLoading = false;

        setTimeout(() => {
          this.successMessage = false;
        }, 5000);
      },
      error: (error) => {
        console.error('Error al enviar email:', error);
        this.errorMessage = true;
        this.isLoading = false;

        setTimeout(() => {
          this.errorMessage = false;
        }, 5000);
      }
    });
  }
}
