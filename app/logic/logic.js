const select = id => document.getElementById(id)

select('submitBtn').addEventListener('click', e => {
  e.preventDefault()
  console.log(select('name').value)
  console.log(document.getElementsByName('question1'))
})

// console.log(select('friendForm'))
