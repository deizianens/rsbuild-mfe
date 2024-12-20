export const downloadFile = (
  url: string,
  fileName?: string
): void => {
  const anchorElement = document.createElement('a')
  anchorElement.style.display = 'none'
  anchorElement.href = url
  anchorElement.download = fileName || url
  anchorElement.target = '_blank'
  document.body.appendChild(anchorElement)
  anchorElement.click()
  document.body.removeChild(anchorElement)
}
