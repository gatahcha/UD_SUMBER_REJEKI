const STORAGE_KEY = "udsr-ui-lang";

function normalize(code) {
  return code === "en" ? "en" : "id";
}

let lang = normalize(
  typeof localStorage !== "undefined"
    ? localStorage.getItem(STORAGE_KEY)
    : "id",
);

export function getLang() {
  return lang;
}

export function setLang(next) {
  lang = normalize(next);
  if (typeof localStorage !== "undefined")
    localStorage.setItem(STORAGE_KEY, lang);
  return lang;
}
