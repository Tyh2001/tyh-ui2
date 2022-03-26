export const shell = hljs => {
  return {
    name: 'Shell Session',
    aliases: ['console', 'shellsession'],
    contains: [
      {
        className: 'meta.prompt',
        begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
        starts: {
          end: /[^\\](?=\s*$)/,
          subLanguage: 'bash'
        }
      }
    ]
  }
}
