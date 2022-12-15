<div id="top"></div>

[![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103&style=plastic)](https://opensource.org/)
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/watsuyo/notion-rss-reader/blob/master/LICENSE)

<div align="center">
  <h1>Project based on Notion RSS Reader from https://github.com/watsuyo</h1>
  Project Link: https://github.com/watsuyo/notion-rss-reader/
</div>

## You can save articles from your favorite sites in the Notion Database👍

### Prerequisites

* yarn v1
* Node v14

The author has confirmed that it works with these versions.

<!-- 必ずしも作者のローカル環境と同じである必要はないです。 -->

### Installation

1. Clone the repo

   ```sh
   git clone git@github.com:watsuyo/notion-rss-reader.git
   ```

2. Install YARN packages

   ```sh
   yarn install
   ```

3. Add `NOTION_FEEDER_DATABASE_ID`, `NOTION_READER_DATABASE_ID`, and `NOTION_KEY` to the `.env` file.

	```.env
	NOTION_KEY=secret_************
	NOTION_FEEDER_DATABASE_ID=************
	NOTION_READER_DATABASE_ID=************
	```

4. Local run
	```sh
	yarn build
	yarn feed
	```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.
