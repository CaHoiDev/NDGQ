const event = new Event('run')
const body = document.querySelector('body')

body.addEventListener(
    'run',
    ()=>{
        console.log(1)
    }
)

window.onload = () => {
}
