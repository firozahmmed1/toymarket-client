
const Blogs = () => {
    return (
        <div>
            <h1 className="text-xl mb-2 font-semibold">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
            <p>A refresh token allows the user to get a new access token without needing to log in again.</p>
            <p>Storing and manipulating data in the browser — also known as client-side storage — is useful when it’s not necessary or practical to send it to the web server.</p>
            <h1 className="text-xl mb-2 mt-2 font-semibold">2.Compare SQL and NoSQL databases?</h1>
            <p>Explore key differences between SQL and NoSQL databases and learn which type of database is best for various use cases.
                is a decades-old method for accessing relational databases, and most who work with databases are familiar with it. As unstructured data, amounts of storage and processing power and types of analytics have changed over the years, however, we’ve seen different database technologies become available that are a better fit for newer types of use cases. These databases are commonly called NoSQL.</p>
            <h1 className="text-xl mb-2 mt-2 font-semibold">3.What is express js? What is Nest JS ?</h1>
            <p>Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.
                It's a layer built on the top of the Node js that helps manage servers and routes.</p>
            <p>Nest. js is a server-side Node. js framework that's great for building highly testable and maintainable backend applications. You can create countless types of applications with Node. js; you're only limited by your applications' features.</p>
            <h1 className="text-xl mb-2 mt-2 font-semibold">4.What is MongoDB aggregate and how does it work?</h1>
            <p className="mb-12">Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
        </div>
    );
};

export default Blogs;