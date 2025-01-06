import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_TOKEN});

export const getDatabase = async () => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
  });
  return response.results;
};

export const getPage = async (pageId : any) => {
  const response = await notion.pages.retrieve({ page_id: pageId });

  return response;
};
