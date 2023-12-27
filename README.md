## Quizzy

An Nextjs based quiz application made using Next.js

### Features:

- Admin should be alloweed to add questions (NCO,single answer)
- Admin should be allowe to move to the next questions 
- Admin should be allowed to show the leaderboard to everyone 
- Users should be allowed to answer the questions 
- Users just need to poll the server for the next questions, no need for it to be real time .

- Node.js
- Websockets (in house)
- Prisma 
- React 

#### Bounties for Frontend:
- Simple View with Title and answers
  - title : string 
  - choices : string[]
  - image: string (if currently the question has a associated iamge) 
- Leaderboard view 
  - winners: {username: string,profilePicture?: string, points: number} [] => will be sorted 


