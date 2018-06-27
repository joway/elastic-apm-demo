import * as rp from 'request-promise-native'
import * as sleep from 'sleep-promise'

const main = async function () {
  const urls = [
    'http://127.0.0.1:3000/test',
    'http://127.0.0.1:3000/mongo',
  ]
  while (true) {
    try {
      await rp(urls[0])
      await rp(urls[1])
      await sleep(10)
    } catch (e) {
      console.error(e)
    }
    console.log(`fetched`)
  }
}

main()
