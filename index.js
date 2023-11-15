const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\
### Hi there, I'm Bruce 👋
⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(
  2
)} %

![](https://raw.githubusercontent.com/Swiftie13st/Swiftie13st/main/assets/github-contribution-grid-snake-dark.svg)


<div align="center"> <img src="https://metrics.lecoq.io/Swiftie13st?template=classic&config.timezone=Asia%2FShanghai"> </div>

<div align="center"> <img src="https://github-readme-streak-stats.herokuapp.com/?user=Swiftie13st" /> </div>
---
⏰ Updated on ${new Date().toUTCString()}
---
`

console.log(readme)
