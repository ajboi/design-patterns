function PrintQuestions (questions) {
  console.log(typeof (questions))
  questions.forEach(question => {
    switch (question.type) {
      case 'multipleChoice':
        console.log(question.description)
        question.options.forEach(x => {
          console.log(`age: ${x}`)
        })
        break

      case 'range':
        console.log(question.description)
        console.log('Min:_________')
        console.log('Max:_________')
        break

      case 'Descriptive':
        console.log(question.description)
        console.log(`___________________
___________________`)
    }
  })
}

const questions = [
  {
    type: 'multipleChoice',
    description: 'Choose your age.',
    options: [22, 21, 23, 25, 35]
  },

  {
    type: 'range',
    description: 'Choose max and min.'
  },

  {
    type: 'Descriptive',
    description: 'Describe yourself.'
  }
]

PrintQuestions(questions)

/*
In this approach, say if I add a new type of question, I would have to
modify the PrintQuestions function by adding a new switch case. This
is essentially bad practice and does not comply with the Open-Close principle.
*/
