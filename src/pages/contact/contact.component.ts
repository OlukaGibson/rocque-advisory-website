import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { CONTACT_INFO } from '../../shared/constants';
import type { ContactState, ContactFormData } from '../../shared/interfaces';

@Component({
  selector: 'rocque-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  protected readonly contactInfo = CONTACT_INFO;
  
  // Form state signals
  protected readonly name = signal('');
  protected readonly email = signal('');
  protected readonly message = signal('');
  protected readonly submitted = signal(false);
  protected readonly isSubmitting = signal(false);
  protected readonly error = signal<string | null>(null);

  // Computed validation signals
  protected readonly isNameValid = computed(() => this.name().trim().length >= 2);
  protected readonly isEmailValid = computed(() => this.isValidEmail(this.email()));
  protected readonly isMessageValid = computed(() => this.message().trim().length >= 10);
  
  protected readonly isFormValid = computed(() => 
    this.isNameValid() && this.isEmailValid() && this.isMessageValid()
  );

  protected readonly canSubmit = computed(() => 
    this.isFormValid() && !this.isSubmitting()
  );

  protected async submitForm(): Promise<void> {
    if (!this.canSubmit()) {
      return;
    }

    this.isSubmitting.set(true);
    this.error.set(null);

    try {
      const formData: ContactFormData = {
        name: this.name().trim(),
        email: this.email().trim(),
        message: this.message().trim()
      };

      // Simulate API call
      await this.sendMessage(formData);
      
      this.submitted.set(true);
      this.resetForm();
    } catch (err) {
      this.error.set(err instanceof Error ? err.message : 'An error occurred while sending your message.');
    } finally {
      this.isSubmitting.set(false);
    }
  }

  private async sendMessage(formData: ContactFormData): Promise<void> {
    // Simulate API delay
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate random success/failure for demo
        if (Math.random() > 0.1) {
          resolve();
        } else {
          reject(new Error('Failed to send message. Please try again.'));
        }
      }, 1000);
    });
  }

  private resetForm(): void {
    this.name.set('');
    this.email.set('');
    this.message.set('');
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  }

  protected updateName(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.name.set(target.value);
  }

  protected updateEmail(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.email.set(target.value);
  }

  protected updateMessage(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    this.message.set(target.value);
  }

  protected formatPhoneForTel(phone: string): string {
    return phone.replace(/\s/g, '');
  }
}
