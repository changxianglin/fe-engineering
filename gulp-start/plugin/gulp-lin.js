const { Transform } = require('stream')

const log = console.log.bind(console)

const contentForFile = (file) => {
  const content = file.contents.toString()
  const extension = file.extname.slice(1)
  let s = ''
  
  if (extension === 'js') {
    s = content + '\n' + '// lin'
  } else if (extension === 'css' || extension === 'scss') {
    s = content + '\n' + '/* lin */'
  } else {
    s = content + '\n' + '# lin'
  }

  const b = Buffer.from(s)
  return b
}

const lin = (options) => {
  const t = new Transform({
    objectMode: true,
    transform(file, encoding, callback) {
      file.contents = contentForFile(file)
      Object.entries(file).forEach(([k, v]) => {
        log(`(${k}) is (${v})`)
      })
      return callback(null, file)
    }
  })

  return t
}

module.exports = lin