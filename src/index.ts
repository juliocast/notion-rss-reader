import { getNewFeedItems } from '@/getNewFeedItems'
import { getFeedUrlList } from '@/getFeedUrlList'
import { addFeedItems } from '@/addFeedItems'
import { updateLastRunDate } from './updateLastRunDate' 
import dotenv from 'dotenv'
dotenv.config()

async function index() {
  const runDateNow = new Date()
  const feedUrlList = await getFeedUrlList()
  feedUrlList.forEach(async (feedData) => {
    //console.log(feedData)
    if (true) {
      try {
        const feedRssUrl = feedData[0]
        const feedRepository = feedData[1].plain_text
        //const feedLastRun = new Date(feedData[2].date.start)
        const feedId = feedData[3]
        
        const feedLastRun = async () => {
          if (!feedData[2].date) return new Date(0)
          else return feedData[2].date.start
        }

        const newFeedItems = await getNewFeedItems(feedRssUrl, await feedLastRun())
        await addFeedItems(newFeedItems, feedRepository)

        //update run date here
        await updateLastRunDate(feedId,runDateNow)

      } catch (error) {
        // TODO: Provide some kind of notification to the user.
        console.error(error)
      }
    }
  })
}

index()
