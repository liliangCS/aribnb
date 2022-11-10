import httpRequest from ".."

export const getGoodPriceData = () => {
  return httpRequest.get({
    url: "/home/goodprice"
  })
}

export const getHighScoreData = () => {
  return httpRequest.get({
    url: "/home/highscore"
  })
}

export const getDiscountData = () => {
  return httpRequest.get({
    url: "/home/discount"
  })
}

export const getHotReCommendDestData = () => {
  return httpRequest.get({
    url: "/home/hotrecommenddest"
  })
}