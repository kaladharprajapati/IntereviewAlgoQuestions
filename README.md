# Intereview Algorithm Questions 
## Implemented in Javascript

This repo will have my solutions for a lot of the questions asked by the big companies, together with a [medium](http://www.google.com) article for each of them to explain the process. 

<details>
  <summary>Find The Largest Multiply - asked by Facebook</summary>
  <p>
    <blockquote>
        Given a list of integers, return the largest product that can be made by multiplying any three integers.
        For example, if the list is [-10, -10, 5, 2], we should return 500, since that's -10 * -10 * 5.
        You can assume the list has at least three integers.
    </blockquote>
  </p>
  <a href="./findTheLargestMultiply.js">solution</a>
  <br>
  <a target="_blank" href="https://medium.com/@obiwankenoobi/interview-question-1-find-the-largest-multiply-ebaa972e23d1">explanation</a>
  <br>
  <br>
</details>

<details>
  <summary>Find The Word In Board - asked by Microsoft</summary>
  <p>
    <blockquote>
    Given a 2D matrix of characters and a target word,
    write a function that returns whether the word can be found
    in the matrix by going left-to-right, or up-to-down.
    For example, given the following matrix:

    [
        ['F', 'A', 'C', 'I'],
        ['O', 'B', 'Q', 'P'],
        ['A', 'N', 'O', 'B'],
        ['M', 'A', 'S', 'S']
    ]

and the target word 'FOAM', you should return true, since it's the leftmost column.
Similarly, given the target word 'MASS', you should return true, since it's the last row.
    </blockquote>
  </p>
    <br>
  <a href="./isWordExistInBoard.js">solution</a>
  <br>
  <a target="_blank" href="https://medium.com/@obiwankenoobi/interview-question-2-find-the-word-on-board-bba7756a7677">explanation</a>
  <br>
  <br>
</details>

<details>
  <summary>Two Identical Subsets - asked by Facebook</summary>
  <p>
    <blockquote>
        Given a multiset of integers, return whether it can be partitioned into two subsets whose sums are the same.
        For example, given the multiset {15, 5, 20, 10, 35, 15, 10}, it would return true, since we can split it up into {15, 5, 10, 15, 10} and {20, 35}, which both add up to 55.
        Given the multiset {15, 5, 20, 10, 35}, it would return false, since we can't split it up into two subsets that add up to the same sum.
    </blockquote>
  </p>
  <a href="./twoIdenticalSubsets.js">solution</a>
  <br>
  <a target="_blank" href="#">explanation</a>
  <br>
  <br>
</details>

<details>
  <summary>Perfect Number - asked by Microsoft</summary>
  <p>
    <blockquote>
        A number is considered perfect if its digits sum up to exactly 10.
        Given a positive integer n, return the n-th perfect number.
        For example, given 1, you should return 19. Given 2, you should return 28.
    </blockquote>
  </p>
  <a href="./isPerfectNumber.js">solution</a>
  <br>
  <a target="_blank" href="https://medium.com/@obiwankenoobi/interview-question-3-is-perfect-number-cb3eb963ae51">explanation</a>
    <br>
    <br>
</details>

<details>
  <summary>Multiplication Table - asked by Apple</summary>
    <p>
    <blockquote>
        Suppose you have a multiplication table that is N by N. That is,
        a 2D array where the value at the i-th row and j-th column is (i + 1) * (j + 1) (if 0-indexed) or i * j (if 1-indexed).
        Given integers N and X, write a function that returns the number of times X appears as a value in an N by N multiplication table.
        For example, given N = 6 and X = 12, you should return 4, since the multiplication table looks like this:

        | 1 |  2 |  3 |  4 |  5 |  6 |
        | 2 |  4 |  6 |  8 | 10 | 12 |
        | 3 |  6 |  9 | 12 | 15 | 18 |
        | 4 |  8 | 12 | 16 | 20 | 24 |
        | 5 | 10 | 15 | 20 | 25 | 30 |
        | 6 | 12 | 18 | 24 | 30 | 36 |
</blockquote>
  </p>
  <a href="./multiplicationTable.js">solution</a>
  <br>
  <a target="_blank" href="#">explanation</a>
    <br>
    <br>
</details>

<details>
  <summary>Valid parentheses - asked by Google</summary>
    <p>
    <blockquote>
      Given a string of parentheses,
      write a function to compute the minimum number of parentheses to be removed to make the string valid (i.e. each open parenthesis is eventually closed).
      For example, given the string "()())()", you should return 1. Given the string ")(", you should return 2, since we must remove all of them. 
</blockquote>
  </p>
  <a href="./parentheses.js">solution</a>
  <br>
  <a target="_blank" href="https://medium.com/@obiwankenoobi/interview-question-4-valid-parentheses-aca4214b034b">explanation</a>
    <br>
    <br>
</details>

<details>
  <summary>Division - asked by ContextLogic</summary>
    <p>
      <blockquote>
        Implement division of two positive integers without using the division,
        multiplication, or modulus operators. Return the quotient as an integer,
        ignoring the remainder.
      </blockquote>
    </p>
  <a href="./division.js">solution</a>
  <br>
  <a target="_blank" href="#">explanation</a>
    <br>
    <br>
</details>

<details>
  <summary>Number of Islands - asked by Amazon</summary>
    <p>
      <blockquote>
        Given a matrix of 1s and 0s, return the number of "islands" in the matrix.
        A 1 represents land and 0 represents water,
        so an island is a group of 1s that are neighboring whose perimeter
        is surrounded by water.
        For example, this matrix has 4 islands.

    1 0 0 0 0
    0 0 1 1 0
    0 1 1 0 0
    0 0 0 0 0
    1 1 0 0 1
    1 1 0 0 1
  </p>

   </blockquote>

  <a href="./islands.js">solution</a>
  <br>
  <a target="_blank" href="https://medium.com/@obiwankenoobi/interview-question-7-find-the-number-of-islands-1216eff9ede9">explanation</a>
    <br>
    <br>
</details>
