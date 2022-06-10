export const isValidZip = (zip: string) => {
    return /^\d{5}(-\d{4})?$/.test(zip)
}