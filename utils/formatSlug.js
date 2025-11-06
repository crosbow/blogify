const formatSlug = (text) => {
  if (!text) return;

  return text.split(" ").join("-").toLowerCase();
};
export default formatSlug;
