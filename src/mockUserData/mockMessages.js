export const MOCK_POSTS = [
  {
    post: {
      id: 0,
      text:
        "This is a test post for a user named testUser. It should have one like from someone named fakeUser",
      username: "testUser",
      createdAt: "2019-11-18T16:43:40.172Z",
      likes: [
        {
          id: 0,
          username: "fakeUser",
          messageId: 0,
          createdAt: "2019-11-18T16:43:40.172Z"
        }
      ]
    },
    statusCode: 0
  },

  {
    post: {
      id: 1,
      text:
        "This is another test post for the Kwitter app for a user named fakeUser. It should have zero likes.",
      username: "fakeUser",
      createdAt: "2019-11-18T16:43:40.172Z",
      likes: []
    },
    statusCode: 0
  },

  {
    post: {
      id: 2,
      text:
        "This is yet another test post for the Kwitter app for a user named mockUser. It should have 2 likes from testUser and fakeUser",
      username: "mockUser",
      createdAt: "2019-11-18T16:43:40.172Z",
      likes: [
        {
          id: 0,
          username: "testUser",
          messageId: 2,
          createdAt: "2019-11-18T16:43:40.172Z"
        },
        {
          id: 1,
          username: "fakeUser",
          messageId: 2,
          createdAt: "2019-11-18T16:43:40.172Z"
        }
      ]
    },
    statusCode: 0
  }
];
