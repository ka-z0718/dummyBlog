export const getPosts = async () => {
  if (import.meta.env.MODE === 'development') {
    return dummyPosts;
  }
  return (await (await fetch("https://dummyjson.com/posts?limit=10")).json()).posts
}

const dummyPosts = [
    {
      "id": 1,
      "title": "His mother had always taught him",
      "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
      "tags": [
        "history",
        "american",
        "crime"
      ],
      "reactions": {
        "likes": 192,
        "dislikes": 25
      },
      "views": 305,
      "userId": 121
    },
    {
      "id": 3,
      "title": "Dave watched as the forest burned up on the hill.",
      "body": "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.",
      "tags": [
        "magical",
        "history",
        "french"
      ],
      "reactions": {
        "likes": 1448,
        "dislikes": 39
      },
      "views": 4152,
      "userId": 16
    },
    {
      "id": 9,
      "title": "There are different types of secrets.",
      "body": "There are different types of secrets. She had held onto plenty of them during her life, but this one was different. She found herself holding onto the worst type. It was the type of secret that could gnaw away at your insides if you didn't tell someone about it, but it could end up getting you killed if you did.",
      "tags": [
        "american",
        "history",
        "magical"
      ],
      "reactions": {
        "likes": 703,
        "dislikes": 18
      },
      "views": 2235,
      "userId": 82
    }
]