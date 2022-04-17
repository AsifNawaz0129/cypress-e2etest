
import './commands.ts'
import addContext from 'mochawesome/addContext'

Cypress.on("test:after:run", (test, runnable) => {
    
    let videoName = Cypress.spec.name
    videoName = videoName.replace('/.ts.*', '.ts')
    const videoUrl = 'videos/' + videoName + '.mp4'
    console.log(videoUrl)
    console.log('**********************************************')
    console.log(test)
    addContext({ test }, videoUrl)
});