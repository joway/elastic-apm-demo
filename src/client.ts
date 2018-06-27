import * as rp from 'request-promise-native'
import * as sleep from 'sleep-promise'

const main = async function () {
  const url = 'http://127.0.0.1:3000/test'
  while (true) {
    try {
      await rp(url)
      console.log(`fetch ${url}`)
      await sleep(100)
    } catch (e) {
      console.error(e)
    }
  }
}

main()
