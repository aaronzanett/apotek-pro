# Fully operational owner workspace with dummy data

## Goal
Turn the pharmacy-owner workspace into a complete interactive demo. Every visible control will either perform its intended action, navigate to the relevant page, or clearly show a result. Changes remain in the owner workspace; the marketing site and SaaS admin console are out of scope.

## What will be built

1. **Shared demo data and feedback**
   - Add a single owner-workspace data store with pharmacy products, batches, prescriptions, sales, purchasing, finance, contacts, users, outlets, and notifications.
   - Persist demo changes in the browser so added/edited records and notification state survive navigation and refresh.
   - Add a reset-demo action and consistent success/error messages.

2. **Working workspace shell**
   - Make global search return useful cross-page results.
   - Make the branch selector change the active branch and scope relevant page data.
   - Add a working notification panel with dummy alerts, unread counts, mark-as-read, mark-all-read, and links to relevant pages.
   - Make profile, help, language, mobile navigation, and sign-out actions complete and accessible.

3. **Reusable page interactions**
   - Upgrade shared toolbars with controlled search, filters, CSV export, and working primary actions.
   - Add reusable forms, confirmation dialogs, empty states, tabs, and row actions so pages behave consistently.

4. **Operational workflows**
   - POS: product search, cart quantities, discounts, held sales, prescription flag, payment, and receipt confirmation.
   - Prescriptions and sales: status transitions, detail views, and filters.
   - Inventory: batch/FEFO views, stock adjustments, defecta, expiry handling, and stock-opname progress.
   - Purchasing and supply: create orders, receive/transfer stock, and update statuses.

5. **Management workflows**
   - Master data: create/edit/toggle products, categories, units, shelves, and payment methods.
   - Finance: add cash entries and record payable/receivable payments.
   - Contacts and access: create/edit contacts, users, roles, permissions, and outlets.
   - Reports/compliance/settings: working selectors, exports, checklist actions, and saved settings.
   - Replace remaining owner placeholder pages with relevant dummy-data views.

6. **Verification**
   - Check build health and browser console.
   - Test representative create, update, filter, export, checkout, notification, branch, and reset flows on desktop and mobile.

## Technical details
- Data is demo-only and stored locally in the browser; no real authentication, payments, prescriptions, or cloud database writes are introduced.
- The current bilingual interface and existing visual system are preserved.
- Shared controls use the existing design components and Sonner for action feedback.
