const hljs = hljs => {
  const languages = Object.create(null)
  const aliases = Object.create(null)
  const PLAINTEXT_LANGUAGE = {
    disableAutodetect: true,
    name: 'Plain text',
    contains: []
  }

  function registerLanguage(languageName, languageDefinition) {
    let lang = null
    try {
      lang = languageDefinition(hljs)
    } catch (error$1) {
      // error("Language definition for '{}' could not be registered.".replace("{}", languageName));
      // if (!SAFE_MODE) { throw error$1; } else { error(error$1); }
      lang = PLAINTEXT_LANGUAGE
    }
    // give it a temporary name if it doesn't have one in the meta-data
    if (!lang.name) lang.name = languageName
    languages[languageName] = lang
    lang.rawDefinition = languageDefinition.bind(null, hljs)

    if (lang.aliases) {
      registerAliases(lang.aliases, { languageName })
    }
  }

  function registerAliases(aliasList, { languageName }) {
    if (typeof aliasList === 'string') {
      aliasList = [aliasList]
    }
    aliasList.forEach(alias => {
      aliases[alias.toLowerCase()] = languageName
    })
  }

  const res = Object.assign(hljs, {
    registerLanguage
  })
  // console.log(res, '121')
  // return hljs
  return { res }
}

export default hljs
