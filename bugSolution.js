```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Cleanup function to clear the interval on unmount
    return () => clearInterval(interval);
  }, []);

  return <div>Count: {count}</div>;
}
```