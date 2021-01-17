function getOnlyNumber (text: string): string {
  return text.replace(/\D/g, '')
}

export { getOnlyNumber }
