import { common } from './settings/common.settings'

export default function defineDescription(description: string): string {
  let definedDescription = ''
  // Find p elements in document
  const pElements = document.getElementsByTagName('p')
  const pElementsBool = Boolean(pElements)

  // Create a real array of the paragraph elements
  const makeHTMLParagraphArray = (
    length = pElements.length,
    elements = pElements
  ): string[] => {
    const pArr: string[] = []

    for (let i = 0; i < length; i += 1) {
      const pElement = elements[i]
      pArr.push(pElement.innerText)
    }

    return pArr
  }

  if (description !== '') {
    definedDescription = description
  } else if (common.BROWSER && pElementsBool) {
    // Take the first three p elements
    const descriptionText = `${makeHTMLParagraphArray().forEach((p) => p)}`

    // If the text is larger than 152 characters -> Cut the total length of characters down to 152
    // Then add three dots: '...'
    definedDescription = `${decodeURI(descriptionText.substring(0, 152))}${
      descriptionText.length >= 155 ? '...' : ''
    }`
  } else {
    definedDescription = ''
  }

  return definedDescription
}
