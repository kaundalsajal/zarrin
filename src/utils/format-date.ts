export function formatDate(date?: string): string {
  if(!date){
    return ""
  }
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
