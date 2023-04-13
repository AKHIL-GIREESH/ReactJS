function getDomainNameFromURL(url) {
    const URl = new URL(url)
    return URl.searchParams
  }

const bootdevURL = 'https://www.youtube.com/watch?v=AFKnthgCpWQ&list=PLwGdqUZWnOp2JYAoNE_-7sSWcIeO1A-xi&index=2'
const domainName = getDomainNameFromURL(bootdevURL)
console.log(domainName)