# AnEmpire — E-commerce marketplace redevelopment

AnEmpire is being rebuilt from an early HTML/CSS/JavaScript prototype into a modern multi-vendor marketplace. The original pages remain at the repository root while a **new standalone storefront prototype** is developed in [storefront/](storefront/).

## Preview the new storefront

Open `storefront/index.html` using a local static server (ES modules require HTTP, not `file://`):

```bash
python3 -m http.server 8000
```

Visit `http://localhost:8000/storefront/`.

The new prototype includes responsive product cards, keyword/category filtering, a stock-aware cart, accessible controls and a browser-local cart. All product names, prices and inventory are **fictional demo data**. There is no backend, user account system, checkout, payment collection or seller registration yet.

## Automated checks

Node.js 22+:

```bash
node --test tests/storefront.test.mjs
node --check storefront/catalog.mjs
node --check storefront/app.mjs
```

Browser smoke tests also cover desktop and mobile Chromium, product filtering, cart persistence, sold-out products and the disabled checkout:\n\n```bash\ncd storefront\nnpm install --no-package-lock\nnpx playwright install chromium\nnpm run test:e2e\n```\n\nGitHub Actions runs unit, syntax and browser checks on pushes and pull requests. A green test result does **not** establish security or production readiness.

## Roadmap

1. Storefront foundation and accessibility (in progress).
2. Browser E2E and responsive regression checks (added; CI verification pending).
3. Authenticated buyer/seller accounts with secure backend authorization.
4. Database-backed products, inventory, seller dashboard and order management.
5. Verified server-side checkout, payment webhooks, refunds and audit logs.
6. Admin tools, monitoring, security testing and deployment.

Do not process real transactions or promise operational marketplace services until verified. The legacy root pages remain for comparison and migration.
