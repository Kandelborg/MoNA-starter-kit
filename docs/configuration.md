# Configuration

> If you're here to get started, go through the settings in [the table below](#quick-overview) and edit them.
>
> When you're done, go back to [the installation instructions](/docs/setup#configuration) to finish the initial setup.

---

This file contains the reference for all the settings along with explanations of their purpose.

All settings and common values are only defined **once** - in the settings folder

## Getting started

### Google Analytics

There are two things you can do:

1. Get your analytic code [(guide)](https://support.google.com/analytics/answer/1008080?hl=en) and input it in [`_app.tsx`](/pages/_app.tsx#L27)
1. Remove it by follwing to easy steps

- Delete lines [`27`](/pages/_app.tsx#L27) & [`10`](/pages/_app.tsx#L10) in [`_app.tsx`](/pages/_app.tsx)
- Remove the package:

```bash
npm rm next-ga
```

And that's it! Let's continue

### Change the settings

| Setting Name                                        | Default Value             |
| --------------------------------------------------- | ------------------------- |
| [TITLE](/util/settings/common.settings.ts)          | 'MoNA'                    |
| [PORT](/util/settings/common.settings.ts)           | 3333                      |
| [DOMAIN](/util/settings/jsSettings.js)              | <https://example.com>     |
| [API_DOMAIN](/util/settings/common.settings.ts)     | <https://api.example.com> |
| [DEFAULT_LANGUAGE](/util/settings/i18n.settings.ts) | 'en-GB'                   |
| [FALLBACK_LNG](/util/settings/i18n.settings.ts)     | 'en-GB'                   |

---

## Configuration Settings

This file is a work in progress.

### Settings

#### Index

- Common
- Cloudinary
- I18n
- jsSettings

## [Common](/util/settings/common.settings.ts)

### DOMAIN

Found in [`/util/settings/jsSettings.js`](/util/settings/jsSettings.js).

This is defined in a JavaScript file to read it from [`/next.config.js`](/next.config.js) during build.

In order to avoid misconfiguration, all settings are only defined in one place.

### PORT

The desired port when `process.env.PORT` isn't defined.

### TITLE

Variable used as title in various places (e.g the App bar)

### API_DOMAIN

The domain from which Apollo will get it's schema and make wonderful GraphQL requests.

This should be the domain of a desired Prisma API

## [Cloudinary](/util/settings/cloudinary.settings.ts)

This is only necessary if you're going to upload pictures in your application.

### CLOUD_NAMES

Array of cloud names found in your Cloudinary dashboard

### UPLOAD_PRESETS

Array of upload presets created and defined in your Cloudinary dashboard.

## [I18n](/util/settings/i18n.settings.ts)

### Default language

The default language of your application

## [jsSettings](/util/settings/jsSettings.js)

The only JS settings file. This is in order to use settings from this file in the build configuration itself. This ensures there's no mismatch, as all settings are defined one place only.
