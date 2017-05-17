const App = {
  init() {
    const personForm = document.querySelector('form')
    personForm.addEventListener('submit', this.handleSubmit.bind(this))
  },
  
  unorder (form, details) {
    const studentName = form.studentName.value
    const highschool = form.highschool.value
    const major = form.major.value
    const minor = form.minor.value
    const unorderList = document.createElement('ul')
    const student = document.createElement('li')
    student.textContent = 'Name: ' + studentName
    const highschoolName = document.createElement('li')
    highschoolName.textContent = 'High-School: ' + highschool
    const studentMajor = document.createElement('li')
    studentMajor.textContent = 'Student Major: ' + major
    const studentMinor = document.createElement('li')
    studentMinor.textContent = 'Student Minor: ' + minor
    unorderList.appendChild(student)
    unorderList.appendChild(highschoolName)
    unorderList.appendChild(studentMajor)
    unorderList.appendChild(studentMinor)
    details.appendChild(unorderList)
    return unorderList
  },

  handleSubmit (ev) {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')
    this.unorder(form, details)
  },

}
App.init()

