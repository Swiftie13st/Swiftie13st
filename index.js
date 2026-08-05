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

[![wakatime](https://wakatime.com/badge/user/b3fdb6b1-f5a8-422c-9c33-4355b9b719ab.svg)](https://wakatime.com/@b3fdb6b1-f5a8-422c-9c33-4355b9b719ab)

<a href="https://wakatime.com"><img src="https://wakatime.com/share/@Bruce/be58668e-789b-4052-8dac-a1ed16236320.png" /></a> 

<div style="display: flex; justify-content: space-between; width: 80%; margin: 0 auto;">
    <img src="https://wakatime.com/share/@b3fdb6b1-f5a8-422c-9c33-4355b9b719ab/65dc6f8c-2041-46a0-ad3b-3cfa5fc71cea.svg" style="width: 26%;" alt="1">
    <img src="https://wakatime.com/share/@b3fdb6b1-f5a8-422c-9c33-4355b9b719ab/697f8652-2f65-488b-895e-4412cdfcb344.svg" style="width: 26%;" alt="2">
</div>


---
⏰ Updated on ${new Date().toUTCString()}
---
`

console.log(readme)
