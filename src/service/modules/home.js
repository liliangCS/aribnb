import httpRequest from ".."

export const getHomePriceData = () => {
  return httpRequest.get({
    url: "/home/goodprice"
  })
}