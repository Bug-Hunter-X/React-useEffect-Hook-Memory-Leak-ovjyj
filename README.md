# React useEffect Hook Memory Leak

This repository demonstrates a common bug in React applications involving memory leaks caused by the improper use of the `useEffect` hook.  The `bug.js` file contains the buggy code, while `bugSolution.js` provides the corrected version.

The bug stems from failing to return a cleanup function from `useEffect` when using `setInterval` or `setTimeout`.  Without a cleanup function, the interval continues to run even after the component unmounts, leading to memory leaks and potential performance issues.

This example highlights the importance of proper cleanup in `useEffect` to prevent memory leaks and ensure efficient React applications.