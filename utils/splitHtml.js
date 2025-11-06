export default function stripHtml(htmlCode) {
  // Remove Html tags from html code
  if (!htmlCode) return "";

  const finalText = htmlCode.replace(/<[^>]*>/g, "");

  return finalText;
}
