# Coding Conf Registration - Component Library

This project demonstrates a reusable component library used to build a conference registration system. The implementation focuses on clean architecture, component reusability, and follows DRY principles.

## Component Library Structure

The component library is organized in the following way:

### Core Components

- `Button`: Flexible button component with multiple variants and sizes
- `Input`: Form input component with validation support
- `Logo`: Conference logo with configurable size
- `AvatarUploader`: Component for uploading and previewing user avatars
- `Card`: Container component with consistent styling
- `PageLayout`: Layout wrapper with background and header
- `Ticket`: Ticket display component for the confirmation page

### Context and State Management

- `UserContext`: Central state management for user data and form submission state

### Types

- TypeScript definitions for all components and shared interfaces

## How to Use the Components

### Button Component

```jsx
import Button from './lib/components/Button';

// Primary button (default)
<Button onClick={handleClick}>Click Me</Button>

// Secondary button with large size
<Button variant="secondary" size="lg" onClick={handleClick}>
  Submit
</Button>

// Outline button that submits a form
<Button variant="outline" type="submit">
  Save
</Button>
```

### Input Component

```jsx
import Input from './lib/components/Input';

// Basic text input
<Input
  id="name"
  label="Your Name"
  value={name}
  onChange={(value) => setName(value)}
/>

// Required email input with validation error
<Input
  id="email"
  type="email"
  label="Email Address"
  value={email}
  onChange={(value) => setEmail(value)}
  required={true}
  error={emailError}
/>
```

### Avatar Uploader

```jsx
import AvatarUploader from './lib/components/AvatarUploader';

// Basic usage
<AvatarUploader
  avatarUrl={avatarUrl}
  onAvatarChange={(url) => setAvatarUrl(url)}
/>
```

### Page Layout

```jsx
import PageLayout from './lib/components/PageLayout';

// Wrap your page content
<PageLayout>
  <h1>Your Page Content</h1>
  <p>More content goes here...</p>
</PageLayout>
```

## How to Run the Demo

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser to the URL shown in the terminal

## Demo Pages

This project includes two demo pages:

1. **Registration Form** - Path: `/`
   - Form for collecting user information
   - Avatar upload functionality
   - Form validation

2. **Confirmation Page** - Path: `/confirmation`
   - Displays success message
   - Shows ticket with user information
   - Redirects to registration if accessed directly

## Technologies Used

- React with TypeScript
- React Router for navigation
- Context API for state management
- Tailwind CSS for styling