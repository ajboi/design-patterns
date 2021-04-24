class MultipleChoice {
  constructor (options, description) {
    this.type = 'multipleChoice'
    this.options = options
    this.description = description
  }

  print () {
    this.options.forEach(x => {
      console.log(x)
    })
  }
}

class Range {
  constructor (description) {
    this.type = 'range'
    this.description = description
  }

  print () {
    console.log('min:________')
    console.log('max:________')
  }
}

const questions = [
  new MultipleChoice([22, 23, 24], 'Choose your age.'),
  new Range('Choose from a scale of 1 to 10')
]

function PrintQuestions (questions) {
  questions.forEach(question => {
    console.log(question.description)
    question.print()
  })
}

PrintQuestions(questions)

/*
In this approach, if I add a new type of question, I do not have to
alter/modify the PrintQuestions function at all. I can easily define a
class for the new question type, and let PrintQuestions handle it
seamlessly with the help of polymorphism. PrintQuestions function does not
require to be modified, but new functionalities can be extended through the
creation of new classes.
Thus, Open-Close principle is preserved.
*/
