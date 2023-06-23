import './index.css'

const Home = () => (
    <div className='bg-container'>
    <div>
        <h1>Welcome to Bookstore</h1>
    </div>
    <div className='fg-container'>
    <div className='content'>
    <p>The Bookstore Application is a digital platform designed to facilitate the browsing, purchasing, and management of books. 
        It provides users with a convenient way to explore a vast collection of books and make purchases. 
        The application offers several key features:</p>
        <ol>
            <li>Book Catalog: The application showcases a comprehensive catalog of books, allowing users to search, filter, 
                and browse through various genres, authors, and titles. Users can access detailed book information, including 
                summaries, reviews, and ratings.</li>
            <li>Shopping Cart and Checkout: The application provides a seamless shopping experience, allowing users to add 
                books to their shopping carts, review their selections, and proceed to a secure checkout process. 
                Users can choose different payment options and receive order confirmations.</li>
        </ol>
    </div>
    <div className='menu'>
        <button type='button'>Books</button>
        <button type='button'>Cart</button>
    </div>
    </div>
    </div>
)

export default Home