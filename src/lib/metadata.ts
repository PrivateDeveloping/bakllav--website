export const siteName = "Bakllavë e Shtëpisë";

export const defaultTitle =
  "Bakllavë e Shtëpisë | Bakllavë e bërë në shtëpi në Podujevë";

export const defaultDescription =
  "Bakllavë e bërë në shtëpi me arra dhe pa arra, e përgatitur me dorë në Podujevë. Dërgesa falas në Podujevë dhe Prishtinë.";

export const socialImagePath = "/hero-image.png";

export const socialImageAlt = "Tepsi e plotë me bakllavë të prerë në copa";

type PageMetaOptions = {
  title: string;
  description: string;
  path: string;
  origin: string | undefined;
};

export function absoluteUrl(path: string, origin?: string) {
  if (/^https?:\/\//.test(path)) return path;

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const baseOrigin =
    origin ?? (typeof window !== "undefined" ? window.location.origin : undefined);

  return baseOrigin ? `${baseOrigin}${normalizedPath}` : normalizedPath;
}

export function pageMeta({ title, description, path, origin }: PageMetaOptions) {
  const url = absoluteUrl(path, origin);
  const image = absoluteUrl(socialImagePath, origin);

  return [
    { title },
    { name: "description", content: description },
    { property: "og:site_name", content: siteName },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:image:secure_url", content: image },
    { property: "og:image:type", content: "image/png" },
    { property: "og:image:width", content: "1254" },
    { property: "og:image:height", content: "1254" },
    { property: "og:image:alt", content: socialImageAlt },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
    { name: "twitter:image:alt", content: socialImageAlt },
  ];
}
