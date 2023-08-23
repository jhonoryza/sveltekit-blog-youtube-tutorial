---
title: 'Belajar Vaultwarden'
date: '2023-08-05 13:30:00'
---

Kali ini kita akan mempelajari cara install vaultwarden yang berguna sebagai private password manager kita menggunakan docker.

## Syarat
- sudah terinstall docker dan docker-compose. [referensi cara install](https://docs.docker.com/engine/install/)

## Mulai
1. pertama kita buat file `docker-compose.yml` masukan code seperti dibawah ini:

```YAML
version: "3.7"
services:
 mariadb:
  image: "mariadb"
  container_name: "mariadb"
  hostname: "mariadb"
  restart: unless-stopped
  volumes:
   - "mariadb_vol:/var/lib/mysql"
   - "/etc/localtime:/etc/localtime:ro"
  environment:
   - "MYSQL_ROOT_PASSWORD=secret"
   - "MYSQL_PASSWORD=secret"
   - "MYSQL_DATABASE=vaultwarden"
   - "MYSQL_USER=vaultwarden"

 vaultwarden:
  image: "vaultwarden/server:latest"
  container_name: "vaultwarden"
  hostname: "vaultwarden"
  restart: unless-stopped
  volumes:
   - "vaultwarden_vol:/data/"
  environment:
   - "DATABASE_URL=mysql://vaultwarden:secret@mariadb/vaultwarden"
   - "ADMIN_TOKEN=secret"
   - "RUST_BACKTRACE=1"
  ports:
   - "8200:80"

volumes:
 vaultwarden_vol:
 mariadb_vol:
```

2. jalankan perintah `docker compose up -d` atau `docker-compose up -d`
3. lalu vaultwarden sudah bisa diakses pada url: http://localhost:8200
4. lalu teman2 bisa registrasi dan jangan lupa master password jangan sampe lupa, kalau bisa dicatat dan jangan sampai hilang karena password tersebut tidak bisa direset 🤣.
5. untuk akses dari hp android/ios/desktop/browser extension, temen2 bisa download aplikasi bitwarden [https://bitwarden.com/download/](https://bitwarden.com/download/)
6. setelah terinstall buka aplikasi -> jangan dulu login, cari settings -> masukan server url http://localhost:8200 -> save
7. di tahap ini teman2 sudah bisa login ke aplikasi menggunakan credential yang sudah dibuat di tahap no 4.
8. selesai
