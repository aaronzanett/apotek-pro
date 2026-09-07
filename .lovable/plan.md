# Fully operational light admin workspace

## Goal
Bring every admin page into the same warm, clinical light visual system as the pharmacy owner workspace and make every visible control work with persistent dummy data.

## What will change
1. Restyle the admin login, sidebar, header, cards, tables, menus, forms, badges, and page content using the owner workspace’s cream, ink, emerald, border, and surface tokens.
2. Add one resettable browser-based admin data source covering tenants, users, tickets, subscriptions, invoices, staff, audit events, services/incidents, announcements, feature flags, integrations, and notifications.
3. Make the admin shell operational: navigation, language, owner-app link, profile menu, notifications, global search, help, sign-out, and reset demo data.
4. Wire each page’s relevant workflows: search/filter/export; create/edit/status changes; ticket assignment/resolution; tenant suspension/reactivation; invoice/payment actions; staff invitations and access updates; service incident updates; announcement publishing and channel controls; feature flags, security, branding, and integration settings.
5. Add confirmations, dialogs, empty states, and success/error feedback so every visible action has a clear outcome and persists across page navigation.
6. Verify login, navigation, search, notifications, create/update flows, exports, reset behavior, and representative mobile layouts in the running app.

## Technical details
- Data remains demo-only and is stored locally in the browser; no real customer, billing, authentication, or infrastructure action will occur.
- Existing bilingual behavior and currency formatting are preserved.
- Existing design-system buttons and semantic color tokens will be used throughout.