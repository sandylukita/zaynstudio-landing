# Update ByeSmoke AI Landing Page for CRO (Conversion Rate Optimization)

## Task Overview
Redesign the ByeSmoke AI landing page with a high-converting layout focusing on vaping/smoking, gamification, and clear CTAs.

## Key Requirements

### SEO & Messaging
- Add "Vaping" or "Vape" alongside "Smoking" in headlines
- Hero H1: "Quit Smoking. Save Money. Level Up Your Life."
- Sub-headline: "The AI-powered tracker where your health recovery evolves a virtual pet. Stop smoking & vaping for good."

### Design Changes
1. **Hero Section**
   - Replace paragraph with 3 checkmark bullet points:
     * ✅ "Evolving Pet Companion (Cat → Tiger → Lion)"
     * ✅ "Gamified Health Tracking & XP"
     * ✅ "Works for Smoking & Vaping"
   - Use the new screenshot image (LungCat Tiger status)

2. **Social Proof**
   - Add bar below hero: "⭐ Join thousands of happy quitters."

3. **Feature Grid**
   - Highlight "LungCat Companion" as primary feature
   - Keep other features concise

4. **Update Screenshot**
   - Replace byesmokeai-screenshot.png with the new LungCat Tiger screenshot

## Todo Items

- [x] Update Hero H1 and sub-headline with vaping/smoking messaging
- [x] Replace hero paragraph with 3 checkmark bullet points
- [x] Add social proof bar below hero section
- [x] Reorder features to highlight LungCat Companion first
- [x] Build and verify all changes look good
- [ ] Update the screenshot image in public folder (Manual: Replace byesmokeai-screenshot.png with the LungCat Tiger image)

## Review Summary

### Changes Made ✅

**1. Hero Section Updates**
- Changed H1 to: "Quit Smoking. Save Money. Level Up Your Life."
- Updated sub-headline to include "smoking & vaping" messaging
- Replaced descriptive paragraph with 3 checkmark bullet points:
  - ✅ Evolving Pet Companion (Cat → Tiger → Lion)
  - ✅ Gamified Health Tracking & XP
  - ✅ Works for Smoking & Vaping

**2. Social Proof Addition**
- Added a prominent social proof badge below download buttons
- Design: Rounded pill with star emoji and "Join thousands of happy quitters" text

**3. Features Reordering**
- Moved "LungCat Pet Companion" to first position (from second)
- Added visual highlight with purple ring/border
- Updated feature descriptions to include "vaping" where relevant
- Condensed "Money Saved Calculator" to "Money Saved Tracker"
- Condensed "Community & Social Features" to "Community & Social"

**4. CTA Section**
- Updated final CTA text to include "smoking and vaping"

**5. Build Status**
- ✅ Build successful
- ✅ No ESLint errors (just warnings about metadata config)
- ✅ All pages generated successfully

### Remaining Manual Task
- Replace `public/byesmokeai-screenshot.png` with the new LungCat Tiger screenshot from the conversation

### SEO & CRO Improvements
- ✅ Added "vaping/vape" keywords throughout for better SEO
- ✅ Stronger, action-oriented H1
- ✅ Clear value propositions with checkmarks
- ✅ Social proof element added
- ✅ Highlighted star feature (LungCat)

---

# Fix Apple App Store Verification Issue (Manual Task)

- [ ] **Action Required:** Add developer website to App Store Connect
  - Go to App Store Connect → ByeSmoke AI app
  - Navigate to App Information section
  - Add "https://zaynstudio.com/byesmokeai" to the "Developer Website" or "Marketing URL" field
  - Save changes

- [ ] **Wait for verification:** Apple will automatically re-crawl within 24-48 hours

## Technical Details

### Current app-ads.txt Location
- **File:** `public/app-ads.txt`
- **URL:** `https://zaynstudio.com/app-ads.txt`
- **Format:** ✅ Correct (IAB Tech Lab spec compliant)

### Expected Format by Apple
```
google.com, pub-[PUBLISHER_ID], DIRECT, f08c47fec0942fa0
```

Our file matches this format perfectly.

## Notes

**Important:** This is NOT a code issue. The app-ads.txt file is correct and properly deployed. The issue is purely administrative - the developer website URL needs to be added in App Store Connect.

**No code changes needed.** This is a manual task that must be done in App Store Connect.

## Steps for You to Complete

1. **Log into App Store Connect** (https://appstoreconnect.apple.com)
2. **Select ByeSmoke AI** app
3. **Go to App Information**
4. **Find the "Developer Website" or "Marketing URL" field**
5. **Enter:** `https://zaynstudio.com/byesmokeai`
6. **Save changes**
7. **Click "Check for updates"** button in the AdMob app-ads.txt verification page

Apple should verify within a few minutes to 48 hours after you add the website URL.
