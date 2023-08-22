---
title: 'Sveltekit Todoapps API'
date: '2023-08-17 10:50:00'
---

Kali ini kita akan membuat todoapps api menggunakan svelkit, drizzle-orm dan playwright untuk test rest api.

pertama kita buat project nya dahulu

```bash
pnpm create svelte@latest sveltekit-todoapps
```

pilih skeleton project, typescript, checklist eslint, prettier dan playwright

```bash
cd sveltekit-todoapps
pnpm install
npx playwright install chromium
```

lalu kita install drizzle package

```bash
pnpm install drizzle-orm mysql2
pnpm install -D drizzle-kit
```
