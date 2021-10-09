import cloneDeep from 'lodash/cloneDeep'
import get from 'lodash/get'
import keyBy from 'lodash/keyBy'
import filter from 'lodash/filter'
export { loadKeymap } from './api'

const paramsPattern = /\((.+)\)/

/**
 * Parse a bind string into a tree of source values/parameters
 * @param {String} binding
 * @param {Map<code:obj>} sources
 * @returns {Object}
 */
export function parseKeyBinding(binding, sources) {
  const isZmk = binding.startsWith('&')
  const bind = isZmk ? binding.match(/^(&.+?)\b/)[1] : '&kp'
  const params = isZmk
    ? filter(binding.replace(/^&.+?\b\s*/, '').split(' '))
    : [binding]

  function parse(code) {
    const params = filter(
      get(code.match(paramsPattern), '[1]', '')
        .split(',')
        .map(s => s.trim())
    )

    return {
      value: code.replace(paramsPattern, ''),
      params: params.map(parse)
    }
  }

  return hydrateParsedKeyBinding({
    binding,
    value: bind,
    params: params.map(parse)
  }, sources)
}

function hydrateParsedKeyBinding(parsed, sources, out = {}) {
  const behaviour = sources.behaviours[parsed.value]
  const firstParsedParam = get(parsed, 'params[0]', {})
  const commands = keyBy(behaviour.commands, 'code')
  const behaviourParams = [].concat(
    behaviour.params,
    get(behaviour, 'params[0]') === 'command'
      ? get(commands[firstParsedParam.value], 'additionalParams', [])
      : []
  )

  function getSourceValue(value, as) {
    if (as === 'command') return commands[value]
    if (as === 'raw' || as.enum) return { code: value }
    return sources[as][value]
  }

  function hydrate(tree, as) {
    const { value } = tree
    const source = getSourceValue(value, as)
    const params = get(source, 'params', []).map((sourceParam, i) => (
      tree.params[i]
        ? hydrate(tree.params[i], sourceParam)
        : { value: undefined, params: [] }
    ))

    return {
      value,
      source,
      params
    }
  }

  const hydrated = out || {}

  Object.assign(hydrated, {
    binding: parsed.binding,
    value: parsed.value,
    behaviour,
    behaviourParams,
    params: behaviourParams.map((as, i) => (
      parsed.params[i]
        ? hydrate(parsed.params[i], as)
        : { value: undefined, params: [] }
    ))
  })

  return Object.assign(hydrated, {
    _index: indexKeyBinding(hydrated)
  })
}

/**
 * Traverse the tree of a parsed key binding and return a flat index.
 * @param {Object} tree
 * @returns {Array}
 */
export function indexKeyBinding(tree) {
  let index = []

  ;(function traverse(tree) {
    const params = tree.params || []
    tree.index = index.length
    index.push(tree)
    params.forEach(traverse)
  })(tree)

  return index
}

export function updateKeyCode(key, index, source, sources) {
  const updatedKey = cloneDeep(key)
  const targetCode = updatedKey.parsed._index[index]

  targetCode.value = source.code
  targetCode.params.splice(0, targetCode.params.length)
  hydrateParsedKeyBinding(updatedKey.parsed, sources, updatedKey.parsed)

  return updatedKey
}

function encodeBindValue(parsed) {
  const params = (parsed.params || []).map(encodeBindValue)
  const paramString = params.length > 0 ? `(${params.join(',')})` : ''
  return parsed.value + paramString
}

function encodeKeyBinding(parsed) {
  const { behaviour, params } = parsed

  return `${behaviour.code} ${params.map(encodeBindValue).join(' ')}`.trim()
}

export function encode(parsedKeymap) {
  return parsedKeymap.map(layer => layer.map(key => {
    return encodeKeyBinding(key.parsed)
  }))
}