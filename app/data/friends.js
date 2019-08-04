const friends = [
  {
    name: 'Ahmed',
    photo:
      'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg',
    scores: [1, 2, 3]
  },
  {
    name: 'Mitch',
    photo: 'nope',
    scores: [5, 4, 3]
  }
]

const scoreSum = arr => arr.reduce((a, b) => a + b, 0)

const closestSum = (arr, target) =>
  arr.reduce((prev, curr) => {
    return Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev
  })

const closestMatch = obj => {
  const target = scoreSum(obj.scores)
  const sums = friends.map(index => scoreSum(index.scores))
  const index = sums.findIndex(num => num === closestSum(sums, target))
  friends.push(obj)
  return friends[index]
}

const newFriend = req => {
  const friend = {
    name: req.name,
    photo: req.picURL,
    scores: [
      Number(req.question1),
      Number(req.question2),
      Number(req.question3)
    ]
  }
  return closestMatch(friend)
}

module.exports = {
  friends: friends,
  newFriend: newFriend
}
