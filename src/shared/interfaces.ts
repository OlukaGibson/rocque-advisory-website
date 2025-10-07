// Shared interfaces and types for the Rocque Advisory website

export interface Service {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
  readonly fullDescription: string;
  readonly image: string;
  readonly hoverImage: string;
}

export interface Value {
  readonly title: string;
  readonly description: string;
}

export interface Project {
  readonly title: string;
  readonly image: string;
  readonly description?: string;
  readonly fullDescription?: string;
  readonly highlights?: readonly string[];
  readonly impact?: readonly {
    readonly text: string;
    readonly subItems?: readonly string[];
  }[];
}

export interface ContactInfo {
  readonly email: string;
  readonly phone: string;
  readonly address: string;
  readonly companyName: string;
}

export interface SeoMetadata {
  readonly title: string;
  readonly description: string;
  readonly ogTitle: string;
  readonly ogDescription: string;
  readonly ogImage: string;
  readonly ogType: string;
  readonly ogUrl: string;
}

// Form interfaces
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Navigation interface
export interface NavItem {
  readonly href: string;
  readonly label: string;
  readonly ariaLabel?: string;
}

// Component state interfaces
export interface NavbarState {
  readonly isMenuOpen: boolean;
  readonly filterId: string;
}

export interface ContactState extends ContactFormData {
  readonly submitted: boolean;
  readonly isSubmitting: boolean;
  readonly error: string | null;
}

// Constants type guards
export const isValidService = (obj: unknown): obj is Service => {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'icon' in obj &&
    'title' in obj &&
    'description' in obj &&
    typeof (obj as Service).icon === 'string' &&
    typeof (obj as Service).title === 'string' &&
    typeof (obj as Service).description === 'string'
  );
};

export const isValidValue = (obj: unknown): obj is Value => {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'title' in obj &&
    'description' in obj &&
    typeof (obj as Value).title === 'string' &&
    typeof (obj as Value).description === 'string'
  );
};

export const isValidProject = (obj: unknown): obj is Project => {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'title' in obj &&
    'image' in obj &&
    typeof (obj as Project).title === 'string' &&
    typeof (obj as Project).image === 'string' &&
    (!('description' in obj) || typeof (obj as Project).description === 'string')
  );
};