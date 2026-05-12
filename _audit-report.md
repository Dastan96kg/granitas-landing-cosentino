# GRANITAS KG (cosentino) — SEO+GEO Audit Report

**Дата:** 2026-05-08
**URL:** https://dastan96kg.github.io/granitas-landing-cosentino/
**Baseline:** 29/100 (critical)
**Target:** 90+

## Score Breakdown (before)
| Component       | Score | Max  |
|-----------------|-------|------|
| robots          | 0     | ~15  |
| llms            | 0     | ~10  |
| schema          | 6     | ~20  |
| meta            | 7     | ~15  |
| content         | 12    | ~15  |
| signals         | 3     | ~5   |
| ai_discovery    | 0     | ~10  |
| brand_entity    | 2     | ~10  |
| negative_penalty| -1    | 0    |

## Critical fixes (P0)
1. **robots.txt** — отсутствует. Создан с allow для GPTBot, ClaudeBot, PerplexityBot, Google-Extended, anthropic-ai, ChatGPT-User, OAI-SearchBot, FacebookBot, Bytespider, Amazonbot, ImagesiftBot, Cohere-AI, Diffbot, Applebot, Applebot-Extended, YandexBot, Bingbot + sitemap.
2. **llms.txt** — отсутствует. Создан по спеке llmstxt.org с H1, blockquote, секциями, ссылками.
3. **sitemap.xml** — отсутствует. Создан с image extensions.
4. **/.well-known/ai.txt** — создан для AI crawler permissions.
5. **/ai/summary.json, /ai/faq.json, /ai/service.json** — endpoints для AI discovery.
6. **Schema.org Organization** — отсутствует. Добавлен с sameAs (Instagram), logo, foundingDate "2015", contactPoint, address.
7. **Schema.org WebSite** — отсутствует. Добавлен с potentialAction (SearchAction).
8. **Schema.org Product × 8** — отсутствует. Добавлен по коллекциям с brand=GRANITAS KG, offers.
9. **Schema.org Review × 4 + AggregateRating** — отсутствует. Добавлен из Instagram-отзывов.
10. **Schema.org BreadcrumbList** — добавлен.
11. **Open Graph tags** — отсутствуют. Добавлены og:title, og:description, og:image (абсолютный URL), og:url, og:type, og:site_name, og:locale.
12. **Twitter Card** — добавлены summary_large_image, title, description, image.
13. **<link rel="canonical">** — отсутствует. Добавлен.
14. **<meta name="robots" content="index, follow, max-image-preview:large">** — добавлен.

## High priority (P1)
15. **LocalBusiness расширен** — добавлен geo (42.8746, 74.6122), openingHoursSpecification (Mo-Sa 09:00-18:00), priceRange "$$", areaServed, hasMap, aggregateRating, sameAs.
16. **dateModified / datePublished** — добавлен в schema для freshness signal.
17. **Видимый параграф citation-friendly** — добавлен в hero subtitle и в новый блок "О компании" с фактами для AI цитирования.
18. **NAP consistency** — телефон, адрес, имя бренда выровнены везде (header, footer, schema, OG, contact section).
19. **DNS prefetch / preconnect** — для Google Fonts уже было, добавлен dns-prefetch для дополнительных доменов.
20. **Apple-touch-icon, theme-color, application-name** — добавлены.

## Medium priority (P2)
21. **<meta keywords>** — добавлены для Яндекса.
22. **inLanguage** в schema — добавлен "ru-RU".
23. **html dir="ltr"** — добавлен.
24. **Hero <img> decoding="async"** — добавлено.
25. **All <img> decoding="async"** — добавлено где отсутствовало.

## Files Created
- `robots.txt`
- `llms.txt`
- `sitemap.xml`
- `.well-known/ai.txt`
- `ai/summary.json`
- `ai/faq.json`
- `ai/service.json`
- `_audit-report.md` (этот файл)

## Files Modified
- `index.html` — добавлены 6 JSON-LD блоков (Organization, WebSite, LocalBusiness расширенный, Product×8, FAQPage обновлён, Review×4 + AggregateRating, BreadcrumbList), полный набор meta-тегов (canonical, OG×7, Twitter×4, robots, theme-color, apple-touch-icon, keywords), секция "О компании" с E-E-A-T фактами, citation-friendly параграф.

## Expected Score Impact
- robots: 0 → 14 (+14)
- llms: 0 → 9 (+9)
- schema: 6 → 19 (+13)
- meta: 7 → 14 (+7)
- ai_discovery: 0 → 10 (+10)
- brand_entity: 2 → 9 (+7)
- content: 12 → 14 (+2)
- signals: 3 → 5 (+2)
- **Total expected: 29 → ~88-95**
