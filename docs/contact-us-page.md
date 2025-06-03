# Contact Us Page Documentation

## Overview
The Contact Us page provides users with multiple ways to get in touch with the Hatzofen team. It's accessible from the footer navigation and offers a comprehensive contact experience.

## Page Location
- **Route**: `/contact-us`
- **File**: `src/routes/contact-us/+page.svelte`

## Features

### Contact Methods
1. **Email Contact**
   - Direct email link: `contact@hatzofen.com`
   - Includes email icon and description
   - Opens default email client when clicked

2. **LinkedIn Profile**
   - Link to developer's LinkedIn profile
   - Placeholder URL: `https://linkedin.com/in/developer-profile`
   - Opens in new tab with proper security attributes

3. **Contact Form**
   - Full-featured contact form with validation
   - Fields: Name, Email, Subject, Message
   - Form submission with loading states
   - Success/error message display
   - Currently simulates submission (1-second delay)

### Additional Sections
- **Response Time Information**: Sets expectations for response times
- **FAQ Section**: Common questions and answers about the app
- **Responsive Design**: Fully responsive layout for all screen sizes

## Technical Implementation

### Form Handling
```typescript
// Form data structure
let formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
};

// Submission states
let isSubmitting = false;
let submitMessage = '';
let submitSuccess = false;
```

### Styling
- Uses brand colors and Tailwind CSS classes
- RTL-first design approach
- Consistent with overall site design
- Hover effects and transitions
- Focus states for accessibility

### Accessibility Features
- Proper form labels and ARIA attributes
- Keyboard navigation support
- Screen reader friendly
- High contrast colors
- Focus indicators

## Integration Points

### Footer Navigation
The contact page is accessible through the footer navigation:
```html
<a href="/contact-us" class="text-sm text-brand-text-light opacity-70 hover:opacity-100 hover:text-brand-accent transition mx-2">
    צור קשר
</a>
```

### SEO Optimization
- Page title: "צור קשר - הצופן"
- Meta description for search engines
- Proper heading structure (H1, H2, H3)

## Customization Notes

### Email Address
Update the email address in the contact section:
```html
<a href="mailto:contact@hatzofen.com">
    contact@hatzofen.com
</a>
```

### LinkedIn Profile
Update the LinkedIn URL:
```html
<a href="https://linkedin.com/in/developer-profile">
    פרופיל המפתח ב-LinkedIn
</a>
```

### Form Submission
The form currently simulates submission. To implement real form submission:

1. Replace the simulation code in `handleSubmit` function
2. Add actual API endpoint or email service integration
3. Update success/error messages as needed

### FAQ Content
The FAQ section can be customized by editing the questions and answers in the template.

## Future Enhancements

### Potential Additions
- Social media links (Twitter, Facebook, etc.)
- Live chat integration
- Phone number contact option
- Office address/location
- Contact form with file upload capability
- Integration with customer support systems

### Backend Integration
- Form submission to email service (SendGrid, Mailgun, etc.)
- Database storage of contact requests
- Admin panel for managing contact requests
- Automated response emails

## Maintenance

### Regular Updates
- Keep FAQ section current with new questions
- Update contact information as needed
- Monitor form submission success rates
- Review and update response time expectations

### Testing
- Test form submission functionality
- Verify email links work correctly
- Check responsive design on various devices
- Validate accessibility compliance 