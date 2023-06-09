module.exports = [
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: "*",
      headers: [
        "Content-Type",
        "Authorization",
        "X-Frame-Options",
        "X-Requested-With",
        "Content-Length",
        "Accept",
      ],
      expose: [
        "Content-Type",
        "Authorization",
        "X-Frame-Options",
        "X-Requested-With",
        "Content-Length",
        "Accept",
      ],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      credentials: true,
      maxAge: 86400,
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
