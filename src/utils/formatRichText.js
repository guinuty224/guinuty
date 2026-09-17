import DOMPurify from "dompurify";
const formatRichText = (htmlContent) => {
  if (!htmlContent) return "";

  // Remplace les entités &nbsp; et les caractères d'espace insécable UTF-8 par des espaces classiques
  const normalizedHtml = htmlContent
    .replace(/&nbsp;/g, " ")
    .replace(/\u00A0/g, " ");

  return DOMPurify.sanitize(normalizedHtml);
};

export default formatRichText;
