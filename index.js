import assert from 'node:assert/strict'

import { parseTar } from 'remix/tar-parser'

const blockSize = 512
const encoder = new TextEncoder()

function createHeader(name, size, type) {
  let block = new Uint8Array(blockSize)
  block.set(encoder.encode(name), 0)
  block.set(encoder.encode('0000644\0'), 100)
  block.set(encoder.encode('0000000\0'), 108)
  block.set(encoder.encode('0000000\0'), 116)
  block.set(encoder.encode(size.toString(8).padStart(11, '0')), 124)
  block.set(encoder.encode('00000000000'), 136)
  block.set(encoder.encode(type), 156)
  block.set(encoder.encode('ustar\0' + '00'), 257)
  block.fill(0x20, 148, 156)

  let checksum = block.reduce((sum, byte) => sum + byte, 0)
  block.set(encoder.encode(checksum.toString(8).padStart(6, '0') + '\0 '), 148)
  return block
}

let archive = new Uint8Array(blockSize * 5)
archive.set(createHeader('directory/', 12, '5'), 0)
archive.set(encoder.encode('hello world\n'), blockSize)
archive.set(createHeader('file.txt', 0, '0'), blockSize * 2)

let entries = []
await parseTar(archive, async (entry) => {
  entries.push(entry.name)
  if (entry.header.type === 'directory') {
    assert.equal((await entry.bytes()).byteLength, 0)
  }
})

assert.deepEqual(entries, ['directory/', 'file.txt'])
