const cookieName = 'user'

export default {
  hasCookie (name) {
    return !!this.getCookie(this.setName(name))
  },
  getCookie (name) {
    if (document.cookie.length > 0) {
      var cStart = document.cookie.indexOf(this.setName(name) + '=')
      if (cStart !== -1) {
        cStart = cStart + this.setName(name).length + 1
        var cEnd = document.cookie.indexOf(';', cStart)
        if (cEnd === -1) {
          cEnd = document.cookie.length
        }
        return document.cookie.substring(cStart, cEnd)
      }
    }
    return false
  },
  setCookie (name, token, expiredays) {
    if (arguments.length <= 2) {
      var arg = [name, token]
      name = null
      token = arg[0]
      expiredays = arg[1] ? arg[1] : 0
    }
    var exdate = new Date()
    // 按天
    // exdate.setDate(exdate.getDate()+expiredays);
    // 按小时
    exdate.setHours(exdate.getHours() + expiredays)
    document.cookie = this.setName(name) + '=' + token + ((!expiredays) ? '' : ';expires=' + exdate.toGMTString())
  },
  setName (name) {
    return name || cookieName
  }
}
