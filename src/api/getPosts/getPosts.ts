const getPosts = async (pageCount = 1) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageCount}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
};

export default getPosts;