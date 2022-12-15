import Parser from 'rss-parser'
//import { timeDifference } from './helpers'

const parser = new Parser()

export const getNewFeedItems = async (feedUrl: string, lastRun: Date) => {
  const { items: newFeedItems } = await parser.parseURL(feedUrl)  
  
  return newFeedItems.filter((feedItem) => {
    const { pubDate } = feedItem
    
    if (!pubDate) return false

    return (new Date(pubDate) > lastRun)

    /*
    const publishedDate = new Date(pubDate).getTime() / 1000
    const { diffInHours } = timeDifference(publishedDate)
    return diffInHours === 0
    */
  })
}
