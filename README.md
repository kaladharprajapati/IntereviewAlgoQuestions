# Intereview Algorithm Questions 
## Questions

This repo will have my solutions for a lot of the questions asked by the big companies, together with a [medium](http://www.google.com) article for each of them to explain the process. 


<details>
  <summary>Find all dice roll options - asked by Facebook</summary>
  <p>
    <blockquote>
        Given N represent the number of dices you have,
        output all the possibilities you can have.
    </blockquote>
  </p>
  <a href="./allDiceOptions.js">solution</a>
  <br>
  <a target="_blank" href="https://medium.com/@obiwankenoobi/interview-question-10-roll-the-dice-b88c21b3f6e4">explanation</a>
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
  <a target="_blank" href="https://medium.com/@obiwankenoobi/interview-question-6-identical-subsets-9c7d787072c1">explanation</a>
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
  <a target="_blank" href="https://medium.com/@obiwankenoobi/interview-question-5-multiplication-table-69bea7a60869">explanation</a>
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
  explanation
    <br>
    <br>
</details>

<details>
  <summary>Is tree Balanced - asked by Cracking The Coding Interview</summary>
    <p>
      <blockquote>
        Implement a function to check if a tree is balanced 
        For the purposes of this question, 
        a balanced tree is defined to be a tree such that no two leaf nodes differ in distance from the root by more than one
      </blockquote>
    </p>
  <a href="./isTreeBalanced.js">solution</a>
  <br>
  explanation
    <br>
    <br>
</details>

<details>
  <summary>minimum number of coins - asked by asked by Google</summary>
    <p>
      <blockquote>
        Implement a function to check if a tree is balanced 
        For the purposes of this question, 
        a balanced tree is defined to be a tree such that no two leaf nodes differ in distance from the root by more than one
      </blockquote>
    </p>
  <a href="./minimumToMakeN.js">solution</a>
  <br>
  explanation
    <br>
    <br>
</details>

<details>
  <summary>rotate array - asked by asked by Facebook</summary>
    <p>
      <blockquote>
        Write a function that rotates a list by k elements. 
        For example, [1, 2, 3, 4, 5, 6] rotated by two becomes [3, 4, 5, 6, 1, 2]. 
        Try solving this without creating a copy of the list. How many swap or move operations do you need?
      </blockquote>
    </p>
  <a href="./rotateArray.js">solution</a>
  <br>
  explanation
    <br>
    <br>
</details>

<details>
  <summary>Reverse Words - asked by Google</summary>
    <p>
      <blockquote>
        Given a string of words delimited by spaces, reverse the words in string.
        For example, given "hello world here", return "here world hello"
        Follow-up: given a mutable string representation,
        can you perform this operation in-place?
      </blockquote>
    </p>
  <a href="./reverseWords.js">solution</a>
  <br>
  explanation
    <br>
    <br>
</details>

<details>
  <summary>Find Sum In Tree - asked by Cracking The Coding Interview</summary>
    <p>
      <blockquote>
        You are given a binary tree in which each node contains a value. Design an algorithm
        to print all paths which sum up to that value. Note that it can be any path in the tree
        - it does not have to start at the root.
      </blockquote>
    </p>
  <a href="./findSumInTree.js">solution</a>
  <br>
  <a target="_blank" href="https://medium.com/@obiwankenoobi/interview-question-12-find-sum-in-tree-3ed727afb44">explanation</a>
    <br>
    <br>
</details>


<details>
  <summary>Find Routes to N steps - asked by Amazon</summary>
    <p>
      <blockquote>
  There's a staircase with N steps, and you can climb 1 or 2 steps at a time.
  Given N, write a function that returns the number of unique ways you can climb the staircase.
  The order of the steps matters.

  For example, if N is 4, then there are 5 unique ways:

    1, 1, 1, 1
    2, 1, 1
    1, 2, 1
    1, 1, 2
    2, 2
  What if, instead of being able to climb 1 or 2 steps at a time,
  you could climb any number from a set of positive integers X? For example, if X = {1, 3, 5},
  you could climb 1, 3, or 5 steps at a time. Generalize your function to take in X.
</blockquote>
</p>
  <a href="./findRouteToNsteps.js">solution</a>
  <br>
  explanation
    <br>
    <br>
</details>

<details>
  <summary>Longest Sub Sequence - asked by Microsoft</summary>
    <p>
      <blockquote>
        Given an array of numbers, find the length of the longest increasing subsequence in the array.
        The subsequence does not necessarily have to be contiguous.
        For example, given the array
        [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15],
        the longest increasing subsequence has length 6: it is 0, 2, 6, 9, 11, 15.
      </blockquote>
    </p>
  <a href="./findLongestSubSeq.js">solution</a>
  <br>
  <a href="https://medium.com/@obiwankenoobi/interview-question-11-find-longest-sub-sequence-7b3bb4e0613d" target="_blank">explanation</a>
    <br>
    <br>
</details>

<details>
  <summary>Find The largest product - asked by Facebook</summary>
    <p>
      <blockquote>
        Given a list of integers, return the largest product that can be made by multiplying any three integers.
        For example, if the list is [-10, -10, 5, 2], we should return 500, since that's -10 * -10 * 5.
        You can assume the list has at least three integers.
      </blockquote>
    </p>
  <a href="./findTheLargestMultiply.js">solution</a>
  <br>
  <a href="https://medium.com/@obiwankenoobi/interview-question-1-find-the-largest-multiplication-d20aa3723c9d" target="_blank">explanation</a>
    <br>
    <br>
</details>

<details>
  <summary>Create binary tree from sorted array - asked by Cracking the coding intereview</summary>
    <p>
      <blockquote>
        Given a sorted (increasing order) array, write an algorithm to create a binary tree with
        minimal height.
      </blockquote>
    </p>
  <a href="./minimalBinaryTree.js">solution</a>
  <br>
explanation
    <br>
    <br>
</details>


<details>
  <summary>Rotate Image - asked by Cracking the coding intereview</summary>
    <p>
      <blockquote>
        Given an image represented by an NxN matrix,
        write a method to rotate the image by 90 degrees. Can you do this in place?
      </blockquote>
    </p>
  <a href="./rotateImage.js">solution</a>
  <br>
explanation
    <br>
    <br>
</details>




<details>
  <summary>Paint Fill - asked by Cracking the coding intereview</summary>
    <p>
      <blockquote>
        Implement the “paint fill” function that one might see on
        many image editing programs. That is, given a screen
        (represented by a 2 dimensional array of Colors), a point, and a new color,
        fill in the surrounding area until you hit a border of that color.’
      </blockquote>
    </p>
  <a href="./paintFill.js">solution</a>
  <br>
explanation
    <br>
    <br>
</details>



<details>
  <summary>Uniqe String chars - asked by Cracking the coding intereview</summary>
    <p>
      <blockquote>
        Implement an algorithm to determine if a string has all unique characters. What if you
        can not use additional data structures?
      </blockquote>
    </p>
  <a href="./isStringUniqe.js">solution</a>
  <br>
explanation
    <br>
    <br>
</details>

<details>
  <summary>Maze Solver - asked by Cracking the coding intereview</summary>
    <p>
      <blockquote>
        Here we have a small program with 3 of the most used Graph exploring algorithms. We use them to solve mazes and animate the way to demonstrate how the algorithm works.
      </blockquote>
    </p>
  <a href="./Maze/README.md">solution</a>
  <br>
explanation
    <br>
    <br>
</details>

<details>
  <summary>Invert Tree - asked by Google coding intereview</summary>
    <p>
      <blockquote>
        Invert a binary tree.
        For example, given the following tree:

            a
          / \
          b   c
        / \  /
       d   e f
        should become:

          a
        / \
        c  b
        \  / \
        f e  d
  </blockquote>
  </p>
  <a href="./invertTree">solution</a>
  <br>
explanation
    <br>
    <br>
</details>

<details>
  <summary>Path To Leafs - asked by Facebook</summary>
    <p>
      <blockquote>
        Given a binary tree, return all paths from the root to leaves.
        For example, given the tree:

           1
          / \
         2   3
            / \
           4   5

  Return [[1, 2], [1, 3, 4], [1, 3, 5]].
      </blockquote>
    </p>
  <a href="./pathToLeafs.js">solution</a>
  <br>
explanation
    <br>
    <br>
</details>

<details>
  <summary>Flat multidimensional array - asked by Facebook (FE position)</summary>
    <p>
      <blockquote>
        Given an array of any types, flat it so it wont have any nested arrays inside
      </blockquote>
    </p>
  <a href="./flattArr.js">solution</a>
  <br>
explanation
    <br>
    <br>
</details>

<details>
  <summary>Permute a String - Cracking The Coding Interview</summary>
    <p>
      <blockquote>
          Return all possible pernutes of a string
      </blockquote>
    </p>
  <a href="./permutation.js">solution</a>
  <br>
explanation
    <br>
    <br>
</details>

<details>
  <summary>How Many routes - Cracking The Coding Interview</summary>
    <p>
      <blockquote>
        Imagine a robot sitting on the upper left hand corner of an NxN grid. The robot can
        only move in two directions: right and down. How many possible paths are there for
        the robot?
        FOLLOW UP
        Imagine certain squares are “off limits”, such that the robot can not step on them.
        Design an algorithm to get all possible paths for the robot.
      </blockquote>
    </p>
  <a href="./howManyRoutes.js">solution</a>
  <br>
explanation
    <br>
    <br>
</details>

<details>
  <summary>Decode Message - asked by Facebook (FE position)</summary>
    <p>
      <blockquote>
        Given a grid of characters output a decoded message.
        The message for the following would be IROCLED.
        (diagonally down right and diagonally up right if you can't go further
        .. you continue doing this)

        I B C A L K A
        D R F C A E A
        G H O E L A D
  </blockquote>
  </p>
  <a href="./deCodeString.js">solution</a>
  <br>
explanation
    <br>
    <br>
</details>

<details>
  <summary>Find Nearest - asked by LinkedIn</summary>
    <p>
      <blockquote>
        Given a list of points, a central point, and an integer k, find the nearest k points from the central point.
        For example, given the list of points [(0, 0), (5, 4), (3, 1)], the central point (1, 2), and k = 2, return [(0, 0), (3, 1)].
  </blockquote>
  </p>
  <a href="./findNearest.js">solution</a>
  <br>
<a href="https://medium.com/@obiwankenoobi/interview-question-13-find-nearest-ca8938eb6c17">explanation</a>
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

<details>
  <summary>Bishop Attack - asked by Google</summary>
    <p>
      <blockquote>
  On our special chessboard,
  two bishops attack each other if they share the same diagonal.
  This includes bishops that have another bishop located between them,
  i.e. bishops can attack through pieces.
  You are given N bishops, represented as (row, column)
  tuples on a M by M chessboard.
  Write a function to count the number of pairs of bishops that attack each other.
  The ordering of the pair doesn't matter: (1, 2) is considered the same as (2, 1).
  For example, given M = 5 and the list of bishops:

    (0, 0)
    (1, 2)
    (2, 2)
    (4, 0)

  The board would look like this:

    [b 0 0 0 0]
    [0 0 b 0 0]
    [0 0 b 0 0]
    [0 0 0 0 0]
    [b 0 0 0 0]
  </p>

   </blockquote>

  <a href="./bishopsAttack.js">solution</a>
  <br>
  <a target="_blank" href="https://medium.com/@obiwankenoobi/interview-question-8-bishop-attacks-7780ca7b720">explanation</a>
    <br>
    <br>
</details>



## Algorithms - [visualization](https://obiwankenoobi.github.io/public/)


<details>
  <summary>A* search</summary>
    <p>
      <blockquote>
          In computer science, A* (pronounced "A-star") is a computer algorithm that is widely used in pathfinding and graph traversal, which is the process of finding a path between multiple points, called "nodes". It enjoys widespread use due to its performance and accuracy. However, in practical travel-routing systems, it is generally outperformed by algorithms which can pre-process the graph to attain better performance,[1] although other work has found A* to be superior to other approaches.<a href="https://en.wikipedia.org/wiki/A*_search_algorithm" target="_blank">wikipedia</a>
      </blockquote>
    </p>
  <a href="https://github.com/obiwankenoobi/obiwankenoobi.github.io/blob/master/src/Graphs/grid.ts#L136-L155">solution</a>
  <br>
  <br>
</details>


<details>
  <summary>Depth-first search</summary>
    <p>
      <blockquote>
        Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking. <a href="https://en.wikipedia.org/wiki/Depth-first_search" target="_blank">wikipedia</a>
      </blockquote>
    </p>
  <a href="https://github.com/obiwankenoobi/obiwankenoobi.github.io/blob/master/src/Graphs/grid.ts#L159-L176">solution</a>
  <br>
  <br>
</details>


<details>
  <summary>Breadth-first search</summary>
    <p>
      <blockquote>
        Breadth-first search (BFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the tree root (or some arbitrary node of a graph, sometimes referred to as a 'search key'[1]), and explores all of the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level. <a href="https://en.wikipedia.org/wiki/Breadth-first_search" target="_blank">wikipedia</a>
      </blockquote>
    </p>
  <a href="https://github.com/obiwankenoobi/obiwankenoobi.github.io/blob/master/src/Graphs/grid.ts#L136-L155">solution</a>
  <br>
  <br>
</details>

<details>
  <summary>Quick Sort</summary>
    <p>
      <blockquote>
        Quicksort (sometimes called partition-exchange sort) is an efficient sorting algorithm, serving as a systematic method for placing the elements of a random access file or an array in order. Developed by British computer scientist Tony Hoare in 1959[1] and published in 1961, it is still a commonly used algorithm for sorting. When implemented well, it can be about two or three times faster than its main competitors, merge sort and heapsort. <a href="https://en.wikipedia.org/wiki/Quicksort" target="_blank">wikipedia</a>
      </blockquote>
    </p>
  <a href="./Algorithms/Sort/quickSort.js">solution</a>
  <br>
  <br>
</details>


<details>
  <summary>Merge Sort</summary>
    <p>
      <blockquote>
        In computer science, merge sort (also commonly spelled mergesort) is an efficient, general-purpose, comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output. Merge sort is a divide and conquer algorithm that was invented by John von Neumann in 1945.[2] A detailed description and analysis of bottom-up mergesort appeared in a report by Goldstine and von Neumann as early as 1948. <a href="https://en.wikipedia.org/wiki/Merge_sort" target="_blank">wikipedia</a>
      </blockquote>
    </p>
  <a href="./Algorithms/Sort/mergeSort.js">solution</a>
  <br>
  <br>
</details>

## Data Structures

<details>
  <summary>Binary Search Tree</summary>
    <p>
      <blockquote>
        A binary search tree is a rooted binary tree, whose internal nodes each store a key (and optionally, an associated value) and each have two distinguished sub-trees, commonly denoted left and right. The tree additionally satisfies the binary search property, which states that the key in each node must be greater than or equal to any key stored in the left sub-tree, and less than or equal to any key stored in the right sub-tree.[1]:287 The leaves (final nodes) of the tree contain no key and have no structure to distinguish them from one another. <a href="https://en.wikipedia.org/wiki/Binary_search_tree" target="_blank">wikipedia</a>
      </blockquote>
    </p>
  <a href="./DataStructures/BST/BinarySearchTree.js">solution</a>
  <br>
  <a href="./DataStructures/BST/test.js">test</a>
  <br>
  explanation
    <br>
    <br>
</details>

<details>
  <summary>Linked List</summary>
    <p>
      <blockquote>
        In computer science, a Linked list is a linear collection of data elements, whose order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence. In its most basic form, each node contains: data, and a reference (in other words, a link) to the next node in the sequence. This structure allows for efficient insertion or removal of elements from any position in the sequence during iteration. More complex variants add additional links, allowing more efficient insertion or removal of nodes at arbitrary positions. A drawback of linked lists is that access time is linear (and difficult to pipeline). Faster access, such as random access, is not feasible. Arrays have better cache locality compared to linked lists. <a href="https://en.wikipedia.org/wiki/Linked_list" target="_blank">wikipedia</a>
      </blockquote>
    </p>
  <a href="./DataStructures/LinkedList/LinkedList.js">solution</a>
  <br>
  <a href="./DataStructures/LinkedList/test.js">test</a>
  <br>
  explanation
    <br>
    <br>
</details>


<details>
  <summary>Hash Table</summary>
    <p>
      <blockquote>
  In computing, a hash table (hash map) is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

  Ideally, the hash function will assign each key to a unique bucket, but most hash table designs employ an imperfect hash function, which might cause hash collisions where the hash function generates the same index for more than one key. Such collisions must be accommodated in some way.
<a href="https://en.wikipedia.org/wiki/Hash_table" target="_blank">wikipedia</a>
      </blockquote>
    </p>
  <a href="./DataStructures/HashTable/hashTable.js">solution</a>
  <br>
  <a href="./DataStructures/HashTable/test.js">test</a>
  <br>
  explanation
    <br>
    <br>
</details>



<details>
  <summary>Queue</summary>
    <p>
      <blockquote>
    In computer science, a queue is a collection in which the entities in the collection are kept in order and the principal (or only) operations on the collection are the addition of entities to the rear terminal position, known as enqueue, and removal of entities from the front terminal position, known as dequeue. This makes the queue a First-In-First-Out (FIFO) data structure. In a FIFO data structure, the first element added to the queue will be the first one to be removed. This is equivalent to the requirement that once a new element is added, all elements that were added before have to be removed before the new element can be removed. Often a peek or front operation is also entered, returning the value of the front element without dequeuing it. A queue is an example of a linear data structure, or more abstractly a sequential collection.
<a href="https://en.wikipedia.org/wiki/Queue_(abstract_data_type)" target="_blank">wikipedia</a>
      </blockquote>
    </p>
  <a href="./DataStructures/Queue/queue.js">solution</a>
  <br>
  <a href="./DataStructures/Queue/test.js">test</a>
  <br>
  explanation
    <br>
    <br>
</details>