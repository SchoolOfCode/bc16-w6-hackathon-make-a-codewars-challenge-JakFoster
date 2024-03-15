# Connect Four (rings) Kata: The Lord of The Rings Edition 💍💍💍💍

The School of Code cohort was tasked with planning and creating a ['Codewars Kata'](https://docs.codewars.com/concepts/kata/#:~:text=On%20Codewars%2C%20kata%20are%20code,on%20real%20world%20coding%20scenarios.) of our own design for our week 6 hackathon project. After much deliberation and a brief episode of coder's block, I settled on creating a challenge inspired by the classic children's game 'Connect Four', and some of my favourite books/movies: 'The Lord of the Rings'.

![Gollum Image](https://miro.medium.com/v2/resize:fit:395/0*yt7Mwvdb8e08xxhk.jpg)

^ Picture of me after completing this hackathon
## 💍The Challenge

The challenge simulates games of Connect Four between Samwise and Gimli.  
Hobbits will need to write the logic for the following function, so that it passes the test suite:

```js
  function myPrecious(ringsArray) {
    return 'What about second breakfast?';
  }
```

The myPrecious function accepts 'ringsArray', a 7 wide x 6 high grid of nested arrays containing each player's moves. The grid will look something like this:

```js
  [
    ['O', 'O', 'O', 'O', 'O', 'O', 'O'],
    ['O', 'O', 'S', 'O', 'G', 'O', 'O'],
    ['O', 'S', 'S', 'O', 'G', 'O', 'O'],
    ['G', 'S', 'S', 'G', 'S', 'G', 'O'],
    ['G', 'S', 'G', 'S', 'G', 'S', 'O'],
    ['S', 'G', 'S', 'G', 'G', 'G', 'G']
  ]
```

A string will be returned from the function depending on who won the game, if anyone has. In the above example, the string 

```js
  'We dwarves are natural sprinters.'
```

would be returned, as Gimli won the game by connecting four 'G's in a row.

The normal rules of [Connect Four](https://en.wikipedia.org/wiki/Connect_Four#:~:text=Popping%20a%20disc%20out%20from,or%20diagonally%20wins%20the%20game.) apply, and detailed rules for the challenge are written in comments within main.js.

I would probably rank this Kata as **4 Kyu.**

*Hobbits are advised to plan their approach carerfully.* 
## 💍Dependencies and Testing 

After cloning the repository, challengers will need to install [vitest](https://vitest.dev/) to run the test suite.
This can be done by installing project dependencies with the following terminal command:

```bash
  npm install
```

To run the test suite in the terminal:

```bash
  npm run t
```
## 💍Planning for the Project

I started planning for this project using the [Disney Ideation](https://en.wikipedia.org/wiki/Disney_method) method.

### The Dreamer

I initially brainstormed some of the challenges I would have liked to create. First and foremost, I wanted to make the challenge at least somewhat engaging and entertaining. I have had a lot of fun writing solutions to Katas in the past, and I often find that gamified or themed challenges engage me more than staring at a blank wall of text, and I knew I wanted to include some aspect of that in my project. I could create an elaborate and engaging theme, maybe even tell some sort of story with the testing suite. 

I wanted that prized School of Code mug more than anything, and a creative challenge was how I was going to get it.

I was primarily inspired to write this challenge by a Kata which had me completely stumped for weeks: [Snail Sort](https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1).

I kept having to give up working on the Snail, no matter how well I planned and how much effort I put in. Every time I gave up, thinking about the Snail would haunt me for days afterwards. I couldn't let go of it. One morning I woke up (probably after a long night of dreaming about the snail) and the answer was immediately there. In a bleary-eyed state I furiously typed the plan for a solution into the notes on my phone.

Taking loose inspiration from the snail (my favourite kata so far), I liked the idea of passing nested arrays to a function, and I started thinking about some grid based games that I could implement. Minesweeper, Connect Four, Sudoku, and Nonograms all sprang to mind.



### The Realist

It wasn't long after thinking of four games I could implement that I turned straight to realism. How could I implement a nonogram in a nested array? I could pass a second array to the function, separate from the grid? It would become too convoluted for me to plan. I had similar thoughts for Minesweeper and Sudoku. It sounds like fun, but it would be too difficult to turn into a Kata. Connect Four seemed more manageable. ~~A children's game wouldn't be too difficult to implement, right?~~

### The Critic

Could I even solve this challenge myself? Maybe not. Given enough time, maybe. Do I want to try and implement a challenge I can't solve? I could simplify the challenge in some way? Change the rules of the game, so that only vertical and horizontal winners would be counted? I could probably implement a theme, and some Lord of the rings quotes at least. 

Testing the challenge might be tricky. How could I scale up my tests? What edge cases could I even test for in a game of Connect Four? A few simple tests would probably be best, or I might end up creating unique instances of nested arrays until midnight.

### Minimum Viable Products

**MVP 1:**

- Write instructions for my challenge
- Install vitest
- Create 4 simple tests to check for winners, a draw, and an unfinished game
- Create 4 nested arrays and a skeleton function to pass to those tests
- Write the most simple logic in the skeleton function to pass each of those tests and check that they work
- Refactor my solution

**MVP 2:**

- Scale the tests and ensure adequate test coverage, possibly introduce randomised tests 
- Add extra features to the challenge:
    - One ring to rule them all
    - Test varied grid sizes
- Upload to Codewars



## 💍Feedback

**TBD**


## 💍Acknowledgements

 - All of the School of Code staff for putting this whole course together
 - My teammates this week, who have helped me grow, learn, and be a better teammate
 - The elusive [snail](https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1) Kata
 - J.R.R Tolkien and Peter Jackson for allowing me to butcher their respective masterpieces
 - My partner for putting up with my mostly nonsensical coding rants
 - Piper the dog(deserves all the credit for being such a good dog)

