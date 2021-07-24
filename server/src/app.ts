import { http } from './server'

const debug = require('debug')('hortinja:api:app')

http.listen(3333, () => debug('Server is running on port 3333'))
