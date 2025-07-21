# AdMob Verification Documentation

## Overview
Google AdMob requires app developers to implement an `app-ads.txt` file on their domain to verify app ownership and enable advertising monetization. This file helps prevent advertising fraud and ensures legitimate app monetization for הצופן (The Cipher) on both iOS and Android platforms.

## Implementation Details

### File Location
- **Path**: `static/app-ads.txt`
- **URL**: `https://hatzofen.com/app-ads.txt`
- **Accessible**: Root domain level as required by AdMob

### File Content
```
google.com, pub-5737865788941448, DIRECT, f08c47fec0942fa0
```

### Content Breakdown
- **google.com**: Google's advertising domain
- **pub-5737865788941448**: Your unique AdMob publisher ID
- **DIRECT**: Indicates direct relationship with Google AdMob
- **f08c47fec0942fa0**: Google's unique seller ID for verification

## Verification Requirements

### Both Platforms (iOS & Android)
The same `app-ads.txt` file verifies both:
- **iOS App**: הצופן - פאזל עברי (iOS)
- **Android App**: הצופן - פאזל עברי (Android)

### Domain Matching
- Domain must exactly match what's listed in app stores
- File must be accessible at root domain level
- No redirects or subdomains allowed for the file

## Technical Specifications

### IAB Tech Lab Compliance
- Follows IAB Tech Lab `app-ads.txt` specification
- Plain text format with comma-separated values
- UTF-8 encoding
- Single line per advertising system relationship

### File Requirements
- **Accessibility**: Must be publicly accessible via HTTP/HTTPS
- **Location**: Root domain only (not subdirectories)
- **Format**: Plain text file with `.txt` extension
- **Content-Type**: text/plain (automatically handled by static hosting)

## Verification Process

### Google AdMob Steps
1. **File Detection**: AdMob scans `hatzofen.com/app-ads.txt`
2. **Format Validation**: Checks IAB Tech Lab compliance
3. **Publisher Verification**: Validates publisher ID match
4. **App Association**: Links apps to verified domain
5. **Approval**: Enables advertising monetization

### Timeline
- **Initial Scan**: Usually within minutes of deployment
- **Full Verification**: Can take several hours to complete
- **Updates**: Changes may take up to 24 hours to propagate

## Integration with Existing Systems

### SvelteKit Static Files
- File placed in `static/` folder for automatic serving
- No additional configuration needed
- Automatically available at root domain after deployment

### Deployment Considerations
- File deploys with rest of website
- No special hosting requirements
- Works with static hosting platforms (GitHub Pages, Netlify, etc.)

## Troubleshooting

### Common Issues
1. **File Not Found (404)**
   - Ensure file is in `static/` folder
   - Verify deployment completed successfully
   - Check file accessibility at `hatzofen.com/app-ads.txt`

2. **Format Errors**
   - Verify exact content matches specification
   - Check for extra spaces or characters
   - Ensure UTF-8 encoding

3. **Publisher ID Mismatch**
   - Confirm publisher ID `pub-5737865788941448` is correct
   - Verify AdMob account settings match

### Verification Tools
- **Google AdMob Console**: Check verification status
- **Browser Test**: Direct URL access to verify file serving
- **IAB Validator**: Third-party tools for format validation

## Security Considerations

### Public Information
- File contains publicly visible publisher relationships
- No sensitive data exposed
- Standard industry practice for ad verification

### Fraud Prevention
- Prevents unauthorized app monetization
- Validates legitimate advertising relationships
- Protects against ad injection attacks

## Maintenance

### Regular Checks
- Monitor AdMob verification status
- Verify file accessibility after deployments
- Update if publisher relationships change

### Updates Required
- New advertising networks integration
- Publisher ID changes
- Additional seller relationships

## Related Documentation
- `docs/privacy-policy-update.md` - Privacy policy with advertising
- `docs/terms-of-use-update.md` - Terms including advertising services
- Google AdMob Help Center: App-ads.txt specification
- IAB Tech Lab: Official app-ads.txt documentation

## App Information

### iOS App
- **Name**: הצופן - פאזל עברי
- **Platform**: iOS
- **App Store**: Apple App Store
- **Publisher Domain**: hatzofen.com

### Android App
- **Name**: הצופן - פאזל עברי  
- **Platform**: Android
- **Play Store**: Google Play Store
- **Publisher Domain**: hatzofen.com

## Implementation Date
- **Created**: Current implementation date
- **Verification**: Monitor AdMob console for completion
- **Review**: Check status within 24-48 hours

## Next Steps
1. **Deploy**: Ensure file is deployed to production
2. **Monitor**: Check AdMob verification status
3. **Confirm**: Verify file accessibility at hatzofen.com/app-ads.txt
4. **Integrate**: Continue with advertising setup once verified

This implementation enables proper AdMob verification for both iOS and Android versions of הצופן, ensuring compliance with advertising platform requirements and enabling monetization features. 