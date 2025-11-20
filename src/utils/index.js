export const slugify = (title) => {
    return title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // remove accents
        .replace(/[^a-z0-9\s-]/g, "")    // FIXED — a-z instead of a-Z
        .trim()
        .replace(/\s+/g, "-");
};
 export const formatName = (username = "") => username.trim().split(" ").map(w => w[0]?.toUpperCase()).join("");
