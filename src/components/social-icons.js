import React, { Component } from 'react'
import "./social-icons.css"

const icons = [
  // Github
  {
    link: 'https://github.com/azer',
    base64: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNjdweCIgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY3IDY3OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjcgNjciIHdpZHRoPSI2N3B4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNMjAuNTQzLDM0LjU2OGMtMC4wNTQsMCwwLjU5MiwxLjM2NywwLjYxLDEuMzY3ICBjMS40MSwyLjUxNiw0LjEyOCw0LjA4LDguNzEzLDQuNTE0Yy0wLjY1NCwwLjQ4OC0xLjQ0LDEuNDE0LTEuNTQ5LDIuNDg0Yy0wLjgyMywwLjUyMy0yLjQ3OCwwLjY5Ni0zLjc2NCwwLjI5NyAgYy0xLjgwMy0wLjU1OS0yLjQ5My00LjA2Ni01LjE5Mi0zLjU2NmMtMC41ODQsMC4xMDctMC40NjgsMC40ODYsMC4wMzcsMC44MDljMC44MjMsMC41MjMsMS41OTcsMS4xNzgsMi4xOTQsMi41NzEgIGMwLjQ1OSwxLjA3LDEuNDIzLDIuOTgxLDQuNDczLDIuOTgxYzEuMjEsMCwyLjA1OC0wLjE0MywyLjA1OC0wLjE0M3MwLjAyMywyLjczMSwwLjAyMywzLjc5M2MwLDEuMjI1LTEuNjgyLDEuNTctMS42ODIsMi4xNTkgIGMwLDAuMjMzLDAuNTU3LDAuMjU1LDEuMDA0LDAuMjU1YzAuODg0LDAsMi43MjMtMC43MjUsMi43MjMtMS45OThjMC0xLjAxMSwwLjAxNy00LjQxLDAuMDE3LTUuMDA2YzAtMS4zLDAuNzA5LTEuNzEyLDAuNzA5LTEuNzEyICBzMC4wODgsNi45NC0wLjE2OSw3Ljg3MmMtMC4zMDIsMS4wOTQtMC44NDcsMC45MzktMC44NDcsMS40MjdjMCwwLjcyNiwyLjIxNCwwLjE3OSwyLjk0OC0xLjQxNmMwLjU2Ny0xLjIzOSwwLjMxOS04LjA1LDAuMzE5LTguMDUgIGwwLjYwNS0wLjAxMmMwLDAsMC4wMzQsMy4xMTcsMC4wMTMsNC41NDJjLTAuMDIxLDEuNDc2LTAuMTIzLDMuMzQyLDAuNzY5LDQuMjIyYzAuNTg2LDAuNTc5LDIuNDg0LDEuNTk0LDIuNDg0LDAuNjY2ICBjMC0wLjUzOS0xLjA0LTAuOTgyLTEuMDQtMi40NDF2LTYuNzE1YzAuODMxLDAsMC43MDYsMi4yMDgsMC43MDYsMi4yMDhsMC4wNjEsNC4xMDNjMCwwLTAuMTg0LDEuNDk0LDEuNjQ1LDIuMTE5ICBjMC42NDUsMC4yMjMsMi4wMjUsMC4yODMsMi4wOS0wLjA5YzAuMDY1LTAuMzczLTEuNjYyLTAuOTI4LTEuNjc4LTIuMDg0Yy0wLjAxLTAuNzA3LDAuMDMyLTEuMTE5LDAuMDMyLTQuMTg3ICBjMC0zLjA2OC0wLjQxOS00LjIwMi0xLjg4LTUuMTA2YzQuNTA4LTAuNDU1LDcuMjk5LTEuNTUxLDguNjU4LTQuNDg2YzAuMTA2LDAuMDAzLDAuNTU1LTEuMzcxLDAuNDk2LTEuMzcxICBjMC4zMDUtMS4xMDgsMC40Ny0yLjQxOSwwLjUwMi0zLjk3MWMtMC4wMDgtNC4yMS0yLjA1OC01LjY5OS0yLjQ1MS02LjM5OGMwLjU4LTMuMTg3LTAuMDk4LTQuNjM3LTAuNDEyLTUuMTM1ICBjLTEuMTYyLTAuNDA2LTQuMDQxLDEuMDQ1LTUuNjE1LDIuMDY3Yy0yLjU2NC0wLjczNy03Ljk4Ni0wLjY2Ni0xMC4wMTksMC4xOWMtMy43NTEtMi42MzktNS43MzYtMi4yMzUtNS43MzYtMi4yMzUgIHMtMS4yODMsMi4yNTktMC4zMzksNS41NjVjLTEuMjM0LDEuNTQ2LTIuMTU0LDIuNjQtMi4xNTQsNS41MzlDMTkuOTA2LDMxLjgzLDIwLjEwMiwzMy4yOTIsMjAuNTQzLDM0LjU2OHogTTMzLDY0ICBDMTYuNDMyLDY0LDMsNTAuNTY4LDMsMzRDMywxNy40MzEsMTYuNDMyLDQsMzMsNHMzMCwxMy40MzEsMzAsMzBDNjMsNTAuNTY4LDQ5LjU2OCw2NCwzMyw2NHoiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiMwMTAxMDE7Ii8+PC9zdmc+'
  },
  // Instagram
  {
    link: 'https://instagram.com/afrikaradyo',
    base64: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1Ni43IDU2LjciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDU2LjcgNTYuNyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTI4LjIsMTYuN2MtNywwLTEyLjgsNS43LTEyLjgsMTIuOHM1LjcsMTIuOCwxMi44LDEyLjhTNDEsMzYuNSw0MSwyOS41UzM1LjIsMTYuNywyOC4yLDE2Ljd6IE0yOC4yLDM3LjcKCQljLTQuNSwwLTguMi0zLjctOC4yLTguMnMzLjctOC4yLDguMi04LjJzOC4yLDMuNyw4LjIsOC4yUzMyLjcsMzcuNywyOC4yLDM3Ljd6Ii8+Cgk8Y2lyY2xlIGN4PSI0MS41IiBjeT0iMTYuNCIgcj0iMi45Ii8+Cgk8cGF0aCBkPSJNNDksOC45Yy0yLjYtMi43LTYuMy00LjEtMTAuNS00LjFIMTcuOWMtOC43LDAtMTQuNSw1LjgtMTQuNSwxNC41djIwLjVjMCw0LjMsMS40LDgsNC4yLDEwLjdjMi43LDIuNiw2LjMsMy45LDEwLjQsMy45CgkJaDIwLjRjNC4zLDAsNy45LTEuNCwxMC41LTMuOWMyLjctMi42LDQuMS02LjMsNC4xLTEwLjZWMTkuM0M1MywxNS4xLDUxLjYsMTEuNSw0OSw4Ljl6IE00OC42LDM5LjljMCwzLjEtMS4xLDUuNi0yLjksNy4zCgkJcy00LjMsMi42LTcuMywyLjZIMThjLTMsMC01LjUtMC45LTcuMy0yLjZDOC45LDQ1LjQsOCw0Mi45LDgsMzkuOFYxOS4zYzAtMywwLjktNS41LDIuNy03LjNjMS43LTEuNyw0LjMtMi42LDcuMy0yLjZoMjAuNgoJCWMzLDAsNS41LDAuOSw3LjMsMi43YzEuNywxLjgsMi43LDQuMywyLjcsNy4yVjM5LjlMNDguNiwzOS45eiIvPgo8L2c+Cjwvc3ZnPgo='
  },
  // Twitter
  {
    link: 'https://twitter.com/afrikaradyo',
    base64: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDU2LjY5MyA1Ni42OTMiIGhlaWdodD0iNTYuNjkzcHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1Ni42OTMgNTYuNjkzIiB3aWR0aD0iNTYuNjkzcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik01Mi44MzcsMTUuMDY1Yy0xLjgxMSwwLjgwNS0zLjc2LDEuMzQ4LTUuODA1LDEuNTkxYzIuMDg4LTEuMjUsMy42ODktMy4yMyw0LjQ0NC01LjU5MmMtMS45NTMsMS4xNTktNC4xMTUsMi02LjQxOCwyLjQ1NCAgYy0xLjg0My0xLjk2NC00LjQ3LTMuMTkyLTcuMzc3LTMuMTkyYy01LjU4MSwwLTEwLjEwNiw0LjUyNS0xMC4xMDYsMTAuMTA3YzAsMC43OTEsMC4wODksMS41NjIsMC4yNjIsMi4zMDMgIGMtOC40LTAuNDIyLTE1Ljg0OC00LjQ0NS0yMC44MzMtMTAuNTZjLTAuODcsMS40OTItMS4zNjgsMy4yMjgtMS4zNjgsNS4wODJjMCwzLjUwNiwxLjc4NCw2LjYsNC40OTYsOC40MTIgIGMtMS42NTYtMC4wNTMtMy4yMTUtMC41MDgtNC41NzgtMS4yNjVjLTAuMDAxLDAuMDQyLTAuMDAxLDAuMDg1LTAuMDAxLDAuMTI4YzAsNC44OTYsMy40ODQsOC45OCw4LjEwOCw5LjkxICBjLTAuODQ4LDAuMjMtMS43NDEsMC4zNTQtMi42NjMsMC4zNTRjLTAuNjUyLDAtMS4yODUtMC4wNjMtMS45MDItMC4xODJjMS4yODcsNC4wMTUsNS4wMTksNi45MzgsOS40NDEsNy4wMTkgIGMtMy40NTksMi43MTEtNy44MTYsNC4zMjctMTIuNTUyLDQuMzI3Yy0wLjgxNSwwLTEuNjItMC4wNDgtMi40MTEtMC4xNDJjNC40NzQsMi44NjksOS43ODYsNC41NDEsMTUuNDkzLDQuNTQxICBjMTguNTkxLDAsMjguNzU2LTE1LjQsMjguNzU2LTI4Ljc1NmMwLTAuNDM4LTAuMDA5LTAuODc1LTAuMDI4LTEuMzA5QzQ5Ljc2OSwxOC44NzMsNTEuNDgzLDE3LjA5Miw1Mi44MzcsMTUuMDY1eiIvPjwvc3ZnPg=='
  }
]

export default class SocialIcons extends Component {
  render() {
    return (
      <div className="social-icons">
        {icons.map(i => this.renderIcon(i))}
      </div>
    )
  }

  renderIcon(icon) {
    return (
      <a href={icon.link} target="_blank">
        <img src={icon.base64} />
      </a>
    )
  }
}
