var deepFreezeEs6 = { exports: {} }

function deepFreeze(obj) {
  if (obj instanceof Map) {
    obj.clear =
      obj.delete =
      obj.set =
        function () {
          throw new Error('map is read-only')
        }
  } else if (obj instanceof Set) {
    obj.add =
      obj.clear =
      obj.delete =
        function () {
          throw new Error('set is read-only')
        }
  }

  Object.freeze(obj)

  Object.getOwnPropertyNames(obj).forEach(function (name) {
    var prop = obj[name]

    if (typeof prop == 'object' && !Object.isFrozen(prop)) {
      deepFreeze(prop)
    }
  })

  return obj
}

deepFreezeEs6.exports = deepFreeze
deepFreezeEs6.exports.default = deepFreeze

var deepFreeze$1 = deepFreezeEs6.exports

class Response {
  constructor(mode) {
    if (mode.data === undefined) mode.data = {}

    this.data = mode.data
    this.isMatchIgnored = false
  }

  ignoreMatch() {
    this.isMatchIgnored = true
  }
}

function escapeHTML(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

function inherit$1(original, ...objects) {
  const result = Object.create(null)

  for (const key in original) {
    result[key] = original[key]
  }
  objects.forEach(function (obj) {
    for (const key in obj) {
      result[key] = obj[key]
    }
  })
  return /** @type {T} */ (result)
}

const SPAN_CLOSE = '</span>'

const emitsWrappingTags = node => {
  return !!node.kind
}

const expandScopeName = (name, { prefix }) => {
  if (name.includes('.')) {
    const pieces = name.split('.')
    return [
      `${prefix}${pieces.shift()}`,
      ...pieces.map((x, i) => `${x}${'_'.repeat(i + 1)}`)
    ].join(' ')
  }
  return `${prefix}${name}`
}

class HTMLRenderer {
  constructor(parseTree, options) {
    this.buffer = ''
    this.classPrefix = options.classPrefix
    parseTree.walk(this)
  }

  addText(text) {
    this.buffer += escapeHTML(text)
  }

  openNode(node) {
    if (!emitsWrappingTags(node)) return

    let scope = node.kind
    if (node.sublanguage) {
      scope = `language-${scope}`
    } else {
      scope = expandScopeName(scope, { prefix: this.classPrefix })
    }
    this.span(scope)
  }

  closeNode(node) {
    if (!emitsWrappingTags(node)) return

    this.buffer += SPAN_CLOSE
  }
  value() {
    return this.buffer
  }

  span(className) {
    this.buffer += `<span class="${className}">`
  }
}

class TokenTree {
  constructor() {
    this.rootNode = { children: [] }
    this.stack = [this.rootNode]
  }

  get top() {
    return this.stack[this.stack.length - 1]
  }

  get root() {
    return this.rootNode
  }

  add(node) {
    this.top.children.push(node)
  }

  openNode(kind) {
    const node = { kind, children: [] }
    this.add(node)
    this.stack.push(node)
  }

  closeNode() {
    if (this.stack.length > 1) {
      return this.stack.pop()
    }
    return undefined
  }

  closeAllNodes() {
    while (this.closeNode());
  }

  toJSON() {
    return JSON.stringify(this.rootNode, null, 4)
  }

  walk(builder) {
    return this.constructor._walk(builder, this.rootNode)
  }

  static _walk(builder, node) {
    if (typeof node === 'string') {
      builder.addText(node)
    } else if (node.children) {
      builder.openNode(node)
      node.children.forEach(child => this._walk(builder, child))
      builder.closeNode(node)
    }
    return builder
  }
  static _collapse(node) {
    if (typeof node === 'string') return
    if (!node.children) return

    if (node.children.every(el => typeof el === 'string')) {
      node.children = [node.children.join('')]
    } else {
      node.children.forEach(child => {
        TokenTree._collapse(child)
      })
    }
  }
}

class TokenTreeEmitter extends TokenTree {
  constructor(options) {
    super()
    this.options = options
  }

  addKeyword(text, kind) {
    if (text === '') {
      return
    }

    this.openNode(kind)
    this.addText(text)
    this.closeNode()
  }

  addText(text) {
    if (text === '') {
      return
    }

    this.add(text)
  }

  addSublanguage(emitter, name) {
    const node = emitter.root
    node.kind = name
    node.sublanguage = true
    this.add(node)
  }

  toHTML() {
    const renderer = new HTMLRenderer(this, this.options)
    return renderer.value()
  }

  finalize() {
    return true
  }
}

function source(re) {
  if (!re) return null
  if (typeof re === 'string') return re

  return re.source
}

function lookahead(re) {
  return concat('(?=', re, ')')
}

function anyNumberOfTimes(re) {
  return concat('(?:', re, ')*')
}

function optional(re) {
  return concat('(?:', re, ')?')
}

function concat(...args) {
  const joined = args.map(x => source(x)).join('')
  return joined
}

function stripOptionsFromArgs(args) {
  const opts = args[args.length - 1]

  if (typeof opts === 'object' && opts.constructor === Object) {
    args.splice(args.length - 1, 1)
    return opts
  } else {
    return {}
  }
}

function either(...args) {
  const opts = stripOptionsFromArgs(args)
  const joined =
    '(' + (opts.capture ? '' : '?:') + args.map(x => source(x)).join('|') + ')'
  return joined
}

function countMatchGroups(re) {
  return new RegExp(re.toString() + '|').exec('').length - 1
}

function startsWith(re, lexeme) {
  const match = re && re.exec(lexeme)
  return match && match.index === 0
}

const BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./

function _rewriteBackreferences(regexps, { joinWith }) {
  let numCaptures = 0

  return regexps
    .map(regex => {
      numCaptures += 1
      const offset = numCaptures
      let re = source(regex)
      let out = ''

      while (re.length > 0) {
        const match = BACKREF_RE.exec(re)
        if (!match) {
          out += re
          break
        }
        out += re.substring(0, match.index)
        re = re.substring(match.index + match[0].length)
        if (match[0][0] === '\\' && match[1]) {
          out += '\\' + String(Number(match[1]) + offset)
        } else {
          out += match[0]
          if (match[0] === '(') {
            numCaptures++
          }
        }
      }
      return out
    })
    .map(re => `(${re})`)
    .join(joinWith)
}

const SHEBANG = (opts = {}) => {
  const beginShebang = /^#![ ]*\//
  if (opts.binary) {
    opts.begin = concat(beginShebang, /.*\b/, opts.binary, /\b.*/)
  }
  return inherit$1(
    {
      scope: 'meta',
      begin: beginShebang,
      end: /$/,
      relevance: 0,
      'on:begin': (m, resp) => {
        if (m.index !== 0) resp.ignoreMatch()
      }
    },
    opts
  )
}

const BACKSLASH_ESCAPE = {
  begin: '\\\\[\\s\\S]',
  relevance: 0
}
const APOS_STRING_MODE = {
  scope: 'string',
  begin: "'",
  end: "'",
  illegal: '\\n',
  contains: [BACKSLASH_ESCAPE]
}
const QUOTE_STRING_MODE = {
  scope: 'string',
  begin: '"',
  end: '"',
  illegal: '\\n',
  contains: [BACKSLASH_ESCAPE]
}

const COMMENT = function (begin, end, modeOptions = {}) {
  const mode = inherit$1(
    {
      scope: 'comment',
      begin,
      end,
      contains: []
    },
    modeOptions
  )
  mode.contains.push({
    scope: 'doctag',
    begin: '[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)',
    end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
    excludeBegin: true,
    relevance: 0
  })
  const ENGLISH_WORD = either(
    'I',
    'a',
    'is',
    'so',
    'us',
    'to',
    'at',
    'if',
    'in',
    'it',
    'on',
    /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
    /[A-Za-z]+[-][a-z]+/,
    /[A-Za-z][a-z]{2,}/
  )
  mode.contains.push({
    begin: concat(/[ ]+/, '(', ENGLISH_WORD, /[.]?[:]?([.][ ]|[ ])/, '){3}')
  })
  return mode
}
const C_LINE_COMMENT_MODE = COMMENT('//', '$')
const C_BLOCK_COMMENT_MODE = COMMENT('/\\*', '\\*/')
const REGEXP_MODE = {
  begin: /(?=\/[^/\n]*\/)/,
  contains: [
    {
      scope: 'regexp',
      begin: /\//,
      end: /\/[gimuy]*/,
      illegal: /\n/,
      contains: [
        BACKSLASH_ESCAPE,
        {
          begin: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [BACKSLASH_ESCAPE]
        }
      ]
    }
  ]
}

var MODES = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  SHEBANG: SHEBANG,
  BACKSLASH_ESCAPE,
  APOS_STRING_MODE,
  QUOTE_STRING_MODE,
  COMMENT: COMMENT,
  C_LINE_COMMENT_MODE,
  C_BLOCK_COMMENT_MODE,
  REGEXP_MODE
})

function skipIfHasPrecedingDot(match, response) {
  const before = match.input[match.index - 1]
  if (before === '.') {
    response.ignoreMatch()
  }
}

function scopeClassName(mode, _parent) {
  if (mode.className !== undefined) {
    mode.scope = mode.className
    delete mode.className
  }
}

function beginKeywords(mode, parent) {
  if (!parent) return
  if (!mode.beginKeywords) return
  mode.begin =
    '\\b(' + mode.beginKeywords.split(' ').join('|') + ')(?!\\.)(?=\\b|\\s)'
  mode.__beforeBegin = skipIfHasPrecedingDot
  mode.keywords = mode.keywords || mode.beginKeywords
  delete mode.beginKeywords

  if (mode.relevance === undefined) mode.relevance = 0
}

function compileIllegal(mode, _parent) {
  if (!Array.isArray(mode.illegal)) return

  mode.illegal = either(...mode.illegal)
}

function compileMatch(mode, _parent) {
  if (!mode.match) return
  if (mode.begin || mode.end)
    throw new Error('begin & end are not supported with match')

  mode.begin = mode.match
  delete mode.match
}

function compileRelevance(mode, _parent) {
  if (mode.relevance === undefined) mode.relevance = 1
}

const beforeMatchExt = (mode, parent) => {
  if (!mode.beforeMatch) return
  if (mode.starts) throw new Error('beforeMatch cannot be used with starts')

  const originalMode = Object.assign({}, mode)
  Object.keys(mode).forEach(key => {
    delete mode[key]
  })

  mode.keywords = originalMode.keywords
  mode.begin = concat(originalMode.beforeMatch, lookahead(originalMode.begin))
  mode.starts = {
    relevance: 0,
    contains: [Object.assign(originalMode, { endsParent: true })]
  }
  mode.relevance = 0

  delete originalMode.beforeMatch
}

const COMMON_KEYWORDS = [
  'of',
  'and',
  'for',
  'in',
  'not',
  'or',
  'if',
  'then',
  'parent',
  'list',
  'value'
]

const DEFAULT_KEYWORD_SCOPE = 'keyword'

function compileKeywords(
  rawKeywords,
  caseInsensitive,
  scopeName = DEFAULT_KEYWORD_SCOPE
) {
  const compiledKeywords = Object.create(null)

  if (typeof rawKeywords === 'string') {
    compileList(scopeName, rawKeywords.split(' '))
  } else if (Array.isArray(rawKeywords)) {
    compileList(scopeName, rawKeywords)
  } else {
    Object.keys(rawKeywords).forEach(function (scopeName) {
      Object.assign(
        compiledKeywords,
        compileKeywords(rawKeywords[scopeName], caseInsensitive, scopeName)
      )
    })
  }
  return compiledKeywords

  function compileList(scopeName, keywordList) {
    if (caseInsensitive) {
      keywordList = keywordList.map(x => x.toLowerCase())
    }
    keywordList.forEach(function (keyword) {
      const pair = keyword.split('|')
      compiledKeywords[pair[0]] = [scopeName, scoreForKeyword(pair[0], pair[1])]
    })
  }
}

function scoreForKeyword(keyword, providedScore) {
  if (providedScore) {
    return Number(providedScore)
  }

  return commonKeyword(keyword) ? 0 : 1
}

function commonKeyword(keyword) {
  return COMMON_KEYWORDS.includes(keyword.toLowerCase())
}

const error = message => {
  console.error(message)
}

const warn = (message, ...args) => {
  console.log(`WARN: ${message}`, ...args)
}

const MultiClassError = new Error()

function remapScopeNames(mode, regexes, { key }) {
  let offset = 0
  const scopeNames = mode[key]
  const emit = {}
  const positions = {}

  for (let i = 1; i <= regexes.length; i++) {
    positions[i + offset] = scopeNames[i]
    emit[i + offset] = true
    offset += countMatchGroups(regexes[i - 1])
  }
  mode[key] = positions
  mode[key]._emit = emit
  mode[key]._multi = true
}

function beginMultiClass(mode) {
  if (!Array.isArray(mode.begin)) return

  if (mode.skip || mode.excludeBegin || mode.returnBegin) {
    error('skip, excludeBegin, returnBegin not compatible with beginScope: {}')
    throw MultiClassError
  }

  if (typeof mode.beginScope !== 'object' || mode.beginScope === null) {
    error('beginScope must be object')
    throw MultiClassError
  }

  remapScopeNames(mode, mode.begin, { key: 'beginScope' })
  mode.begin = _rewriteBackreferences(mode.begin, { joinWith: '' })
}

function endMultiClass(mode) {
  if (!Array.isArray(mode.end)) return

  if (mode.skip || mode.excludeEnd || mode.returnEnd) {
    error('skip, excludeEnd, returnEnd not compatible with endScope: {}')
    throw MultiClassError
  }

  if (typeof mode.endScope !== 'object' || mode.endScope === null) {
    error('endScope must be object')
    throw MultiClassError
  }

  remapScopeNames(mode, mode.end, { key: 'endScope' })
  mode.end = _rewriteBackreferences(mode.end, { joinWith: '' })
}

function scopeSugar(mode) {
  if (mode.scope && typeof mode.scope === 'object' && mode.scope !== null) {
    mode.beginScope = mode.scope
    delete mode.scope
  }
}

function MultiClass(mode) {
  scopeSugar(mode)

  if (typeof mode.beginScope === 'string') {
    mode.beginScope = { _wrap: mode.beginScope }
  }
  if (typeof mode.endScope === 'string') {
    mode.endScope = { _wrap: mode.endScope }
  }

  beginMultiClass(mode)
  endMultiClass(mode)
}

function compileLanguage(language) {
  function langRe(value, global) {
    return new RegExp(
      source(value),
      'm' +
        (language.case_insensitive ? 'i' : '') +
        (language.unicodeRegex ? 'u' : '') +
        (global ? 'g' : '')
    )
  }
  class MultiRegex {
    constructor() {
      this.matchIndexes = {}
      this.regexes = []
      this.matchAt = 1
      this.position = 0
    }

    addRule(re, opts) {
      opts.position = this.position++
      this.matchIndexes[this.matchAt] = opts
      this.regexes.push([opts, re])
      this.matchAt += countMatchGroups(re) + 1
    }

    compile() {
      if (this.regexes.length === 0) {
        this.exec = () => null
      }
      const terminators = this.regexes.map(el => el[1])
      this.matcherRe = langRe(
        _rewriteBackreferences(terminators, { joinWith: '|' }),
        true
      )
      this.lastIndex = 0
    }

    exec(s) {
      this.matcherRe.lastIndex = this.lastIndex
      const match = this.matcherRe.exec(s)
      if (!match) {
        return null
      }

      const i = match.findIndex((el, i) => i > 0 && el !== undefined)
      const matchData = this.matchIndexes[i]
      match.splice(0, i)

      return Object.assign(match, matchData)
    }
  }

  class ResumableMultiRegex {
    constructor() {
      this.rules = []
      this.multiRegexes = []
      this.count = 0

      this.lastIndex = 0
      this.regexIndex = 0
    }

    getMatcher(index) {
      if (this.multiRegexes[index]) return this.multiRegexes[index]

      const matcher = new MultiRegex()
      this.rules.slice(index).forEach(([re, opts]) => matcher.addRule(re, opts))
      matcher.compile()
      this.multiRegexes[index] = matcher
      return matcher
    }

    resumingScanAtSamePosition() {
      return this.regexIndex !== 0
    }

    considerAll() {
      this.regexIndex = 0
    }

    addRule(re, opts) {
      this.rules.push([re, opts])
      if (opts.type === 'begin') this.count++
    }

    exec(s) {
      const m = this.getMatcher(this.regexIndex)
      m.lastIndex = this.lastIndex
      let result = m.exec(s)

      if (this.resumingScanAtSamePosition()) {
        if (result && result.index === this.lastIndex);
        else {
          const m2 = this.getMatcher(0)
          m2.lastIndex = this.lastIndex + 1
          result = m2.exec(s)
        }
      }

      if (result) {
        this.regexIndex += result.position + 1
        if (this.regexIndex === this.count) {
          this.considerAll()
        }
      }

      return result
    }
  }

  function buildModeRegex(mode) {
    const mm = new ResumableMultiRegex()

    mode.contains.forEach(term =>
      mm.addRule(term.begin, { rule: term, type: 'begin' })
    )

    if (mode.terminatorEnd) {
      mm.addRule(mode.terminatorEnd, { type: 'end' })
    }
    if (mode.illegal) {
      mm.addRule(mode.illegal, { type: 'illegal' })
    }

    return mm
  }

  function compileMode(mode, parent) {
    const cmode = mode
    if (mode.isCompiled) return cmode
    ;[scopeClassName, compileMatch, MultiClass, beforeMatchExt].forEach(ext =>
      ext(mode, parent)
    )

    language.compilerExtensions.forEach(ext => ext(mode, parent))

    mode.__beforeBegin = null
    ;[beginKeywords, compileIllegal, compileRelevance].forEach(ext =>
      ext(mode, parent)
    )

    mode.isCompiled = true

    let keywordPattern = null
    if (typeof mode.keywords === 'object' && mode.keywords.$pattern) {
      mode.keywords = Object.assign({}, mode.keywords)
      keywordPattern = mode.keywords.$pattern
      delete mode.keywords.$pattern
    }
    keywordPattern = keywordPattern || /\w+/

    if (mode.keywords) {
      mode.keywords = compileKeywords(mode.keywords, language.case_insensitive)
    }

    cmode.keywordPatternRe = langRe(keywordPattern, true)

    if (parent) {
      if (!mode.begin) mode.begin = /\B|\b/
      cmode.beginRe = langRe(cmode.begin)
      if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/
      if (mode.end) cmode.endRe = langRe(cmode.end)
      cmode.terminatorEnd = source(cmode.end) || ''
      if (mode.endsWithParent && parent.terminatorEnd) {
        cmode.terminatorEnd += (mode.end ? '|' : '') + parent.terminatorEnd
      }
    }
    if (mode.illegal) cmode.illegalRe = langRe(mode.illegal)
    if (!mode.contains) mode.contains = []

    mode.contains = [].concat(
      ...mode.contains.map(c => {
        return expandOrCloneMode(c === 'self' ? mode : c)
      })
    )
    mode.contains.forEach(c => {
      compileMode(c, cmode)
    })

    if (mode.starts) {
      compileMode(mode.starts, parent)
    }

    cmode.matcher = buildModeRegex(cmode)
    return cmode
  }

  if (!language.compilerExtensions) language.compilerExtensions = []

  if (language.contains && language.contains.includes('self')) {
    throw new Error(
      'ERR: contains `self` is not supported at the top-level of a language.  See documentation.'
    )
  }

  language.classNameAliases = inherit$1(language.classNameAliases || {})

  return compileMode(language)
}

function dependencyOnParent(mode) {
  if (!mode) return false

  return mode.endsWithParent || dependencyOnParent(mode.starts)
}

function expandOrCloneMode(mode) {
  if (mode.variants && !mode.cachedVariants) {
    mode.cachedVariants = mode.variants.map(function (variant) {
      return inherit$1(mode, { variants: null }, variant)
    })
  }

  if (mode.cachedVariants) {
    return mode.cachedVariants
  }

  if (dependencyOnParent(mode)) {
    return inherit$1(mode, {
      starts: mode.starts ? inherit$1(mode.starts) : null
    })
  }

  if (Object.isFrozen(mode)) {
    return inherit$1(mode)
  }

  return mode
}

const escape = escapeHTML
const inherit = inherit$1
const NO_MATCH = Symbol('nomatch')
const MAX_KEYWORD_HITS = 7

const HLJS = function (hljs) {
  const languages = Object.create(null)
  const aliases = Object.create(null)
  const plugins = []

  let SAFE_MODE = true
  const LANGUAGE_NOT_FOUND =
    "Could not find the language '{}', did you forget to load/include a language module?"
  const PLAINTEXT_LANGUAGE = {
    disableAutodetect: true,
    name: 'Plain text',
    contains: []
  }

  let options = {
    ignoreUnescapedHTML: false,
    throwUnescapedHTML: false,
    noHighlightRe: /^(no-?highlight)$/i,
    languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
    classPrefix: 'hljs-',
    cssSelector: 'pre code',
    languages: null,
    __emitter: TokenTreeEmitter
  }

  function shouldNotHighlight(languageName) {
    return options.noHighlightRe.test(languageName)
  }

  function blockLanguage(block) {
    let classes = block.className + ' '

    classes += block.parentNode ? block.parentNode.className : ''

    const match = options.languageDetectRe.exec(classes)
    if (match) {
      const language = getLanguage(match[1])
      if (!language) {
        warn(LANGUAGE_NOT_FOUND.replace('{}', match[1]))
        warn('Falling back to no-highlight mode for this block.', block)
      }
      return language ? match[1] : 'no-highlight'
    }

    return classes
      .split(/\s+/)
      .find(_class => shouldNotHighlight(_class) || getLanguage(_class))
  }

  function highlight(codeOrLanguageName, optionsOrCode, ignoreIllegals) {
    let code = ''
    let languageName = ''
    if (typeof optionsOrCode === 'object') {
      code = codeOrLanguageName
      ignoreIllegals = optionsOrCode.ignoreIllegals
      languageName = optionsOrCode.language
    } else {
      languageName = codeOrLanguageName
      code = optionsOrCode
    }

    if (ignoreIllegals === undefined) {
      ignoreIllegals = true
    }

    const context = {
      code,
      language: languageName
    }
    fire('before:highlight', context)

    const result = context.result
      ? context.result
      : _highlight(context.language, context.code, ignoreIllegals)

    result.code = context.code
    fire('after:highlight', result)

    return result
  }
  function _highlight(
    languageName,
    codeToHighlight,
    ignoreIllegals,
    continuation
  ) {
    const keywordHits = Object.create(null)

    function keywordData(mode, matchText) {
      return mode.keywords[matchText]
    }

    function processKeywords() {
      if (!top.keywords) {
        emitter.addText(modeBuffer)
        return
      }

      let lastIndex = 0
      top.keywordPatternRe.lastIndex = 0
      let match = top.keywordPatternRe.exec(modeBuffer)
      let buf = ''

      while (match) {
        buf += modeBuffer.substring(lastIndex, match.index)
        const word = language.case_insensitive
          ? match[0].toLowerCase()
          : match[0]
        const data = keywordData(top, word)
        if (data) {
          const [kind, keywordRelevance] = data
          emitter.addText(buf)
          buf = ''

          keywordHits[word] = (keywordHits[word] || 0) + 1
          if (keywordHits[word] <= MAX_KEYWORD_HITS)
            relevance += keywordRelevance
          if (kind.startsWith('_')) {
            buf += match[0]
          } else {
            const cssClass = language.classNameAliases[kind] || kind
            emitter.addKeyword(match[0], cssClass)
          }
        } else {
          buf += match[0]
        }
        lastIndex = top.keywordPatternRe.lastIndex
        match = top.keywordPatternRe.exec(modeBuffer)
      }
      buf += modeBuffer.substr(lastIndex)
      emitter.addText(buf)
    }

    function processSubLanguage() {
      if (modeBuffer === '') return
      let result = null

      if (typeof top.subLanguage === 'string') {
        if (!languages[top.subLanguage]) {
          emitter.addText(modeBuffer)
          return
        }
        result = _highlight(
          top.subLanguage,
          modeBuffer,
          true,
          continuations[top.subLanguage]
        )
        continuations[top.subLanguage] = /** @type {CompiledMode} */ (
          result._top
        )
      } else {
        result = highlightAuto(
          modeBuffer,
          top.subLanguage.length ? top.subLanguage : null
        )
      }
      if (top.relevance > 0) {
        relevance += result.relevance
      }
      emitter.addSublanguage(result._emitter, result.language)
    }

    function processBuffer() {
      if (top.subLanguage != null) {
        processSubLanguage()
      } else {
        processKeywords()
      }
      modeBuffer = ''
    }

    function emitMultiClass(scope, match) {
      let i = 1
      const max = match.length - 1
      while (i <= max) {
        if (!scope._emit[i]) {
          i++
          continue
        }
        const klass = language.classNameAliases[scope[i]] || scope[i]
        const text = match[i]
        if (klass) {
          emitter.addKeyword(text, klass)
        } else {
          modeBuffer = text
          processKeywords()
          modeBuffer = ''
        }
        i++
      }
    }

    function startNewMode(mode, match) {
      if (mode.scope && typeof mode.scope === 'string') {
        emitter.openNode(language.classNameAliases[mode.scope] || mode.scope)
      }
      if (mode.beginScope) {
        if (mode.beginScope._wrap) {
          emitter.addKeyword(
            modeBuffer,
            language.classNameAliases[mode.beginScope._wrap] ||
              mode.beginScope._wrap
          )
          modeBuffer = ''
        } else if (mode.beginScope._multi) {
          emitMultiClass(mode.beginScope, match)
          modeBuffer = ''
        }
      }

      top = Object.create(mode, { parent: { value: top } })
      return top
    }

    function endOfMode(mode, match, matchPlusRemainder) {
      let matched = startsWith(mode.endRe, matchPlusRemainder)

      if (matched) {
        if (mode['on:end']) {
          const resp = new Response(mode)
          mode['on:end'](match, resp)
          if (resp.isMatchIgnored) matched = false
        }

        if (matched) {
          while (mode.endsParent && mode.parent) {
            mode = mode.parent
          }
          return mode
        }
      }
      if (mode.endsWithParent) {
        return endOfMode(mode.parent, match, matchPlusRemainder)
      }
    }

    function doIgnore(lexeme) {
      if (top.matcher.regexIndex === 0) {
        modeBuffer += lexeme[0]
        return 1
      } else {
        resumeScanAtSamePosition = true
        return 0
      }
    }

    function doBeginMatch(match) {
      const lexeme = match[0]
      const newMode = match.rule

      const resp = new Response(newMode)
      const beforeCallbacks = [newMode.__beforeBegin, newMode['on:begin']]
      for (const cb of beforeCallbacks) {
        if (!cb) continue
        cb(match, resp)
        if (resp.isMatchIgnored) return doIgnore(lexeme)
      }

      if (newMode.skip) {
        modeBuffer += lexeme
      } else {
        if (newMode.excludeBegin) {
          modeBuffer += lexeme
        }
        processBuffer()
        if (!newMode.returnBegin && !newMode.excludeBegin) {
          modeBuffer = lexeme
        }
      }
      startNewMode(newMode, match)
      return newMode.returnBegin ? 0 : lexeme.length
    }

    function doEndMatch(match) {
      const lexeme = match[0]
      const matchPlusRemainder = codeToHighlight.substr(match.index)

      const endMode = endOfMode(top, match, matchPlusRemainder)
      if (!endMode) {
        return NO_MATCH
      }

      const origin = top
      if (top.endScope && top.endScope._wrap) {
        processBuffer()
        emitter.addKeyword(lexeme, top.endScope._wrap)
      } else if (top.endScope && top.endScope._multi) {
        processBuffer()
        emitMultiClass(top.endScope, match)
      } else if (origin.skip) {
        modeBuffer += lexeme
      } else {
        if (!(origin.returnEnd || origin.excludeEnd)) {
          modeBuffer += lexeme
        }
        processBuffer()
        if (origin.excludeEnd) {
          modeBuffer = lexeme
        }
      }
      do {
        if (top.scope) {
          emitter.closeNode()
        }
        if (!top.skip && !top.subLanguage) {
          relevance += top.relevance
        }
        top = top.parent
      } while (top !== endMode.parent)
      if (endMode.starts) {
        startNewMode(endMode.starts, match)
      }
      return origin.returnEnd ? 0 : lexeme.length
    }

    function processContinuations() {
      const list = []
      for (let current = top; current !== language; current = current.parent) {
        if (current.scope) {
          list.unshift(current.scope)
        }
      }
      list.forEach(item => emitter.openNode(item))
    }

    let lastMatch = {}

    function processLexeme(textBeforeMatch, match) {
      const lexeme = match && match[0]

      modeBuffer += textBeforeMatch

      if (lexeme == null) {
        processBuffer()
        return 0
      }

      if (
        lastMatch.type === 'begin' &&
        match.type === 'end' &&
        lastMatch.index === match.index &&
        lexeme === ''
      ) {
        modeBuffer += codeToHighlight.slice(match.index, match.index + 1)
        if (!SAFE_MODE) {
          const err = new Error(`0 width match regex (${languageName})`)
          err.languageName = languageName
          err.badRule = lastMatch.rule
          throw err
        }
        return 1
      }
      lastMatch = match

      if (match.type === 'begin') {
        return doBeginMatch(match)
      } else if (match.type === 'illegal' && !ignoreIllegals) {
        const err = new Error(
          'Illegal lexeme "' +
            lexeme +
            '" for mode "' +
            (top.scope || '<unnamed>') +
            '"'
        )
        err.mode = top
        throw err
      } else if (match.type === 'end') {
        const processed = doEndMatch(match)
        if (processed !== NO_MATCH) {
          return processed
        }
      }

      if (match.type === 'illegal' && lexeme === '') {
        return 1
      }
      if (iterations > 100000 && iterations > match.index * 3) {
        const err = new Error(
          'potential infinite loop, way more iterations than matches'
        )
        throw err
      }

      modeBuffer += lexeme
      return lexeme.length
    }

    const language = getLanguage(languageName)
    if (!language) {
      error(LANGUAGE_NOT_FOUND.replace('{}', languageName))
      throw new Error('Unknown language: "' + languageName + '"')
    }

    const md = compileLanguage(language)
    let result = ''
    let top = continuation || md
    const continuations = {}
    const emitter = new options.__emitter(options)
    processContinuations()
    let modeBuffer = ''
    let relevance = 0
    let index = 0
    let iterations = 0
    let resumeScanAtSamePosition = false

    try {
      top.matcher.considerAll()

      for (;;) {
        iterations++
        if (resumeScanAtSamePosition) {
          resumeScanAtSamePosition = false
        } else {
          top.matcher.considerAll()
        }
        top.matcher.lastIndex = index

        const match = top.matcher.exec(codeToHighlight)

        if (!match) break

        const beforeMatch = codeToHighlight.substring(index, match.index)
        const processedCount = processLexeme(beforeMatch, match)
        index = match.index + processedCount
      }
      processLexeme(codeToHighlight.substr(index))
      emitter.closeAllNodes()
      emitter.finalize()
      result = emitter.toHTML()

      return {
        language: languageName,
        value: result,
        relevance: relevance,
        illegal: false,
        _emitter: emitter,
        _top: top
      }
    } catch (err) {
      if (err.message && err.message.includes('Illegal')) {
        return {
          language: languageName,
          value: escape(codeToHighlight),
          illegal: true,
          relevance: 0,
          _illegalBy: {
            message: err.message,
            index: index,
            context: codeToHighlight.slice(index - 100, index + 100),
            mode: err.mode,
            resultSoFar: result
          },
          _emitter: emitter
        }
      } else if (SAFE_MODE) {
        return {
          language: languageName,
          value: escape(codeToHighlight),
          illegal: false,
          relevance: 0,
          errorRaised: err,
          _emitter: emitter,
          _top: top
        }
      } else {
        throw err
      }
    }
  }

  function justTextHighlightResult(code) {
    const result = {
      value: escape(code),
      illegal: false,
      relevance: 0,
      _top: PLAINTEXT_LANGUAGE,
      _emitter: new options.__emitter(options)
    }
    result._emitter.addText(code)
    return result
  }

  function highlightAuto(code, languageSubset) {
    languageSubset =
      languageSubset || options.languages || Object.keys(languages)
    const plaintext = justTextHighlightResult(code)

    const results = languageSubset
      .filter(getLanguage)
      .filter(autoDetection)
      .map(name => _highlight(name, code, false))
    results.unshift(plaintext)

    const sorted = results.sort((a, b) => {
      if (a.relevance !== b.relevance) return b.relevance - a.relevance

      if (a.language && b.language) {
        if (getLanguage(a.language).supersetOf === b.language) {
          return 1
        } else if (getLanguage(b.language).supersetOf === a.language) {
          return -1
        }
      }
      return 0
    })

    const [best, secondBest] = sorted

    const result = best
    result.secondBest = secondBest

    return result
  }

  function updateClassName(element, currentLang, resultLang) {
    const language = (currentLang && aliases[currentLang]) || resultLang

    element.classList.add('hljs')
    element.classList.add(`language-${language}`)
  }

  function highlightElement(element) {
    let node = null
    const language = blockLanguage(element)

    if (shouldNotHighlight(language)) return

    fire('before:highlightElement', { el: element, language: language })

    node = element
    const text = node.textContent
    const result = language
      ? highlight(text, { language, ignoreIllegals: true })
      : highlightAuto(text)

    element.innerHTML = result.value
    updateClassName(element, language, result.language)
    element.result = {
      language: result.language,
      re: result.relevance,
      relevance: result.relevance
    }
    if (result.secondBest) {
      element.secondBest = {
        language: result.secondBest.language,
        relevance: result.secondBest.relevance
      }
    }

    fire('after:highlightElement', { el: element, result, text })
  }

  let wantsHighlight = false

  function highlightAll() {
    if (document.readyState === 'loading') {
      wantsHighlight = true
      return
    }

    const blocks = document.querySelectorAll(options.cssSelector)
    blocks.forEach(highlightElement)
  }

  function boot() {
    if (wantsHighlight) highlightAll()
  }

  if (typeof window !== 'undefined' && window.addEventListener) {
    window.addEventListener('DOMContentLoaded', boot, false)
  }

  function registerLanguage(languageName, languageDefinition) {
    let lang = null
    try {
      lang = languageDefinition(hljs)
    } catch (error$1) {
      error(
        "Language definition for '{}' could not be registered.".replace(
          '{}',
          languageName
        )
      )
      if (!SAFE_MODE) {
        throw error$1
      } else {
        error(error$1)
      }
      lang = PLAINTEXT_LANGUAGE
    }
    if (!lang.name) lang.name = languageName
    languages[languageName] = lang
    lang.rawDefinition = languageDefinition.bind(null, hljs)

    if (lang.aliases) {
      registerAliases(lang.aliases, { languageName })
    }
  }

  function getLanguage(name) {
    name = (name || '').toLowerCase()
    return languages[name] || languages[aliases[name]]
  }

  function registerAliases(aliasList, { languageName }) {
    if (typeof aliasList === 'string') {
      aliasList = [aliasList]
    }
    aliasList.forEach(alias => {
      aliases[alias.toLowerCase()] = languageName
    })
  }
  function autoDetection(name) {
    const lang = getLanguage(name)
    return lang && !lang.disableAutodetect
  }

  function fire(event, args) {
    const cb = event
    plugins.forEach(function (plugin) {
      if (plugin[cb]) {
        plugin[cb](args)
      }
    })
  }

  Object.assign(hljs, {
    highlightElement,
    registerLanguage,
    inherit
  })

  hljs.debugMode = function () {
    SAFE_MODE = false
  }
  hljs.safeMode = function () {
    SAFE_MODE = true
  }

  hljs.regex = {
    concat: concat,
    lookahead: lookahead,
    either: either,
    optional: optional,
    anyNumberOfTimes: anyNumberOfTimes
  }

  for (const key in MODES) {
    if (typeof MODES[key] === 'object') {
      deepFreeze$1(MODES[key])
    }
  }

  Object.assign(hljs, MODES)

  return hljs
}

var highlight = HLJS({})

export default highlight
