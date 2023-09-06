---
title: 'Tips develop java di Intellij IDEA'
date: '2023-08-10 14:58:00'
---

Kali ini kita akan membahas beberapa tips yg berguna ketika develop java menggunakan IDE jetbrains.

## cara ubah java version
1. buka file -> project structure

![image](https://github.com/jhonoryza/sveltekit-blog-youtube-tutorial/assets/5910636/8eaf5ec0-dc4b-44a8-b737-c5f97a88cf22)

2. buka preferences -> build execution deployment -> build tools -> gradle

![image](https://github.com/jhonoryza/sveltekit-blog-youtube-tutorial/assets/5910636/bd844504-7bb4-4a3d-94ec-13a2a369f50d)

## postgres application properties

```env
spring.datasource.username=${DB_USERNAME:postgres}
spring.datasource.password=${DB_PASSWORD:}
spring.datasource.url=${DB_URL:jdbc:postgresql://localhost:5432/java-api}
spring.jpa.hibernate.ddl-auto=update
```
