;(this.webpackJsonpstreamlit_component_template =
  this.webpackJsonpstreamlit_component_template || []).push([
  [0],
  {
    17: function (t, e, a) {
      t.exports = a(28)
    },
    28: function (t, e, a) {
      'use strict'
      a.r(e)
      var n = a(6),  //6
        o = a.n(n),
        r = a(15),
        c = a.n(r),
        i = a(0),
        l = a(1),
        s = a(2),
        u = a(3),
        d = a(8),
        p = a(11),
        m =
          (a(27),
          (function (t) {
            Object(s.a)(a, t)
            var e = Object(u.a)(a)
            function a () {
              var t
              Object(l.a)(this, a)
              for (
                var n = arguments.length, r = new Array(n), c = 0;
                c < n;
                c++
              )
                r[c] = arguments[c]
              return (
                ((t = e.call.apply(e, [this].concat(r))).state = {
                  isFocused: !1,
                  recordState: null,
                  audioDataURL: '',
                  reset: !1,

                }),
                (t.render = function () {
                  var e = t.props.theme,
                    a = {},
                    n = t.state.recordState
                  if (e) {
                    var r = '1px solid '.concat(
                      t.state.isFocused ? e.primaryColor : 'gray'
                    )
                    ;(a.border = r), (a.outline = r)
                  }
                  return o.a.createElement(
                    'span',
                    null,
                    o.a.createElement(
                      'div',
                      null,
                      o.a.createElement(
                        'button',
                        { id: 'record', onClick: t.onClick_start },
                        'Start/녹음'
                      ),

                      o.a.createElement(
                        'button',
                        { id: 'stop', onClick: t.onClick_stop },
                        'Stop/번역'
                      ),

                      o.a.createElement(
                        'button',
                        { id: 'reset', onClick: t.onClick_reset },
                        'Reset/다시'
                      ),
                      // o.a.createElement(
                      //   'button',
                      //   { id: 'continue', onClick: t.onClick_continue },
                      //   'Download'
                      // ),
                      o.a.createElement(p.b, {
                        state: n,
                        onStop: t.onStop_audio,
                        type: 'audio/wav',
                        backgroundColor: 'rgb(255, 255, 255)',
                        foregroundColor: 'rgb(255,76,75)',
                        canvasWidth: 330,  //450
                        canvasHeight: 80,
                      }),
                      o.a.createElement('audio', {
                        id: 'audio',
                        controls: !0,
                        src: t.state.audioDataURL
                      })
                    )
                  )
                }),
                (t.onClick_start = function () {
                  t.setState({
                    reset: !1,
                    audioDataURL: '',
                    recordState: p.a.START,
                    
                  }),
                    console.log('start')
                    d.a.setComponentValue('')
                }),
                (t.onClick_start = function () {
                  t.setState({
                    reset: !1,
                    recordState: p.a.STOP,
                  })
                  console.log('stop')
                }),
                
                (t.onClick_start = function () {
                  t.setState({
                    reset: !1,
                    audioDataURL: '',
                    recordState: p.a.START,
                  }),
                    d.a.setComponentValue('')
                }),

                (t.onClick_stop = function () {
                  t.setState({ reset: !1, recordState: p.a.STOP })
                }),

                (t.onClick_reset = function () {
                  t.setState({
                    reset: !0,
                    audioDataURL: '',
                    recordState: p.a.STOP,
                  }),
                    d.a.setComponentValue('')
                }),
                (t.onClick_continue = function () {
                  if ('' !== t.state.audioDataURL) {
                    var e = new Date().toLocaleString(),
                      a =
                        'streamlit_audio_' +
                        (e = (e = (e = e.replace(' ', '')).replace(
                          /_/g,
                          ''
                        )).replace(',', '')) +
                        '.wav',
                      n = document.createElement('a')
                    ;(n.style.display = 'none'),
                      (n.href = t.state.audioDataURL),
                      (n.download = a),
                      document.body.appendChild(n),
                      n.click()
                  }
                }),
                (t.onStop_audio = function (e) {
                  !0 === t.state.reset
                    ? (t.setState({ audioDataURL: '' }),
                      d.a.setComponentValue(''))
                    : (t.setState({ audioDataURL: e.url }),
                      fetch(e.url)
                        .then(function (t) {
                          return t.blob()
                        })
                        .then(function (t) {
                          return new Response(t).arrayBuffer()
                        })
                        .then(function (t) {
                          d.a.setComponentValue({ arr: new Uint8Array(t) })
                        }))
                }),
                t
              )
            }
            return Object(i.a)(a)
          })(d.b)),
        f = Object(d.c)(m)
      d.a.setComponentReady(),
        d.a.setFrameHeight(),
        c.a.render(
          o.a.createElement(o.a.StrictMode, null, o.a.createElement(f, null)),
          document.getElementById('root')
        )
    },
  },
  [[17, 1, 2]],
])
//# sourceMappingURL=main.833ba252.chunk.js.map
