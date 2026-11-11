# Original AnEmpire redevelopment

This branch **preserves the original HTML, CSS, JavaScript and Bootstrap website**, its An Empire branding, landing page, About, Services, Support, Chatbot, and four-stage signup.

## Fixes made

- Registration stages now have one guarded event handler and validate required fields.
- Password and confirmation are required (minimum 8 characters), and confirmation must match.
- Removed the nested signup/signin links that previously bypassed the forms.
- Both forms explicitly state that real account creation/sign-in is unavailable until a secure backend is connected.
- Original blue form appearance retained, with mobile scrolling and flexible card dimensions.
- Added regression checks in GitHub Actions.

## Critical remaining work

The original site has no operational account service, product/order database or payment processing. **Do not claim that registration or checkout works** until a dedicated backend and security tests are in place. Existing legacy `script.js` and marketing/chatbot claims require further auditing before public release.

This work is intentionally isolated from the separately hosted storefront prototype branch.
