# Bakllavë e Shtëpisë

Custom website for Bakllavë e Shtëpisë, a homemade baklava business in Podujevë serving Podujevë and Prishtinë.

The site presents the product, story, ingredients, delivery details, Instagram-style gallery, and online order flow for baklava with or without walnuts.

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

## Project Notes

- Business details live in `src/config/business.ts`.
- Page metadata is defined through route `head()` functions, with shared social metadata helpers in `src/lib/metadata.ts`.
- The social preview image uses the homepage hero image exposed publicly at `public/hero-image.png`.
