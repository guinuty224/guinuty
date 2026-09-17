export default function truncateHtmlText(htmlContent, maxLength = 150) {
  if (!htmlContent) return "";

  // 1. Convert HTML + Entities into clean plain text via DOMParser
  const parser = new DOMParser();
  const parsedDoc = parser.parseFromString(htmlContent, "text/html");

  // extract text and normalize non-breaking spaces (\u00A0) into standard spaces
  const plainText = (parsedDoc.body.textContent || "")
    .replace(/\u00A0/g, " ")
    .trim();

  // 2. Truncate to desired character limit
  if (plainText.length <= maxLength) {
    return plainText;
  }

  return `${plainText.substring(0, maxLength).trim()}...`;
}
