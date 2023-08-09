---
title: 'DNS over https Cloudflare'
date: '2023-08-09 06:00:00'
---

Kali ini kita akan setup dns over https dari cloudflare.

## Mulai
- clone repositori ini

```bash
git clone https://github.com/visibilityspots/dockerfile-cloudflared.git
```

- edit file `docker-compose.yml` ubah bagian port seperti ini

```YAML
ports:
    - "53:5054/tcp"
    - "53:5054/udp"
```

- matikan systemd-resolved.service dengan cara run `sudo systemctl stop systemd-resolved.service` dan disable `sudo systemctl disable systemd-resolved.service`

- jalankan `docker compose up -d` atau `docker-compose up -d`

- arahkan device yg akan diubah dns nya ke alamat ip dimana service tersebut dijalankan, contohnya service diatas saya running di laptop/pc dengan ip: 192.168.18.106 maka ubah pengaturan DNS menggunakan ip 192.168.18.106
