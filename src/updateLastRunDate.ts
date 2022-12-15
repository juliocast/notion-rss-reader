import { Client } from '@notionhq/client'
//import { UpdatePageParameters } from '@notionhq/client/build/src/api-endpoints'

export const updateLastRunDate = async (feedId: string, runDateNow: Date) => {

  const notion = new Client({ auth: process.env.NOTION_KEY })
  //const databaseId = process.env.NOTION_FEEDER_DATABASE_ID || ''

  try {
    await notion.pages.update({
      page_id: feedId,
      properties: {
        'Last Run': {
          date: {
            start: runDateNow.toISOString()
          },
        }
      }
    })
  } catch (error) {
    console.error(error)
  }
  
}