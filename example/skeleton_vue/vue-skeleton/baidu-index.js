module.exports = `
        <style>.skeleton{position:absolute;top:0;left:0;right:0;bottom:0;z-index:9998;background-repeat:no-repeat!important;background-size:100% auto!important;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXcAAAMsCAYAAACvFuLjAAAPKElEQVR4nO3dXU8b2xlA4T3GEEcqAf7/jwROchrCh3cvaFVatT1VZqjpyvNIXM72myAtvQwevMw55wAgZXfqAQDYnrgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwTttzjk9u5hi2P+pZvrw7udDfCzPnr3bO4AQeIOECTuAEHiDhAk7gBB4g4QJO4AQeIOECTuAEHiDhAk7gBB4g4QJO4AQeIOECTuAEHiDhAk7gBB4g4QJO4AQeIOECTuAEHiDhC0zDnnqYcAYFs2d4AgcQcIEneAIHEHCBJ3gCBxBwgSd4AgcQcIEneAIHEHCBJ3gCBxBwgSd4AgcQcIEneAIHEHCBJ3gCBxBwgSd4AgcQcI2p96AF7d3j2cegTYxM314dQjMGzuAEniDhAk7gBB4g4QJO4AQeIOECTuAEHiDhAk7gBB4g4QJO4AQeIOECTuAEHiDhAk7gBB4g4QJO4AQeIOECTuAEHiDhAk7gBB4g4QJO4AQeIOECTuAEHiDhAk7gBB4g4QJO4AQeIOECTuAEHiDhAk7gBB4g4QJO4AQeIOECTuAEHiDhAk7gBB4g4QJO4AQeIOECTuAEHiDhAk7gBB4g4QJO4AQeIOECTuAEHiDhAk7gBB4g4QJO4AQeIOECTuAEHiDhC0zDnnqYcAYFs2d4AgcQcIEneAIHEHCBJ3gCBxBwgSd4AgcQcIEneAIHEHCBJ3gCBxBwgSd4AgcQcIEneAIHEHCBJ3gCBxBwgSd4AgcQcIEneAIHEHCBJ3gCBxBwgSd4AgcQcIEneAIHEHCBJ3gKD9e7/A09Pz69fz8zgeX8aYx/d+SYAPahnLbjfO9/txfr4f+/1+7Hbvs2Mvc875LiePMb59+/N4enocc+zGMpbx+oPCboxlea+XBPi45hxjHMcYxzHHHLtljMPhYhwOh81f6l3i/vz8Mr5+/TbGWMZYLrY+HqBjPo7dbozLyz9tusVvHvfHx6fx++/fxhgXYyxnWx4N0DRfxhiP4/Lyy9jvt+nmpjd7np6eX8O+fBZ2gP/WcjbG8nl8/frbOB63+b3kpnH/9u33MYbbMAA/52L89tu3TU7aLO6/ff19vN5jt7ED/JTlbBznGN+/f1991CZxf3p+Hi/Pz355CrDSslyMHz+eVt+e2STujz+exhje3giwheOc4+npadUZm8T9+flliDvANpaxG0/PL6vO2CTurz8++EsGANvYvd7qXnXCJl62Owrgl7f7GPfcxxj+pADAVpZljLHu+VLrNkCQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBG0X9zk3OwrglzbnGGNZdcQmcV+WszHGcYujABjHcXa2Ls+bxH2/F3eA7RzH2dl+1QmbxP38fD/GcFsGYBvHvy7NP2+jzX0/Fr+aBdjEbreM8/PzdWdsMcjZ2dn49OlijPm4xXEAv675OD59uhi73Qe45z7GGJ8Ph7HbjTHmy1ZHAvxa5svY7cY4HA6rj9r0Zsrl5Z/GGLZ3gJ/zOL58udzkpE3jvtvtxuWXL2PM7zZ4gP/WfBljfh+XX76MZVn3/va/Webc/umjOee4v//61/fhX2x9PEDHfBzLMsbV1eVmYR/jneL+N9+/P4wfPx7H60vs/v614T8A4P/GnOP1maDXr2VZxqdPF+Pz5/X32P/Zu8Z9jDGOx+N4enoej49P43h8GcfjcXhPPPBrWsZutxu73dm4uDgf5+f71e+K+bev9N5xB+B/z6NHAEHiDhAk7gBB4g4QJO4AQeIOECTuAEHiDhAk7gBB4g4QJO4AQeIOECTuAEHiDhAk7gBB4g4QJO4AQfsfP36cegYANmZzBwgSd4AgcQcIEneAIHEHCBJ3gCBxBwgSd4AgcQcIWuac89RDALAtmztAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtA0H7tAbd3D1vMAcAbN9eHVdfb3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYKWOec89RAAbGu/9oDbu4ct5vhDN9eHDzHHR/ZH/0fAr8NtGYAgcQcIEneAIHEHCBJ3gCBxBwgSd4AgcQcIEneAIHEHCBJ3gCBxBwgSd4AgcQcIEneAIHEHCBJ3gCAfswcQZHMHCBJ3gCBxBwgSd4AgcQcIEneAIHEHCNqvPeD27mGLOQB44+b6sOp6mztAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0DQMuecpx4CgG3t1x5we/ewxRx/6Ob68CHm+F/5o38vwH/itgxAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQj9kDCLK5AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwTt1x5we/ewxRwAvHFzfVh1vc0dIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gaJlzzlMPAcC29msPuL172GKOD+Pm+nDqEQBWc1sGIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gyMfsAQTZ3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBov/aA+/v7LeYA4I2rq6tV1/urkABBbssABIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QNDqJ1Rv7x62mAOAN26uD6uut7kDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBC1zznnqIQDYls0dIEjcAYLEHSBov/aA27uHLebgxG6uD76XAb6PHTfXh1XX29wBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgsQdIEjcAYKWOec89RAAp3Z793DqEf7BzfVh1fU2d4AgcQcIEneAIHEHCBJ3gCBxBwgSd4AgcQcIEneAoP3aAz7aU11rrX0qDOAjsLkDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMErf4kJp9cBPDx2NwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgpY55zz1EABsy+YOECTuAEHiDhAk7gBBq/9w2P39/RZzAPDG1dXVquu9WwYgyG0ZgCBxBwgSd4AgcQcIEneAIHEHCBJ3gCBxBwha/YTq7d3DFnMA8MbN9WHV9TZ3gCBxBwgSd4AgcQcIEneAIHEHCBJ3gCBxBwgSd4AgcQcIEneAIHEHCBJ3gCBxBwgSd4AgcQcIEneAIHEHCBJ3gCBxBwgSd4AgcQcIEneAIHEHCBJ3gCBxBwgSd4AgcQcIEneAIHEHCBJ3gCBxBwgSd4AgcQcIEneAIHEHCBJ3gCBxBwgSd4AgcQcIEneAIHEHCBJ3gCBxBwgSd4AgcQcIEneAIHEHCBJ3gKBlzjlPPQQA27K5AwSJO0CQuAME7dcecHv3sMUcnNjN9cH3MsD3sePm+rDqeps7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwQtc8556iEATu327uHUI/yDm+vDqutt7gBB4g4QJO4AQeIOECTuAEHiDhAk7gBB4g4QJO4AQfu1B3y0p7pOYe2TZABbs7kDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMEiTtAkLgDBIk7QJC4AwSJO0CQuAMErf4kJp9CBPDx2NwBgsQdIEjcAYLEHSBI3AGCxB0gSNwBgpY55zz1EABsy+YOECTuAEHiDhAk7gBBq/9w2P39/RZzAPDG1dXVquu9WwYgyG0ZgCBxBwgSd4AgcQcIEneAIHEHCBJ3gCBxBwha/YTq7d3DFnMA8MbN9WHV9TZ3gCBxBwgSd4AgcQcIEneAIHEHCBJ3gCBxBwgSd4AgcQcIEneAIHEHCBJ3gCBxBwgSd4AgcQcIEneAIHEHCBJ3gCBxBwgSd4AgcQcIEneAIHEHCBJ3gCBxBwgSd4AgcQcIEneAIHEHCBJ3gCBxBwgSd4AgcQcIEneAIHEHCBJ3gCBxBwgSd4CgvwBtY3JXvK6mrAAAAABJRU5ErkJggg==)!important;background-color:#fff!important;background-position:center 0!important}.skeleton-shadow{animation:flush 2s linear infinite;position:fixed;top:0;bottom:0;left:0;right:0;z-index:9999;background-size:400% 100%;background-image:linear-gradient(90deg,rgba(255,255,255,0) 0,rgba(255,255,255,.6) 50%,rgba(255,255,255,0) 100%)}@keyframes flush{0%{background-position:100% 50%}100%{background-position:0 50%}}</style>
        <div class="skeleton-shadow"></div>
        <div class="skeleton"></div>
        <script></script>
    `