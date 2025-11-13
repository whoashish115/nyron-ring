import { config } from "@/data/config";

export const ID_PLACEHOLDER = "YOUR_ID";

export function widgetSnippet({ id = ID_PLACEHOLDER } = {}) {
  const base = config.url;

  return `<!-- ${config.name} -->
<link rel="stylesheet" href="${base}/webring.css">
<div class="webring">
  <a class="webring-logo" href="${base}/" title="${config.name}">
    <img src="${base}/logo.png" alt="${config.name}" width="240" height="60">
  </a>
  <nav class="webring-nav">
    <a href="${base}/ring/browse?action=prev&amp;current=${id}">&#8592; prev</a>
    <a href="${base}/ring/browse?action=random&amp;current=${id}">random</a>
    <a href="${base}/ring/browse?action=next&amp;current=${id}">next &#8594;</a>
  </nav>
</div>`;
}

export default widgetSnippet;
