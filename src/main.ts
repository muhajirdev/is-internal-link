// External links regexp, they start by one of those: 'http://', 'https://', '//'
const external = /^(https?:\/\/|\/\/)/i;

export const isInternalLink = (link: string) => !external.test(link);

export default isInternalLink
