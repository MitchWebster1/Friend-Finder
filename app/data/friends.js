const friends = [
  {
    name: 'Katie',
    photo: 'https://imgur.com/gallery/qZVJNDd',
    scores: [2, 3, 3, 2, 1]
  },
  {
    name: 'Mitch',
    photo: 'https://imgur.com/gallery/oC2XIPV',
    scores: [5, 4, 4, 3, 5]
  }
]

// adds all of the values of a given array together to get the total sum
const scoreSum = arr => arr.reduce((a, b) => a + b, 0)

// takes an array of numbers and a target number and finds the closest match
const closestSum = (arr, target) =>
  arr.reduce((prev, curr) => {
    return Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev
  })

// returns the friend that's scores match closest to the one just entered
// pushes newest entered friend into the friends array
const closestMatch = obj => {
  const target = scoreSum(obj.scores)
  const sums = friends.map(index => scoreSum(index.scores))
  const index = sums.findIndex(num => num === closestSum(sums, target))
  friends.push(obj)
  return friends[index]
}

// takes data from post request to build out the new friend
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
